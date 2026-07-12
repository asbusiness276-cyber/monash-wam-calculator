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
const DEFAULT_OG_IMAGE_ALT =
  'Monash university student using a laptop to calculate weighted average mark from unit marks and credit points';
const ROBOTS_INDEX =
  'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
const ROBOTS_NOINDEX =
  'noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function replaceOrInsertMeta(html, pattern, replacement) {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }
  return html.replace('</head>', `    ${replacement}\n  </head>`);
}

function getOgImageDimensions(ogImage) {
  if (ogImage.includes('logo.png') || ogImage.includes('avatar') || ogImage.includes('favicon')) {
    return { width: 512, height: 512 };
  }
  return { width: 1200, height: 630 };
}

function injectMeta(html, route, seo) {
  const canonical = `${BASE_URL}${route}`;
  const ogImage = seo.ogImage ?? DEFAULT_OG_IMAGE;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;
  const ogImageAlt = seo.ogImageAlt ?? DEFAULT_OG_IMAGE_ALT;
  const ogType = route.startsWith('/articles/') && route !== '/articles' && !route.includes('/category/')
    ? 'article'
    : 'website';
  const robots = seo.noIndex ? ROBOTS_NOINDEX : ROBOTS_INDEX;
  const { width: ogWidth, height: ogHeight } = getOgImageDimensions(ogImage);

  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(seo.title)}</title>`);
  out = replaceOrInsertMeta(
    out,
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeAttr(seo.description)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta name="robots" content="[^"]*"\s*\/?>/,
    `<meta name="robots" content="${escapeAttr(robots)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${escapeAttr(ogType)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeAttr(seo.title)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeAttr(seo.description)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${escapeAttr(canonical)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:site_name" content="[^"]*"\s*\/?>/,
    `<meta property="og:site_name" content="Monash WAM Calculator" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:locale" content="[^"]*"\s*\/?>/,
    `<meta property="og:locale" content="en_AU" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:image" content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${escapeAttr(ogImageUrl)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:image:alt" content="[^"]*"\s*\/?>/,
    `<meta property="og:image:alt" content="${escapeAttr(ogImageAlt)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:image:width" content="[^"]*"\s*\/?>/,
    `<meta property="og:image:width" content="${ogWidth}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta property="og:image:height" content="[^"]*"\s*\/?>/,
    `<meta property="og:image:height" content="${ogHeight}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta name="twitter:card" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:card" content="summary_large_image" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${escapeAttr(ogImageUrl)}" />`
  );
  out = replaceOrInsertMeta(
    out,
    /<meta name="twitter:url" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:url" content="${escapeAttr(canonical)}" />`
  );
  out = replaceOrInsertMeta(
    out,
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
