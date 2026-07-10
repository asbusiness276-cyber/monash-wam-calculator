import { useState } from 'react';
import { convertGpaBetweenScales, getGpaConversionSteps } from '../utils/monashGrades';

type GpaScaleConverterToolCoreProps = {
  /** Convert from 4.0 to 7.0 or the reverse. */
  direction: '4-to-7' | '7-to-4';
  screenshotId?: string;
};

export default function GpaScaleConverterToolCore({
  direction,
  screenshotId = 'gpa-scale-converter',
}: GpaScaleConverterToolCoreProps) {
  const fromScale = direction === '4-to-7' ? 4 : 7;
  const toScale = direction === '4-to-7' ? 7 : 4;
  const [gpa, setGpa] = useState('');

  const gpaNum = parseFloat(gpa);
  const converted =
    gpa !== '' && !Number.isNaN(gpaNum) ? convertGpaBetweenScales(gpaNum, fromScale, toScale) : null;
  const steps = getGpaConversionSteps(fromScale);

  return (
    <div data-article-tool-screenshot={screenshotId} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Enter GPA on {fromScale}.0 Scale
        </label>
        <input
          type="number"
          min="0"
          max={fromScale}
          step="0.1"
          placeholder={`e.g. ${fromScale === 4 ? '3.5' : '6.0'}`}
          value={gpa}
          onChange={event => setGpa(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-rose-500 text-xl font-bold mb-6"
        />

        {converted !== null && (
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">{fromScale}.0 GPA</div>
              <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">{gpaNum.toFixed(1)}</div>
            </div>
            <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl p-4 text-center">
              <div className="text-xs text-rose-600 dark:text-rose-400 uppercase mb-1">{toScale}.0 GPA</div>
              <div className="text-3xl font-bold text-rose-700 dark:text-rose-300">{converted.toFixed(1)}</div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          {fromScale}.0 to {toScale}.0 GPA (Monash Bands)
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">{fromScale}.0 GPA</th>
              <th className="text-left px-4 py-3 font-semibold">{toScale}.0 GPA</th>
              <th className="text-left px-4 py-3 font-semibold">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {steps.map(row => {
              const target = convertGpaBetweenScales(row.gpa, fromScale, toScale);
              return (
                <tr key={row.gpa}>
                  <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.gpa.toFixed(1)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{target?.toFixed(1) ?? '—'}</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.grade}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
