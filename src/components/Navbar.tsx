import { useState } from 'react';
import { Moon, Sun, Calculator, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  dark: boolean;
  toggleDark: () => void;
}

const calculatorLinks = [
  { label: 'WAM Calculator', href: '/' },
  { label: 'WAM to GPA', href: '/wam-to-gpa-calculator' },
  { label: 'GPA to WAM', href: '/gpa-to-wam-calculator' },
  { label: 'Final Grade', href: '/final-grade-calculator' },
];

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
        <a href="/" className="flex items-center gap-2 font-bold text-primary-600 dark:text-primary-400 text-lg">
          <Calculator size={22} />
          <span>MonashWAM</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          <li className="relative">
            <button
              type="button"
              onClick={() => setDesktopDropdownOpen(open => !open)}
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Calculators
              <ChevronDown size={14} className={`transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {desktopDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-52 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg py-2 z-50">
                {calculatorLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {link.label}
                  </a>
                ))}
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
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 space-y-2">
          <button
            type="button"
            className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 dark:text-gray-300 py-2"
            onClick={() => setMobileDropdownOpen(open => !open)}
          >
            Calculators
            <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileDropdownOpen && (
            <div className="pl-3 border-l border-gray-200 dark:border-gray-700 space-y-1">
              {calculatorLinks.map(link => (
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
