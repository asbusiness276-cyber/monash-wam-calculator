import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { ArticleData } from '../data/articles';
import { getArticleCategory, getArticleCategoryPath } from '../data/articleCategories';
import { ARTICLE_AUTHOR } from '../constants/author';
import { getArticleReadingTimeMinutes } from '../utils/articleReadingTime';
import { formatArticleDate } from '../utils/formatArticleDate';
import ArticleFeaturedImage from './ArticleFeaturedImage';
import AuthorAvatar from './AuthorAvatar';

interface FeaturedArticleCardProps {
  article: ArticleData;
}

export default function FeaturedArticleCard({ article }: FeaturedArticleCardProps) {
  const category = getArticleCategory(article.slug);
  const readingTime = getArticleReadingTimeMinutes(article);
  const updatedLabel = formatArticleDate(article.updatedAt);
  const articleHref = `/articles/${article.slug}`;

  return (
    <article className="article-card group relative flex h-full min-h-0 flex-col">
      <a
        href={getArticleCategoryPath(category.id)}
        className="article-card-badge absolute left-4 top-4 z-20"
      >
        {category.title}
      </a>

      <a href={articleHref} className="article-card-link flex h-full min-h-0 flex-col">
        <div className="article-card-media relative overflow-hidden">
          <ArticleFeaturedImage
            article={article}
            className="article-card-image h-full w-full object-cover"
          />
          <div className="article-card-media-overlay" aria-hidden />
        </div>

        <div className="flex min-h-0 flex-1 flex-col card-p-md">
          <p className="card-caption line-clamp-1">{article.keyword}</p>

          <h3 className="article-card-title mt-2 line-clamp-2">{article.title}</h3>

          <p className="card-body mt-3 line-clamp-2 flex-1">{article.description}</p>

          <ul className="article-card-meta mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
            <li className="inline-flex items-center gap-1.5">
              <Clock size={14} className="shrink-0 text-gray-400" aria-hidden />
              <span>{readingTime} min read</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Calendar size={14} className="shrink-0 text-gray-400" aria-hidden />
              <span>Updated {updatedLabel}</span>
            </li>
          </ul>

          <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4 dark:border-gray-700/80">
            <AuthorAvatar size="sm" />
            <div className="min-w-0 text-left">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{ARTICLE_AUTHOR.name}</p>
              <p className="card-caption">{ARTICLE_AUTHOR.role}</p>
            </div>
          </div>

          <span className="article-card-cta mt-4">
            Read article
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
          </span>
        </div>
      </a>
    </article>
  );
}
