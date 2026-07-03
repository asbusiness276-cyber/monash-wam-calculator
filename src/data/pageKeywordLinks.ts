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
  '/mark-to-grade-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'final grade calculator', path: '/final-grade-calculator' },
  ],
  '/wam-target-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
  ],
  '/supp-repeat-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'failed unit WAM guide', path: '/articles/failed-unit-wam-impact-monash' },
  ],
  '/semester-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'WAM target calculator', path: '/wam-target-calculator' },
  ],
  '/unit-mark-calculator': [
    { keyword: 'final grade calculator', path: '/final-grade-calculator' },
    { keyword: 'Monash WAM calculator', path: '/' },
  ],
  '/wam-projection-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'WAM target calculator', path: '/wam-target-calculator' },
  ],
  '/unit-target-calculator': [
    { keyword: 'unit mark calculator', path: '/unit-mark-calculator' },
    { keyword: 'final grade calculator', path: '/final-grade-calculator' },
  ],
  '/monash-gpa-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'Monash CGPA calculator', path: '/monash-cgpa-calculator' },
  ],
  '/monash-cgpa-calculator': [
    { keyword: 'Monash GPA calculator', path: '/monash-gpa-calculator' },
    { keyword: 'Monash WAM calculator', path: '/' },
  ],
  '/monash-target-gpa-calculator': [
    { keyword: 'Monash GPA calculator', path: '/monash-gpa-calculator' },
    { keyword: 'WAM target calculator', path: '/wam-target-calculator' },
  ],
  '/monash-honours-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'monash honours WAM requirements', path: '/articles/monash-honours-wam-requirements' },
  ],
  '/monash-grade-converter': [
    { keyword: 'mark to grade calculator', path: '/mark-to-grade-calculator' },
    { keyword: 'Monash GPA calculator', path: '/monash-gpa-calculator' },
  ],
  '/monash-distinction-average-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'monash scholarship wam requirements', path: '/articles/monash-scholarship-wam-requirements' },
  ],
  '/monash-scholarship-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'monash scholarship wam requirements', path: '/articles/monash-scholarship-wam-requirements' },
  ],
  '/failed-unit-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'failed unit WAM guide', path: '/articles/failed-unit-wam-impact-monash' },
  ],
  '/monash-deans-honours-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: "monash dean's honours list", path: '/articles/monash-deans-honours-list-wam-guide' },
  ],
  '/monash-exchange-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'monash exchange grades wam', path: '/articles/monash-exchange-grades-wam-guide' },
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

