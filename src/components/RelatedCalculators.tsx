import { ArrowRight, Calculator } from 'lucide-react';
import { absoluteUrl } from '../constants/site';
import { ALL_CALCULATOR_LINKS, type CalculatorLink } from '../data/calculatorCatalog';

export type { CalculatorLink };
export { ALL_CALCULATOR_LINKS as CALCULATOR_LINKS };

interface RelatedCalculatorsProps {
  title?: string;
  description?: string;
  /** Subset of calculator hrefs; defaults to first six tools. */
  hrefs?: string[];
  maxItems?: number;
  className?: string;
  showViewAll?: boolean;
  variant?: 'default' | 'home';
}

export default function RelatedCalculators({
  title = 'More Monash Calculators',
  description = 'Free planning tools built for Monash coursework — no signup required.',
  hrefs,
  maxItems = 6,
  className = '',
  showViewAll = true,
  variant = 'default',
}: RelatedCalculatorsProps) {
  const isHome = variant === 'home';
  const pool = ALL_CALCULATOR_LINKS;
  const items = (hrefs ? pool.filter(link => hrefs.includes(link.href)) : pool).slice(0, maxItems);

  if (items.length === 0) return null;

  return (
    <section className={isHome ? `home-section ${className}` : `max-w-6xl mx-auto px-4 py-6 ${className}`}>
      <div className={isHome ? 'home-container' : undefined}>
        <div className={isHome ? 'mx-auto mb-10 max-w-2xl text-center md:mb-12' : 'text-center mb-5'}>
          <div
            className={
              isHome
                ? 'home-eyebrow mb-3 inline-flex items-center gap-2'
                : 'inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 text-xs font-semibold uppercase tracking-wide mb-2'
            }
          >
            <Calculator size={14} aria-hidden />
            Planning tools
          </div>
          <h2 className={isHome ? 'home-section-title text-gray-900 dark:text-white' : 'text-2xl font-bold text-gray-900 dark:text-white mb-1.5'}>
            {title}
          </h2>
          <p className={isHome ? 'mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400 text-pretty' : 'text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto'}>
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(link => (
            <a
              key={link.href}
              href={absoluteUrl(link.href)}
              className={
                isHome
                  ? 'premium-card premium-card-hover group flex flex-col rounded-3xl border border-gray-200/80 bg-white p-6 dark:border-gray-700/80 dark:bg-gray-800/90'
                  : 'group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all'
              }
            >
              <p className="font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                {link.title}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{link.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400">
                Open tool
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </a>
          ))}
        </div>

        {showViewAll && (
          <p className={isHome ? 'mt-10 text-center' : 'text-center mt-6'}>
            <a
              href={absoluteUrl('/calculators')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Browse all {pool.length} Monash calculators
              <ArrowRight size={14} aria-hidden />
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
