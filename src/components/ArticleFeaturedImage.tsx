import type { ArticleData } from '../data/articles';
import { getArticleImageAlt } from '../data/articles';

interface ArticleFeaturedImageProps {
  article: Pick<ArticleData, 'featuredImage' | 'featuredImageAlt' | 'title' | 'keyword'>;
  /** Cards use lazy loading; article header loads eagerly */
  priority?: boolean;
  className?: string;
}

/** Same featured image on article cards and article pages — always use this component. */
export default function ArticleFeaturedImage({
  article,
  priority = false,
  className = 'w-full aspect-video object-cover block',
}: ArticleFeaturedImageProps) {
  const alt = article.featuredImageAlt || getArticleImageAlt(article.slug || '');

  return (
    <img
      src={article.featuredImage}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
}
