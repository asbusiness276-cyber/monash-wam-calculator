import { getArticleCategoryId } from './articleCategories';

const DEFAULT_RELATED = [
  '/',
  '/wam-to-gpa-calculator',
  '/uni-gpa-calculator',
  '/wam-target-calculator',
  '/final-grade-calculator',
  '/supp-repeat-wam-calculator',
];

const CATEGORY_RELATED: Record<string, string[]> = {
  'wam-fundamentals': [
    '/',
    '/semester-wam-calculator',
    '/uni-official-wam-calculator',
    '/wam-milestones-calculator',
    '/degree-progress-calculator',
    '/wam-to-gpa-calculator',
  ],
  'wam-planning': [
    '/wam-target-calculator',
    '/wam-projection-calculator',
    '/unit-target-calculator',
    '/',
    '/semester-wam-calculator',
    '/final-grade-calculator',
  ],
  'gpa-conversion': [
    '/wam-to-gpa-calculator',
    '/gpa-to-wam-calculator',
    '/uni-gpa-calculator',
    '/uni-cgpa-calculator',
    '/percentage-to-gpa-calculator',
    '/atar-to-gpa-wam-calculator',
  ],
  'merit-awards': [
    '/uni-honours-calculator',
    '/uni-scholarship-wam-calculator',
    '/uni-distinction-average-calculator',
    '/uni-deans-honours-calculator',
    '/wam-milestones-calculator',
    '/wam-to-gpa-calculator',
  ],
  'recovery-exams': [
    '/failed-unit-wam-calculator',
    '/supp-repeat-wam-calculator',
    '/withdrawn-fail-impact-calculator',
    '/final-grade-calculator',
    '/pass-mark-calculator',
    '/wam-target-calculator',
  ],
  pathways: [
    '/',
    '/uni-exchange-wam-calculator',
    '/wam-to-gpa-calculator',
    '/atar-to-gpa-wam-calculator',
    '/high-school-gpa-calculator',
    '/degree-progress-calculator',
  ],
};

/** Per-slug overrides when an article should point at a more specific tool set. */
const SLUG_RELATED: Record<string, string[]> = {
  'uni-wam-to-gpa-conversion': [
    '/wam-to-gpa-calculator',
    '/wam-to-4-0-gpa-calculator',
    '/wam-to-7-0-gpa-calculator',
    '/gpa-to-wam-calculator',
    '/uni-gpa-calculator',
    '/',
  ],
  'atar-to-gpa-wam-conversion-guide': [
    '/atar-to-gpa-wam-calculator',
    '/high-school-gpa-calculator',
    '/gpa-to-wam-calculator',
    '/wam-to-gpa-calculator',
    '/',
    '/percentage-to-gpa-calculator',
  ],
  'uni-scholarship-wam-requirements': [
    '/uni-scholarship-wam-calculator',
    '/uni-distinction-average-calculator',
    '/wam-target-calculator',
    '/wam-to-gpa-calculator',
    '/',
    '/uni-gpa-calculator',
  ],
  'uni-honours-wam-requirements': [
    '/uni-honours-calculator',
    '/uni-distinction-average-calculator',
    '/wam-target-calculator',
    '/',
    '/wam-milestones-calculator',
    '/uni-deans-honours-calculator',
  ],
  'failed-unit-wam-impact-uni': [
    '/failed-unit-wam-calculator',
    '/supp-repeat-wam-calculator',
    '/withdrawn-fail-impact-calculator',
    '/final-grade-calculator',
    '/wam-projection-calculator',
    '/',
  ],
  'uni-final-exam-mark-calculator-guide': [
    '/final-grade-calculator',
    '/pass-mark-calculator',
    '/unit-mark-calculator',
    '/unit-target-calculator',
    '/',
    '/wam-target-calculator',
  ],
};

export function getArticleRelatedCalculatorHrefs(slug: string): string[] {
  if (SLUG_RELATED[slug]) return SLUG_RELATED[slug];
  const categoryId = getArticleCategoryId(slug);
  return CATEGORY_RELATED[categoryId] ?? DEFAULT_RELATED;
}
