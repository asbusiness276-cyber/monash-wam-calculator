import { useState } from 'react';
import { calculateRequiredFinalExamMark, UNI_PASS_MARK } from '../utils/uniGrades';

export default function PassMarkToolCore() {
  const [currentMark, setCurrentMark] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [examWeight, setExamWeight] = useState('');

  const needed = (() => {
    const cm = parseFloat(currentMark);
    const cw = parseFloat(currentWeight) / 100;
    const ew = parseFloat(examWeight) / 100;
    if (Number.isNaN(cm) || Number.isNaN(cw) || Number.isNaN(ew)) return null;
    return calculateRequiredFinalExamMark(cm, cw, ew, UNI_PASS_MARK);
  })();

  const getStatus = (n: number | null) => {
    if (n === null) return null;
    if (n > 100) {
      return {
        text: 'Pass not achievable — coursework too low for 50% overall with this exam weight.',
        color: 'text-red-600 dark:text-red-400',
      };
    }
    if (n < 0) {
      return {
        text: 'You have already passed — coursework alone secures 50% or above.',
        color: 'text-emerald-600 dark:text-emerald-400',
      };
    }
    return {
      text: `You need ${n.toFixed(2)}% on the final exam to pass the unit (50% overall).`,
      color: 'text-amber-600 dark:text-amber-400',
    };
  };

  const status = getStatus(needed);

  return (
    <div data-article-tool-screenshot="pass-mark" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Target is fixed at <strong className="text-gray-700 dark:text-gray-300">50% (Pass)</strong>. Enter your
          coursework mark and weights from the unit guide.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Coursework mark so far (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              placeholder="e.g. 58"
              value={currentMark}
              onChange={e => setCurrentMark(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Coursework weight (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              placeholder="e.g. 60"
              value={currentWeight}
              onChange={e => setCurrentWeight(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Final exam weight (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              placeholder="e.g. 40"
              value={examWeight}
              onChange={e => setExamWeight(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>

        {status && (
          <div
            className={`mt-6 rounded-xl border p-5 text-center ${
              needed !== null && needed > 100
                ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                : needed !== null && needed < 0
                  ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                  : 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
            }`}
          >
            {needed !== null && needed >= 0 && needed <= 100 && (
              <div className="text-4xl font-bold text-amber-700 dark:text-amber-300 mb-1">{needed.toFixed(2)}%</div>
            )}
            <p className={`text-sm font-medium ${status.color}`}>{status.text}</p>
          </div>
        )}

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-900/40 p-3 rounded-lg">
          Formula: ({UNI_PASS_MARK} − coursework × coursework weight) ÷ exam weight
        </p>
      </div>
    </div>
  );
}
