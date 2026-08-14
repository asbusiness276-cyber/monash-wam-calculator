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
    { keyword: 'WAM to 4.0 GPA calculator', path: '/wam-to-4-0-gpa-calculator' },
  ],
  '/gpa-to-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: '4.0 GPA to WAM calculator', path: '/4-0-gpa-to-wam-calculator' },
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
    { keyword: 'monash wam projection guide', path: '/articles/monash-wam-projection-guide' },
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
  '/calculators': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'student articles', path: '/articles' },
  ],
  '/monash-official-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'how to calculate wam', path: '/articles/how-to-calculate-wam' },
  ],
  '/pass-mark-calculator': [
    { keyword: 'final grade calculator', path: '/final-grade-calculator' },
    { keyword: 'unit mark calculator', path: '/unit-mark-calculator' },
  ],
  '/degree-progress-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'monash credit points wam', path: '/articles/monash-credit-points-wam-explained' },
  ],
  '/wam-milestones-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'what is a good wam', path: '/articles/what-is-a-good-wam' },
  ],
  '/withdrawn-fail-impact-calculator': [
    { keyword: 'Monash grade converter', path: '/monash-grade-converter' },
    { keyword: 'failed unit WAM guide', path: '/articles/failed-unit-wam-impact-monash' },
  ],
  '/weighted-average-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'grade average calculator', path: '/grade-average-calculator' },
  ],
  '/grade-average-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'weighted average calculator', path: '/weighted-average-calculator' },
  ],
  '/percentage-to-gpa-calculator': [
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
    { keyword: 'GPA to percentage calculator', path: '/gpa-to-percentage-calculator' },
  ],
  '/7-0-scale-gpa-calculator': [
    { keyword: 'WAM to 7.0 GPA calculator', path: '/wam-to-7-0-gpa-calculator' },
    { keyword: 'percentage to GPA calculator', path: '/percentage-to-gpa-calculator' },
  ],
  '/wam-to-4-0-gpa-calculator': [
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
    { keyword: '4.0 GPA to WAM calculator', path: '/4-0-gpa-to-wam-calculator' },
  ],
  '/wam-to-7-0-gpa-calculator': [
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
    { keyword: '7.0 GPA to WAM calculator', path: '/7-0-gpa-to-wam-calculator' },
  ],
  '/wam-to-cgpa-calculator': [
    { keyword: 'Monash CGPA calculator', path: '/monash-cgpa-calculator' },
    { keyword: 'WAM to 4.0 GPA calculator', path: '/wam-to-4-0-gpa-calculator' },
  ],
  '/4-0-gpa-to-wam-calculator': [
    { keyword: 'GPA to WAM calculator', path: '/gpa-to-wam-calculator' },
    { keyword: 'WAM to 4.0 GPA calculator', path: '/wam-to-4-0-gpa-calculator' },
  ],
  '/7-0-gpa-to-wam-calculator': [
    { keyword: 'GPA to WAM calculator', path: '/gpa-to-wam-calculator' },
    { keyword: 'WAM to 7.0 GPA calculator', path: '/wam-to-7-0-gpa-calculator' },
  ],
  '/cgpa-to-wam-calculator': [
    { keyword: 'WAM to CGPA calculator', path: '/wam-to-cgpa-calculator' },
    { keyword: 'Monash CGPA calculator', path: '/monash-cgpa-calculator' },
  ],
  '/gpa-to-percentage-calculator': [
    { keyword: 'percentage to GPA calculator', path: '/percentage-to-gpa-calculator' },
    { keyword: 'GPA to WAM calculator', path: '/gpa-to-wam-calculator' },
  ],
  '/4-0-to-7-0-gpa-calculator': [
    { keyword: '7.0 to 4.0 GPA calculator', path: '/7-0-to-4-0-gpa-calculator' },
    { keyword: 'WAM to 7.0 GPA calculator', path: '/wam-to-7-0-gpa-calculator' },
  ],
  '/7-0-to-4-0-gpa-calculator': [
    { keyword: '4.0 to 7.0 GPA calculator', path: '/4-0-to-7-0-gpa-calculator' },
    { keyword: 'WAM to 4.0 GPA calculator', path: '/wam-to-4-0-gpa-calculator' },
  ],
  '/semester-gpa-calculator': [
    { keyword: 'GPA to CGPA calculator', path: '/gpa-to-cgpa-calculator' },
    { keyword: 'semester WAM calculator', path: '/semester-wam-calculator' },
  ],
  '/gpa-to-cgpa-calculator': [
    { keyword: 'Monash CGPA calculator', path: '/monash-cgpa-calculator' },
    { keyword: 'semester GPA calculator', path: '/semester-gpa-calculator' },
  ],
  '/cgpa-to-gpa-calculator': [
    { keyword: 'CGPA to WAM calculator', path: '/cgpa-to-wam-calculator' },
    { keyword: 'GPA to CGPA calculator', path: '/gpa-to-cgpa-calculator' },
  ],
  '/4-0-gpa-calculator': [
    { keyword: 'GPA calculator', path: '/gpa-calculator' },
    { keyword: 'WAM to 4.0 GPA calculator', path: '/wam-to-4-0-gpa-calculator' },
  ],
  '/gpa-calculator': [
    { keyword: 'Monash GPA calculator', path: '/monash-gpa-calculator' },
    { keyword: 'GPA to WAM calculator', path: '/gpa-to-wam-calculator' },
  ],
  '/atar-to-gpa-wam-calculator': [
    { keyword: 'Monash WAM calculator', path: '/' },
    { keyword: 'WAM to GPA calculator', path: '/wam-to-gpa-calculator' },
  ],
  '/high-school-gpa-calculator': [
    { keyword: 'GPA calculator', path: '/gpa-calculator' },
    { keyword: 'ATAR to GPA calculator', path: '/atar-to-gpa-wam-calculator' },
  ],
  '/10-point-gpa-to-wam-calculator': [
    { keyword: 'CGPA to GPA calculator', path: '/cgpa-to-gpa-calculator' },
    { keyword: '4.0 GPA to WAM calculator', path: '/4-0-gpa-to-wam-calculator' },
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
  '/student-budget-calculator': [
    { keyword: 'track your spending', path: '/student-budget-calculator' },
    { keyword: 'manage university expenses', path: '/student-budget-calculator' }
  ],
  '/study-time-calculator': [
    { keyword: 'balance your workload', path: '/study-time-calculator' },
    { keyword: 'plan study schedule', path: '/study-time-calculator' }
  ],
};

