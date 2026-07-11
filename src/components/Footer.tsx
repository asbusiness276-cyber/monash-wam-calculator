import { useState } from 'react';
import { Calculator, ChevronDown } from 'lucide-react';
import { ARTICLE_CATEGORIES, getArticleCategoryPath } from '../data/articleCategories';
import { CALCULATOR_CATEGORIES, CALCULATOR_COUNT } from '../data/calculatorCatalog';

import { openCookieSettings } from '../utils/cookieConsent';

export default function Footer() {
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);

  return (
    <footer className="mt-6 bg-gray-900 dark:bg-gray-950 text-gray-400 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-white font-bold text-xl mb-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-500/20 text-primary-300">
                <Calculator size={20} />
              </span>
              <span>MonashWAM Calculator</span>
            </div>
            <p className="text-sm leading-relaxed">
              <strong className="text-gray-300 font-medium">Monash WAM Calculator</strong> — free online WAM
              calculator for Monash University students. Instantly calculate your Weighted Average Mark, convert WAM to
              GPA, and plan your academic future.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-900/40 text-primary-300">
                {CALCULATOR_COUNT} Calculators
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-900/30 text-emerald-300">
                Free to Use
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-300">
                Student Focused
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
            <div onMouseLeave={() => setCalculatorsOpen(false)}>
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Calculators</h3>
              <button
                type="button"
                onClick={() => setCalculatorsOpen(open => !open)}
                aria-expanded={calculatorsOpen}
                aria-controls="footer-calculators-groups"
                className="w-full flex items-center justify-between gap-2 text-sm font-medium text-primary-300 hover:text-white transition-colors text-left"
              >
                <span>All groups ({CALCULATOR_COUNT} tools)</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 transition-transform ${calculatorsOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {calculatorsOpen && (
                <div id="footer-calculators-groups" className="mt-3 space-y-4 max-h-80 overflow-y-auto pr-1">
                  <a href="/calculators" className="block text-sm font-medium text-primary-300 hover:text-white">
                    Browse calculators hub →
                  </a>
                  {CALCULATOR_CATEGORIES.map(category => (
                    <div key={category.id}>
                      <p className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-1.5">{category.title}</p>
                      <ul className="space-y-1.5 text-sm">
                        {category.links.map(link => (
                          <li key={link.href}>
                            <a href={link.href} className="hover:text-white transition-colors">
                              {link.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div onMouseLeave={() => setArticlesOpen(false)}>
                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Articles</h3>
                <button
                  type="button"
                  onClick={() => setArticlesOpen(open => !open)}
                  aria-expanded={articlesOpen}
                  aria-controls="footer-article-categories"
                  className="w-full flex items-center justify-between gap-2 text-sm font-medium text-primary-300 hover:text-white transition-colors text-left"
                >
                  <span>Guide categories</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform ${articlesOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </button>
                {articlesOpen && (
                  <ul id="footer-article-categories" className="mt-3 space-y-2 text-sm">
                    <li>
                      <a href="/articles" className="font-medium text-primary-300 hover:text-white">
                        All student articles
                      </a>
                    </li>
                    {ARTICLE_CATEGORIES.map(category => (
                      <li key={category.id}>
                        <a href={getArticleCategoryPath(category.id)} className="hover:text-white transition-colors">
                          {category.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Company &amp; Legal</h3>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <a href="/write-for-us" className="hover:text-white transition-colors">
                      Write For Us
                    </a>
                  </li>
                  <li>
                    <a href="/about-us" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/about-author" className="hover:text-white transition-colors">
                      About the author
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us" className="hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/terms-and-conditions" className="hover:text-white transition-colors">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/disclaimer" className="hover:text-white transition-colors">
                      Disclaimer
                    </a>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={openCookieSettings}
                      className="hover:text-white transition-colors text-left"
                    >
                      Cookie settings
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between min-w-0">
          <p className="text-xs text-gray-600 min-w-0 leading-relaxed break-words md:max-w-xl">
            &copy; {new Date().getFullYear()} MonashWAMCalculator.com — Not affiliated with Monash University. For
            informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
