import { useEffect, useMemo, useState } from 'react';
import { FaqItem } from './Seo';
import ProductCard from './ProductCard';
import { getArticleSideRecommendations } from '../utils/recommendationEngine';

const SHOW_DELAY_MS = 5500;

interface ArticleFaqProductsProps {
  slug: string;
  faqs: FaqItem[];
  openFaq: number | null;
  onToggleFaq: (index: number) => void;
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
    <section className="mt-10 -mx-2 sm:mx-0">
      <div className={`mx-auto transition-all duration-300 ${showProducts ? 'max-w-6xl' : 'max-w-4xl'}`}>
        <div
          className={`grid gap-4 items-start ${
            showProducts
              ? 'lg:grid-cols-[minmax(11rem,15rem)_minmax(0,1fr)_minmax(11rem,15rem)] xl:grid-cols-[minmax(13rem,17rem)_minmax(0,1fr)_minmax(13rem,17rem)]'
              : 'grid-cols-1'
          }`}
        >
          {showProducts && recommendations && (
            <aside
              className="hidden lg:block sticky top-24 animate-[slideUp_220ms_ease-out]"
              aria-label="Recommended study resource — fundamentals"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2">
                {recommendations.subjectType}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-snug">{recommendations.leftCaption}</p>
              <ProductCard product={recommendations.left} compact />
            </aside>
          )}

          <div className="min-w-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>

            {showProducts && recommendations && (
              <div className="lg:hidden mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-[slideUp_220ms_ease-out]">
                <div>
                  <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                    {recommendations.leftCaption}
                  </p>
                  <ProductCard product={recommendations.left} compact />
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 mb-1.5">
                    {recommendations.rightCaption}
                  </p>
                  <ProductCard product={recommendations.right} compact />
                </div>
              </div>
            )}

            <div className="mt-4 space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => onToggleFaq(index)}
                    className="w-full text-left p-4 font-semibold text-gray-900 dark:text-gray-100"
                  >
                    {faq.question}
                  </button>
                  {openFaq === index && (
                    <p className="px-4 pb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {showProducts && recommendations && (
            <aside
              className="hidden lg:block sticky top-24 animate-[slideUp_220ms_ease-out]"
              aria-label="Recommended study resource — advanced"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2">
                {recommendations.subjectType}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-snug">{recommendations.rightCaption}</p>
              <ProductCard product={recommendations.right} compact />
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
