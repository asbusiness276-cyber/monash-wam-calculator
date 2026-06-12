import { useState } from 'react';
import ProductPopup from './ProductPopup';
import { useDelayedProductPopup } from '../hooks/useDelayedProductPopup';
import {
  getMonashHonoursFromWam,
  isMonashDistinctionAverage,
} from '../utils/monashGrades';

const honoursBands = [
  { code: 'H1', range: '80 – 100', title: 'First Class Honours' },
  { code: 'H2A', range: '70 – 79.99', title: 'Second Class Honours Division A' },
  { code: 'H2B', range: '60 – 69.99', title: 'Second Class Honours Division B' },
  { code: 'P', range: '50 – 59.99', title: 'Pass (no honours grade)' },
  { code: '—', range: 'Below 50', title: 'Below pass average' },
];

interface MonashHonoursToolCoreProps {
  enableProductPopup?: boolean;
}

export default function MonashHonoursToolCore({ enableProductPopup = true }: MonashHonoursToolCoreProps) {
  const [wam, setWam] = useState('');

  const wamNum = wam !== '' ? parseFloat(wam) : null;
  const honours = wamNum !== null && !Number.isNaN(wamNum) ? getMonashHonoursFromWam(wamNum) : null;
  const distinction = wamNum !== null && !Number.isNaN(wamNum) ? isMonashDistinctionAverage(wamNum, null) : false;

  const { popupOpen, setPopupOpen, recommendation } = useDelayedProductPopup({
    enabled: enableProductPopup,
    hasResult: honours !== null,
    userReady: wam !== '',
    route: '/monash-honours-calculator',
    subjects: [{ code: 'HON', mark: wamNum }],
  });

  const badgeColor =
    honours?.code === 'H1'
      ? 'from-amber-500 to-amber-700'
      : honours?.code === 'H2A'
        ? 'from-blue-500 to-blue-700'
        : honours?.code === 'H2B'
          ? 'from-sky-500 to-sky-700'
          : honours?.code === 'P'
            ? 'from-gray-500 to-gray-600'
            : 'from-red-500 to-red-700';

  return (
    <>
      <div data-article-tool-screenshot="monash-honours" className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Your Monash WAM (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.001"
            placeholder="e.g. 76.5"
            value={wam}
            onChange={e => setWam(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl font-bold mb-6"
          />

          {honours && (
            <div className="space-y-4">
              <div className={`rounded-2xl bg-gradient-to-br ${badgeColor} text-white p-6 text-center`}>
                <div className="text-sm font-semibold uppercase tracking-wide opacity-90 mb-1">
                  Monash honours classification
                </div>
                <div className="text-5xl font-bold mb-2">{honours.code === 'BELOW' ? '—' : honours.code}</div>
                <div className="text-lg font-semibold">{honours.title}</div>
                <p className="text-sm opacity-90 mt-3 max-w-md mx-auto">{honours.description}</p>
              </div>

              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {distinction ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    WAM {wamNum?.toFixed(2)}% is at or above distinction average (70+).
                  </span>
                ) : (
                  <span>Distinction average at Monash is typically WAM 70+ (GPA 3.0+).</span>
                )}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            Monash Honours Degree Grading Schema
          </h2>
          <p className="px-5 py-3 text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
            Official Monash honours course grades use WAM thresholds — H2A starts at 70, not 75 like some generic
            Australian calculators show.
          </p>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <th className="text-left px-4 py-3 font-semibold">Code</th>
                <th className="text-left px-4 py-3 font-semibold">WAM range</th>
                <th className="text-left px-4 py-3 font-semibold">Classification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {honoursBands.map(row => (
                <tr key={row.code}>
                  <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.code}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.range}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-sm text-blue-800 dark:text-blue-200">
          <strong>Important:</strong> Honours <em>entry</em> cut-offs vary by faculty and year. This tool shows the
          official honours <em>course grade</em> classification from WAM. Always confirm entry requirements in your faculty
          handbook.
        </div>
      </div>

      {enableProductPopup && (
        <ProductPopup recommendation={recommendation} isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      )}
    </>
  );
}
