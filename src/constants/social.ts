/** Official UniWAMCalculator.com social profiles */
export const SITE_SOCIAL = {
  facebook: 'https://www.facebook.com/uniwamcalculator/',
  instagram: 'https://www.instagram.com/uniwamcalculator/',
  youtube: 'https://www.youtube.com/@UniWamCalculator',
} as const;

export type SiteSocialNetwork = keyof typeof SITE_SOCIAL;
