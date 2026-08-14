import { useState } from 'react';
import { calculateCgpaFromSemesterGpa } from '../utils/uniGrades';

export default function GpaToCgpaToolCore() {
  const [priorCgpa, setPriorCgpa] = useState('');
  const [priorCredits, setPriorCredits] = useState('');
  const [semesterGpa, setSemesterGpa] = useState('');
  const [semesterCredits, setSemesterCredits] = useState('');

  const result =
    priorCgpa !== '' && priorCredits !== '' && semesterGpa !== '' && semesterCredits !== ''
      ? calculateCgpaFromSemesterGpa(
          parseFloat(priorCgpa),
          parseFloat(priorCredits),
          parseFloat(semesterGpa),
          parseFloat(semesterCredits)
        )
      : null;

  return (
    <div data-article-tool-screenshot="gpa-to-cgpa" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Prior CGPA (4.0)
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="0.001"
              placeholder="e.g. 2.850"
              value={priorCgpa}
              onChange={event => setPriorCgpa(event.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Credits earned so far
            </label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 72"
              value={priorCredits}
              onChange={event => setPriorCredits(event.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              This semester GPA (4.0)
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="0.001"
              placeholder="e.g. 3.500"
              value={semesterGpa}
              onChange={event => setSemesterGpa(event.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Semester credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 24"
              value={semesterCredits}
              onChange={event => setSemesterCredits(event.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
        </div>

        {result !== null && (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center">
            <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold uppercase mb-1">
              Updated CGPA
            </div>
            <div className="text-5xl font-bold text-emerald-800 dark:text-emerald-200">{result.toFixed(3)}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
              Formula: (prior CGPA × prior cp + semester GPA × semester cp) ÷ total cp
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
