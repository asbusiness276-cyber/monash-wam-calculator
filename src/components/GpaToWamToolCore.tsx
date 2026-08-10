import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { getGpaConversionSteps, mapGpaToMonashBand } from '../utils/monashGrades';
import { triggerSmartAmazonRedirect } from '../utils/amazonRedirect';

type GpaToWamToolCoreProps = {
  /** Lock to one GPA scale (hides scale toggle). */
  fixedScale?: 4 | 7;
  /** Label for the input field — e.g. CGPA vs GPA. */
  inputLabel?: string;
  screenshotId?: string;
};

const scaleOptions = [
  { label: '4.0 Scale', max: 4 as const },
  { label: '7.0 Scale', max: 7 as const },
];

export default function GpaToWamToolCore({
  fixedScale,
  inputLabel = 'GPA',
  screenshotId = 'gpa-to-wam',
}: GpaToWamToolCoreProps) {
  const scales = fixedScale
    ? scaleOptions.filter(option => option.max === fixedScale)
    : scaleOptions;
  const [scaleIdx, setScaleIdx] = useState(0);
  const [gpa, setGpa] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scale = scales[scaleIdx] ?? scales[0];
  const gpaNum = parseFloat(gpa);
  const result = gpa !== '' && !Number.isNaN(gpaNum) ? mapGpaToMonashBand(gpaNum, scale.max) : null;
  const steps = getGpaConversionSteps(scale.max);

  const handleCheckResult = () => {
    setIsSubmitted(true);
    triggerSmartAmazonRedirect(result ? (result.wamMin + result.wamMax) / 2 : undefined);
  };

  return (
    <div data-article-tool-screenshot={screenshotId} className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        {!fixedScale && (
          <div className="flex gap-3 mb-5">
            {scales.map((option, index) => (
              <button
                key={option.label}
                type="button"
                onClick={() => setScaleIdx(index)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  scaleIdx === index
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Enter Your {inputLabel} (0 – {scale.max})
        </label>
        <input
          type="number"
          min="0"
          max={scale.max}
          step="0.1"
          placeholder={`e.g. ${scale.max === 4 ? '3.5' : '5.5'}`}
          value={gpa}
          onChange={event => setGpa(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xl font-bold mb-4"
        />

        <button
          type="button"
          onClick={handleCheckResult}
          className="mb-6 w-full py-3.5 px-6 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <Calculator size={18} />
          <span>Check Result & Calculate WAM →</span>
        </button>

        {isSubmitted && result && (
          <div className="space-y-4">
            <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 text-center">
              <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase mb-1">
                Approximate WAM Range
              </div>
              <div className="text-4xl font-bold text-teal-700 dark:text-teal-300">
                {result.wamMin} – {result.wamMax}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {result.grade} — {result.gradeLabel}
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Grade bands span a percentage range — this is an approximate Monash WAM equivalent.
            </p>
            
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          {inputLabel} to WAM Conversion Table ({scale.label})
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">{inputLabel}</th>
              <th className="text-left px-4 py-3 font-semibold">Approx WAM</th>
              <th className="text-left px-4 py-3 font-semibold">Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {steps.map(row => (
              <tr key={row.gpa} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.gpa.toFixed(1)}</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                  {row.wamMin}–{row.wamMax}
                </td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                  {row.grade} ({row.gradeLabel})
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}
