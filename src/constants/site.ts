export const SITE_ORIGIN = 'https://monashwamcalculator.com';

/** Class for in-sentence internal links (keyword anchor text). */
export const INLINE_LINK_CLASS = 'font-medium text-primary-600 dark:text-primary-400 hover:underline';

/** Keyword links on dark gradient hero bands (readable on blue/teal/sky). */
export const HERO_INLINE_LINK_CLASS =
  'font-semibold text-white underline underline-offset-2 decoration-white/45 hover:decoration-white';

/** Canonical absolute URL for same-origin paths (always starts with `/`). */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
