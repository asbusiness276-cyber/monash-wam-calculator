import { useState } from 'react';
import { Calculator, ChevronDown } from 'lucide-react';
import { ALL_CALCULATOR_LINKS, CALCULATOR_COUNT } from '../data/calculatorCatalog';

export default function Footer() {
  const [calculatorsOpen, setCalculatorsOpen] = useState(false);

  return (
    <footer className="mt-6 bg-gray-900 dark:bg-gray-950 text-gray-400 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 min-w-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
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
                Free to Use
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-900/30 text-emerald-300">
                Instant Results
              </span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-300">
                Student Focused
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 min-w-0">
            <div className="pl-0 sm:pl-4 lg:pl-8 min-w-0">
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Calculators</h3>
              <button
                type="button"
                onClick={() => setCalculatorsOpen(open => !open)}
                aria-expanded={calculatorsOpen}
                aria-controls="footer-calculators-list"
                className="w-full flex items-center justify-between gap-2 text-sm font-medium text-primary-300 hover:text-white transition-colors text-left"
              >
                <span>All Calculators ({CALCULATOR_COUNT} tools)</span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 transition-transform ${calculatorsOpen ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              {calculatorsOpen && (
                <ul
                  id="footer-calculators-list"
                  className="mt-3 space-y-2.5 text-sm max-h-72 overflow-y-auto pr-1"
                >
                  <li>
                    <a href="/calculators" className="hover:text-white transition-colors font-medium text-primary-300">
                      Browse calculators hub
                    </a>
                  </li>
                  {ALL_CALCULATOR_LINKS.map(link => (
                    <li key={link.href}>
                      <a href={link.href} className="hover:text-white transition-colors">
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="pl-0 sm:pl-4 lg:pl-8 min-w-0">
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Company &amp; Legal</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/articles" className="hover:text-white transition-colors">
                    Student Articles
                  </a>
                </li>
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
              </ul>
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
