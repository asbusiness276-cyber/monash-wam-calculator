import { useState } from 'react';
import { convert10PointGpaToWamBand } from '../utils/uniGrades';

export default function Gpa10ToWamToolCore() {
  const [gpa10, setGpa10] = useState('');

  const gpaNum = parseFloat(gpa10);
  const result = gpa10 !== '' && !Number.isNaN(gpaNum) ? convert10PointGpaToWamBand(gpaNum) : null;
  const percentage = gpa10 !== '' && !Number.isNaN(gpaNum) ? gpaNum * 10 : null;

  return (
    <div data-article-tool-screenshot="10-point-gpa-to-wam" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Enter GPA / CGPA on 10-Point Scale
        </label>
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          placeholder="e.g. 8.5"
          value={gpa10}
          onChange={event => setGpa10(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-lime-500 text-xl font-bold mb-6"
        />

        {result && percentage !== null && (
          <div className="space-y-4">
            <div className="bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800 rounded-xl p-6 text-center">
              <div className="text-xs text-lime-700 dark:text-lime-400 font-semibold uppercase mb-1">
                Indicative WAM Band
              </div>
              <div className="text-4xl font-bold text-lime-800 dark:text-lime-200">
                {result.min}% – {result.max}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {result.grade} ({result.label}) · GPA 4.0 = {result.gpa4.toFixed(1)}, 7.0 = {result.gpa7.toFixed(1)}
              </div>
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              10-point GPA × 10 = {percentage.toFixed(1)}% equivalent, then mapped to Uni grade bands.
            </p>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          10-Point GPA to WAM Reference
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">10-pt GPA</th>
              <th className="text-left px-4 py-3 font-semibold">% Equiv</th>
              <th className="text-left px-4 py-3 font-semibold">Uni Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {[10, 9, 8, 7, 6, 5, 4].map(value => {
              const band = convert10PointGpaToWamBand(value);
              return (
                <tr key={value}>
                  <td className="px-4 py-3 font-semibold">{value.toFixed(1)}</td>
                  <td className="px-4 py-3">{(value * 10).toFixed(0)}%</td>
                  <td className="px-4 py-3">{band?.grade ?? '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
