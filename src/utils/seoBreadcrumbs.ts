import { getArticleCategoryById } from '../data/articleCategories';

const BASE_URL = 'https://uniwamcalculator.com';

export interface BreadcrumbCrumb {
  name: string;
  path: string;
}

function stripTitleSuffix(title: string): string {
  return title.replace(/\s*\|\s*WAM Calculator.*$/i, '').trim();
}

function isCalculatorPath(path: string): boolean {
  return path === '/' || path.endsWith('-calculator') || path === '/calculators';
}

export function buildBreadcrumbCrumbs(canonicalPath: string, pageTitle: string): BreadcrumbCrumb[] {
  const pageName = stripTitleSuffix(pageTitle);

  if (canonicalPath === '/') {
    return [{ name: 'WAM Calculator', path: '/' }];
  }

  const crumbs: BreadcrumbCrumb[] = [{ name: 'Home', path: '/' }];

  if (canonicalPath.startsWith('/articles/category/')) {
    const categoryId = canonicalPath.replace('/articles/category/', '');
    const category = getArticleCategoryById(categoryId);
    crumbs.push({ name: 'Articles', path: '/articles' });
    crumbs.push({
      name: category?.title ?? pageName,
      path: canonicalPath,
    });
    return crumbs;
  }

  if (canonicalPath.startsWith('/articles/')) {
    crumbs.push({ name: 'Articles', path: '/articles' });
    crumbs.push({ name: pageName, path: canonicalPath });
    return crumbs;
  }

  if (canonicalPath === '/articles') {
    crumbs.push({ name: 'Articles', path: '/articles' });
    return crumbs;
  }

  if (canonicalPath === '/calculators') {
    crumbs.push({ name: 'All Calculators', path: '/calculators' });
    return crumbs;
  }

  if (isCalculatorPath(canonicalPath)) {
    if (canonicalPath !== '/') {
      crumbs.push({ name: 'Calculators', path: '/calculators' });
      crumbs.push({ name: pageName, path: canonicalPath });
    }
    return crumbs;
  }

  crumbs.push({ name: pageName, path: canonicalPath });
  return crumbs;
}

export function breadcrumbCrumbsToJsonLd(crumbs: BreadcrumbCrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path === '/' ? '' : crumb.path}`,
    })),
  };
}

export function getWebPageSchemaType(canonicalPath: string): string {
  if (canonicalPath === '/about-us') return 'AboutPage';
  if (canonicalPath === '/contact-us') return 'ContactPage';
  if (canonicalPath === '/articles') return 'CollectionPage';
  if (canonicalPath.startsWith('/articles/category/')) return 'CollectionPage';
  if (canonicalPath === '/calculators') return 'CollectionPage';
  return 'WebPage';
}

export function isCalculatorRoute(canonicalPath: string): boolean {
  return canonicalPath.endsWith('-calculator') || canonicalPath === '/';
}
