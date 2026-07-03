import { useState } from 'react';
import {
  convertMonashGrade,
  monashOfficialGpaGradeOptions,
  type MonashGradeConverterField,
  type MonashOfficialGpaGrade,
} from '../utils/monashGrades';

export default function MonashGradeConverterToolCore() {
  const [fromField, setFromField] = useState<MonashGradeConverterField>('mark');
  const [markInput, setMarkInput] = useState('');
  const [letterInput, setLetterInput] = useState<MonashOfficialGpaGrade>('HD');
  const [gpaInput, setGpaInput] = useState('');

  const rawValue =
    fromField === 'mark'
      ? markInput !== ''
        ? parseFloat(markInput)
        : null
      : fromField === 'gpa'
        ? gpaInput !== ''
          ? parseFloat(gpaInput)
          : null
        : letterInput;

  const result =
    rawValue !== null && (fromField !== 'mark' || !Number.isNaN(rawValue as number))
      ? convertMonashGrade(rawValue as number | MonashOfficialGpaGrade, fromField)
      : null;

  return (
    <div data-article-tool-screenshot="monash-grade-converter" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Convert from</label>
            <select
              value={fromField}
              onChange={e => setFromField(e.target.value as MonashGradeConverterField)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="mark">Percentage mark (0–100)</option>
              <option value="letter">Letter grade (HD, D, C…)</option>
              <option value="gpa">Official GPA value (4.0 scale)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Value</label>
            {fromField === 'mark' && (
              <input
                type="number"
                min="0"
                max="100"
                step="0.1"
                placeholder="e.g. 76"
                value={markInput}
                onChange={e => setMarkInput(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-lg font-bold"
              />
            )}
            {fromField === 'letter' && (
              <select
                value={letterInput}
                onChange={e => setLetterInput(e.target.value as MonashOfficialGpaGrade)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {monashOfficialGpaGradeOptions.map(opt => (
                  <option key={opt.grade} value={opt.grade}>
                    {opt.grade} — {opt.label}
                  </option>
                ))}
              </select>
            )}
            {fromField === 'gpa' && (
              <input
                type="number"
                min="0"
                max="4"
                step="0.1"
                placeholder="e.g. 3.0"
                value={gpaInput}
                onChange={e => setGpaInput(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-lg font-bold"
              />
            )}
          </div>
        </div>

        {result && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 text-center">
              <div className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase mb-1">Mark</div>
              <div className="text-3xl font-bold text-violet-800 dark:text-violet-200">
                {fromField === 'mark' ? markInput : result.mark.toFixed(fromField === 'letter' ? 0 : 1)}%
              </div>
            </div>
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 text-center">
              <div className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase mb-1">Grade</div>
              <div className="text-3xl font-bold text-violet-800 dark:text-violet-200">{result.letter}</div>
              <div className="text-xs text-violet-600 dark:text-violet-400 mt-1">{result.label}</div>
            </div>
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 text-center">
              <div className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase mb-1">
                GPA value
              </div>
              <div className="text-3xl font-bold text-violet-800 dark:text-violet-200">{result.gpa.toFixed(1)}</div>
              <div className="text-xs text-violet-600 dark:text-violet-400 mt-1">Monash 4.0 scale</div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          Monash Grading Reference
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">Grade</th>
              <th className="text-left px-4 py-3 font-semibold">Typical mark</th>
              <th className="text-left px-4 py-3 font-semibold">GPA value</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {monashOfficialGpaGradeOptions.map(row => (
              <tr key={row.grade}>
                <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.grade}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.markRange}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.gpaValue.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
