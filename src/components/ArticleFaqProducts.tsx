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
    <section className="mt-10" aria-labelledby="article-faq-heading">
      <h2 id="article-faq-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
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
    </section>
  );
}
