import { useState } from 'react';
import ProductPopup from './ProductPopup';
import { useDelayedProductPopup } from '../hooks/useDelayedProductPopup';

interface ConversionRow {
  wamMin: number;
  wamMax: number;
  grade: string;
  gpa4: number;
  gpa7: number;
  label: string;
}

const conversionTable: ConversionRow[] = [
  { wamMin: 80, wamMax: 100, grade: 'HD', gpa4: 4.0, gpa7: 7.0, label: 'High Distinction' },
  { wamMin: 70, wamMax: 79, grade: 'D', gpa4: 3.0, gpa7: 6.0, label: 'Distinction' },
  { wamMin: 60, wamMax: 69, grade: 'C', gpa4: 2.0, gpa7: 5.0, label: 'Credit' },
  { wamMin: 50, wamMax: 59, grade: 'P', gpa4: 1.0, gpa7: 4.0, label: 'Pass' },
  { wamMin: 0, wamMax: 49, grade: 'N', gpa4: 0.0, gpa7: 0.0, label: 'Fail' },
];

function convertWAMtoGPA(wam: number) {
  return conversionTable.find(r => wam >= r.wamMin && wam <= r.wamMax);
}

interface WamToGpaToolCoreProps {
  /** Prefill WAM for demos / embed previews */
  initialWam?: string;
  enableProductPopup?: boolean;
}

export default function WamToGpaToolCore({
  initialWam = '',
  enableProductPopup = true,
}: WamToGpaToolCoreProps) {
  const [wam, setWam] = useState(initialWam);
  const result = wam !== '' ? convertWAMtoGPA(parseFloat(wam)) : null;

  const { popupOpen, setPopupOpen, recommendation } = useDelayedProductPopup({
    enabled: enableProductPopup,
    hasResult: result !== null,
    userReady: wam !== '',
    route: '/wam-to-gpa-calculator',
    subjects: [{ code: 'FIT1045', mark: wam === '' ? null : parseFloat(wam) }],
  });

  return (
    <>
      <div data-article-tool-screenshot="wam-to-gpa" className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Enter Your Monash WAM
          </label>
          <input
            type="number"
            min="0"
            max="100"
            placeholder="e.g. 76"
            value={wam}
            onChange={e => setWam(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl font-bold mb-6"
          />

          {result && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase mb-1">
                    GPA (4.0 Scale)
                  </div>
                  <div className="text-4xl font-bold text-blue-700 dark:text-blue-300">{result.gpa4.toFixed(1)}</div>
                </div>
                <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-4 text-center">
                  <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase mb-1">
                    GPA (7.0 Scale)
                  </div>
                  <div className="text-4xl font-bold text-teal-700 dark:text-teal-300">{result.gpa7.toFixed(1)}</div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">Grade: </span>
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  {result.grade} - {result.label}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            WAM to GPA Conversion Table
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <th className="text-left px-4 py-3 font-semibold">WAM Range</th>
                <th className="text-left px-4 py-3 font-semibold">Grade</th>
                <th className="text-left px-4 py-3 font-semibold">GPA (4.0)</th>
                <th className="text-left px-4 py-3 font-semibold">GPA (7.0)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {conversionTable.map(row => (
                <tr key={row.grade} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                    {row.wamMin}-{row.wamMax}
                  </td>
                  <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.grade}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.gpa4.toFixed(1)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.gpa7.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {enableProductPopup && (
        <ProductPopup recommendation={recommendation} isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      )}
    </>
  );
}
