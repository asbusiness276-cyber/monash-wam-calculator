import { useEffect, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { getArticleSideRecommendations, ProductInfo } from '../utils/recommendationEngine';

const SHOW_DELAY_MS = 5500;

interface ArticleRecommendedProductsProps {
  slug: string;
}

interface ProductSlot {
  product: ProductInfo;
  caption: string;
}

export default function ArticleRecommendedProducts({ slug }: ArticleRecommendedProductsProps) {
  const recommendations = useMemo(() => getArticleSideRecommendations(slug), [slug]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    if (!recommendations) return;
    const timer = window.setTimeout(() => setShowProducts(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [recommendations, slug]);

  if (!recommendations || !showProducts) return null;

  const products: ProductSlot[] = [
    { product: recommendations.left, caption: recommendations.leftCaption },
    { product: recommendations.right, caption: recommendations.rightCaption },
    ...(recommendations.leftSecondary
      ? [{ product: recommendations.leftSecondary, caption: recommendations.leftSecondaryCaption }]
      : []),
    ...(recommendations.rightSecondary
      ? [{ product: recommendations.rightSecondary, caption: recommendations.rightSecondaryCaption }]
      : []),
  ];

  return (
    <section
      className="hidden md:block mt-10 animate-slideUp"
      aria-label="Recommended study resources"
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-1">
        {recommendations.subjectType}
      </p>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recommended for you</h2>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        Books and resources that match this article topic.
      </p>

      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((slot, index) => (
          <div key={`${slot.product.url}-${index}`} className="min-w-0 flex flex-col">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 min-h-[2.5rem] line-clamp-2 leading-snug">
              {slot.caption}
            </p>
            <ProductCard product={slot.product} rail />
          </div>
        ))}
      </div>
    </section>
  );
}
