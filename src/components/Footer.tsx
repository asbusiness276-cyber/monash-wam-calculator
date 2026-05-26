import { Calculator } from 'lucide-react';

export default function Footer() {
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
              Free online WAM calculator for Monash University students. Instantly calculate your Weighted Average Mark, convert WAM to GPA, and plan your academic future.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-900/40 text-primary-300">Free to Use</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-900/30 text-emerald-300">Instant Results</span>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-900/30 text-blue-300">Student Focused</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 min-w-0">
            <div className="pl-0 sm:pl-4 lg:pl-8 min-w-0">
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Calculators</h3>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Monash WAM Calculator</a></li>
                <li><a href="/wam-to-gpa-calculator" className="hover:text-white transition-colors">WAM to GPA Calculator</a></li>
                <li><a href="/gpa-to-wam-calculator" className="hover:text-white transition-colors">GPA to WAM Calculator</a></li>
                <li><a href="/final-grade-calculator" className="hover:text-white transition-colors">Final Grade Calculator</a></li>
              </ul>
            </div>
            <div className="pl-0 sm:pl-4 lg:pl-8 min-w-0">
              <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Company &amp; Legal</h3>
              <ul className="space-y-2.5 text-sm">
                <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/contact-us" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
                <li><a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-5 mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between min-w-0">
          <p className="text-xs text-gray-500 min-w-0 leading-relaxed">
            This website may contain affiliate links. We may earn a commission at no additional cost to you if you purchase through these links.
          </p>
          <p className="text-xs text-gray-600 min-w-0 leading-relaxed break-words md:max-w-sm lg:max-w-md md:text-right">
            &copy; {new Date().getFullYear()} MonashWAMCalculator.com — Not affiliated with Monash University. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
