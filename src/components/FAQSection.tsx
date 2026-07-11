import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from './Seo';

interface FAQSectionProps {
  items: FaqItem[];
  title?: string;
  variant?: 'default' | 'home';
}

export default function FAQSection({
  items,
  title = 'Frequently Asked Questions',
  variant = 'default',
}: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);
  const isHome = variant === 'home';

  return (
    <section id="faq" className={isHome ? 'home-section scroll-mt-20' : 'scroll-mt-20 max-w-3xl mx-auto px-4 py-8'}>
      <div className={isHome ? 'home-container max-w-3xl' : undefined}>
        <header className={isHome ? 'mb-10 text-center md:mb-12' : 'mb-6 text-center'}>
          {isHome && <p className="home-eyebrow mb-3">Support</p>}
          <h2 className={isHome ? 'home-section-title text-gray-900 dark:text-white' : 'text-2xl font-bold text-gray-900 dark:text-white'}>
            {title}
          </h2>
        </header>
        <div className="space-y-3">
          {items.map((faq, i) => (
            <div
              key={faq.question}
              className={
                isHome
                  ? 'premium-card overflow-hidden rounded-2xl border border-gray-200/80 bg-white dark:border-gray-700/80 dark:bg-gray-800/90'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden'
              }
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-gray-50/80 dark:hover:bg-gray-800/80"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {open === i && (
                <div className="border-t border-gray-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-gray-600 dark:border-gray-700 dark:text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
