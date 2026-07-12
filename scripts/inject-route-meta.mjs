import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const distDir = join(projectRoot, 'dist');
const seoPath = join(projectRoot, 'src/data/pageSeo.json');

const BASE_URL = 'https://monashwamcalculator.com';
const DEFAULT_OG_IMAGE = '/article-images/featured-calculate-wam.webp';

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function injectMeta(html, route, seo) {
  const canonical = `${BASE_URL}${route}`;
  const ogImage = seo.ogImage ?? DEFAULT_OG_IMAGE;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(seo.title)}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`
  );
  out = out.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeAttr(ogImageUrl)}" />`
  );
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`
  );
  out = out.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${escapeAttr(ogImageUrl)}" />`
  );
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`
  );

  return out;
}

function outputFileForRoute(route) {
  if (route === '/') {
    return join(distDir, 'index.html');
  }
  const clean = route.replace(/^\/+|\/+$/g, '');
  return join(distDir, clean, 'index.html');
}

async function getRoutesFromSitemap() {
  const sitemapPath = join(distDir, 'sitemap.xml');
  const routes = new Set(['/']);
  if (existsSync(sitemapPath)) {
    const xml = await readFile(sitemapPath, 'utf8');
    for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
      try {
        const path = new URL(match[1].trim()).pathname;
        routes.add(path === '' ? '/' : path);
      } catch {
        // ignore malformed loc entries
      }
    }
  }
  return [...routes];
}

async function run() {
  if (!existsSync(distDir)) {
    throw new Error('dist/ not found. Run vite build first.');
  }

  const seo = JSON.parse(await readFile(seoPath, 'utf8'));
  const template = await readFile(join(distDir, 'index.html'), 'utf8');
  const routes = await getRoutesFromSitemap();

  let written = 0;
  let skipped = 0;

  for (const route of routes) {
    const entry = seo[route];
    if (!entry?.title || !entry?.description) {
      skipped += 1;
      continue;
    }

    const html = injectMeta(template, route, entry);
    const outFile = outputFileForRoute(route);
    await mkdir(dirname(outFile), { recursive: true });
    await writeFile(outFile, html, 'utf8');
    written += 1;
  }

  console.log(`[inject-route-meta] wrote ${written} route HTML files (${skipped} skipped — no SEO entry)`);
}

run().catch(err => {
  console.error('[inject-route-meta] Fatal error:', err);
  process.exit(1);
});
