import { useState } from 'react';
import { Plus, Trash2, Calculator } from 'lucide-react';
import { calculateCreditWeightedWam, calculateSimpleMarkAverage, getMonashGradeFromMark } from '../utils/monashGrades';
import { triggerSmartAmazonRedirect } from '../utils/amazonRedirect';

interface GradeRow {
  id: number;
  mark: string;
  credits: string;
}

let nextId = 4;

const defaultRows: GradeRow[] = [
  { id: 1, mark: '78', credits: '6' },
  { id: 2, mark: '72', credits: '6' },
  { id: 3, mark: '81', credits: '6' },
  { id: 4, mark: '69', credits: '6' },
];

export default function GradeAverageToolCore() {
  const [rows, setRows] = useState<GradeRow[]>(defaultRows);

  const parsedMarks = rows
    .filter(row => row.mark !== '')
    .map(row => parseFloat(row.mark))
    .filter(mark => !Number.isNaN(mark) && mark >= 0 && mark <= 100);

  const parsedWeighted = rows
    .filter(row => row.mark !== '' && row.credits !== '')
    .map(row => ({ mark: parseFloat(row.mark), credits: parseFloat(row.credits) }))
    .filter(row => !Number.isNaN(row.mark) && !Number.isNaN(row.credits) && row.credits > 0);

  const simpleAverage = calculateSimpleMarkAverage(parsedMarks);
  const weightedAverage = calculateCreditWeightedWam(parsedWeighted);
  const gradeBand =
    weightedAverage !== null
      ? getMonashGradeFromMark(weightedAverage)
      : simpleAverage !== null
        ? getMonashGradeFromMark(simpleAverage)
        : null;

  const updateRow = (id: number, field: keyof GradeRow, value: string) => {
    setRows(prev => prev.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const addRow = () => {
    setRows(prev => [...prev, { id: nextId++, mark: '', credits: '' }]);
  };

  const removeRow = (id: number) => {
    setRows(prev => (prev.length <= 1 ? prev : prev.filter(row => row.id !== id)));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCheckResult = () => {
    setIsSubmitted(true);
    triggerSmartAmazonRedirect(weightedAverage ?? simpleAverage ?? undefined);
  };

  return (
    <div data-article-tool-screenshot="grade-average" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Enter Your Marks</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Add unit or assessment marks (0–100). Credit points are optional — leave blank for a simple average, or enter
          cp for a credit-weighted average.
        </p>

        <div className="space-y-3">
          {rows.map((row, index) => (
            <div
              key={row.id}
              className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-3 items-end rounded-xl border border-gray-200 dark:border-gray-700 p-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">
                  Mark {index + 1} (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  placeholder="0–100"
                  value={row.mark}
                  onChange={e => updateRow(row.id, 'mark', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">
                  Credit points (optional)
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="e.g. 6"
                  value={row.credits}
                  onChange={e => updateRow(row.id, 'credits', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                disabled={rows.length <= 1}
                className="p-2.5 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-lg"
                aria-label="Remove row"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCheckResult}
            className="flex-1 py-3.5 px-6 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Calculator size={18} />
            <span>Check Result & Calculate Average →</span>
          </button>
          <button
            type="button"
            onClick={addRow}
            className="inline-flex items-center gap-2 px-4 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-xl transition-colors"
          >
            <Plus size={16} />
            Add Mark
          </button>
        </div>
      </div>

      {isSubmitted && (simpleAverage !== null || weightedAverage !== null) && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-teal-200 dark:border-teal-900/50 p-6 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {simpleAverage !== null && (
              <div className="rounded-xl bg-gray-50 dark:bg-gray-900/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Simple grade average
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mt-1">{simpleAverage.toFixed(2)}%</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Equal weight per mark entered</p>
              </div>
            )}
            {weightedAverage !== null && parsedWeighted.length >= 2 && (
              <div className="rounded-xl bg-teal-50 dark:bg-teal-900/20 p-4 border border-teal-100 dark:border-teal-900/40">
                <div className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  Credit-weighted average
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mt-1">{weightedAverage.toFixed(2)}%</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Weighted by credit points</p>
              </div>
            )}
          </div>
          {gradeBand && (
            <p className={`text-sm font-medium mt-4 ${gradeBand.color}`}>
              {gradeBand.grade} — {gradeBand.label}
            </p>
          )}
        </div>
      )}
      
    </div>
  );
}
