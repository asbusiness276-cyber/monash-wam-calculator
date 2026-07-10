import { useMemo, useState } from 'react';
import { getMonashGradeFromMark, monashGradeBands, percentageFromMarks } from '../utils/monashGrades';

type PercentageToGpaToolCoreProps = {
  emphasizeGpa7?: boolean;
};

export default function PercentageToGpaToolCore({ emphasizeGpa7 = false }: PercentageToGpaToolCoreProps) {
  const [mark, setMark] = useState('');
  const [marksObtained, setMarksObtained] = useState('');
  const [marksTotal, setMarksTotal] = useState('');

  const derivedFromMarks = useMemo(() => {
    if (marksObtained === '' || marksTotal === '') return null;
    return percentageFromMarks(parseFloat(marksObtained), parseFloat(marksTotal));
  }, [marksObtained, marksTotal]);

  const effectiveMark = mark !== '' ? parseFloat(mark) : derivedFromMarks;
  const result = effectiveMark !== null && effectiveMark !== undefined ? getMonashGradeFromMark(effectiveMark) : null;

  return (
    <div data-article-tool-screenshot="percentage-to-gpa" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Enter Percentage (%)
        </label>
        <input
          type="number"
          min="0"
          max="100"
          step="0.1"
          placeholder="e.g. 76"
          value={mark}
          onChange={e => setMark(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 text-xl font-bold mb-6"
        />

        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
          Or calculate from raw marks
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Marks obtained</label>
            <input
              type="number"
              min="0"
              step="0.1"
              placeholder="e.g. 68"
              value={marksObtained}
              onChange={e => setMarksObtained(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Marks total</label>
            <input
              type="number"
              min="1"
              step="0.1"
              placeholder="e.g. 100"
              value={marksTotal}
              onChange={e => setMarksTotal(e.target.value)}
              className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
            />
          </div>
        </div>

        {derivedFromMarks !== null && mark === '' && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Calculated percentage: <strong className="text-gray-900 dark:text-white">{derivedFromMarks.toFixed(2)}%</strong>
          </p>
        )}

        {result && effectiveMark !== null && (
          <div className="space-y-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-6 text-center">
              <div className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase mb-1">
                Monash Grade
              </div>
              <div className={`text-5xl font-bold ${result.color}`}>{result.grade}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{result.label}</div>
            </div>
            <div className={`grid gap-4 ${emphasizeGpa7 ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {!emphasizeGpa7 && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">GPA (4.0)</div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{result.gpa4.toFixed(1)}</div>
                </div>
              )}
              <div
                className={`rounded-xl p-4 text-center ${
                  emphasizeGpa7
                    ? 'bg-violet-50 dark:bg-violet-900/30 border border-violet-200 dark:border-violet-800'
                    : 'bg-gray-50 dark:bg-gray-700'
                }`}
              >
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">GPA (7.0 Australia)</div>
                <div className={`font-bold text-gray-800 dark:text-gray-200 ${emphasizeGpa7 ? 'text-5xl' : 'text-2xl'}`}>
                  {result.gpa7.toFixed(1)}
                </div>
              </div>
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              {effectiveMark.toFixed(1)}% maps to Monash {result.grade} ({result.gpa4.toFixed(1)} on 4.0,{' '}
              {result.gpa7.toFixed(1)} on 7.0).
            </p>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          {emphasizeGpa7 ? 'Australian 7.0 GPA Scale (Monash)' : 'Percentage to GPA Table'}
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">Mark</th>
              <th className="text-left px-4 py-3 font-semibold">Grade</th>
              <th className="text-left px-4 py-3 font-semibold">GPA 4.0</th>
              <th className="text-left px-4 py-3 font-semibold">GPA 7.0</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {monashGradeBands.map(row => (
              <tr key={row.grade}>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {row.min}–{row.max}%
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
