import type { ArticleData } from './articles';

export interface ArticleCategory {
  id: string;
  title: string;
  description: string;
}

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  {
    id: 'wam-fundamentals',
    title: 'WAM Fundamentals',
    description: 'How WAM is calculated, credit points, transcripts, semester averages, and milestone bands.',
  },
  {
    id: 'wam-planning',
    title: 'WAM Planning & Targets',
    description: 'Improvement strategy, required averages, and what-if projection before results.',
  },
  {
    id: 'gpa-conversion',
    title: 'GPA & Conversion',
    description: 'WAM to GPA, CGPA, postgraduate reporting, and cross-university conversion.',
  },
  {
    id: 'merit-awards',
    title: 'Honours, Scholarships & Merit',
    description: 'Honours entry, scholarships, distinction average, dean\'s list, and employer WAM screens.',
  },
  {
    id: 'recovery-exams',
    title: 'Recovery & Exams',
    description: 'Failed units, supplementary exams, repeats, withdrawn fail, and final exam targets.',
  },
  {
    id: 'pathways',
    title: 'University Life & Pathways',
    description: 'Monash orientation, exchange grades, and degree pathway context.',
  },
];

export function getArticleCategoryPath(categoryId: string): string {
  return `/articles/category/${categoryId}`;
}

export function getArticleCategoryById(categoryId: string): ArticleCategory | undefined {
  return ARTICLE_CATEGORIES.find(category => category.id === categoryId);
}

const SLUG_TO_CATEGORY: Record<string, string> = {
  'how-to-calculate-wam': 'wam-fundamentals',
  'how-to-find-wam-on-monash-transcript': 'wam-fundamentals',
  'monash-credit-points-wam-explained': 'wam-fundamentals',
  'monash-year-1-wam-weighting-guide': 'wam-fundamentals',
  'what-is-a-good-wam': 'wam-fundamentals',
  'monash-semester-wam-guide': 'wam-fundamentals',
  'monash-wam-milestones-guide': 'wam-fundamentals',
  'how-to-improve-wam-at-monash': 'wam-planning',
  'monash-wam-target-guide': 'wam-planning',
  'monash-wam-projection-guide': 'wam-planning',
  'monash-wam-to-gpa-conversion': 'gpa-conversion',
  'monash-wam-vs-gpa-postgraduate': 'gpa-conversion',
  'monash-cgpa-explained-guide': 'gpa-conversion',
  'how-to-convert-wam-from-one-university-to-another': 'gpa-conversion',
  'percentage-to-gpa-calculator-guide': 'gpa-conversion',
  '4-0-gpa-calculator-guide': 'gpa-conversion',
  '7-0-scale-gpa-calculator-guide': 'gpa-conversion',
  'semester-gpa-calculator-guide': 'gpa-conversion',
  'gpa-to-cgpa-calculator-guide': 'gpa-conversion',
  'atar-to-gpa-wam-conversion-guide': 'gpa-conversion',
  'monash-honours-wam-requirements': 'merit-awards',
  'monash-scholarship-wam-requirements': 'merit-awards',
  'monash-distinction-average-guide': 'merit-awards',
  'monash-deans-honours-list-wam-guide': 'merit-awards',
  'monash-wam-internship-graduate-jobs-guide': 'merit-awards',
  'failed-unit-wam-impact-monash': 'recovery-exams',
  'monash-supplementary-exam-wam-guide': 'recovery-exams',
  'monash-repeat-unit-wam-guide': 'recovery-exams',
  'monash-withdrawn-fail-wam-guide': 'recovery-exams',
  'monash-final-exam-mark-calculator-guide': 'recovery-exams',
  'monash-university-australia': 'pathways',
  'best-universities-in-australia': 'pathways',
  'best-pharmacy-universities-in-australia': 'pathways',
  'monash-exchange-grades-wam-guide': 'pathways',
};

export function getArticleCategoryId(slug: string): string {
  return SLUG_TO_CATEGORY[slug] ?? 'pathways';
}

export function getArticleCategory(slug: string): ArticleCategory {
  const id = getArticleCategoryId(slug);
  return ARTICLE_CATEGORIES.find(category => category.id === id) ?? ARTICLE_CATEGORIES[0];
}

export type ArticleCategoryGroup = ArticleCategory & { articles: ArticleData[] };

export function groupArticlesByCategory(articleList: ArticleData[]): ArticleCategoryGroup[] {
  return ARTICLE_CATEGORIES.map(category => ({
    ...category,
    articles: articleList.filter(article => getArticleCategoryId(article.slug) === category.id),
  })).filter(group => group.articles.length > 0);
}
