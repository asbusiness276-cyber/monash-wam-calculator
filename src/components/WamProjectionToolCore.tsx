import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import UnitAutocompleteInput from './UnitAutocompleteInput';
import { calculateProjectedWam, getUniGradeFromMark } from '../utils/uniGrades';

interface UpcomingUnit {
  id: number;
  unit: string;
  mark: string;
  credits: string;
}

let nextId = 4;

const defaultUpcoming: UpcomingUnit[] = [
  { id: 1, unit: 'FIT2004', mark: '80', credits: '6' },
  { id: 2, unit: 'MAT2749', mark: '75', credits: '6' },
  { id: 3, unit: 'ENG3005', mark: '85', credits: '12' },
];

export default function WamProjectionToolCore() {
  const [currentWam, setCurrentWam] = useState('');
  const [completedCredits, setCompletedCredits] = useState('');
  const [upcoming, setUpcoming] = useState<UpcomingUnit[]>(defaultUpcoming);

  const currentWamNum = currentWam === '' ? null : parseFloat(currentWam);
  const completedCpNum = completedCredits === '' ? null : parseFloat(completedCredits);

  const parsedUpcoming = upcoming
    .filter(row => row.mark !== '' && row.credits !== '')
    .map(row => ({
      mark: parseFloat(row.mark),
      credits: parseFloat(row.credits),
    }))
    .filter(row => !Number.isNaN(row.mark) && !Number.isNaN(row.credits) && row.credits > 0);

  const result =
    currentWamNum !== null &&
    completedCpNum !== null &&
    !Number.isNaN(currentWamNum) &&
    !Number.isNaN(completedCpNum) &&
    parsedUpcoming.length > 0
      ? calculateProjectedWam(currentWamNum, completedCpNum, parsedUpcoming)
      : null;

  const gradeBand = result ? getUniGradeFromMark(result.projectedWam) : null;

  const updateUpcoming = (id: number, field: keyof UpcomingUnit, value: string) => {
    setUpcoming(prev =>
      prev.map(row => (row.id === id ? { ...row, [field]: field === 'unit' ? value.toUpperCase() : value } : row))
    );
  };

  const addUpcoming = () => {
    setUpcoming(prev => [...prev, { id: nextId++, unit: '', mark: '', credits: '6' }]);
  };

  const removeUpcoming = (id: number) => {
    setUpcoming(prev => (prev.length <= 1 ? prev : prev.filter(row => row.id !== id)));
  };

  return (
    <div data-article-tool-screenshot="wam-projection" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Your Current Position</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Enter your official cumulative WAM and completed credit points from WES, then add upcoming units with
          expected or target marks.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Current WAM (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              placeholder="e.g. 72"
              value={currentWam}
              onChange={e => setCurrentWam(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
              Completed credit points
            </label>
            <input
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 96"
              value={completedCredits}
              onChange={e => setCompletedCredits(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Upcoming Units (What-If)</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Use expected marks for planning — label projections separately from confirmed results.
        </p>

        <div className="space-y-3">
          {upcoming.map((row, index) => (
            <div
              key={row.id}
              className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr_auto] gap-3 items-end rounded-xl border border-gray-200 dark:border-gray-700 p-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">
                  Unit (optional)
                </label>
                <UnitAutocompleteInput
                  field="unit"
                  value={row.unit}
                  onChange={v => updateUpcoming(row.id, 'unit', v)}
                  placeholder={`e.g. FIT${2000 + index}`}
                  inputClassName="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">
                  Expected mark (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  placeholder="0–100"
                  value={row.mark}
                  onChange={e => updateUpcoming(row.id, 'mark', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">
                  Credit points
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="6"
                  value={row.credits}
                  onChange={e => updateUpcoming(row.id, 'credits', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => removeUpcoming(row.id)}
                disabled={upcoming.length <= 1}
                className="p-2.5 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-lg"
                aria-label="Remove unit"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addUpcoming}
          className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <Plus size={16} />
          Add Upcoming Unit
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-violet-200 dark:border-violet-900/50 p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400 mb-1">
            Projected WAM
          </div>
          <div className="text-5xl font-bold text-gray-900 dark:text-white">{result.projectedWam.toFixed(2)}%</div>
          {gradeBand && (
            <p className={`text-sm font-medium mt-2 ${gradeBand.color}`}>
              {gradeBand.grade} — {gradeBand.label}
            </p>
          )}
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
              <div className="text-gray-500 dark:text-gray-400">Current WAM</div>
              <div className="font-semibold text-gray-900 dark:text-white">{result.currentWam.toFixed(2)}%</div>
            </div>
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
              <div className="text-gray-500 dark:text-gray-400">Change</div>
              <div
                className={`font-semibold ${
                  result.delta > 0
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : result.delta < 0
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-gray-900 dark:text-white'
                }`}
              >
                {result.delta > 0 ? '+' : ''}
                {result.delta.toFixed(2)} WAM
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
              <div className="text-gray-500 dark:text-gray-400">Upcoming credit points</div>
              <div className="font-semibold text-gray-900 dark:text-white">{result.upcomingCredits}</div>
            </div>
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
              <div className="text-gray-500 dark:text-gray-400">Total cp after</div>
              <div className="font-semibold text-gray-900 dark:text-white">{result.totalCreditsAfter}</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Planning projection using credit-weighted marks. Official WAM on WES also uses first-year 0.5
            level weighting — verify final numbers on your transcript.
          </p>
        </div>
      )}
    </div>
  );
}
