import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: 'What is a good WAM at Monash University?',
    a: 'A WAM above 70 is generally considered strong at Monash University and falls within the Distinction range. A WAM above 80 is considered High Distinction level and is typically required for honours programs and competitive scholarships.',
  },
  {
    q: 'Are failed units included in WAM?',
    a: 'In most cases, failed subjects are included in your Monash WAM calculation because WAM reflects your overall academic performance across all attempted units. This is different from GPA in some other systems where fails may be excluded.',
  },
  {
    q: 'What is the difference between WAM and GPA?',
    a: 'WAM uses actual percentage marks, while GPA converts grades into grade points on a scale (usually 0-4 or 0-7). WAM provides more precise performance measurement because it uses raw marks, whereas GPA groups marks into broader bands.',
  },
  {
    q: 'Can I calculate WAM for future semesters?',
    a: 'Yes. You can enter projected marks to estimate your future WAM and understand how upcoming subjects may affect your academic standing. Simply enter estimated marks alongside your completed subjects.',
  },
  {
    q: 'How is Monash WAM calculated?',
    a: 'Monash WAM is calculated using the formula: WAM = Sum(Mark × Credit Points) ÷ Sum(Credit Points). Each subject mark is multiplied by its credit points. All weighted marks are added together, then divided by the total credit points attempted.',
  },
  {
    q: 'What is WAM at Monash University?',
    a: 'WAM stands for Weighted Average Mark. It is a numerical average used by Monash University to measure a student\'s overall academic performance across all completed units. It uses actual percentage marks and weighs them by credit points, unlike GPA which converts marks to grade points.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
          >
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{faq.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gray-400 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
