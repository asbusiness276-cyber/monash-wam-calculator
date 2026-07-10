import { useState } from 'react';
import { convert10PointCgpaToGpa4 } from '../utils/monashGrades';

export default function CgpaToGpaToolCore() {
  const [scale, setScale] = useState<'10' | '4'>('10');
  const [cgpa, setCgpa] = useState('');

  const cgpaNum = parseFloat(cgpa);
  const gpa4 =
    cgpa !== '' && !Number.isNaN(cgpaNum)
      ? scale === '10'
        ? convert10PointCgpaToGpa4(cgpaNum)
        : cgpaNum >= 0 && cgpaNum <= 4
          ? cgpaNum
          : null
      : null;

  return (
    <div data-article-tool-screenshot="cgpa-to-gpa" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex gap-3 mb-5">
          <button
            type="button"
            onClick={() => setScale('10')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
              scale === '10' ? 'bg-violet-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            10-Point CGPA
          </button>
          <button
            type="button"
            onClick={() => setScale('4')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
              scale === '4' ? 'bg-violet-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            Monash 4.0 CGPA
          </button>
        </div>

        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Enter CGPA (0 – {scale === '10' ? '10' : '4'})
        </label>
        <input
          type="number"
          min="0"
          max={scale === '10' ? 10 : 4}
          step="0.01"
          placeholder={scale === '10' ? 'e.g. 8.5' : 'e.g. 3.2'}
          value={cgpa}
          onChange={event => setCgpa(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 text-xl font-bold mb-6"
        />

        {gpa4 !== null && (
          <div className="space-y-4">
            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-6 text-center">
              <div className="text-xs text-violet-600 dark:text-violet-400 font-semibold uppercase mb-1">
                GPA on 4.0 Scale
              </div>
              <div className="text-5xl font-bold text-violet-700 dark:text-violet-300">{gpa4.toFixed(3)}</div>
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              {scale === '10'
                ? '10-point CGPA is converted linearly: GPA (4.0) = CGPA ÷ 10 × 4. Confirm with your target institution.'
                : 'On Monash transcripts, CGPA and cumulative GPA on the 4.0 scale are the same metric.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
