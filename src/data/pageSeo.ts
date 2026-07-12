import pageSeo from './pageSeo.json';

export interface PageSeoEntry {
  title: string;
  description: string;
  ogImage?: string;
  ogImageAlt?: string;
  noIndex?: boolean;
}

export function getPageSeo(path: string): PageSeoEntry | undefined {
  return (pageSeo as Record<string, PageSeoEntry>)[path];
}

export { pageSeo };
