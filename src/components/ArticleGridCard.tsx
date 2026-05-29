import type { ArticleData } from '../data/articles';
import ArticleFeaturedImage from './ArticleFeaturedImage';

interface ArticleGridCardProps {
  article: ArticleData;
  /** Slightly smaller typography for homepage preview row */
  compact?: boolean;
}

export default function ArticleGridCard({ article, compact = false }: ArticleGridCardProps) {
  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="aspect-video w-full shrink-0 bg-gray-100 dark:bg-gray-800">
        <ArticleFeaturedImage article={article} className="h-full w-full object-cover" />
      </div>

      <div
        className={`flex min-h-0 flex-1 flex-col ${compact ? 'p-4' : 'p-5'}`}
      >
        <p
          className={`shrink-0 overflow-hidden font-semibold uppercase leading-snug text-primary-600 line-clamp-2 dark:text-primary-400 ${
            compact ? 'h-9 text-[11px] tracking-wide' : 'h-11 text-xs tracking-wide'
          }`}
        >
          {article.keyword}
        </p>
        <h2
          className={`mt-2 shrink-0 overflow-hidden font-bold leading-snug text-gray-900 line-clamp-2 dark:text-white ${
            compact ? 'h-10 text-sm' : 'h-14 text-lg'
          }`}
        >
          {article.title}
        </h2>
        {!compact && (
          <p className="mt-2 h-[4.5rem] shrink-0 overflow-hidden text-sm leading-relaxed text-gray-600 line-clamp-3 dark:text-gray-400">
            {article.description}
          </p>
        )}
        <div className="min-h-0 flex-1" aria-hidden />
        <a
          href={`/articles/${article.slug}`}
          className={`inline-flex shrink-0 font-semibold text-primary-600 hover:underline dark:text-primary-400 ${
            compact ? 'pt-3 text-xs' : 'pt-4 text-sm'
          }`}
        >
          Read article
        </a>
      </div>
    </article>
  );
}
