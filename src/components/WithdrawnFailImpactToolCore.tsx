import { useState } from 'react';
import { calculateWithdrawnFailImpact } from '../utils/monashGrades';

function deltaText(delta: number) {
  return `${delta > 0 ? '+' : ''}${delta.toFixed(3)}`;
}

export default function WithdrawnFailImpactToolCore() {
  const [currentGpa, setCurrentGpa] = useState('');
  const [gpaCredits, setGpaCredits] = useState('');
  const [unitCredits, setUnitCredits] = useState('6');
  const [currentWam, setCurrentWam] = useState('');
  const [wamCredits, setWamCredits] = useState('');

  const result =
    currentGpa !== '' && gpaCredits !== '' && unitCredits !== ''
      ? calculateWithdrawnFailImpact(
          parseFloat(currentGpa),
          parseFloat(gpaCredits),
          parseFloat(unitCredits),
          currentWam === '' ? undefined : parseFloat(currentWam),
          wamCredits === '' ? undefined : parseFloat(wamCredits)
        )
      : null;

  return (
    <div data-article-tool-screenshot="withdrawn-fail-impact" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Withdrawn Fail Impact</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          WN has GPA value 0.0 on the Monash 4.0 scale. WAM treatment can depend on result codes and exclusions, so this
          tool shows GPA impact plus a WAM excluded vs worst-case counted-as-zero comparison.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Current GPA
            </label>
            <input
              type="number"
              min="0"
              max="4"
              step="0.001"
              placeholder="e.g. 2.75"
              value={currentGpa}
              onChange={e => setCurrentGpa(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              GPA credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 96"
              value={gpaCredits}
              onChange={e => setGpaCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              WN unit credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              value={unitCredits}
              onChange={e => setUnitCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-3">Optional WAM scenario</p>
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
                placeholder="e.g. 68"
                value={currentWam}
                onChange={e => setCurrentWam(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                WAM credit points
              </label>
              <input
                type="number"
                min="1"
                step="1"
                placeholder="e.g. 96"
                value={wamCredits}
                onChange={e => setWamCredits(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        {result && (
          <div className="mt-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-5 text-center">
                <p className="text-xs font-semibold uppercase text-red-600 dark:text-red-400 mb-1">GPA after WN</p>
                <p className="text-3xl font-bold text-red-700 dark:text-red-300">{result.gpaAfterWn.toFixed(3)}</p>
                <p className="text-xs text-red-600/80 dark:text-red-400/80 mt-2">
                  Change {deltaText(result.gpaDeltaWn)}
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-5 text-center">
                <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">If standard N</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  {result.gpaAfterStandardFail.toFixed(3)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">N uses GPA value 0.3</p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-5 text-center">
                <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">WN vs N gap</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">
                  {deltaText(result.gpaDeltaVsStandardFail)}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">WN is lower than standard fail</p>
              </div>
            </div>

            {result.wamIfZeroCounted !== null && result.wamWorstCaseDelta !== null && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 p-5">
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">If excluded from WAM</p>
                  <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300 mt-1">
                    {result.wamIfExcluded.toFixed(2)}%
                  </p>
                  <p className="text-xs text-emerald-700/80 dark:text-emerald-300/80 mt-1">No WAM movement</p>
                </div>
                <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
                  <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">Worst-case if 0 counted</p>
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-300 mt-1">
                    {result.wamIfZeroCounted.toFixed(2)}%
                  </p>
                  <p className="text-xs text-amber-700/80 dark:text-amber-300/80 mt-1">
                    Change {result.wamWorstCaseDelta.toFixed(2)}
                  </p>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/40 rounded-lg p-3">
              Confirm WN/WAM treatment on your official Monash record. This calculator is for planning and does not
              replace faculty advice.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
