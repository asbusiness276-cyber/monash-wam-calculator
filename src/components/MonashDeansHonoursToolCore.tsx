import { useState } from 'react';
import { getDeansHonoursStanding, isMonashDistinctionAverage } from '../utils/monashGrades';

const tierColors: Record<string, string> = {
  below_distinction: 'from-amber-500 to-amber-700',
  distinction_average: 'from-blue-500 to-blue-700',
  high_distinction: 'from-emerald-500 to-emerald-700',
  deans_list_stretch: 'from-violet-500 to-violet-700',
};

export default function MonashDeansHonoursToolCore() {
  const [wam, setWam] = useState('');

  const wamNum = wam !== '' ? parseFloat(wam) : null;
  const standing = wamNum !== null && !Number.isNaN(wamNum) ? getDeansHonoursStanding(wamNum) : null;
  const distinction = wamNum !== null && !Number.isNaN(wamNum) ? isMonashDistinctionAverage(wamNum, null) : false;

  return (
    <div data-article-tool-screenshot="monash-deans-honours" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Faculty dean&apos;s honours list and commendation awards use WAM — often percentile-based, not a fixed mark.
          This tool shows planning bands only.
        </p>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
          Your Monash WAM (%)
        </label>
        <input
          type="number"
          min="0"
          max="100"
          step="0.001"
          placeholder="e.g. 78.5"
          value={wam}
          onChange={e => setWam(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 text-xl font-bold mb-6"
        />

        {standing && (
          <div className="space-y-4">
            <div
              className={`rounded-2xl bg-gradient-to-br ${tierColors[standing.tier]} text-white p-6 text-center`}
            >
              <div className="text-sm font-semibold uppercase tracking-wide opacity-90 mb-1">Planning band</div>
              <div className="text-2xl font-bold mb-2">{standing.title}</div>
              <p className="text-sm opacity-90 max-w-lg mx-auto">{standing.description}</p>
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              {distinction ? (
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                  Meets distinction average (WAM 70+).
                </span>
              ) : (
                <span>Distinction average (WAM 70+) is a common floor for faculty merit awards.</span>
              )}
            </p>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          Faculty Excellence Planning Bands
        </h2>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 text-sm">
          <li className="px-5 py-3 flex justify-between gap-4">
            <span className="text-gray-600 dark:text-gray-400">Below distinction average</span>
            <span className="font-medium text-gray-900 dark:text-white">WAM &lt; 70</span>
          </li>
          <li className="px-5 py-3 flex justify-between gap-4">
            <span className="text-gray-600 dark:text-gray-400">Dean&apos;s Commendation tier (typical)</span>
            <span className="font-medium text-gray-900 dark:text-white">WAM 70 – 79</span>
          </li>
          <li className="px-5 py-3 flex justify-between gap-4">
            <span className="text-gray-600 dark:text-gray-400">Course awards / strong percentile</span>
            <span className="font-medium text-gray-900 dark:text-white">WAM 80+</span>
          </li>
          <li className="px-5 py-3 flex justify-between gap-4">
            <span className="text-gray-600 dark:text-gray-400">Dean&apos;s Honours List stretch (e.g. top 2%)</span>
            <span className="font-medium text-gray-900 dark:text-white">WAM 85+ typical</span>
          </li>
        </ul>
        <p className="px-5 py-3 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          Percentile cutoffs float each year. Monash Business School cites top 2% by WAM — other faculties differ.
        </p>
      </div>
    </div>
  );
}
