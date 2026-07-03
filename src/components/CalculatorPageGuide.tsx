import { getCalculatorPageGuide, type GuideSection } from '../data/calculatorPageGuides';

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
      {section.bullets && section.bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
          {section.bullets.map(item => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
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
      {guide.sections.map(section => (
        <GuideBlock key={section.heading} section={section} />
      ))}
    </section>
  );
}
