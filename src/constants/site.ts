export const SITE_ORIGIN = 'https://mycalculatorhub.pro';

export const SITE_LOGO = '/logo.png';
export const SITE_LOGO_ALT = 'WAM Calculator — MWC logo';

/** Pill-style button for author/social links (LinkedIn, Instagram, Email). */
export const SOCIAL_LINK_BUTTON_CLASS =
  'inline-flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:border-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors';

export const INLINE_LINK_CLASS = 'font-medium text-primary-600 dark:text-primary-400 hover:underline';

/** Keyword links on dark gradient hero bands (readable on blue/teal/sky). */
export const HERO_INLINE_LINK_CLASS =
  'font-semibold text-white underline underline-offset-2 decoration-white/45 hover:decoration-white';

/** Canonical absolute URL for same-origin paths (always starts with `/`). */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
