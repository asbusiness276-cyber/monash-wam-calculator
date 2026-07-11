import type { FaqItem } from './Seo';

interface ArticleFaqsProps {
  items: FaqItem[];
}

export default function ArticleFaqs({ items }: ArticleFaqsProps) {
  if (items.length === 0) return null;

  return (
    <section id="article-faqs" className="scroll-mt-28 mt-10">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {items.map(item => (
            <details
              key={item.question}
              className="group rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/30"
            >
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-gray-200">
                {item.question}
              </summary>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
