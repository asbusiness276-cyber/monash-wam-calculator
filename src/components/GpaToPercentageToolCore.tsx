import { useState } from 'react';
import { getGpaConversionSteps, mapGpaToPercentageRange } from '../utils/uniGrades';

type GpaToPercentageToolCoreProps = {
  fixedScale?: 4 | 7;
  screenshotId?: string;
};

const scaleOptions = [
  { label: '4.0 Scale', max: 4 as const },
  { label: '7.0 Scale', max: 7 as const },
];

export default function GpaToPercentageToolCore({
  fixedScale,
  screenshotId = 'gpa-to-percentage',
}: GpaToPercentageToolCoreProps) {
  const scales = fixedScale
    ? scaleOptions.filter(option => option.max === fixedScale)
    : scaleOptions;
  const [scaleIdx, setScaleIdx] = useState(0);
  const [gpa, setGpa] = useState('');

  const scale = scales[scaleIdx] ?? scales[0];
  const gpaNum = parseFloat(gpa);
  const result = gpa !== '' && !Number.isNaN(gpaNum) ? mapGpaToPercentageRange(gpaNum, scale.max) : null;
  const steps = getGpaConversionSteps(scale.max);

  return (
    <div data-article-tool-screenshot={screenshotId} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        {!fixedScale && (
          <div className="flex gap-3 mb-5">
            {scales.map((option, index) => (
              <button
                key={option.label}
                type="button"
                onClick={() => setScaleIdx(index)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  scaleIdx === index
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Enter Your GPA (0 – {scale.max})
        </label>
        <input
          type="number"
          min="0"
          max={scale.max}
          step="0.1"
          placeholder={`e.g. ${scale.max === 4 ? '3.0' : '6.0'}`}
          value={gpa}
          onChange={event => setGpa(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xl font-bold mb-6"
        />

        {result && (
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 text-center">
              <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase mb-1">
                Approximate Percentage / WAM Range
              </div>
              <div className="text-4xl font-bold text-indigo-700 dark:text-indigo-300">
                {result.wamMin}% – {result.wamMax}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Midpoint estimate: <strong>{result.midpoint}%</strong> · {result.grade} ({result.gradeLabel})
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              GPA maps to a grade band, not one exact percentage. Use the range for Uni planning.
            </p>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          GPA to Percentage Table ({scale.label})
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">GPA</th>
              <th className="text-left px-4 py-3 font-semibold">Percentage Range</th>
              <th className="text-left px-4 py-3 font-semibold">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {steps.map(row => (
              <tr key={row.gpa}>
                <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.gpa.toFixed(1)}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {row.wamMin}%–{row.wamMax}%
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
