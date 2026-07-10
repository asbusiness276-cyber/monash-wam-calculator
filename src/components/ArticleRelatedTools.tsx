import RelatedCalculators from './RelatedCalculators';
import { FaqItem } from './Seo';

interface ArticleRelatedToolsProps {
  faqs: FaqItem[];
}

/** Article footer: related calculators + FAQs (no affiliate products). */
export default function ArticleRelatedTools({ faqs }: ArticleRelatedToolsProps) {
  return (
    <>
      <RelatedCalculators
        className="mt-8 !max-w-none !mx-0 !px-0"
        title="Try These Calculators"
        description="Model your WAM, GPA, and targets with the same tools referenced in this guide."
        hrefs={[
          '/',
          '/wam-to-gpa-calculator',
          '/monash-gpa-calculator',
          '/wam-target-calculator',
          '/final-grade-calculator',
          '/supp-repeat-wam-calculator',
        ]}
        maxItems={6}
      />
      <section className="pt-2 pb-2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(item => (
              <details
                key={item.question}
                className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/30 p-4"
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
    </>
  );
}
