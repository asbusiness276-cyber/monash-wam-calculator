import { useEffect, useMemo, useState } from 'react';
import { FaqItem } from './Seo';
import ProductCard from './ProductCard';
import { ArticleSideRecommendations, getArticleSideRecommendations } from '../utils/recommendationEngine';

const SHOW_DELAY_MS = 5500;

interface ArticleFaqProductsProps {
  slug: string;
  faqs: FaqItem[];
  openFaq: number | null;
  onToggleFaq: (index: number) => void;
}

/** Desktop-only: extra product sits above the FAQ accordion (row 1). */
function DesktopUpperRail({
  recommendations,
  side,
}: {
  recommendations: ArticleSideRecommendations;
  side: 'left' | 'right';
}) {
  const product = side === 'left' ? recommendations.leftSecondary : recommendations.rightSecondary;
  const caption =
    side === 'left' ? recommendations.leftSecondaryCaption : recommendations.rightSecondaryCaption;
  if (!product) return null;

  const columnClass = side === 'left' ? 'md:col-start-1' : 'md:col-start-3';

  return (
    <aside
      className={`hidden md:block min-w-0 ${columnClass} md:row-start-1 self-end pb-2 animate-slideUp`}
      aria-label={
        side === 'left' ? 'Additional left product recommendation' : 'Additional right product recommendation'
      }
    >
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 min-h-[2.5rem] line-clamp-2 leading-snug">
        {caption}
      </p>
      <ProductCard product={product} rail />
    </aside>
  );
}

/** Desktop-only: primary product beside the FAQ accordion (row 2). */
function DesktopPrimaryRail({
  recommendations,
  side,
}: {
  recommendations: ArticleSideRecommendations;
  side: 'left' | 'right';
}) {
  const product = side === 'left' ? recommendations.left : recommendations.right;
  const caption = side === 'left' ? recommendations.leftCaption : recommendations.rightCaption;
  const columnClass = side === 'left' ? 'md:col-start-1' : 'md:col-start-3';

  return (
    <aside
      className={`hidden md:block min-w-0 ${columnClass} md:row-start-2 md:sticky md:top-24 self-start animate-slideUp`}
      aria-label={side === 'left' ? 'Left product recommendation' : 'Right product recommendation'}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2 min-h-[2rem] leading-snug">
        {recommendations.subjectType}
      </p>
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 min-h-[2.5rem] line-clamp-2 leading-snug">
        {caption}
      </p>
      <ProductCard product={product} rail />
    </aside>
  );
}

export default function ArticleFaqProducts({ slug, faqs, openFaq, onToggleFaq }: ArticleFaqProductsProps) {
  const recommendations = useMemo(() => getArticleSideRecommendations(slug), [slug]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    if (!recommendations) return;
    const timer = window.setTimeout(() => setShowProducts(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [recommendations, slug]);

  const desktopGrid =
    showProducts && recommendations
      ? 'grid-cols-1 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_minmax(0,12rem)] md:grid-rows-[auto_auto] lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_minmax(0,14rem)] xl:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)_minmax(0,16.5rem)]'
      : 'grid-cols-1 max-w-4xl mx-auto';

  return (
    <section className="mt-6 w-full" aria-labelledby="article-faq-heading">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`grid items-start gap-3 sm:gap-4 md:gap-x-5 md:gap-y-2 lg:gap-x-6 transition-[grid-template-columns] duration-300 ${desktopGrid}`}
        >
          {showProducts && recommendations && (
            <>
              <DesktopUpperRail recommendations={recommendations} side="left" />
              <DesktopUpperRail recommendations={recommendations} side="right" />
              <DesktopPrimaryRail recommendations={recommendations} side="left" />
              <DesktopPrimaryRail recommendations={recommendations} side="right" />
            </>
          )}

          <h2
            id="article-faq-heading"
            className="min-w-0 w-full text-2xl font-bold text-gray-900 dark:text-white md:col-start-2 md:row-start-1 md:min-h-[2rem]"
          >
            Frequently Asked Questions
          </h2>

          {showProducts && recommendations && (
            <div
              className="grid md:hidden mt-4 grid-cols-1 min-[400px]:grid-cols-2 gap-2.5 sm:gap-3 animate-slideUp"
              role="group"
              aria-label="Recommended study resources"
            >
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 mb-1.5 leading-snug min-h-[2rem] line-clamp-2">
                  {recommendations.leftCaption}
                </p>
                <ProductCard product={recommendations.left} rail />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 mb-1.5 leading-snug min-h-[2rem] line-clamp-2">
                  {recommendations.rightCaption}
                </p>
                <ProductCard product={recommendations.right} rail />
              </div>
            </div>
          )}

          <div className="min-w-0 w-full mt-4 md:mt-0 md:col-start-2 md:row-start-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-5 shadow-sm">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => onToggleFaq(index)}
                    className="w-full text-left p-3.5 sm:p-4 text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug"
                  >
                    {faq.question}
                  </button>
                  {openFaq === index && (
                    <p className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
