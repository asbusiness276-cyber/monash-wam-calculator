import { useEffect, useMemo, useState } from 'react';
import { FaqItem } from './Seo';
import ProductCard from './ProductCard';
import {
  ArticleSideRecommendations,
  getArticleSideRecommendations,
  ProductInfo,
} from '../utils/recommendationEngine';

const SHOW_DELAY_MS = 5500;

interface ArticleFaqProductsProps {
  slug: string;
  faqs: FaqItem[];
  openFaq: number | null;
  onToggleFaq: (index: number) => void;
}

interface RailSlot {
  product: ProductInfo;
  caption: string;
}

function SideRail({
  recommendations,
  side,
}: {
  recommendations: ArticleSideRecommendations;
  side: 'left' | 'right';
}) {
  const columnClass = side === 'left' ? 'md:col-start-1' : 'md:col-start-3';

  const slots: RailSlot[] =
    side === 'left'
      ? [
          { product: recommendations.left, caption: recommendations.leftCaption },
          ...(recommendations.leftSecondary
            ? [{ product: recommendations.leftSecondary, caption: recommendations.leftSecondaryCaption }]
            : []),
        ]
      : [
          { product: recommendations.right, caption: recommendations.rightCaption },
          ...(recommendations.rightSecondary
            ? [{ product: recommendations.rightSecondary, caption: recommendations.rightSecondaryCaption }]
            : []),
        ];

  return (
    <aside
      className={`hidden md:flex md:flex-col min-w-0 md:sticky md:top-24 self-start md:row-start-1 animate-slideUp ${columnClass}`}
      aria-label={side === 'left' ? 'Left product recommendations' : 'Right product recommendations'}
    >
      <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2 min-h-[2rem] leading-snug">
        {recommendations.subjectType}
      </p>

      <div className="flex flex-col gap-4">
        {slots.map((slot, index) => (
          <div key={`${side}-${slot.product.url}-${index}`} className="flex flex-col">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 min-h-[2.5rem] line-clamp-2 leading-snug">
              {slot.caption}
            </p>
            <ProductCard product={slot.product} rail />
          </div>
        ))}
      </div>
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

  return (
    <section className="mt-6 w-full" aria-labelledby="article-faq-heading">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`grid items-start gap-3 sm:gap-4 md:gap-5 lg:gap-6 transition-[grid-template-columns] duration-300 ${
            showProducts && recommendations
              ? 'grid-cols-1 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_minmax(0,12rem)] lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)_minmax(0,14rem)] xl:grid-cols-[minmax(0,16.5rem)_minmax(0,1fr)_minmax(0,16.5rem)]'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {showProducts && recommendations && (
            <SideRail recommendations={recommendations} side="left" />
          )}

          <div className="min-w-0 w-full md:col-start-2">
            <h2
              id="article-faq-heading"
              className="text-2xl font-bold text-gray-900 dark:text-white md:min-h-[2rem]"
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

            <div className="mt-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-5 shadow-sm">
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

          {showProducts && recommendations && (
            <SideRail recommendations={recommendations} side="right" />
          )}
        </div>
      </div>
    </section>
  );
}
