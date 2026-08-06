import { getCalculatorPageGuide, type GuideSection } from '../data/calculatorPageGuides';
import ContextualAmazonAffiliateCard from './ContextualAmazonAffiliateCard';

interface CalculatorPageGuideProps {
  path: string;
  className?: string;
}

function GuideBlock({ section }: { section: GuideSection }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm space-y-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{section.heading}</h2>
      {section.paragraphs.map(paragraph => (
        <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {paragraph}
        </p>
      ))}
      {section.steps && section.steps.length > 0 && (
        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {section.steps.map(item => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ol>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
          {section.bullets.map(item => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      )}
      {section.callouts && section.callouts.length > 0 && (
        <div className="space-y-3">
          {section.callouts.map(callout => {
            const styles =
              callout.variant === 'warning'
                ? 'border-amber-200 bg-amber-50/80 text-amber-950 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-100'
                : callout.variant === 'tip'
                  ? 'border-emerald-200 bg-emerald-50/80 text-emerald-950 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-100'
                  : 'border-primary-200 bg-primary-50/70 text-primary-950 dark:border-primary-900/50 dark:bg-primary-950/30 dark:text-primary-100';
            return (
              <aside
                key={`${callout.variant}-${callout.title ?? callout.text.slice(0, 32)}`}
                className={`rounded-xl border px-4 py-3 text-sm leading-relaxed ${styles}`}
              >
                {callout.title && <p className="font-semibold mb-1">{callout.title}</p>}
                <p>{callout.text}</p>
              </aside>
            );
          })}
        </div>
      )}
      {section.examples && section.examples.length > 0 && (
        <div className="space-y-5">
          {section.examples.map(example => (
            <div
              key={example.title}
              className="rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/60 dark:bg-gray-900/30 p-4 space-y-3"
            >
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{example.title}</h3>
              {example.paragraphs.map(paragraph => (
                <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {paragraph}
                </p>
              ))}
              {example.table && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="bg-white dark:bg-gray-800">
                        {example.table.headers.map(header => (
                          <th
                            key={header}
                            className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                      {example.table.rows.map(row => (
                        <tr key={row.join('-')}>
                          {row.map((cell, i) => (
                            <td key={`${row[0]}-${i}`} className={`px-3 py-2 ${i === 0 ? 'font-medium' : ''}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {section.table && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700">
                {section.table.headers.map((header, i) => (
                  <th
                    key={header}
                    className={`px-3 py-2 font-semibold text-gray-600 dark:text-gray-300 ${
                      i === 0 ? 'rounded-tl-lg' : ''
                    } ${i === section.table!.headers.length - 1 ? 'rounded-tr-lg' : ''}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
              {section.table.rows.map(row => (
                <tr key={row.join('-')} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  {row.map((cell, i) => (
                    <td key={`${row[0]}-${i}`} className={`px-3 py-2 ${i === 0 ? 'font-medium' : ''}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default function CalculatorPageGuide({ path, className = '' }: CalculatorPageGuideProps) {
  const guide = getCalculatorPageGuide(path);
  if (!guide || guide.sections.length === 0) return null;

  return (
    <section className={`max-w-3xl mx-auto px-4 py-6 space-y-5 ${className}`} aria-label="Calculator guide">
      <ContextualAmazonAffiliateCard path={path} variant="inline" className="my-6" />
      {guide.sections.map(section => (
        <GuideBlock key={section.heading} section={section} />
      ))}
    </section>
  );
}
