import type { ArticleData } from '../data/articles';

interface ArticleFeaturedImageProps {
  article: Pick<ArticleData, 'featuredImage' | 'featuredImageAlt' | 'title'>;
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
  return (
    <img
      src={article.featuredImage}
      alt={article.featuredImageAlt || article.title}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  );
}
