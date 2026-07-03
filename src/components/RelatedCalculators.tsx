import { ArrowRight, Calculator } from 'lucide-react';
import { absoluteUrl } from '../constants/site';

export interface CalculatorLink {
  href: string;
  title: string;
  description: string;
}

export const CALCULATOR_LINKS: CalculatorLink[] = [
  {
    href: '/',
    title: 'Monash WAM Calculator',
    description: 'Official-style credit-weighted WAM with Year 1 half-weighting.',
  },
  {
    href: '/wam-to-gpa-calculator',
    title: 'WAM to GPA Calculator',
    description: 'Convert overall WAM to 4.0 and 7.0 GPA bands.',
  },
  {
    href: '/monash-gpa-calculator',
    title: 'Monash GPA Calculator',
    description: 'Unit-by-unit GPA on the official 4.0 scale.',
  },
  {
    href: '/monash-cgpa-calculator',
    title: 'Monash CGPA Calculator',
    description: 'Update cumulative GPA after each semester.',
  },
  {
    href: '/wam-target-calculator',
    title: 'WAM Target Calculator',
    description: 'Average needed on remaining units to hit your goal.',
  },
  {
    href: '/final-grade-calculator',
    title: 'Final Grade Calculator',
    description: 'Exam mark required for HD, D, C, or P.',
  },
  {
    href: '/supp-repeat-wam-calculator',
    title: 'Supp vs Repeat WAM',
    description: 'Compare supplementary pass at 50 vs repeating a unit.',
  },
  {
    href: '/monash-honours-calculator',
    title: 'Monash Honours Calculator',
    description: 'H1, H2A, H2B classification from WAM.',
  },
  {
    href: '/articles',
    title: 'Student Articles',
    description: 'WAM guides, honours, scholarships, and recovery tips.',
  },
];

interface RelatedCalculatorsProps {
  title?: string;
  description?: string;
  /** Subset of calculator hrefs; defaults to first six tools. */
  hrefs?: string[];
  maxItems?: number;
  className?: string;
}

export default function RelatedCalculators({
  title = 'More Monash Calculators',
  description = 'Free planning tools built for Monash coursework — no signup required.',
  hrefs,
  maxItems = 6,
  className = '',
}: RelatedCalculatorsProps) {
  const items = (hrefs
    ? CALCULATOR_LINKS.filter(link => hrefs.includes(link.href))
    : CALCULATOR_LINKS.filter(link => link.href !== '/articles')
  ).slice(0, maxItems);

  if (items.length === 0) return null;

  return (
    <section className={`max-w-6xl mx-auto px-4 py-6 ${className}`}>
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wide mb-2">
          <Calculator size={14} aria-hidden />
          Planning tools
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1.5">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{description}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(link => (
          <a
            key={link.href}
            href={absoluteUrl(link.href)}
            className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all"
          >
            <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {link.title}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">{link.description}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400">
              Open tool
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
