import { useState } from 'react';
import { Moon, Sun, Calculator, Menu, X, ChevronDown } from 'lucide-react';
import { CALCULATOR_CATEGORIES, type CalculatorCategory } from '../data/calculatorCatalog';

interface NavbarProps {
  dark: boolean;
  toggleDark: () => void;
}

const infoLinks = [
  { label: 'Articles', href: '/articles' },
  { label: 'Write For Us', href: '/write-for-us' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
];

const categoryNavLabels: Record<string, string> = {
  wam: 'WAM',
  gpa: 'GPA',
  grade: 'Grades',
  units: 'Units',
  merit: 'Merit',
};

function getCategoryNavLabel(category: CalculatorCategory): string {
  return categoryNavLabels[category.id] ?? category.title;
}

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(null);
  const [openMobileCategoryId, setOpenMobileCategoryId] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-primary-600 dark:text-primary-400 text-lg" title="Monash WAM Calculator — WAM Calculator">
          <Calculator size={22} />
          <span>MonashWAM</span>
        </a>

        {/* Desktop nav — one hover dropdown per calculator group */}
        <ul className="hidden lg:flex items-center gap-3 xl:gap-4">
          {CALCULATOR_CATEGORIES.map(category => {
            const isOpen = openCategoryId === category.id;
            return (
              <li
                key={category.id}
                className="relative"
                onMouseEnter={() => setOpenCategoryId(category.id)}
                onMouseLeave={() => setOpenCategoryId(null)}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap"
                >
                  {getCategoryNavLabel(category)}
                  <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="absolute left-0 top-full pt-2 z-50">
                    <div className="w-72 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg py-2">
                      <p className="px-3 pb-1 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                        {category.title}
                      </p>
                      <ul className="max-h-[min(70vh,22rem)] overflow-y-auto">
                        {category.links.map(link => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              className="block px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
          <li>
            <a
              href="/calculators"
              className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline whitespace-nowrap"
            >
              All tools
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

        <div className="flex items-center gap-3">
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
        </div>
      )}
    </nav>
  );
}
