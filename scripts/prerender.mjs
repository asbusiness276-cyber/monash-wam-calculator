// Prerenders every route in the SPA to static HTML so crawlers (Googlebot,
// AdSense, social scrapers) receive fully-rendered pages instead of an empty
// #root shell. Runs after `vite build` against the built `dist/` output.
//
// Flow: start a tiny static server (with SPA fallback) for dist/, launch
// headless Chrome, visit each route from sitemap.xml, wait for React to render
// + Seo.tsx to inject <title>/meta/JSON-LD, then snapshot outerHTML and write
// it to dist/<route>/index.html.

import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, extname, join, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const distDir = join(projectRoot, 'dist');
const PORT = 5199;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const CONCURRENCY = process.env.VERCEL ? 2 : 4;

/** Launch a headless browser that works locally (Windows/Mac) and on Vercel Linux. */
async function launchBrowser() {
  if (process.platform === 'linux') {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteer = (await import('puppeteer-core')).default;

    chromium.setGraphicsMode = false;

    return puppeteer.launch({
      args: [
        ...chromium.args,
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
      defaultViewport: { width: 1280, height: 900 },
      executablePath: await chromium.executablePath(),
      headless: 'shell',
    });
  }

  const puppeteer = (await import('puppeteer')).default;
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
};

function startStaticServer() {
  return new Promise((resolvePromise) => {
    const server = createServer(async (req, res) => {
      try {
        const url = new URL(req.url, ORIGIN);
        let pathname = decodeURIComponent(url.pathname);
        let filePath = join(distDir, pathname);

        // Directory or extensionless route -> SPA fallback to index.html so
        // the client app boots and renders the requested route.
        const hasExtension = extname(pathname) !== '';
        if (!hasExtension) {
          filePath = join(distDir, 'index.html');
        }

        if (!existsSync(filePath)) {
          filePath = join(distDir, 'index.html');
        }

        const body = await readFile(filePath);
        const type = MIME[extname(filePath)] ?? 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': type });
        res.end(body);
      } catch (err) {
        res.writeHead(500);
        res.end(String(err));
      }
    });
    server.listen(PORT, '127.0.0.1', () => resolvePromise(server));
  });
}

async function getRoutes() {
  const sitemapPath = join(distDir, 'sitemap.xml');
  const routes = new Set(['/']);
  if (existsSync(sitemapPath)) {
    const xml = await readFile(sitemapPath, 'utf8');
    const matches = xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g);
    for (const m of matches) {
      try {
        const path = new URL(m[1].trim()).pathname;
        routes.add(path === '' ? '/' : path);
      } catch {
        // ignore malformed loc entries
      }
    }
  }
  return [...routes];
}

function outputFileForRoute(route) {
  if (route === '/' || route === '') {
    return join(distDir, 'index.html');
  }
  const clean = route.replace(/^\/+|\/+$/g, '');
  return join(distDir, clean, 'index.html');
}

const DEFAULT_TITLE =
  'Monash WAM Calculator | Free WAM Calculator Monash University (2026)';

async function renderRoute(browser, route) {
  const page = await browser.newPage();
  const expectedPath = route === '' ? '/' : route;
  try {
    await page.setViewport({ width: 1280, height: 900 });
    page.on('console', msg => {
      if (msg.type() === 'error') console.log(`[${route}] PAGE LOG ERROR:`, msg.text());
    });
    page.on('pageerror', error => console.log(`[${route}] PAGE ERROR:`, error.message));
    await page.goto(`${ORIGIN}${expectedPath}`, { waitUntil: 'networkidle0', timeout: 90000 });

    // Wait until React renders and Seo.tsx sets canonical + page-specific title.
    await page.waitForFunction(
      (path, defaultTitle) => {
        const root = document.getElementById('root');
        if (!root || root.childElementCount === 0) return false;

        const canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) return false;

        let canonicalPath = '';
        try {
          canonicalPath = new URL(canonical.href).pathname;
        } catch {
          return false;
        }
        if (canonicalPath !== path) return false;

        const title = document.title.trim();
        if (!title) return false;
        if (path !== '/' && title === defaultTitle) return false;

        const description = document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim();
        return !!description;
      },
      { timeout: 60000 },
      expectedPath,
      DEFAULT_TITLE
    );
    await new Promise(r => setTimeout(r, 400));

    const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);

    const outFile = outputFileForRoute(route);
    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, html, 'utf8');
    return { route, ok: true };
  } catch (err) {
    return { route, ok: false, error: err instanceof Error ? err.message : String(err) };
  } finally {
    await page.close();
  }
}

async function run() {
  if (!existsSync(distDir)) {
    throw new Error('dist/ not found. Run `vite build` before prerendering.');
  }

  const routes = await getRoutes();
  console.log(`[prerender] ${routes.length} routes to prerender`);

  const server = await startStaticServer();
  const browser = await launchBrowser();

  const failures = [];
  let done = 0;

  const queue = [...routes];
  async function worker() {
    while (queue.length > 0) {
      const route = queue.shift();
      const result = await renderRoute(browser, route);
      done += 1;
      if (result.ok) {
        if (done % 10 === 0 || done === routes.length) {
          console.log(`[prerender] ${done}/${routes.length} done`);
        }
      } else {
        failures.push(result);
        console.warn(`[prerender] FAILED ${route}: ${result.error}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  await browser.close();
  await new Promise((r) => server.close(r));

  if (failures.length > 0) {
    console.error(`[prerender] ${failures.length} route(s) failed`);
    process.exit(1);
  }
  console.log(`[prerender] Completed ${routes.length} routes successfully`);
}

run().catch((err) => {
  console.error('[prerender] Fatal error:', err);
  process.exit(1);
});
