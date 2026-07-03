import { useState } from 'react';
import {
  calculateExchangeWamPlanning,
  MONASH_EXCHANGE_MIN_WAM_THRESHOLD,
} from '../utils/monashGrades';

export default function MonashExchangeWamToolCore() {
  const [currentWam, setCurrentWam] = useState('');
  const [monashCredits, setMonashCredits] = useState('');
  const [exchangeCredits, setExchangeCredits] = useState('');

  const result =
    currentWam !== '' && monashCredits !== '' && exchangeCredits !== ''
      ? calculateExchangeWamPlanning(
          parseFloat(currentWam),
          parseFloat(monashCredits),
          parseFloat(exchangeCredits)
        )
      : null;

  return (
    <div data-article-tool-screenshot="monash-exchange-wam" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Exchange &amp; WAM</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Approved exchange units normally transfer as SFR — they earn credit points but do not change your Monash WAM.
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
              placeholder="e.g. 74"
              value={currentWam}
              onChange={e => setCurrentWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Monash-graded CP
            </label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 96"
              value={monashCredits}
              onChange={e => setMonashCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Exchange CP (SFR)
            </label>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 24"
              value={exchangeCredits}
              onChange={e => setExchangeCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {result && (
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 text-white p-6 text-center">
              <div className="text-sm font-semibold uppercase tracking-wide opacity-90 mb-1">WAM after exchange</div>
              <div className="text-4xl font-bold mb-2">{result.wamAfterExchange.toFixed(2)}%</div>
              <p className="text-sm opacity-90">Unchanged — SFR exchange credit does not enter WAM maths.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
                <p className="font-semibold text-gray-800 dark:text-white mb-1">Degree credit progress</p>
                <p className="text-gray-600 dark:text-gray-400">
                  {result.monashGradedCredits} Monash-graded + {result.exchangeCredits} exchange ={' '}
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {result.totalDegreeCredits} CP
                  </span>
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/40">
                <p className="font-semibold text-gray-800 dark:text-white mb-1">Exchange WAM floor</p>
                {result.meetsExchangeWamFloor ? (
                  <p className="text-emerald-600 dark:text-emerald-400">
                    WAM {result.currentWam.toFixed(2)}% meets typical {MONASH_EXCHANGE_MIN_WAM_THRESHOLD}% planning
                    floor
                  </p>
                ) : (
                  <p className="text-amber-600 dark:text-amber-400">
                    WAM below {MONASH_EXCHANGE_MIN_WAM_THRESHOLD}% — check faculty standing rules before applying
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
