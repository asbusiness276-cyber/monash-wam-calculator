import { useState } from 'react';
import ProductPopup from './ProductPopup';
import { useDelayedProductPopup } from '../hooks/useDelayedProductPopup';
import { calculateRequiredTermGpa, mapGpaToMonashBand } from '../utils/monashGrades';

interface MonashTargetGpaToolCoreProps {
  enableProductPopup?: boolean;
}

function getStatus(required: number | null) {
  if (required === null) return null;
  if (required > 4) {
    return {
      text: 'Target not achievable — you would need above 4.0 GPA next term on the planned credits.',
      color: 'text-red-600 dark:text-red-400',
    };
  }
  if (required < 0) {
    return {
      text: 'Target already secured — your current GPA is at or above the goal.',
      color: 'text-emerald-600 dark:text-emerald-400',
    };
  }
  return {
    text: `You need ${required.toFixed(3)} GPA next term (on planned credits) to reach your target cumulative GPA.`,
    color: 'text-amber-700 dark:text-amber-400',
  };
}

export default function MonashTargetGpaToolCore({ enableProductPopup = true }: MonashTargetGpaToolCoreProps) {
  const [currentGpa, setCurrentGpa] = useState('');
  const [creditsEarned, setCreditsEarned] = useState('');
  const [plannedCredits, setPlannedCredits] = useState('');
  const [targetGpa, setTargetGpa] = useState('');

  const required =
    currentGpa !== '' && creditsEarned !== '' && plannedCredits !== '' && targetGpa !== ''
      ? calculateRequiredTermGpa(
          parseFloat(currentGpa),
          parseFloat(creditsEarned),
          parseFloat(plannedCredits),
          parseFloat(targetGpa)
        )
      : null;

  const status = getStatus(required);
  const gradeBand =
    required !== null && required >= 0 && required <= 4 ? mapGpaToMonashBand(required, 4) : null;

  const allFieldsFilled =
    currentGpa !== '' && creditsEarned !== '' && plannedCredits !== '' && targetGpa !== '';

  const { popupOpen, setPopupOpen, recommendation } = useDelayedProductPopup({
    enabled: enableProductPopup,
    hasResult: status !== null,
    userReady: allFieldsFilled,
    route: '/monash-target-gpa-calculator',
    subjects: [{ code: 'GPA', mark: targetGpa === '' ? null : parseFloat(targetGpa) * 25 }],
  });

  return (
    <>
      <div data-article-tool-screenshot="monash-target-gpa" className="space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Enter Your Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Current cumulative GPA
              </label>
              <input
                type="number"
                min="0"
                max="4"
                step="0.001"
                placeholder="e.g. 2.750"
                value={currentGpa}
                onChange={e => setCurrentGpa(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Target cumulative GPA
              </label>
              <input
                type="number"
                min="0"
                max="4"
                step="0.001"
                placeholder="e.g. 3.000"
                value={targetGpa}
                onChange={e => setTargetGpa(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                placeholder="e.g. 96"
                value={creditsEarned}
                onChange={e => setCreditsEarned(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                Planned credits next term
              </label>
              <input
                type="number"
                min="1"
                step="1"
                placeholder="e.g. 24"
                value={plannedCredits}
                onChange={e => setPlannedCredits(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {status && (
            <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-5 text-center">
              {required !== null && required >= 0 && required <= 4 && (
                <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                  {required.toFixed(3)}
                </div>
              )}
              <p className={`text-sm font-medium ${status.color}`}>{status.text}</p>
              {gradeBand && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Roughly equivalent to {gradeBand.grade} ({gradeBand.gradeLabel}) performance band.
                </p>
              )}
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
