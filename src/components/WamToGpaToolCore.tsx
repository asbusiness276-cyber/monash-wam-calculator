import { useState } from 'react';
import { convertWamToGpaBands, monashGradeBands } from '../utils/monashGrades';

type WamToGpaToolCoreProps = {
  initialWam?: string;
  emphasizeGpa4?: boolean;
  emphasizeGpa7?: boolean;
  /** Override primary result label — e.g. CGPA instead of GPA (4.0). */
  primaryGpaLabel?: string;
  screenshotId?: string;
};

export default function WamToGpaToolCore({
  initialWam = '',
  emphasizeGpa4 = false,
  emphasizeGpa7 = false,
  primaryGpaLabel,
  screenshotId = 'wam-to-gpa',
}: WamToGpaToolCoreProps) {
  const [wam, setWam] = useState(initialWam);
  const result = wam !== '' ? convertWamToGpaBands(parseFloat(wam)) : null;
  const showBoth = !emphasizeGpa4 && !emphasizeGpa7;
  const gpa4Label = primaryGpaLabel ?? 'GPA (4.0 Scale)';

  return (
    <div data-article-tool-screenshot={screenshotId} className="space-y-8">
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
          onChange={event => setWam(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl font-bold mb-6"
        />

        {result && (
          <div className="space-y-4">
            <div
              className={`grid gap-4 ${
                showBoth ? 'grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {(showBoth || emphasizeGpa4) && (
                <div
                  className={`rounded-xl p-4 text-center ${
                    emphasizeGpa4
                      ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                      : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                  }`}
                >
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase mb-1">
                    {gpa4Label}
                  </div>
                  <div
                    className={`font-bold text-blue-700 dark:text-blue-300 ${
                      emphasizeGpa4 ? 'text-5xl' : 'text-4xl'
                    }`}
                  >
                    {result.gpa4.toFixed(1)}
                  </div>
                </div>
              )}
              {(showBoth || emphasizeGpa7) && (
                <div
                  className={`rounded-xl p-4 text-center ${
                    emphasizeGpa7
                      ? 'bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800'
                      : 'bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800'
                  }`}
                >
                  <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase mb-1">
                    GPA (7.0 Scale)
                  </div>
                  <div
                    className={`font-bold text-teal-700 dark:text-teal-300 ${
                      emphasizeGpa7 ? 'text-5xl' : 'text-4xl'
                    }`}
                  >
                    {result.gpa7.toFixed(1)}
                  </div>
                </div>
              )}
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

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
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
            {monashGradeBands.map(row => (
              <tr key={row.grade} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {row.min}-{row.max}
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
  );
}
