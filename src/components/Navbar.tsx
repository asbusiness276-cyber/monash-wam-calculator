import { useState } from 'react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import SiteLogo from './SiteLogo';
import { ARTICLE_CATEGORIES, getArticleCategoryPath } from '../data/articleCategories';
import { CALCULATOR_CATEGORIES, type CalculatorCategory } from '../data/calculatorCatalog';

interface NavbarProps {
  dark: boolean;
  toggleDark: () => void;
}

const infoLinks = [
  { label: 'Write For Us', href: '/write-for-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
];

const categoryNavLabels: Record<string, string> = {
  wam: 'WAM',
  gpa: 'GPA',
  averages: 'Averages',
  units: 'Units',
  merit: 'Merit',
  'student-life': 'Life & Cost',
};

function getCategoryNavLabel(category: CalculatorCategory): string {
  return categoryNavLabels[category.id] ?? category.title;
}

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openMobileCategoryId, setOpenMobileCategoryId] = useState<string | null>(null);
  const [articlesDropdownOpen, setArticlesDropdownOpen] = useState(false);
  const [mobileArticlesOpen, setMobileArticlesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-bold text-primary-600 dark:text-primary-400 text-lg" title="Monash WAM Calculator — WAM Calculator">
          <SiteLogo size="md" />
          <span>MonashWAM</span>
        </a>

        {/* Desktop nav — one hover dropdown per calculator group */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-5">
          <li
            className="relative"
            onMouseEnter={() => setOpenCategoryId('calculators-menu')}
            onMouseLeave={() => setOpenCategoryId(null)}
          >
            <button
              type="button"
              aria-expanded={openCategoryId === 'calculators-menu'}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap"
            >
              Calculators
              <ChevronDown size={14} className={`transition-transform ${openCategoryId === 'calculators-menu' ? 'rotate-180' : ''}`} />
            </button>
            {openCategoryId === 'calculators-menu' && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="w-72 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl py-2">
                  <a href="/calculators" className="block px-4 py-2.5 text-sm font-bold text-primary-600 dark:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 mb-1">
                    All Calculators Hub &rarr;
                  </a>
                  {CALCULATOR_CATEGORIES.map(category => (
                    <div key={category.id} className="relative group">
                      <div className="w-full flex items-center justify-between px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                        {category.title}
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      {/* Flyout Sub-Menu */}
                      <div className="absolute left-full top-0 pl-1 hidden group-hover:block">
                        <div className="w-80 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl py-2">
                          <p className="px-4 pt-1 pb-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 mb-1">
                            {category.title}
                          </p>
                          {category.links.slice(0, 6).map(link => (
                            <a
                              key={link.href}
                              href={link.href}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {link.title}
                            </a>
                          ))}
                          {category.links.length > 6 && (
                            <a href="/calculators" className="block px-4 py-2 text-xs font-medium italic text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 mt-1 border-t border-gray-100 dark:border-gray-800">
                              + {category.links.length - 6} more tools...
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setArticlesDropdownOpen(true)}
            onMouseLeave={() => setArticlesDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={articlesDropdownOpen}
              aria-haspopup="true"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap"
            >
              Articles
              <ChevronDown size={14} className={`transition-transform ${articlesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {articlesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="w-80 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg py-2">
                  <a
                    href="/articles"
                    className="block px-3 py-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    All articles
                  </a>
                  <p className="px-3 pt-2 pb-1 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Browse by category
                  </p>
                  <ul>
                    {ARTICLE_CATEGORIES.map(category => (
                      <li key={category.id}>
                        <a
                          href={getArticleCategoryPath(category.id)}
                          className="block px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          {category.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
          {infoLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tablet: hub link only */}
        <ul className="hidden md:flex lg:hidden items-center gap-6">
          <li>
            <a
              href="/calculators"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Calculators
            </a>
          </li>
          <li>
            <a
              href="/articles"
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Articles
            </a>
          </li>
          {infoLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://topschoolsrankings.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-3 py-1.5 text-[10px] font-extrabold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-full shadow-sm hover:shadow transition-all duration-200 uppercase tracking-widest border border-blue-400/30"
            title="Discover Top Schools Rankings"
          >
            Top Schools
          </a>
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto">
          <a
            href="/calculators"
            className="block text-sm font-semibold text-primary-600 dark:text-primary-400 py-2"
            onClick={() => setMenuOpen(false)}
          >
            All calculators hub
          </a>
          {CALCULATOR_CATEGORIES.map(category => {
            const isOpen = openMobileCategoryId === category.id;
            return (
              <div key={category.id} className="border-t border-gray-100 dark:border-gray-800 first:border-t-0">
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 py-2"
                  onClick={() => setOpenMobileCategoryId(id => (id === category.id ? null : category.id))}
                >
                  {category.title}
                  <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="pl-3 pb-2 border-l border-gray-200 dark:border-gray-700 space-y-1">
                    {category.links.map(link => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div className="border-t border-gray-100 dark:border-gray-800">
            <button
              type="button"
              className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 py-2"
              onClick={() => setMobileArticlesOpen(open => !open)}
            >
              Articles
              <ChevronDown size={16} className={`transition-transform ${mobileArticlesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileArticlesOpen && (
              <div className="pl-3 pb-2 border-l border-gray-200 dark:border-gray-700 space-y-1">
                <a
                  href="/articles"
                  className="block text-sm font-semibold text-primary-600 dark:text-primary-400 py-1.5"
                  onClick={() => setMenuOpen(false)}
                >
                  All articles
                </a>
                {ARTICLE_CATEGORIES.map(category => (
                  <a
                    key={category.id}
                    href={getArticleCategoryPath(category.id)}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-1.5 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {category.title}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">
            {infoLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 pb-1 mt-2 border-t border-gray-200 dark:border-gray-700">
             <a
              href="https://topschoolsrankings.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md uppercase tracking-widest border border-blue-400/30"
             >
               Explore Top Schools Rankings
             </a>
          </div>
        </div>
      )}
    </nav>
  );
}
