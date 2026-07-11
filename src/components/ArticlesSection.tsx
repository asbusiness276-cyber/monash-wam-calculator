import { ArrowRight } from 'lucide-react';
import ArticleGridCard from './ArticleGridCard';
import FeaturedArticleCard from './FeaturedArticleCard';
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
  variant?: 'default' | 'home';
}

export default function ArticlesSection({ featured = false, maxItems = 3, variant = 'default' }: ArticlesSectionProps) {
  const isHome = variant === 'home' || featured;
  const displayed = featured
    ? FEATURED_SLUGS.map(slug => getArticleBySlug(slug)).filter(
        (article): article is NonNullable<typeof article> => article != null
      )
    : articles.slice(0, maxItems);

  return (
    <section
      id={featured ? 'featured-articles' : undefined}
      className={
        isHome && variant === 'home'
          ? 'home-section-alt scroll-mt-20 pb-4'
          : 'scroll-mt-20 max-w-6xl mx-auto px-4 pb-8'
      }
    >
      <div className={isHome && variant === 'home' ? 'home-container' : undefined}>
        <div
          className={
            isHome && variant === 'home'
              ? undefined
              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-sm'
          }
        >
          <div
            className={
              isHome && variant === 'home'
                ? 'mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12'
                : 'flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6'
            }
          >
            <div className={isHome && variant === 'home' ? 'max-w-2xl text-left' : undefined}>
              <p
                className={
                  isHome && variant === 'home'
                    ? 'home-eyebrow mb-3'
                    : 'text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-1'
                }
              >
                {featured ? 'Student guides' : 'Articles'}
              </p>
              <h2
                className={
                  isHome && variant === 'home'
                    ? 'home-section-title text-gray-900 dark:text-white'
                    : 'text-2xl md:text-3xl font-bold text-gray-900 dark:text-white'
                }
              >
                {featured ? 'Featured Articles' : 'Read Articles'}
              </h2>
              <p
                className={
                  isHome && variant === 'home'
                    ? 'mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 text-pretty'
                    : 'text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-2xl leading-relaxed'
                }
              >
                {featured
                  ? 'Step-by-step guides on WAM maths, distinction average, GPA conversion, and improvement strategy — written for Monash coursework.'
                  : 'Helpful guides for WAM strategy, conversion, and planning.'}
              </p>
            </div>
            <a
              href="/articles"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              View all {articles.length} guides
              <ArrowRight size={14} aria-hidden />
            </a>
          </div>

          <div
            className={`grid grid-cols-1 ${
              isHome && variant === 'home' ? 'card-grid' : 'gap-5'
            } ${
              featured ? 'md:grid-cols-2 xl:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'
            } lg:items-stretch`}
          >
            {displayed.map(article => (
              <div key={article.slug} className="flex min-h-0 h-full">
                {featured && variant === 'home' ? (
                  <FeaturedArticleCard article={article} />
                ) : (
                  <ArticleGridCard article={article} compact={!featured} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
