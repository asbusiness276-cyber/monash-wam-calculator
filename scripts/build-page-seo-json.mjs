import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = join(root, 'src/pages');
const articlesPath = join(root, 'src/data/articles.ts');
const categoriesPath = join(root, 'src/data/articleCategories.ts');
const catalogPath = join(root, 'src/data/calculatorCatalog.ts');
const authorPath = join(root, 'src/constants/author.ts');
const outPath = join(root, 'src/data/pageSeo.json');

const seo = {};

function add(path, title, description, ogImage, ogImageAlt, noIndex) {
  if (!path || !title || !description) return;
  seo[path] = {
    title,
    description,
    ...(ogImage ? { ogImage } : {}),
    ...(ogImageAlt ? { ogImageAlt } : {}),
    ...(noIndex ? { noIndex: true } : {}),
  };
}

const authorSource = readFileSync(authorPath, 'utf8');
const catalogSource = readFileSync(catalogPath, 'utf8');
const articlesSource = readFileSync(articlesPath, 'utf8');

const authorName = authorSource.match(/name: '([^']+)'/)?.[1] ?? 'Saahil';
const calculatorCount = (catalogSource.match(/href: '/g) ?? []).length;
const articleCount = (articlesSource.match(/slug: '/g) ?? []).length;

const HOME_OG_ALT =
  'Monash university student using a laptop to calculate weighted average mark from unit marks and credit points';

for (const file of readdirSync(pagesDir)) {
  if (!file.endsWith('.tsx')) continue;
  const content = readFileSync(join(pagesDir, file), 'utf8');
  const canonical = content.match(/canonicalPath="([^"]+)"/)?.[1];
  if (!canonical) continue;

  let title = content.match(/\n\s+title="([^"]+)"/)?.[1];
  if (!title) {
    const templateTitle = content.match(/\n\s+title=\{`([^`]+)`\}/)?.[1];
    if (templateTitle) {
      title = templateTitle
        .replace(/\$\{CALCULATOR_COUNT\}/g, String(calculatorCount))
        .replace(/\$\{ARTICLE_COUNT\}/g, String(articleCount))
        .replace(/\$\{ARTICLE_AUTHOR\.name\}/g, authorName)
        .replace(/\$\{articleCount\}/g, String(articleCount));
    }
  }

  let description = content.match(/\n\s+description="([^"]+)"/)?.[1];
  if (!description) {
    const templateDesc = content.match(/\n\s+description=\{`([^`]+)`\}/)?.[1];
    if (templateDesc) {
      description = templateDesc
        .replace(/\$\{CALCULATOR_COUNT\}/g, String(calculatorCount))
        .replace(/\$\{ARTICLE_COUNT\}/g, String(articleCount))
        .replace(/\$\{ARTICLE_AUTHOR\.name\}/g, authorName)
        .replace(/\$\{articleCount\}/g, String(articleCount));
    }
  }

  const ogImage = content.match(/\n\s+ogImage="([^"]+)"/)?.[1];
  const ogImageAlt = content.match(/\n\s+ogImageAlt="([^"]+)"/)?.[1];
  const ogImageAltTemplate = content.match(/\n\s+ogImageAlt=\{([^}]+)\}/)?.[1];
  const noIndex = /\n\s+noIndex\b/.test(content);
const authorAvatarAlt = authorSource.match(/avatarAlt: '([^']+)'/)?.[1];

  let resolvedOgImageAlt = ogImageAlt;
  if (!resolvedOgImageAlt && ogImageAltTemplate === 'HOME_OG_ALT') {
    resolvedOgImageAlt = HOME_OG_ALT;
  }
  if (!resolvedOgImageAlt && ogImageAltTemplate === 'ARTICLE_AUTHOR.avatarAlt') {
    resolvedOgImageAlt = authorAvatarAlt;
  }
  if (!resolvedOgImageAlt && ogImageAltTemplate === 'featuredImageAlt') {
    resolvedOgImageAlt = undefined;
  }

  add(canonical, title, description, ogImage, resolvedOgImageAlt, noIndex);
}

const articleBlocks = articlesSource.split(/\n  \{\n    slug: '/).slice(1);
for (const block of articleBlocks) {
  const slug = block.match(/^([^']+)'/)?.[1];
  const title = block.match(/\n    title: '([^']+)'/)?.[1] ?? block.match(/\n    title: "([^"]+)"/)?.[1];
  const description =
    block.match(/\n    description:\n      '([^']+)'/)?.[1] ??
    block.match(/\n    description: '([^']+)'/)?.[1];
  const featuredImage = block.match(/\n    featuredImage: '([^']+)'/)?.[1];
  const featuredImageAlt =
    block.match(/\n    featuredImageAlt: '([^']+)'/)?.[1] ??
    block.match(/\n    featuredImageAlt:\n      '([^']+)'/)?.[1];
  add(`/articles/${slug}`, title ? `${title} | Monash WAM Calculator` : undefined, description, featuredImage, featuredImageAlt);
}

const bestArticleFiles = [
  'bestUniversitiesAustraliaArticle.ts',
  'bestPharmacyUniversitiesAustraliaArticle.ts',
  'bestEconomicsUniversitiesAustraliaArticle.ts',
];
for (const file of bestArticleFiles) {
  const content = readFileSync(join(root, 'src/data', file), 'utf8');
  const slug = content.match(/slug: '([^']+)'/)?.[1];
  const title = content.match(/title: '([^']+)'/)?.[1];
  const description = content.match(/description:\s*\n\s*'([^']+)'/)?.[1];
  const featuredImage = content.match(/featuredImage: '([^']+)'/)?.[1];
  const featuredImageAlt = content.match(/featuredImageAlt: '([^']+)'/)?.[1];
  add(`/articles/${slug}`, `${title} | Monash WAM Calculator`, description, featuredImage, featuredImageAlt);
}

const categoriesSource = readFileSync(categoriesPath, 'utf8');
const categoryBlocks = categoriesSource.matchAll(
  /id: '([^']+)'[\s\S]*?title: '([^']+)'[\s\S]*?description: '([^']+)'/g
);
for (const match of categoryBlocks) {
  const [, id, title, description] = match;
  add(`/articles/category/${id}`, `${title} Articles | Monash WAM Calculator`, description);
}

writeFileSync(outPath, `${JSON.stringify(seo, null, 2)}\n`);
console.log(`Wrote ${Object.keys(seo).length} routes to ${outPath}`);
