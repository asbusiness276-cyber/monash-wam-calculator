const DEFAULT_OG_IMAGE_PATH = '/article-images/featured-calculate-wam.webp';

export const DEFAULT_OG_IMAGE = `https://monashwamcalculator.com${DEFAULT_OG_IMAGE_PATH}`;
export const DEFAULT_OG_IMAGE_ALT =
  'Monash university student using a laptop to calculate weighted average mark from unit marks and credit points';

export function resolveOgImageUrl(ogImage: string, baseUrl: string): string {
  return ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
}

export function getOgImageDimensions(ogImage: string): { width: number; height: number } {
  if (ogImage.includes('logo.png') || ogImage.includes('avatar') || ogImage.includes('favicon')) {
    return { width: 512, height: 512 };
  }
  return { width: 1200, height: 630 };
}
