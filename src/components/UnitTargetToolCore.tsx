import { useState } from 'react';
import { Plus, Trash2, Calculator } from 'lucide-react';
import {
  calculateRequiredRemainingAssessmentMark,
  getMonashGradeFromMark,
} from '../utils/monashGrades';

interface AssessmentRow {
  id: number;
  name: string;
  mark: string;
  weight: string;
}

let nextId = 4;

const defaultRows: AssessmentRow[] = [
  { id: 1, name: 'Assignment 1', mark: '75', weight: '25' },
  { id: 2, name: 'Mid-semester test', mark: '68', weight: '25' },
  { id: 3, name: 'Final exam', mark: '', weight: '50' },
];

function getStatus(needed: number | null) {
  if (needed === null) return null;
  if (needed > 100) {
    return { text: 'Target not achievable — would need above 100% on remaining assessments.', color: 'text-red-600 dark:text-red-400' };
  }
  if (needed < 0) {
    return { text: 'Target already achieved — any mark on remaining assessments will do.', color: 'text-emerald-600 dark:text-emerald-400' };
  }
  return {
    text: `You need ${needed.toFixed(2)}% average on remaining weighted assessments.`,
    color: 'text-primary-600 dark:text-primary-400',
  };
}

export default function UnitTargetToolCore() {
  const [rows, setRows] = useState<AssessmentRow[]>(defaultRows);
  const [targetMark, setTargetMark] = useState('75');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const parsed = rows
    .filter(row => row.weight !== '')
    .map(row => ({
      mark: row.mark === '' ? null : parseFloat(row.mark),
      weightPercent: parseFloat(row.weight),
    }))
    .filter(row => !Number.isNaN(row.weightPercent) && row.weightPercent >= 0);

  const totalWeight = parsed.reduce((sum, row) => sum + row.weightPercent, 0);
  const hasRemaining = parsed.some(row => row.mark === null || Number.isNaN(row.mark as number));
  const targetNum = targetMark === '' ? null : parseFloat(targetMark);

  const needed =
    hasRemaining && targetNum !== null && !Number.isNaN(targetNum)
      ? calculateRequiredRemainingAssessmentMark(parsed, targetNum)
      : null;

  const status = getStatus(needed);
  const targetGrade =
    targetNum !== null && !Number.isNaN(targetNum) && targetNum >= 0 && targetNum <= 100
      ? getMonashGradeFromMark(targetNum)
      : null;

  const updateRow = (id: number, field: keyof AssessmentRow, value: string) => {
    setRows(prev => prev.map(row => (row.id === id ? { ...row, [field]: value } : row)));
  };

  const addRow = () => {
    setRows(prev => [...prev, { id: nextId++, name: '', mark: '', weight: '' }]);
  };

  const removeRow = (id: number) => {
    setRows(prev => (prev.length <= 1 ? prev : prev.filter(row => row.id !== id)));
  };

  const handleCheckResult = () => {
    setIsSubmitted(true);
      };

  return (
    <div data-article-tool-screenshot="unit-target" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Assessment Progress</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Enter marks for completed assessments and leave remaining ones blank. Weights must total 100%.
        </p>

        <div className="space-y-3 mb-6">
          {rows.map(row => (
            <div
              key={row.id}
              className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr_1fr_auto] gap-3 items-end rounded-xl border border-gray-200 dark:border-gray-700 p-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Assessment</label>
                <input
                  type="text"
                  placeholder="e.g. Final exam"
                  value={row.name}
                  onChange={e => updateRow(row.id, 'name', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">
                  Mark (%) — blank if pending
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  placeholder="pending"
                  value={row.mark}
                  onChange={e => updateRow(row.id, 'mark', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Weight (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="1"
                  placeholder="e.g. 50"
                  value={row.weight}
                  onChange={e => updateRow(row.id, 'weight', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => removeRow(row.id)}
                disabled={rows.length <= 1}
                className="p-2.5 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-lg"
                aria-label="Remove assessment"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCheckResult}
            className="flex-1 py-3.5 px-6 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <Calculator size={18} />
            <span>Check Result & Calculate Mark →</span>
          </button>
          <button
            type="button"
            onClick={addRow}
            className="inline-flex items-center gap-2 px-4 py-3.5 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-xl transition-colors"
          >
            <Plus size={16} />
            Add Assessment
          </button>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
            Target overall unit mark (%)
          </label>
          <input
            type="number"
            min="0"
            max="100"
            step="0.1"
            placeholder="e.g. 75"
            value={targetMark}
            onChange={e => setTargetMark(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          {targetGrade && targetNum !== null && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Target band: {targetGrade.grade} ({targetGrade.label})
            </p>
          )}
        </div>

        {parsed.length > 0 && Math.abs(totalWeight - 100) > 0.5 && (
          <p className="mt-4 text-sm font-medium text-amber-600 dark:text-amber-400">
            Weights total {totalWeight.toFixed(1)}% — adjust to 100%.
          </p>
        )}
        {!hasRemaining && parsed.length > 0 && Math.abs(totalWeight - 100) <= 0.5 && (
          <p className="mt-4 text-sm font-medium text-amber-600 dark:text-amber-400">
            Leave at least one assessment mark blank to calculate what you still need.
          </p>
        )}
      </div>

      {isSubmitted && needed !== null && status && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-sky-200 dark:border-sky-900/50 p-6 shadow-sm text-center">
          {needed >= 0 && needed <= 100 && (
            <div className="text-5xl font-bold text-sky-600 dark:text-sky-400 mb-2">{needed.toFixed(2)}%</div>
          )}
          <p className={`text-sm font-medium ${status.color}`}>{status.text}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Applies to the combined weight of all pending assessments. For a simple coursework + exam split, you can
            also use the final grade calculator.
          </p>
        </div>
      )}
      
    </div>
  );
}
