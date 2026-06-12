import { useState } from 'react';
import ProductPopup from './ProductPopup';
import GpaUnitRows, { createDefaultGpaUnits, parseGpaUnitRows } from './GpaUnitRows';
import { useDelayedProductPopup, useUserInteractionFlag } from '../hooks/useDelayedProductPopup';
import { calculateMonashCgpa } from '../utils/monashGrades';

interface MonashCgpaToolCoreProps {
  enableProductPopup?: boolean;
}

export default function MonashCgpaToolCore({ enableProductPopup = true }: MonashCgpaToolCoreProps) {
  const [priorGpa, setPriorGpa] = useState('');
  const [priorCredits, setPriorCredits] = useState('');
  const [units, setUnits] = useState(createDefaultGpaUnits(3));
  const { hasUserInteracted, markUserInteracted } = useUserInteractionFlag();

  const parsed = parseGpaUnitRows(units);
  const result =
    priorGpa !== '' && priorCredits !== '' && parsed.length > 0
      ? calculateMonashCgpa(parseFloat(priorGpa), parseFloat(priorCredits), parsed)
      : null;

  const allReady = priorGpa !== '' && priorCredits !== '' && parsed.length > 0;

  const { popupOpen, setPopupOpen, recommendation } = useDelayedProductPopup({
    enabled: enableProductPopup,
    hasResult: result !== null,
    userReady: hasUserInteracted && allReady,
    route: '/monash-cgpa-calculator',
    subjects: units.map(row => ({
      code: row.unit.trim() || 'CGPA',
      mark: row.mark === '' ? null : parseFloat(row.mark),
    })),
  });

  return (
    <>
      <div data-article-tool-screenshot="monash-cgpa" className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 space-y-8">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Prior Cumulative GPA</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Enter your cumulative GPA and total credit points earned <strong>before</strong> this semester (from WES or
              transcript).
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Cumulative GPA (4.0)
                </label>
                <input
                  type="number"
                  min="0"
                  max="4"
                  step="0.001"
                  placeholder="e.g. 2.850"
                  value={priorGpa}
                  onChange={e => {
                    markUserInteracted();
                    setPriorGpa(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Credits earned so far
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  placeholder="e.g. 72"
                  value={priorCredits}
                  onChange={e => {
                    markUserInteracted();
                    setPriorCredits(e.target.value);
                  }}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
              </div>
            </div>
          </div>

          <GpaUnitRows
            units={units}
            onChange={setUnits}
            onUserEdit={markUserInteracted}
            heading="This semester (courses taken or planned)"
            description="Add units from the current teaching period. Semester GPA and updated cumulative GPA calculate together."
          />

          {result && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 text-center">
                <div className="text-xs text-teal-700 dark:text-teal-400 font-semibold uppercase mb-1">
                  Semester GPA (SGPA)
                </div>
                <div className="text-4xl font-bold text-teal-800 dark:text-teal-200">
                  {result.semesterGpa.toFixed(3)}
                </div>
                <div className="text-xs text-teal-600 dark:text-teal-400 mt-1">
                  {result.semesterCredits} credit points this semester
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 text-center">
                <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold uppercase mb-1">
                  Cumulative GPA (CGPA)
                </div>
                <div className="text-4xl font-bold text-emerald-800 dark:text-emerald-200">
                  {result.cgpa.toFixed(3)}
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
                  {result.totalCredits} total credit points
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {enableProductPopup && (
        <ProductPopup recommendation={recommendation} isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      )}
    </>
  );
}
