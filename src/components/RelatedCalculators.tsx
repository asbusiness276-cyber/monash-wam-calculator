import { Calculator, ArrowRight } from 'lucide-react';

const calculators = [
  {
    title: 'WAM to GPA Calculator',
    desc: 'Convert your Monash WAM to GPA scale used by Australian and international universities.',
    href: '/wam-to-gpa-calculator',
    color: 'from-blue-500 to-blue-700',
  },
  {
    title: 'GPA to WAM Calculator',
    desc: 'Reverse convert your GPA back to an approximate Monash WAM percentage.',
    href: '/gpa-to-wam-calculator',
    color: 'from-teal-500 to-teal-700',
  },
  {
    title: 'Final Grade Calculator',
    desc: 'Calculate what final exam mark you need to achieve your target grade.',
    href: '/final-grade-calculator',
    color: 'from-sky-500 to-sky-700',
  },
];

export default function RelatedCalculators() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Related Student Calculators</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {calculators.map(calc => (
          <a
            key={calc.href}
            href={calc.href}
            className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${calc.color} flex items-center justify-center`}>
              <Calculator size={18} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1 text-sm">{calc.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{calc.desc}</p>
            </div>
            <div className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-xs font-medium mt-auto group-hover:gap-2 transition-all">
              Open Calculator <ArrowRight size={12} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
