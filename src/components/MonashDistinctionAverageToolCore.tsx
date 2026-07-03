import { useState } from 'react';
import {
  getMonashDistinctionStatus,
  MONASH_DISTINCTION_GPA_THRESHOLD,
  MONASH_DISTINCTION_WAM_THRESHOLD,
} from '../utils/monashGrades';

export default function MonashDistinctionAverageToolCore() {
  const [wam, setWam] = useState('');
  const [gpa, setGpa] = useState('');

  const wamNum = wam !== '' ? parseFloat(wam) : null;
  const gpaNum = gpa !== '' ? parseFloat(gpa) : null;
  const status = getMonashDistinctionStatus(wamNum, gpaNum);

  return (
    <div data-article-tool-screenshot="monash-distinction-average" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Monash distinction average is WAM {MONASH_DISTINCTION_WAM_THRESHOLD}+ or GPA{' '}
          {MONASH_DISTINCTION_GPA_THRESHOLD}+ on the official 4.0 scale. Enter either or both.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Your WAM (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.001"
              placeholder="e.g. 68.5"
              value={wam}
              onChange={e => setWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Your GPA (4.0 scale)
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="0.001"
              placeholder="e.g. 2.85"
              value={gpa}
              onChange={e => setGpa(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {status && (
          <div className="mt-6 space-y-4">
            <div
              className={`rounded-2xl p-6 text-center ${
                status.qualifies
                  ? 'bg-gradient-to-br from-emerald-500 to-emerald-700 text-white'
                  : 'bg-gradient-to-br from-amber-500 to-amber-700 text-white'
              }`}
            >
              <div className="text-sm font-semibold uppercase tracking-wide opacity-90 mb-1">
                Distinction average status
              </div>
              <div className="text-3xl font-bold mb-2">
                {status.qualifies ? 'You qualify' : 'Not yet at distinction average'}
              </div>
              <p className="text-sm opacity-90 max-w-md mx-auto">
                {status.qualifies
                  ? 'Your WAM or GPA meets Monash distinction average thresholds.'
                  : 'Raise WAM to 70+ or GPA to 3.0+ to reach distinction average.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {status.wamGap !== null && (
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
                  <p className="font-semibold text-gray-800 dark:text-white mb-1">WAM gap to 70</p>
                  {status.wamGap <= 0 ? (
                    <p className="text-emerald-600 dark:text-emerald-400">
                      {Math.abs(status.wamGap).toFixed(2)} points above distinction floor
                    </p>
                  ) : (
                    <p className="text-amber-600 dark:text-amber-400">
                      Need +{status.wamGap.toFixed(2)} WAM points
                    </p>
                  )}
                </div>
              )}
              {status.gpaGap !== null && (
                <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
                  <p className="font-semibold text-gray-800 dark:text-white mb-1">GPA gap to 3.0</p>
                  {status.gpaGap <= 0 ? (
                    <p className="text-emerald-600 dark:text-emerald-400">
                      {Math.abs(status.gpaGap).toFixed(3)} above distinction floor
                    </p>
                  ) : (
                    <p className="text-amber-600 dark:text-amber-400">
                      Need +{status.gpaGap.toFixed(3)} GPA points
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
