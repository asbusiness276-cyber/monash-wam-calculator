import { useState } from 'react';
import { calculateRequiredRemainingAverage, getUniGradeFromMark } from '../utils/uniGrades';

function getStatus(required: number | null) {
  if (required === null) return null;
  if (required > 100) {
    return {
      text: 'Target not achievable — you would need above 100% average on remaining units.',
      color: 'text-red-600 dark:text-red-400',
    };
  }
  if (required < 0) {
    return {
      text: 'Target already secured — your current WAM is at or above the goal.',
      color: 'text-emerald-600 dark:text-emerald-400',
    };
  }
  return {
    text: `You need ${required.toFixed(2)}% average on remaining units to reach your target WAM.`,
    color: 'text-primary-600 dark:text-primary-400',
  };
}

export default function WamTargetToolCore() {
  const [currentWam, setCurrentWam] = useState('');
  const [completedCredits, setCompletedCredits] = useState('');
  const [remainingCredits, setRemainingCredits] = useState('');
  const [targetWam, setTargetWam] = useState('');

  const required =
    currentWam !== '' && completedCredits !== '' && remainingCredits !== '' && targetWam !== ''
      ? calculateRequiredRemainingAverage(
          parseFloat(currentWam),
          parseFloat(completedCredits),
          parseFloat(remainingCredits),
          parseFloat(targetWam)
        )
      : null;

  const status = getStatus(required);
  const gradeBand = required !== null && required >= 0 && required <= 100 ? getUniGradeFromMark(required) : null;

  return (
    <div data-article-tool-screenshot="wam-target" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Enter Your Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Current WAM (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.001"
              placeholder="e.g. 72.5"
              value={currentWam}
              onChange={e => setCurrentWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Target WAM (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              placeholder="e.g. 75"
              value={targetWam}
              onChange={e => setTargetWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Completed credit points
            </label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 96"
              value={completedCredits}
              onChange={e => setCompletedCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Remaining credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 24"
              value={remainingCredits}
              onChange={e => setRemainingCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {status && (
          <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-5 text-center">
            {required !== null && required >= 0 && required <= 100 && (
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                {required.toFixed(2)}%
              </div>
            )}
            <p className={`text-sm font-medium ${status.color}`}>{status.text}</p>
            {gradeBand && (
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                Equivalent band: {gradeBand.grade} ({gradeBand.label})
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
