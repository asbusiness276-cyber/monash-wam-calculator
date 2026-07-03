import { useState } from 'react';
import { calculateWamMilestones } from '../utils/monashGrades';

function statusClasses(status: 'met' | 'next' | 'future') {
  if (status === 'met') return 'border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-900/20';
  if (status === 'next') return 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20';
  return 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900/40';
}

function statusLabel(status: 'met' | 'next' | 'future') {
  if (status === 'met') return 'Met';
  if (status === 'next') return 'Next target';
  return 'Future target';
}

export default function WamMilestonesToolCore() {
  const [currentWam, setCurrentWam] = useState('');
  const [completedCredits, setCompletedCredits] = useState('');
  const [remainingCredits, setRemainingCredits] = useState('');

  const wam = currentWam === '' ? null : parseFloat(currentWam);
  const completed = completedCredits === '' ? undefined : parseFloat(completedCredits);
  const remaining = remainingCredits === '' ? undefined : parseFloat(remainingCredits);
  const milestones = wam !== null ? calculateWamMilestones(wam, completed, remaining) : null;
  const nextMilestone = milestones?.find(m => m.status === 'next') ?? null;

  return (
    <div data-article-tool-screenshot="wam-milestones" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">WAM Milestones</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Check common Monash planning bands: pass/progression, exchange floor, distinction average, HD territory, and
          top merit stretch. Add remaining credit points to estimate the average needed.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Current WAM (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.001"
              placeholder="e.g. 68.4"
              value={currentWam}
              onChange={e => setCurrentWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Completed CP (optional)
            </label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 96"
              value={completedCredits}
              onChange={e => setCompletedCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Remaining CP (optional)
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 96"
              value={remainingCredits}
              onChange={e => setRemainingCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>

        {nextMilestone && (
          <div className="mt-6 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
            <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">
              Next target: {nextMilestone.label} ({nextMilestone.wam}%)
            </p>
            <p className="text-xs text-amber-700/80 dark:text-amber-300/80 mt-1">
              Gap: {nextMilestone.gap.toFixed(2)} WAM points
              {nextMilestone.requiredAverage !== null
                ? ` · Required remaining average: ${nextMilestone.requiredAverage.toFixed(2)}%`
                : ''}
            </p>
          </div>
        )}

        {milestones && (
          <div className="mt-6 space-y-3">
            {milestones.map(milestone => (
              <div
                key={milestone.wam}
                className={`rounded-xl border p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${statusClasses(
                  milestone.status
                )}`}
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{milestone.label}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Target WAM {milestone.wam}%</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {statusLabel(milestone.status)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {milestone.status === 'met'
                      ? `${Math.abs(milestone.gap).toFixed(2)} above target`
                      : `${milestone.gap.toFixed(2)} to go`}
                    {milestone.requiredAverage !== null && !Number.isNaN(milestone.requiredAverage)
                      ? ` · ${milestone.requiredAverage.toFixed(2)}% needed`
                      : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
