export interface KeywordInternalLink {
  keyword: string;
  /** Same-origin path beginning with `/`. */
  path: string;
}

/**
 * Exactly two editorial internal links per route (keyword anchor text).
 * Paths must not equal the current page.
 */
export const PAGE_KEYWORD_LINKS: Record<string, readonly [KeywordInternalLink, KeywordInternalLink]> = {
  '/': [
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
    { keyword: 'GPA to WAM calculator', path: '/gpa-to-wam-calculator' },
  ],
  '/wam-to-gpa-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'final grade calculator', path: '/final-grade-calculator' },
  ],
  '/gpa-to-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
  ],
  '/final-grade-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
  ],
  '/articles': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'how to calculate WAM', path: '/articles/how-to-calculate-wam' },
  ],
  '/about-us': [
    { keyword: 'student articles', path: '/articles' },
    { keyword: 'contact us', path: '/contact-us' },
  ],
  '/contact-us': [
    { keyword: 'privacy policy', path: '/privacy-policy' },
    { keyword: 'Monash WAM calculator', path: '/' },
  ],
  '/write-for-us': [
    { keyword: 'Contact Us page', path: '/contact-us' },
    { keyword: 'Monash WAM calculator', path: '/' },
  ],
  '/privacy-policy': [
    { keyword: 'terms and conditions', path: '/terms-and-conditions' },
    { keyword: 'disclaimer', path: '/disclaimer' },
  ],
  '/terms-and-conditions': [
    { keyword: 'privacy policy', path: '/privacy-policy' },
    { keyword: 'contact us', path: '/contact-us' },
  ],
  '/disclaimer': [
    { keyword: 'privacy policy', path: '/privacy-policy' },
    { keyword: 'terms and conditions', path: '/terms-and-conditions' },
  ],
  '/404': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
  ],
};

const FALLBACK_LINKS: readonly [KeywordInternalLink, KeywordInternalLink] = PAGE_KEYWORD_LINKS['/404'];

export function getPageKeywordLinks(pathname: string): readonly [KeywordInternalLink, KeywordInternalLink] {
  return PAGE_KEYWORD_LINKS[pathname] ?? FALLBACK_LINKS;
}
