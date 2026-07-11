import { useMemo, useState } from 'react';
import { ArrowRight, Calculator, GraduationCap, Search as SearchIcon, Target } from 'lucide-react';
import { ALL_CALCULATOR_LINKS, CALCULATOR_CATEGORIES } from '../../data/calculatorCatalog';
import { HOME_IMAGES } from '../../data/homeImages';
import SearchField from '../SearchField';
import CardIcon from './ui/CardIcon';
import HomeImage from './ui/HomeImage';
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
  const quickSearches = [
    { label: 'WAM target', icon: Target },
    { label: 'GPA converter', icon: GraduationCap },
    { label: 'Final grade', icon: Calculator },
  ] as const;

  return (
    <PremiumCard hover padding="md" className="home-animate-in home-search-card">
      <div className="home-search-split">
        <div className="home-search-form">
          <div className="mb-4 flex items-center gap-3">
            <CardIcon icon={SearchIcon} className="h-10 w-10" />
            <div>
              <p className="home-eyebrow text-[10px]">Find a tool fast</p>
              <h2 className="card-title-lg">Search calculators</h2>
            </div>
          </div>
          <p className="card-body">
            Jump to WAM target, GPA conversion, honours, or exam tools by name or keyword.
          </p>

          <div className="mt-5">
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

          <div className="home-search-chips" aria-label="Popular calculator searches">
            {quickSearches.map(item => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setQuery(item.label)}
                  className="home-search-chip"
                >
                  <Icon size={14} aria-hidden />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="home-search-visual">
          <HomeImage
            image={HOME_IMAGES.searchWorkspace}
            alt="Top-down view of a student desk with laptop, notebooks, calculator, and study supplies"
            wrapperClassName="home-search-image-wrap"
            className="home-search-image"
          />
        </div>
      </div>

      {trimmedQuery && (
        <div
          className="card-nested mt-6 max-h-72 overflow-y-auto p-0"
          role="listbox"
          aria-label="Calculator search results"
        >
          {results.length === 0 ? (
            <p className="card-body p-5">No calculators matched your search. Try &ldquo;GPA&rdquo;, &ldquo;target&rdquo;, or &ldquo;honours&rdquo;.</p>
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
                      <p className="card-title-sm transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {link.title}
                      </p>
                      <p className="card-caption mt-1">{link.description}</p>
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
