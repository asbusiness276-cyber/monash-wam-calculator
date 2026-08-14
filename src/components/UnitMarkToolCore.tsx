import { useState } from 'react';
import { Plus, Trash2, Calculator } from 'lucide-react';
import { calculateWeightedUnitMark, getUniGradeFromMark } from '../utils/uniGrades';

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
  { id: 3, name: 'Final exam', mark: '72', weight: '50' },
];

export default function UnitMarkToolCore() {
  const [rows, setRows] = useState<AssessmentRow[]>(defaultRows);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const parsed = rows
    .filter(row => row.mark !== '' && row.weight !== '')
    .map(row => ({
      mark: parseFloat(row.mark),
      weightPercent: parseFloat(row.weight),
    }))
    .filter(
      row =>
        !Number.isNaN(row.mark) &&
        !Number.isNaN(row.weightPercent) &&
        row.weightPercent >= 0 &&
        row.mark >= 0 &&
        row.mark <= 100
    );

  const totalWeight = parsed.reduce((sum, row) => sum + row.weightPercent, 0);
  const unitMark = calculateWeightedUnitMark(parsed);
  const gradeBand = unitMark !== null ? getUniGradeFromMark(unitMark) : null;

  const weightStatus =
    parsed.length === 0
      ? null
      : Math.abs(totalWeight - 100) <= 0.5
        ? { ok: true, text: 'Weights total 100% — ready to calculate.' }
        : { ok: false, text: `Weights total ${totalWeight.toFixed(1)}% — adjust to 100% for a valid unit mark.` };

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
    <div data-article-tool-screenshot="unit-mark" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Assessment Breakdown</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Enter each assessment mark and its weight (%). Weights must add up to 100% to calculate your overall unit
          mark.
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
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Mark (%)</label>
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
            className="inline-flex items-center gap-2 px-4 py-3.5 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-xl transition-colors"
          >
            <Plus size={16} />
            Add Assessment
          </button>
        </div>

        {weightStatus && (
          <p
            className={`mt-4 text-sm font-medium ${
              weightStatus.ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
            }`}
          >
            {weightStatus.text}
          </p>
        )}
      </div>

      {isSubmitted && unitMark !== null && gradeBand && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-cyan-200 dark:border-cyan-900/50 p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-400 mb-1">
            Overall unit mark
          </div>
          <div className="text-5xl font-bold text-gray-900 dark:text-white">{unitMark.toFixed(2)}%</div>
          <p className={`text-sm font-medium mt-2 ${gradeBand.color}`}>
            {gradeBand.grade} — {gradeBand.label}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Need only final-exam maths? Use the final grade calculator. For cumulative WAM across units, use the Uni
            WAM calculator.
          </p>
          
        </div>
      )}
      
    </div>
  );
}
