import { useState } from 'react';
import { getMonashGradeFromMark, monashGradeBands } from '../utils/monashGrades';

interface MarkToGradeToolCoreProps {
  initialMark?: string;
}

export default function MarkToGradeToolCore({ initialMark = '' }: MarkToGradeToolCoreProps) {
  const [mark, setMark] = useState(initialMark);
  const parsed = mark === '' ? null : parseFloat(mark);
  const result = parsed !== null ? getMonashGradeFromMark(parsed) : null;

  return (
    <div data-article-tool-screenshot="mark-to-grade" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Enter Your Unit Mark (%)
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

        {result && parsed !== null && (
          <div className="space-y-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-6 text-center">
              <div className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase mb-1">
                Monash Grade
              </div>
              <div className={`text-5xl font-bold ${result.color}`}>{result.grade}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{result.label}</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">GPA (4.0)</div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{result.gpa4.toFixed(1)}</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1">GPA (7.0)</div>
                <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{result.gpa7.toFixed(1)}</div>
              </div>
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Mark {parsed.toFixed(1)}% sits in the {result.min}–{result.max}% band for standard Monash coursework grades.
            </p>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          Monash Mark to Grade Table
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">Mark range</th>
              <th className="text-left px-4 py-3 font-semibold">Grade</th>
              <th className="text-left px-4 py-3 font-semibold">Label</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {monashGradeBands.map(row => (
              <tr key={row.grade} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {row.min}–{row.max}%
                </td>
                <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.grade}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.label}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
