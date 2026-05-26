import { useMemo } from 'react';
import { FaqItem } from './Seo';
import ProductCard from './ProductCard';
import { getArticleSideRecommendations } from '../utils/recommendationEngine';

interface ArticleFaqProductsProps {
  slug: string;
  faqs: FaqItem[];
  openFaq: number | null;
  onToggleFaq: (index: number) => void;
}

export default function ArticleFaqProducts({ slug, faqs, openFaq, onToggleFaq }: ArticleFaqProductsProps) {
  const recommendations = useMemo(() => getArticleSideRecommendations(slug), [slug]);

  return (
    <section className="mt-8" aria-labelledby="article-faq-heading">
      <h2 id="article-faq-heading" className="text-2xl font-bold text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      {recommendations && (
        <div
          className="flex md:hidden flex-col gap-6 mt-4 animate-slideUp"
          role="group"
          aria-label="Recommended study resources"
        >
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 leading-snug">
              {recommendations.leftCaption}
            </p>
            <ProductCard product={recommendations.left} rail />
          </div>
          <div className="flex min-w-0 flex-col gap-2">
            <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-400 leading-snug">
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
