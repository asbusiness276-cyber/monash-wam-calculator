export const SITE_ORIGIN = 'https://monashwamcalculator.com';

/** Canonical absolute URL for same-origin paths (always starts with `/`). */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}
