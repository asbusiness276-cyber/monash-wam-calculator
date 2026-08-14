import { useState } from 'react';
import { Calculator } from 'lucide-react';
import {
  calculateBreakevenRepeatMark,
  calculateWamAfterRepeatAttempt,
  calculateWamAfterReplacingUnitMark,
  getUniGradeFromMark,
  uniSupplementaryPassMark,
} from '../utils/uniGrades';

function formatDelta(delta: number | null) {
  if (delta === null || delta === 0) return 'No change';
  const sign = delta > 0 ? '+' : '';
  return `${sign}${delta.toFixed(2)} WAM`;
}

function deltaColor(delta: number | null) {
  if (delta === null || delta === 0) return 'text-gray-500 dark:text-gray-400';
  return delta > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400';
}

export default function SuppRepeatToolCore() {
  const [currentWam, setCurrentWam] = useState('');
  const [totalCredits, setTotalCredits] = useState('');
  const [failMark, setFailMark] = useState('');
  const [unitCredits, setUnitCredits] = useState('');
  const [repeatMark, setRepeatMark] = useState('70');
  

  const wamNum = currentWam === '' ? null : parseFloat(currentWam);
  const creditsNum = totalCredits === '' ? null : parseFloat(totalCredits);
  const failNum = failMark === '' ? null : parseFloat(failMark);
  const unitCpNum = unitCredits === '' ? null : parseFloat(unitCredits);
  const repeatNum = repeatMark === '' ? null : parseFloat(repeatMark);

  const hasInputs =
    wamNum !== null &&
    creditsNum !== null &&
    failNum !== null &&
    unitCpNum !== null &&
    !Number.isNaN(wamNum) &&
    !Number.isNaN(creditsNum) &&
    !Number.isNaN(failNum) &&
    !Number.isNaN(unitCpNum);

  const suppPassWam =
    hasInputs
      ? calculateWamAfterReplacingUnitMark(
          wamNum,
          creditsNum,
          unitCpNum,
          failNum,
          uniSupplementaryPassMark
        )
      : null;

  const repeatWam =
    hasInputs && repeatNum !== null && !Number.isNaN(repeatNum)
      ? calculateWamAfterRepeatAttempt(wamNum, creditsNum, unitCpNum, repeatNum)
      : null;

  const breakeven =
    hasInputs
      ? calculateBreakevenRepeatMark(wamNum, creditsNum, unitCpNum, failNum)
      : null;

  const suppDelta = suppPassWam !== null && wamNum !== null ? suppPassWam - wamNum : null;
  const repeatDelta = repeatWam !== null && wamNum !== null ? repeatWam - wamNum : null;

  const repeatBetter =
    repeatWam !== null && suppPassWam !== null ? repeatWam > suppPassWam : null;

  const repeatGrade =
    repeatNum !== null && !Number.isNaN(repeatNum) ? getUniGradeFromMark(repeatNum) : null;

  const handleCheckResult = () => {
    
      };

  return (
    <div data-article-tool-screenshot="supp-repeat-wam" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Your Transcript Snapshot</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Enter your current WAM with the fail included, plus the failed unit details from WES.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Current WAM (%) — fail included
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g. 68.25"
              value={currentWam}
              onChange={e => setCurrentWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Total completed credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 24"
              value={totalCredits}
              onChange={e => setTotalCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
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
              placeholder="e.g. 47"
              value={failMark}
              onChange={e => setFailMark(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Failed unit credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 6 or 12"
              value={unitCredits}
              onChange={e => setUnitCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Planned repeat mark (%) — for comparison only
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              placeholder="e.g. 70"
              value={repeatMark}
              onChange={e => setRepeatMark(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>
        </div>

        <button
          type="button"
          onClick={handleCheckResult}
          className="w-full py-3.5 px-6 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Calculator size={18} />
          <span>Check Result & Compare WAM Impact →</span>
        </button>
      </div>

      {hasInputs && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-rose-200 dark:border-rose-900/50 p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-rose-600 dark:text-rose-400 mb-1">
                Supplementary pass
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Uni caps a passed supplementary at {uniSupplementaryPassMark}% (P). Failing supp keeps your
                original fail mark.
              </p>
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                {suppPassWam !== null ? suppPassWam.toFixed(2) : '—'}
              </div>
              <p className={`text-sm font-medium mt-2 ${deltaColor(suppDelta)}`}>
                {formatDelta(suppDelta)} vs current
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-amber-200 dark:border-amber-900/50 p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-amber-600 dark:text-amber-400 mb-1">
                Repeat unit
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                WAM includes failed and repeated attempts — both count in the average.
              </p>
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                {repeatWam !== null ? repeatWam.toFixed(2) : '—'}
              </div>
              <p className={`text-sm font-medium mt-2 ${deltaColor(repeatDelta)}`}>
                {formatDelta(repeatDelta)} vs current
                {repeatGrade && repeatNum !== null && repeatNum >= 0 && repeatNum <= 100 && (
                  <span className="text-gray-500 dark:text-gray-400"> · {repeatGrade.grade} band at {repeatNum}%</span>
                )}
              </p>
            </div>
          </div>

          {breakeven !== null && (
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-5">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {breakeven > 100 ? (
                  <>
                    A supplementary pass ({uniSupplementaryPassMark}%) improves WAM more than any realistic repeat
                    mark in this scenario.
                  </>
                ) : breakeven <= uniSupplementaryPassMark ? (
                  <>
                    Repeat beats supplementary pass if you score above{' '}
                    <strong>{breakeven.toFixed(2)}%</strong> on the repeated unit.
                  </>
                ) : (
                  <>
                    You need roughly <strong>{breakeven.toFixed(2)}%</strong> on a repeat to beat passing supplementary
                    at {uniSupplementaryPassMark}%.
                  </>
                )}
                {repeatWam !== null && suppPassWam !== null && repeatNum !== null && !Number.isNaN(repeatNum) && (
                  <span className="block mt-2 text-gray-600 dark:text-gray-400">
                    At your planned {repeatNum}% repeat:{' '}
                    {repeatBetter
                      ? 'repeat gives a higher WAM than supplementary pass.'
                      : 'supplementary pass gives a higher WAM than this repeat mark.'}
                  </span>
                )}
              </p>
            </div>
          )}

          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            Planning tool only. Uni official WAM also uses year-level weighting and faculty rules for repeats.
            Confirm outcomes on WES and Uni supplementary assessment pages before changing enrolment.
          </p>
        </div>
      )}
      
    </div>
  );
}
