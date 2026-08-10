import { useState } from 'react';
import { Plus, Trash2, Calculator } from 'lucide-react';
import UnitAutocompleteInput from './UnitAutocompleteInput';
import { calculateSemesterWamSummary, getMonashGradeFromMark } from '../utils/monashGrades';

interface SemesterUnit {
  id: number;
  unit: string;
  mark: string;
  credits: string;
}

let nextId = 5;

const defaultUnits: SemesterUnit[] = [
  { id: 1, unit: 'FIT1045', mark: '78', credits: '6' },
  { id: 2, unit: 'MAT1830', mark: '72', credits: '6' },
  { id: 3, unit: 'ENG1005', mark: '81', credits: '6' },
  { id: 4, unit: 'BIO1011', mark: '69', credits: '6' },
];

export default function SemesterWamToolCore() {
  const [units, setUnits] = useState<SemesterUnit[]>(defaultUnits);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const parsedUnits = units
    .filter(row => row.mark !== '' && row.credits !== '')
    .map(row => ({
      mark: parseFloat(row.mark),
      credits: parseFloat(row.credits),
    }))
    .filter(row => !Number.isNaN(row.mark) && !Number.isNaN(row.credits) && row.credits > 0);

  const summary = parsedUnits.length > 0 ? calculateSemesterWamSummary(parsedUnits) : null;
  const gradeBand = summary ? getMonashGradeFromMark(summary.weightedWam) : null;

  const updateUnit = (id: number, field: keyof SemesterUnit, value: string) => {
    setUnits(prev =>
      prev.map(row => (row.id === id ? { ...row, [field]: field === 'unit' ? value.toUpperCase() : value } : row))
    );
  };

  const addUnit = () => {
    setUnits(prev => [...prev, { id: nextId++, unit: '', mark: '', credits: '6' }]);
  };

  const removeUnit = (id: number) => {
    setUnits(prev => (prev.length <= 1 ? prev : prev.filter(row => row.id !== id)));
  };

  const handleCheckResult = () => {
    setIsSubmitted(true);
      };

  return (
    <div data-article-tool-screenshot="semester-wam" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2">This Semester&apos;s Units</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Add only the units from your current teaching period. This calculates a semester weighted average — not your
          cumulative degree WAM.
        </p>

        <div className="space-y-4">
          {units.map((row, index) => (
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
                  onChange={v => updateUnit(row.id, 'unit', v)}
                  placeholder={`e.g. FIT${1000 + index}`}
                  inputClassName="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
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
                  onChange={e => updateUnit(row.id, 'mark', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Credit points</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  placeholder="6"
                  value={row.credits}
                  onChange={e => updateUnit(row.id, 'credits', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <button
                type="button"
                onClick={() => removeUnit(row.id)}
                disabled={units.length <= 1}
                className="p-2.5 text-gray-400 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-lg"
                aria-label="Remove unit"
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
            <span>Check Result & Calculate WAM →</span>
          </button>
          <button
            type="button"
            onClick={addUnit}
            className="inline-flex items-center gap-2 px-4 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-xl transition-colors"
          >
            <Plus size={16} />
            Add Unit
          </button>
        </div>
      </div>

      {isSubmitted && summary && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-teal-200 dark:border-teal-900/50 p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400 mb-1">
            Semester weighted average
          </div>
          <div className="text-5xl font-bold text-gray-900 dark:text-white">{summary.weightedWam.toFixed(2)}%</div>
          {gradeBand && (
            <p className={`text-sm font-medium mt-2 ${gradeBand.color}`}>
              {gradeBand.grade} — {gradeBand.label}
            </p>
          )}
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
              <div className="text-gray-500 dark:text-gray-400">Simple unit average</div>
              <div className="font-semibold text-gray-900 dark:text-white">{summary.simpleAverage.toFixed(2)}%</div>
            </div>
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 p-3">
              <div className="text-gray-500 dark:text-gray-400">Semester credit points</div>
              <div className="font-semibold text-gray-900 dark:text-white">{summary.totalCredits}</div>
            </div>
          </div>
          {summary.simpleAverage !== summary.weightedWam && (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
              Weighted and simple averages differ because credit points are not equal across units (e.g. 6 cp vs 12 cp).
            </p>
          )}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
            For cumulative degree WAM including all past semesters, use the Monash WAM calculator on the homepage.
          </p>
          
        </div>
      )}
      
    </div>
  );
}
