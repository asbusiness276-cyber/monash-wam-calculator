import { useState } from 'react';
import ProductPopup from './ProductPopup';
import GpaUnitRows, { createDefaultGpaUnits, parseGpaUnitRows } from './GpaUnitRows';
import { useDelayedProductPopup, useUserInteractionFlag } from '../hooks/useDelayedProductPopup';
import {
  calculateMonashOfficialGpa,
  isMonashDistinctionAverage,
  monashOfficialGpaGradeOptions,
} from '../utils/monashGrades';

interface MonashGpaToolCoreProps {
  enableProductPopup?: boolean;
}

export default function MonashGpaToolCore({ enableProductPopup = true }: MonashGpaToolCoreProps) {
  const [units, setUnits] = useState(createDefaultGpaUnits());
  const { hasUserInteracted, markUserInteracted } = useUserInteractionFlag();

  const parsed = parseGpaUnitRows(units);
  const result = parsed.length > 0 ? calculateMonashOfficialGpa(parsed) : null;
  const distinction = result ? isMonashDistinctionAverage(null, result.gpa) : false;

  const { popupOpen, setPopupOpen, recommendation } = useDelayedProductPopup({
    enabled: enableProductPopup,
    hasResult: result !== null,
    userReady: hasUserInteracted,
    route: '/monash-gpa-calculator',
    subjects: units.map(row => ({
      code: row.unit.trim() || 'GPA',
      mark: row.mark === '' ? null : parseFloat(row.mark),
    })),
  });

  return (
    <>
      <div data-article-tool-screenshot="monash-gpa" className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <GpaUnitRows units={units} onChange={setUnits} onUserEdit={markUserInteracted} />

          {result && (
            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 text-center">
                  <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold uppercase mb-1">
                    Monash GPA
                  </div>
                  <div className="text-4xl font-bold text-amber-800 dark:text-amber-200">{result.gpa.toFixed(3)}</div>
                  <div className="text-xs text-amber-600 dark:text-amber-400 mt-1">out of 4.0</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase mb-1">
                    Total grade points
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    {result.totalGradePoints.toFixed(1)}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase mb-1">
                    Credit points
                  </div>
                  <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">{result.totalCredits}</div>
                </div>
              </div>
              <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                {distinction ? (
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                    GPA {result.gpa.toFixed(3)} meets Monash distinction average (3.0+).
                  </span>
                ) : (
                  <span>
                    Distinction average at Monash is typically GPA <strong>3.0</strong> (roughly WAM 70+).
                  </span>
                )}
              </p>
            </div>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            Monash Official GPA Grade Values
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <th className="text-left px-4 py-3 font-semibold">Grade</th>
                <th className="text-left px-4 py-3 font-semibold">Mark range</th>
                <th className="text-left px-4 py-3 font-semibold">GPA value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {monashOfficialGpaGradeOptions.map(row => (
                <tr key={row.grade}>
                  <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.grade}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.markRange}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.gpaValue.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {enableProductPopup && (
        <ProductPopup recommendation={recommendation} isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      )}
    </>
  );
}
