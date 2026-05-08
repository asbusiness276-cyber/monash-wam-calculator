import { Calculator } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Calculator size={20} />
              <span>MonashWAM Calculator</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Free online WAM calculator for Monash University students. Instantly calculate your Weighted Average Mark, convert WAM to GPA, and plan your academic future.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Monash WAM Calculator</a></li>
              <li><a href="/wam-to-gpa-calculator" className="hover:text-white transition-colors">WAM to GPA Calculator</a></li>
              <li><a href="/gpa-to-wam-calculator" className="hover:text-white transition-colors">GPA to WAM Calculator</a></li>
              <li><a href="/final-grade-calculator" className="hover:text-white transition-colors">Final Grade Calculator</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</a></li>
              <li><a href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 space-y-2">
          <p className="text-xs text-gray-500">
            This website may contain affiliate links. We may earn a commission at no additional cost to you if you purchase through these links.
          </p>
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} MonashWAMCalculator.com — Not affiliated with Monash University. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
