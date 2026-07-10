import { useState } from 'react';
import { Moon, Sun, Calculator, Menu, X, ChevronDown } from 'lucide-react';
import { CALCULATOR_CATEGORIES } from '../data/calculatorCatalog';

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

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-bold text-primary-600 dark:text-primary-400 text-lg" title="Monash WAM Calculator — WAM Calculator">
          <Calculator size={22} />
          <span>MonashWAM</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          <li
            className="relative"
            onMouseEnter={() => setDesktopDropdownOpen(true)}
            onMouseLeave={() => setDesktopDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDesktopDropdownOpen(open => !open)}
              aria-expanded={desktopDropdownOpen}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Calculators
              <ChevronDown size={14} className={`transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {desktopDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 z-50">
                <div className="w-[min(90vw,56rem)] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg p-4">
                  <a
                    href="/calculators"
                    className="block mb-3 px-2 py-1 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Browse all calculators →
                  </a>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
                    {CALCULATOR_CATEGORIES.map(category => (
                      <div key={category.id}>
                        <p className="px-2 text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                          {category.title}
                        </p>
                        <ul className="space-y-0.5">
                          {category.links.map(link => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                className="block px-2 py-1.5 text-sm text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"
                              >
                                {link.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 space-y-2 max-h-[70vh] overflow-y-auto">
          <button
            type="button"
            className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 py-2"
            onClick={() => setMobileDropdownOpen(open => !open)}
          >
            Calculators
            <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileDropdownOpen && (
            <div className="pl-3 border-l border-gray-200 dark:border-gray-700 space-y-4">
              <a
                href="/calculators"
                className="block text-sm font-semibold text-primary-600 dark:text-primary-400 py-1"
                onClick={() => setMenuOpen(false)}
              >
                All calculators hub
              </a>
              {CALCULATOR_CATEGORIES.map(category => (
                <div key={category.id}>
                  <p className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
                    {category.title}
                  </p>
                  <div className="space-y-1">
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
                </div>
              ))}
            </div>
          )}
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
