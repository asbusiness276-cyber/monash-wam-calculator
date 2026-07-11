import { useMemo, useState } from 'react';
import { ArrowRight, Search as SearchIcon } from 'lucide-react';
import { ALL_CALCULATOR_LINKS, CALCULATOR_CATEGORIES } from '../../data/calculatorCatalog';
import SearchField from '../SearchField';
import PremiumCard from './ui/PremiumCard';

function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase();
}

export default function HomeCalculatorSearch() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const normalized = normalizeSearchText(query);
    if (!normalized) {
      return [];
    }

    return ALL_CALCULATOR_LINKS.filter(link => {
      const category = CALCULATOR_CATEGORIES.find(group => group.links.some(item => item.href === link.href));
      const haystack = [link.title, link.description, link.href, category?.title ?? '']
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  const trimmedQuery = query.trim();

  return (
    <PremiumCard
      hover
      className="home-animate-in rounded-3xl border border-gray-200/80 bg-white/95 p-6 md:p-8 dark:border-gray-700/80 dark:bg-gray-800/95"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-950/50 dark:text-primary-300">
            <SearchIcon size={14} aria-hidden />
            Quick find
          </div>
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Search calculators
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Jump to WAM target, GPA conversion, honours, or exam tools by name or keyword.
          </p>
        </div>

        <div className="w-full md:max-w-xl md:flex-1">
          <SearchField
            id="home-calculator-search"
            label="Search calculators"
            placeholder="e.g. WAM target, GPA, honours, failed unit…"
            value={query}
            onChange={setQuery}
            resultCount={trimmedQuery ? results.length : undefined}
            variant="premium"
          />
        </div>
      </div>

      {trimmedQuery && (
        <div
          className="mt-6 max-h-72 overflow-y-auto rounded-2xl border border-gray-100 bg-gray-50/50 dark:border-gray-700 dark:bg-gray-900/30"
          role="listbox"
          aria-label="Calculator search results"
        >
          {results.length === 0 ? (
            <p className="p-5 text-sm text-gray-500 dark:text-gray-400">
              No calculators matched your search. Try &ldquo;GPA&rdquo;, &ldquo;target&rdquo;, or &ldquo;honours&rdquo;.
            </p>
          ) : (
            <ul className="divide-y divide-gray-100 dark:divide-gray-700">
              {results.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-start justify-between gap-4 p-4 transition-colors hover:bg-white dark:hover:bg-gray-800/80"
                    role="option"
                  >
                    <div className="min-w-0 text-left">
                      <p className="text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                        {link.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="mt-0.5 shrink-0 text-primary-500 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </PremiumCard>
  );
}
