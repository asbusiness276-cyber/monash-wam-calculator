import { FaqItem } from '../components/Seo';
import { enrichArticleContent } from '../utils/enrichArticleContent';
import { bestEconomicsUniversitiesAustraliaArticle } from './bestEconomicsUniversitiesAustraliaArticle';
import { bestPharmacyUniversitiesAustraliaArticle } from './bestPharmacyUniversitiesAustraliaArticle';
import { bestUniversitiesAustraliaArticle } from './bestUniversitiesAustraliaArticle';
import { bestComputerScienceUniversitiesAustraliaArticle } from './bestComputerScienceUniversitiesAustraliaArticle';
import { bestLawUniversitiesAustraliaArticle } from './bestLawUniversitiesAustraliaArticle';

export type ArticleContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'image'; src: string; alt: string; width?: number; height?: number }
  | { type: 'facts'; title?: string; items: string[] }
  | { type: 'table'; caption?: string; headers: string[]; rows: string[][] };

export interface ArticleSection {
  heading: string;
  headingLink?: string;
  paragraphs?: string[];
  blocks?: ArticleContentBlock[];
}

export interface ArticleData {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  featuredImage: string;
  featuredImageAlt: string;
  publishedAt: string;
  updatedAt: string;
  sections: ArticleSection[];
  faqs: FaqItem[];
}

const rawArticles: ArticleData[] = [
  bestUniversitiesAustraliaArticle,
  bestComputerScienceUniversitiesAustraliaArticle,
  bestLawUniversitiesAustraliaArticle,
  bestEconomicsUniversitiesAustraliaArticle,
  bestPharmacyUniversitiesAustraliaArticle,
];

export const articles = rawArticles.map(enrichArticleContent) as any;

export function getArticleBySlug(slug: string): (ArticleData & {
  wordCount: number;
  readingTimeMinutes: number;
  headings: { id: string; text: string }[];
  relatedArticles: ArticleData[];
}) | undefined {
  return articles.find((a: any) => a.slug === slug);
}

export function getArticleImageAlt(slugOrArticle: string | any): string {
  const slug = typeof slugOrArticle === "string" ? slugOrArticle : slugOrArticle.slug;
  const article = getArticleBySlug(slug);
  return article?.featuredImageAlt || '';
}
