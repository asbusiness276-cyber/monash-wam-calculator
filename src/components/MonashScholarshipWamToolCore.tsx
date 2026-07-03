import { useState } from 'react';
import { calculateScholarshipTierRequirements, getMonashGradeFromMark } from '../utils/monashGrades';

export default function MonashScholarshipWamToolCore() {
  const [currentWam, setCurrentWam] = useState('');
  const [completedCredits, setCompletedCredits] = useState('');
  const [remainingCredits, setRemainingCredits] = useState('');

  const tiers =
    currentWam !== '' && completedCredits !== '' && remainingCredits !== ''
      ? calculateScholarshipTierRequirements(
          parseFloat(currentWam),
          parseFloat(completedCredits),
          parseFloat(remainingCredits)
        )
      : null;

  return (
    <div data-article-tool-screenshot="monash-scholarship-wam" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Scholarship WAM Planning</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          See the average you need on remaining units for common merit WAM bands. Scholarship rules vary — check each
          award page.
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
              placeholder="e.g. 72"
              value={currentWam}
              onChange={e => setCurrentWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Completed CP
            </label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 96"
              value={completedCredits}
              onChange={e => setCompletedCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Remaining CP
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 24"
              value={remainingCredits}
              onChange={e => setRemainingCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>

        {tiers && (
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900/60 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Tier</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Target WAM</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Required avg.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {tiers.map(tier => {
                  const band =
                    tier.requiredAverage !== null && tier.requiredAverage >= 0 && tier.requiredAverage <= 100
                      ? getMonashGradeFromMark(tier.requiredAverage)
                      : null;
                  return (
                    <tr key={tier.targetWam} className="bg-white dark:bg-gray-800">
                      <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{tier.label}</td>
                      <td className="px-4 py-3 font-medium">{tier.targetWam}%</td>
                      <td className="px-4 py-3">
                        {tier.alreadyMet ? (
                          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Already met</span>
                        ) : tier.requiredAverage === null || tier.requiredAverage > 100 ? (
                          <span className="text-red-600 dark:text-red-400">Not achievable</span>
                        ) : tier.requiredAverage < 0 ? (
                          <span className="text-emerald-600 dark:text-emerald-400">Secured</span>
                        ) : (
                          <span>
                            <span className="font-semibold text-violet-600 dark:text-violet-400">
                              {tier.requiredAverage.toFixed(2)}%
                            </span>
                            {band && (
                              <span className="text-gray-500 dark:text-gray-400 ml-1">({band.grade})</span>
                            )}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
