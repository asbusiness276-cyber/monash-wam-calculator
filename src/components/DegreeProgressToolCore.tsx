import { useState } from 'react';
import {
  calculateDegreeProgress,
  UNI_DEFAULT_DEGREE_CREDITS,
} from '../utils/uniGrades';

const degreePresets = [
  { label: 'Bachelor (192 cp)', value: 192 },
  { label: 'Bachelor (144 cp)', value: 144 },
  { label: 'Double degree (256 cp)', value: 256 },
];

export default function DegreeProgressToolCore() {
  const [completed, setCompleted] = useState('');
  const [total, setTotal] = useState(String(UNI_DEFAULT_DEGREE_CREDITS));
  const [perSemester, setPerSemester] = useState('24');

  const progress = (() => {
    if (completed === '' || total === '') return null;
    const cpDone = parseFloat(completed);
    const cpTotal = parseFloat(total);
    const cpSem =
      perSemester !== '' && !Number.isNaN(parseFloat(perSemester)) ? parseFloat(perSemester) : undefined;
    return calculateDegreeProgress(cpDone, cpTotal, cpSem);
  })();

  return (
    <div data-article-tool-screenshot="degree-progress" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Track how many credit points you have completed toward your degree. Most Uni bachelor courses are 192 cp —
          check your handbook for your exact total.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {degreePresets.map(preset => (
            <button
              key={preset.value}
              type="button"
              onClick={() => setTotal(String(preset.value))}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                total === String(preset.value)
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-primary-400'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Completed credit points
            </label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 96"
              value={completed}
              onChange={e => setCompleted(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Total degree credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={total}
              onChange={e => setTotal(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              CP per semester (optional)
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 24"
              value={perSemester}
              onChange={e => setPerSemester(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {progress && (
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-90 mb-1">Degree complete</p>
              <p className="text-5xl font-bold">{progress.percentComplete}%</p>
              <p className="text-sm opacity-90 mt-2">
                {progress.completedCredits} of {progress.totalCredits} credit points
              </p>
            </div>

            <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all"
                style={{ width: `${Math.min(progress.percentComplete, 100)}%` }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
                <p className="font-semibold text-gray-800 dark:text-white">Remaining</p>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                  {progress.remainingCredits} cp
                </p>
              </div>
              {progress.semestersRemaining !== null && (
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
                  <p className="font-semibold text-gray-800 dark:text-white">Est. semesters left</p>
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                    ~{progress.semestersRemaining}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">At {perSemester} cp per semester</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
