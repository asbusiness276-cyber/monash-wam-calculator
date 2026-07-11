import { ArrowRight } from 'lucide-react';
import ArticleGridCard from './ArticleGridCard';
import { articles, getArticleBySlug } from '../data/articles';

const FEATURED_SLUGS = [
  'how-to-calculate-wam',
  'monash-distinction-average-guide',
  'monash-wam-to-gpa-conversion',
  'how-to-improve-wam-at-monash',
] as const;

interface ArticlesSectionProps {
  /** When true, show hand-picked featured guides (homepage). */
  featured?: boolean;
  maxItems?: number;
}

export default function ArticlesSection({ featured = false, maxItems = 3 }: ArticlesSectionProps) {
  const displayed = featured
    ? FEATURED_SLUGS.map(slug => getArticleBySlug(slug)).filter(
        (article): article is NonNullable<typeof article> => article != null
      )
    : articles.slice(0, maxItems);

  return (
    <section id={featured ? 'featured-articles' : undefined} className="scroll-mt-20 max-w-6xl mx-auto px-4 pb-8">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-1">
              {featured ? 'Student guides' : 'Articles'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {featured ? 'Featured Articles' : 'Read Articles'}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed">
              {featured
                ? 'Step-by-step guides on WAM maths, distinction average, GPA conversion, and improvement strategy — written for Monash coursework.'
                : 'Helpful guides for WAM strategy, conversion, and planning.'}
            </p>
          </div>
          <a
            href="/articles"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline shrink-0"
          >
            View all {articles.length} guides
            <ArrowRight size={14} aria-hidden />
          </a>
        </div>

        <div
          className={`grid grid-cols-1 gap-5 ${
            featured ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'
          } lg:items-stretch`}
        >
          {displayed.map(article => (
            <div key={article.slug} className="flex min-h-0 h-full">
              <ArticleGridCard article={article} compact={!featured} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
