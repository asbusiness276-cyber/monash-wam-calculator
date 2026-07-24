/** Monetization switches — keep AdSense off until Google approves the account. */
export const ADSENSE_ENABLED = false;

/**
 * Affiliate CTAs — paste live Commission Factory / Awin tracking URLs when approved.
 * Leave `href` empty to hide an offer from the site.
 */
export interface AffiliateOffer {
  id: string;
  title: string;
  description: string;
  href: string;
  network: 'commission-factory' | 'awin' | 'direct';
  rel?: string;
}

export const AFFILIATE_OFFERS: AffiliateOffer[] = [
  {
    id: 'study-writing-tool',
    title: 'Grammar & writing helper for essays',
    description: 'Useful when polishing assignments before exams — optional tool students often use alongside WAM planning.',
    href: '',
    network: 'awin',
  },
  {
    id: 'vpn-study',
    title: 'VPN for campus & travel study',
    description: 'Handy for secure browsing on shared uni Wi‑Fi or when researching from abroad.',
    href: '',
    network: 'commission-factory',
  },
  {
    id: 'cloud-storage',
    title: 'Cloud backup for notes & transcripts',
    description: 'Keep WES exports, assignment drafts, and semester plans backed up across devices.',
    href: '',
    network: 'commission-factory',
  },
];

export function getActiveAffiliateOffers(): AffiliateOffer[] {
  return AFFILIATE_OFFERS.filter(offer => offer.href.trim().length > 0);
}
