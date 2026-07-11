/** Official MonashWAMCalculator.com social profiles */
export const SITE_SOCIAL = {
  facebook: 'https://www.facebook.com/monashwamcalculator/',
  instagram: 'https://www.instagram.com/monashwamcalculator/',
  youtube: 'https://www.youtube.com/@MonashWamCalculator',
} as const;

export type SiteSocialNetwork = keyof typeof SITE_SOCIAL;
