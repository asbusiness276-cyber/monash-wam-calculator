import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from './Seo';

interface FAQSectionProps {
  items: FaqItem[];
  title?: string;
}

export default function FAQSection({ items, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{title}</h2>
      <div className="space-y-3">
        {items.map((faq, i) => (
          <div
            key={faq.question}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              type="button"
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{faq.question}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gray-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
