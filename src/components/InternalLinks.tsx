interface InternalLinksProps {
  title?: string;
}

const mainLinks = [
  { href: '/', label: 'Monash WAM Calculator' },
  { href: '/wam-to-gpa-calculator', label: 'WAM to GPA Calculator' },
  { href: '/gpa-to-wam-calculator', label: 'GPA to WAM Calculator' },
  { href: '/final-grade-calculator', label: 'Final Grade Calculator' },
];

export default function InternalLinks({ title = 'Explore Related Calculators' }: InternalLinksProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 pb-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-7 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">{title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mainLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl border border-gray-200 dark:border-gray-700 px-4 py-3 bg-gray-50 dark:bg-gray-900/30 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
