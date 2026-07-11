import type { ArticleData } from './articles';

export interface ArticleCategory {
  id: string;
  title: string;
  description: string;
  intro: string;
}

export const ARTICLE_CATEGORIES: ArticleCategory[] = [
  {
    id: 'wam-fundamentals',
    title: 'WAM Fundamentals',
    description: 'How WAM is calculated, credit points, transcripts, semester averages, and milestone bands.',
    intro:
      'Weighted Average Mark is the headline number on most Monash transcripts — but the formula catches students off guard. First-year units count at half weight in official WAM, credit points change how much one subject moves your average, and semester WAM differs from cumulative degree WAM. Guides in this category walk through the maths step by step, explain how to read WES exports, and show when to use semester vs cumulative calculators. Start here if you are new to Monash grading or need to reconcile a manual calculation with WES.',
  },
  {
    id: 'wam-planning',
    title: 'WAM Planning & Targets',
    description: 'Improvement strategy, required averages, and what-if projection before results.',
    intro:
      'Once you understand how WAM works, the next question is practical: what marks do I need next semester to reach my goal? Planning guides cover target WAM modelling, unit-by-unit mark requirements, projection before results release, and realistic timelines when you are recovering from a weak teaching period. These articles pair directly with our WAM target, projection, and unit target calculators so you can move from strategy to numbers in one session — without guessing whether distinction average is still mathematically reachable.',
  },
  {
    id: 'gpa-conversion',
    title: 'GPA & Conversion',
    description: 'WAM to GPA, CGPA, postgraduate reporting, and cross-university conversion.',
    intro:
      'Monash reports WAM as a percentage, but scholarships, US exchange forms, and graduate programs often ask for GPA on a 4.0 or 7.0 scale instead. Conversion is not a simple linear formula — Monash uses discrete grade bands tied to High Distinction, Distinction, Credit, and Pass. This category explains band mapping, when to use cumulative CGPA vs semester GPA, and how international 10-point scales compare to Australian coursework. Use these guides alongside our dedicated WAM-to-GPA and percentage converters when filling applications.',
  },
  {
    id: 'merit-awards',
    title: 'Honours, Scholarships & Merit',
    description: 'Honours entry, scholarships, distinction average, dean\'s list, and employer WAM screens.',
    intro:
      'Merit thresholds sit at the intersection of WAM maths and faculty policy. Honours classification cut-offs, Dean\'s list tiers, scholarship renewal GPA floors, and employer graduate screens often cite WAM 70+, distinction average, or GPA 3.0 — but the exact rules vary by course and year. Articles here translate policy language into calculator-ready targets, explain distinction average vs a single D grade, and cover competitive standing without overpromising outcomes Monash has not guaranteed.',
  },
  {
    id: 'recovery-exams',
    title: 'Recovery & Exams',
    description: 'Failed units, supplementary exams, repeats, withdrawn fail, and final exam targets.',
    intro:
      'A failed unit, withdrawn fail, or borderline exam mark can feel catastrophic — but the impact on cumulative WAM depends on credit points, remaining enrolment, and whether you repeat or sit a supplementary exam. Recovery guides quantify that impact, model repeat vs supp scenarios, and help you set final exam mark targets when the last assessment still carries heavy weight. Pair these reads with failed unit, supp/repeat, withdrawn fail, and final grade calculators when you need concrete numbers before speaking with course advisers.',
  },
  {
    id: 'pathways',
    title: 'University Life & Pathways',
    description: 'Monash orientation, exchange grades, and degree pathway context.',
    intro:
      'Not every academic question is a formula. Orientation timelines, exchange grade conversion, faculty culture, and degree pathway choices shape how you use WAM tools in real life. This category covers Monash-specific context — how exchange marks return to your transcript, what to expect in first semester, and broader Australian university comparisons — so calculators sit inside a realistic picture of student life rather than floating as abstract maths.',
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
  'best-universities-for-economics-in-australia': 'pathways',
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

export function getCategoryArticleNeighbors(slug: string, articleList: ArticleData[]) {
  const categoryId = getArticleCategoryId(slug);
  const inCategory = articleList.filter(article => getArticleCategoryId(article.slug) === categoryId);
  const index = inCategory.findIndex(article => article.slug === slug);

  return {
    prev: index > 0 ? inCategory[index - 1] : undefined,
    next: index >= 0 && index < inCategory.length - 1 ? inCategory[index + 1] : undefined,
    related: inCategory.filter(article => article.slug !== slug).slice(0, 3),
  };
}

export function groupArticlesByCategory(articleList: ArticleData[]): ArticleCategoryGroup[] {
  return ARTICLE_CATEGORIES.map(category => ({
    ...category,
    articles: articleList.filter(article => getArticleCategoryId(article.slug) === category.id),
  })).filter(group => group.articles.length > 0);
}
