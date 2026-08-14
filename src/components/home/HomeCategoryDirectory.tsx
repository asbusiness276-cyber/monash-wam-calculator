import { CALCULATOR_CATEGORIES } from '../../data/calculatorCatalog';
import { ArrowRight, Calculator } from 'lucide-react';

export default function HomeCategoryDirectory() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Explore All 100+ Calculators
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From WAM & GPA planning to daily student life and finance, find the exact tool you need below.
          </p>
        </div>

        <div className="space-y-16">
          {CALCULATOR_CATEGORIES.map((category) => (
            <div key={category.id} className="scroll-mt-24" id={category.id}>
              <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                  <Calculator className="text-primary-500 h-6 w-6" />
                  {category.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative flex flex-col items-start justify-between p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-primary-500/50 dark:hover:border-primary-400/50 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-200 ease-in-out hover:-translate-y-0.5"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-1.5 line-clamp-2">
                        {link.title}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                      Open Tool <ArrowRight size={14} className="ml-1" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
