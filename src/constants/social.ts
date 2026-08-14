/** Official MyCalculatorHub.pro social profiles */
export const SITE_SOCIAL = {
  facebook: 'https://www.facebook.com/mycalculatorhub/',
  instagram: 'https://www.instagram.com/mycalculatorhub/',
  youtube: 'https://www.youtube.com/@UniWamCalculator',
} as const;

export type SiteSocialNetwork = keyof typeof SITE_SOCIAL;
