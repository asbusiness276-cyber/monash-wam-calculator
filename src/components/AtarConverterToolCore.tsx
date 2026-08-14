import { useState } from 'react';
import {
  atarPlanningBands,
  convertAtarToPlanningBands,
  convertWamToAtarRange,
} from '../utils/uniGrades';

type Mode = 'atar-to-wam' | 'wam-to-atar';

export default function AtarConverterToolCore() {
  const [mode, setMode] = useState<Mode>('atar-to-wam');
  const [value, setValue] = useState('');

  const num = parseFloat(value);
  const atarResult = mode === 'atar-to-wam' && value !== '' && !Number.isNaN(num) ? convertAtarToPlanningBands(num) : null;
  const wamResult = mode === 'wam-to-atar' && value !== '' && !Number.isNaN(num) ? convertWamToAtarRange(num) : null;

  return (
    <div data-article-tool-screenshot="atar-converter" className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex gap-3 mb-5">
          <button
            type="button"
            onClick={() => setMode('atar-to-wam')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
              mode === 'atar-to-wam' ? 'bg-fuchsia-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            ATAR → WAM / GPA
          </button>
          <button
            type="button"
            onClick={() => setMode('wam-to-atar')}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
              mode === 'wam-to-atar' ? 'bg-fuchsia-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            WAM → ATAR
          </button>
        </div>

        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          {mode === 'atar-to-wam' ? 'Enter ATAR (0 – 99.95)' : 'Enter WAM (0 – 100)'}
        </label>
        <input
          type="number"
          min="0"
          max={mode === 'atar-to-wam' ? 99.95 : 100}
          step="0.05"
          placeholder={mode === 'atar-to-wam' ? 'e.g. 85.5' : 'e.g. 76'}
          value={value}
          onChange={event => setValue(event.target.value)}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 text-xl font-bold mb-6"
        />

        {atarResult && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800 rounded-xl p-4 text-center">
                <div className="text-xs uppercase text-fuchsia-600 dark:text-fuchsia-400 mb-1">WAM Range</div>
                <div className="text-2xl font-bold text-fuchsia-800 dark:text-fuchsia-200">
                  {atarResult.wamMin}–{atarResult.wamMax}
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                <div className="text-xs uppercase text-gray-500 mb-1">GPA 4.0</div>
                <div className="text-2xl font-bold">{atarResult.gpa4.toFixed(1)}</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
                <div className="text-xs uppercase text-gray-500 mb-1">GPA 7.0</div>
                <div className="text-2xl font-bold">{atarResult.gpa7.toFixed(1)}</div>
              </div>
            </div>
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">{atarResult.label} — indicative planning only.</p>
          </div>
        )}

        {wamResult && (
          <div className="bg-fuchsia-50 dark:bg-fuchsia-900/20 border border-fuchsia-200 dark:border-fuchsia-800 rounded-xl p-6 text-center">
            <div className="text-xs uppercase text-fuchsia-600 dark:text-fuchsia-400 mb-1">Indicative ATAR Range</div>
            <div className="text-4xl font-bold text-fuchsia-800 dark:text-fuchsia-200">
              {wamResult.atarMin} – {wamResult.atarMax}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{wamResult.label}</p>
          </div>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
        <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          Indicative ATAR ↔ WAM Bands
        </h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
              <th className="text-left px-4 py-3 font-semibold">ATAR</th>
              <th className="text-left px-4 py-3 font-semibold">WAM</th>
              <th className="text-left px-4 py-3 font-semibold">GPA 4.0</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {atarPlanningBands.map(row => (
              <tr key={row.label}>
                <td className="px-4 py-3">{row.atarMin}–{row.atarMax}</td>
                <td className="px-4 py-3">{row.wamMin}–{row.wamMax}</td>
                <td className="px-4 py-3">{row.gpa4.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
