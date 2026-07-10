import { useMemo, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ALL_CALCULATOR_LINKS, CALCULATOR_CATEGORIES } from '../data/calculatorCatalog';
import SearchField from './SearchField';

function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase();
}

export default function CalculatorSearch() {
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
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 md:p-6 shadow-lg">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Search calculators</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        Find WAM, GPA, exam, and merit tools by name or keyword.
      </p>
      <SearchField
        id="home-calculator-search"
        label="Search calculators"
        placeholder="e.g. WAM target, GPA, honours, failed unit…"
        value={query}
        onChange={setQuery}
        resultCount={trimmedQuery ? results.length : undefined}
      />

      {trimmedQuery && (
        <div className="mt-4 max-h-72 overflow-y-auto rounded-xl border border-gray-100 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700">
          {results.length === 0 ? (
            <p className="p-4 text-sm text-gray-500 dark:text-gray-400">No calculators matched your search.</p>
          ) : (
            results.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-start justify-between gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-900/40 transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {link.title}
                  </p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{link.description}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 mt-0.5 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />
              </a>
            ))
          )}
        </div>
      )}
    </div>
  );
}
