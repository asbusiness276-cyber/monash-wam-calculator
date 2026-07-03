import { Plus, Trash2 } from 'lucide-react';
import UnitAutocompleteInput from './UnitAutocompleteInput';
import {
  getMonashOfficialGpaGradeFromMark,
  monashOfficialGpaGradeOptions,
  type MonashOfficialGpaGrade,
} from '../utils/monashGrades';

export interface GpaUnitRow {
  id: number;
  unit: string;
  credits: string;
  inputMode: 'grade' | 'mark';
  grade: MonashOfficialGpaGrade;
  mark: string;
}

interface GpaUnitRowsProps {
  units: GpaUnitRow[];
  onChange: (units: GpaUnitRow[]) => void;
  heading?: string;
  description?: string;
}

export function createDefaultGpaUnits(count = 4): GpaUnitRow[] {
  const samples: Array<{ unit: string; mark: string; grade: MonashOfficialGpaGrade }> = [
    { unit: 'FIT1045', mark: '78', grade: 'D' },
    { unit: 'MAT1830', mark: '85', grade: 'HD' },
    { unit: 'ENG1005', mark: '65', grade: 'C' },
    { unit: 'BIO1011', mark: '72', grade: 'D' },
  ];

  return samples.slice(0, count).map((sample, index) => ({
    id: index + 1,
    unit: sample.unit,
    credits: '6',
    inputMode: 'mark' as const,
    grade: sample.grade,
    mark: sample.mark,
  }));
}

let nextGpaRowId = 100;

export default function GpaUnitRows({
  units,
  onChange,
  heading = 'Your Units',
  description = 'Enter each unit grade or percentage mark and credit points. Monash GPA uses the official 4.0 scale (fail = 0.3).',
}: GpaUnitRowsProps) {
  const updateRow = (id: number, patch: Partial<GpaUnitRow>) => {
    onChange(
      units.map(row => {
        if (row.id !== id) return row;
        const next = { ...row, ...patch };
        if (patch.mark !== undefined && next.inputMode === 'mark') {
          const parsed = parseFloat(patch.mark);
          const derived = patch.mark === '' || Number.isNaN(parsed) ? null : getMonashOfficialGpaGradeFromMark(parsed);
          if (derived) next.grade = derived;
        }
        return next;
      })
    );
  };

  const addRow = () => {
    onChange([
      ...units,
      { id: nextGpaRowId++, unit: '', credits: '6', inputMode: 'mark', grade: 'P', mark: '' },
    ]);
  };

  const removeRow = (id: number) => {
    if (units.length <= 1) return;
    onChange(units.filter(row => row.id !== id));
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{heading}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>

      {units.map((row, index) => (
        <div
          key={row.id}
          className="grid grid-cols-1 sm:grid-cols-[1.1fr_0.9fr_1fr_1fr_auto] gap-3 items-end rounded-xl border border-gray-200 dark:border-gray-700 p-4"
        >
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">
              Unit (optional)
            </label>
            <UnitAutocompleteInput
              field="unit"
              value={row.unit}
              onChange={v => updateRow(row.id, { unit: v })}
              placeholder={`e.g. FIT${1000 + index}`}
              inputClassName="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Credits</label>
            <input
              type="number"
              min="1"
              step="1"
              value={row.credits}
              onChange={e => updateRow(row.id, { credits: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Input</label>
            <select
              value={row.inputMode}
              onChange={e => updateRow(row.id, { inputMode: e.target.value as 'grade' | 'mark' })}
              className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
            >
              <option value="mark">Mark (%)</option>
              <option value="grade">Letter grade</option>
            </select>
          </div>
          <div>
            {row.inputMode === 'mark' ? (
              <>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Mark (%)</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  placeholder="e.g. 75"
                  value={row.mark}
                  onChange={e => updateRow(row.id, { mark: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                />
              </>
            ) : (
              <>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1.5">Grade</label>
                <select
                  value={row.grade}
                  onChange={e => updateRow(row.id, { grade: e.target.value as MonashOfficialGpaGrade })}
                  className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                >
                  {monashOfficialGpaGradeOptions.map(opt => (
                    <option key={opt.grade} value={opt.grade}>
                      {opt.grade} — {opt.label}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={() => removeRow(row.id)}
            className="p-2.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors self-end"
            aria-label="Remove unit"
          >
            <Trash2 size={16} />
          </button>
          {row.inputMode === 'mark' && row.mark !== '' && (
            <p className="sm:col-span-4 text-xs text-gray-500 dark:text-gray-400 -mt-1">
              Mapped grade: <strong>{row.grade}</strong> (GPA value{' '}
              {monashOfficialGpaGradeOptions.find(o => o.grade === row.grade)?.gpaValue})
            </p>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <Plus size={16} />
        Add unit
      </button>
    </div>
  );
}

export function parseGpaUnitRows(units: GpaUnitRow[]) {
  return units
    .filter(row => row.credits !== '')
    .map(row => ({
      grade: row.grade,
      credits: parseFloat(row.credits),
    }))
    .filter(row => !Number.isNaN(row.credits) && row.credits > 0);
}
