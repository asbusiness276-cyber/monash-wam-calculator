import { useState } from 'react';
import { calculateUnitMarkScenarios, uniSupplementaryPassMark } from '../utils/uniGrades';

const DEFAULT_SCENARIOS = [
  { label: 'Keep current mark', mark: -1 },
  { label: `Supplementary pass (${uniSupplementaryPassMark})`, mark: uniSupplementaryPassMark },
  { label: 'Credit (65)', mark: 65 },
  { label: 'Distinction (75)', mark: 75 },
  { label: 'High distinction (85)', mark: 85 },
];

function deltaColor(delta: number) {
  if (delta === 0) return 'text-gray-500 dark:text-gray-400';
  return delta > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400';
}

export default function FailedUnitWamToolCore() {
  const [currentWam, setCurrentWam] = useState('');
  const [totalCredits, setTotalCredits] = useState('');
  const [unitCredits, setUnitCredits] = useState('');
  const [failMark, setFailMark] = useState('');

  const wamNum = currentWam === '' ? null : parseFloat(currentWam);
  const creditsNum = totalCredits === '' ? null : parseFloat(totalCredits);
  const unitCpNum = unitCredits === '' ? null : parseFloat(unitCredits);
  const failNum = failMark === '' ? null : parseFloat(failMark);

  const hasInputs =
    wamNum !== null &&
    creditsNum !== null &&
    unitCpNum !== null &&
    failNum !== null &&
    !Number.isNaN(wamNum) &&
    !Number.isNaN(creditsNum) &&
    !Number.isNaN(unitCpNum) &&
    !Number.isNaN(failNum);

  const scenarios = hasInputs
    ? calculateUnitMarkScenarios(
        wamNum,
        creditsNum,
        unitCpNum,
        failNum,
        DEFAULT_SCENARIOS.map(s =>
          s.mark === -1 ? { label: s.label, mark: failNum } : { label: s.label, mark: s.mark }
        )
      )
    : null;

  return (
    <div data-article-tool-screenshot="failed-unit-wam" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Failed Unit Impact</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Enter your current WAM with the fail already included, then compare recovery outcomes on that unit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Current WAM (with fail)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.001"
              placeholder="e.g. 68.2"
              value={currentWam}
              onChange={e => setCurrentWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Total credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 72"
              value={totalCredits}
              onChange={e => setTotalCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Failed unit CP
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 6"
              value={unitCredits}
              onChange={e => setUnitCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Failed unit mark (%)
            </label>
            <input
              type="number"
              min="0"
              max="49"
              step="0.1"
              placeholder="e.g. 42"
              value={failMark}
              onChange={e => setFailMark(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {scenarios && (
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900/60 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Scenario</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Mark</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">New WAM</th>
                  <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {scenarios.map(row => (
                  <tr key={row.label} className="bg-white dark:bg-gray-800">
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.label}</td>
                    <td className="px-4 py-3">{row.mark}%</td>
                    <td className="px-4 py-3 font-semibold">{row.wam.toFixed(2)}%</td>
                    <td className={`px-4 py-3 font-medium ${deltaColor(row.wamDelta)}`}>
                      {row.wamDelta === 0 ? '—' : `${row.wamDelta > 0 ? '+' : ''}${row.wamDelta.toFixed(2)}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
