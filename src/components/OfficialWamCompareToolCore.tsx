import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import UnitAutocompleteInput from './UnitAutocompleteInput';
import {
  compareSimpleAndOfficialWam,
  inferUniYearLevelFromUnitCode,
} from '../utils/uniGrades';

interface CompareUnit {
  id: number;
  unit: string;
  mark: string;
  credits: string;
  yearLevel: string;
}

let nextId = 5;

const defaultUnits: CompareUnit[] = [
  { id: 1, unit: 'FIT1045', mark: '78', credits: '6', yearLevel: '1' },
  { id: 2, unit: 'MAT1830', mark: '85', credits: '6', yearLevel: '1' },
  { id: 3, unit: 'FIT2004', mark: '72', credits: '6', yearLevel: '2' },
  { id: 4, unit: 'FIT3161', mark: '80', credits: '6', yearLevel: '3' },
];

export default function OfficialWamCompareToolCore() {
  const [units, setUnits] = useState<CompareUnit[]>(defaultUnits);

  const parsed = units
    .filter(row => row.mark !== '' && row.credits !== '' && row.yearLevel !== '')
    .map(row => ({
      mark: parseFloat(row.mark),
      credits: parseFloat(row.credits),
      yearLevel: parseInt(row.yearLevel, 10),
    }))
    .filter(
      row =>
        !Number.isNaN(row.mark) &&
        !Number.isNaN(row.credits) &&
        !Number.isNaN(row.yearLevel) &&
        row.credits > 0 &&
        row.yearLevel >= 1
    );

  const comparison = parsed.length > 0 ? compareSimpleAndOfficialWam(parsed) : null;

  const updateUnit = (id: number, field: keyof CompareUnit, value: string) => {
    setUnits(prev =>
      prev.map(row => {
        if (row.id !== id) return row;
        const next = {
          ...row,
          [field]: field === 'unit' ? value.toUpperCase() : value,
        };
        if (field === 'unit') {
          const inferred = inferUniYearLevelFromUnitCode(value);
          if (inferred !== null) next.yearLevel = String(inferred);
        }
        return next;
      })
    );
  };

  const addUnit = () => {
    setUnits(prev => [...prev, { id: nextId++, unit: '', mark: '', credits: '6', yearLevel: '1' }]);
  };

  const removeUnit = (id: number) => {
    setUnits(prev => (prev.length <= 1 ? prev : prev.filter(row => row.id !== id)));
  };

  return (
    <div data-article-tool-screenshot="official-wam-compare" className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Uni official WAM weights Year 1 units at 0.5 and Year 2+ at 1.0. Simple planning WAM ignores year level —
          enter your units to see both side by side.
        </p>

        <div className="space-y-4">
          {units.map((row, index) => (
            <div
              key={row.id}
              className="grid grid-cols-1 sm:grid-cols-[1.1fr_1fr_0.8fr_0.8fr_auto] gap-3 items-end rounded-xl border border-gray-200 dark:border-gray-700 p-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Unit</label>
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
                  value={row.mark}
                  onChange={e => updateUnit(row.id, 'mark', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">CP</label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={row.credits}
                  onChange={e => updateUnit(row.id, 'credits', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Year</label>
                <select
                  value={row.yearLevel}
                  onChange={e => updateUnit(row.id, 'yearLevel', e.target.value)}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                >
                  {[1, 2, 3, 4].map(y => (
                    <option key={y} value={y}>
                      Year {y}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() => removeUnit(row.id)}
                className="p-2.5 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Remove unit"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addUnit}
          className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
        >
          <Plus size={16} />
          Add unit
        </button>

        {comparison && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-5 text-center">
              <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">Planning WAM</p>
              <p className="text-3xl font-bold text-gray-800 dark:text-white">{comparison.simpleWam.toFixed(2)}%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Credit-weighted only</p>
            </div>
            <div className="rounded-xl border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 p-5 text-center">
              <p className="text-xs font-semibold uppercase text-primary-600 dark:text-primary-400 mb-1">Official WAM</p>
              <p className="text-3xl font-bold text-primary-700 dark:text-primary-300">
                {comparison.officialWam.toFixed(2)}%
              </p>
              <p className="text-xs text-primary-600/80 dark:text-primary-400/80 mt-2">Year 1 = 0.5 weight</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-5 text-center">
              <p className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-1">Difference</p>
              <p
                className={`text-3xl font-bold ${
                  comparison.difference > 0
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : comparison.difference < 0
                      ? 'text-amber-600 dark:text-amber-400'
                      : 'text-gray-800 dark:text-white'
                }`}
              >
                {comparison.difference > 0 ? '+' : ''}
                {comparison.difference.toFixed(2)}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{comparison.totalCredits} cp entered</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
