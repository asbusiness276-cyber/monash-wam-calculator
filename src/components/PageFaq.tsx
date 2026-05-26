import { FaqItem } from './Seo';

interface PageFaqProps {
  title?: string;
  items: FaqItem[];
}

export default function PageFaq({ title = 'Frequently Asked Questions', items }: PageFaqProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 pt-2 pb-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
        <div className="space-y-3">
          {items.map(item => (
            <details
              key={item.question}
              className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 p-4"
            >
              <summary className="cursor-pointer font-semibold text-gray-800 dark:text-gray-200">{item.question}</summary>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
