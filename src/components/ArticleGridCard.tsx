import type { ArticleData } from '../data/articles';
import { getArticleCategory, getArticleCategoryPath } from '../data/articleCategories';
import ArticleFeaturedImage from './ArticleFeaturedImage';

interface ArticleGridCardProps {
  article: ArticleData;
  /** Slightly smaller typography for homepage preview row */
  compact?: boolean;
}

export default function ArticleGridCard({ article, compact = false }: ArticleGridCardProps) {
  const category = getArticleCategory(article.slug);

  return (
    <article className="card-surface card-interactive flex h-full min-h-0 flex-col overflow-hidden">
      <div className="aspect-video w-full shrink-0 bg-gray-100 dark:bg-gray-800">
        <ArticleFeaturedImage article={article} className="h-full w-full object-cover" />
      </div>

      <div className={`flex min-h-0 flex-1 flex-col ${compact ? 'card-p-sm' : 'card-p-md'}`}>
        <a
          href={getArticleCategoryPath(category.id)}
          className={`shrink-0 overflow-hidden font-semibold uppercase leading-snug text-primary-600 line-clamp-1 dark:text-primary-400 ${
            compact ? 'text-[10px] tracking-wide' : 'text-xs tracking-wide'
          } hover:underline`}
        >
          {category.title}
        </a>
        <p
          className={`card-caption mt-1 shrink-0 overflow-hidden line-clamp-1 ${
            compact ? 'text-[10px]' : ''
          }`}
        >
          {article.keyword}
        </p>
        <h2
          className={`card-title mt-2 shrink-0 overflow-hidden leading-snug line-clamp-2 ${
            compact ? 'h-10 text-sm' : 'h-14 text-lg'
          }`}
        >
          {article.title}
        </h2>
        {!compact && (
          <p className="card-body mt-2 h-[4.5rem] shrink-0 overflow-hidden line-clamp-3">
            {article.description}
          </p>
        )}
        <div className="min-h-0 flex-1" aria-hidden />
        <a
          href={`/articles/${article.slug}`}
          className={`card-action shrink-0 hover:underline ${compact ? 'pt-3 text-xs' : 'pt-4'}`}
        >
          Read article
        </a>
      </div>
    </article>
  );
}
