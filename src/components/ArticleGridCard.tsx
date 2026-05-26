import type { ArticleData } from '../data/articles';

interface ArticleGridCardProps {
  article: ArticleData;
  /** Slightly smaller typography for homepage preview row */
  compact?: boolean;
}

export default function ArticleGridCard({ article, compact = false }: ArticleGridCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="aspect-video w-full shrink-0 bg-gray-100 dark:bg-gray-800">
        <img
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className={`flex min-h-0 flex-1 flex-col ${compact ? 'p-4' : 'p-5'}`}>
        <p
          className={`shrink-0 font-semibold uppercase leading-snug text-primary-600 dark:text-primary-400 line-clamp-2 ${
            compact ? 'min-h-[2.25rem] text-[11px] tracking-wide' : 'min-h-[2.75rem] text-xs tracking-wide'
          }`}
        >
          {article.keyword}
        </p>
        <h2
          className={`mt-2 shrink-0 font-bold leading-snug text-gray-900 line-clamp-2 dark:text-white ${
            compact ? 'min-h-[2.5rem] text-sm' : 'min-h-[3.5rem] text-lg'
          }`}
        >
          {article.title}
        </h2>
        {!compact && (
          <p className="mt-2 min-h-[4.25rem] flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3 dark:text-gray-400">
            {article.description}
          </p>
        )}
        <a
          href={`/articles/${article.slug}`}
          className={`mt-auto inline-flex shrink-0 font-semibold text-primary-600 hover:underline dark:text-primary-400 ${
            compact ? 'pt-3 text-xs' : 'pt-4 text-sm'
          }`}
        >
          Read article
        </a>
      </div>
    </article>
  );
}
