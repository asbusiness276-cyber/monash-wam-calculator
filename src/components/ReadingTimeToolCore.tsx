import { useState } from 'react';

export default function ReadingTimeToolCore() {
  const [wordCount, setWordCount] = useState<number>(5000);
  const [wpm, setWpm] = useState<number>(200);

  const readingTimeMinutes = wordCount / wpm;
  const hours = Math.floor(readingTimeMinutes / 60);
  const minutes = Math.ceil(readingTimeMinutes % 60);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Reading Time Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Estimate how long it will take to read an assignment.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Total Word Count</label>
            <input
              type="number"
              min="1"
              value={wordCount || ''}
              onChange={(e) => setWordCount(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-500 mt-1">Note: A standard academic page has ~250-300 words.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Reading Speed (WPM)</label>
            <select
              value={wpm}
              onChange={(e) => setWpm(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="130">Slow (130 words per minute)</option>
              <option value="200">Average (200 words per minute)</option>
              <option value="250">Academic / Technical (250 wpm)</option>
              <option value="300">Fast (300 words per minute)</option>
              <option value="400">Skimming (400 words per minute)</option>
            </select>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Estimated Reading Time</p>
          <p className="text-4xl font-extrabold text-indigo-600 mt-3">
            {hours > 0 && <>{hours} <span className="text-xl font-medium text-indigo-400">hr</span> </>}
            {minutes} <span className="text-xl font-medium text-indigo-400">min</span>
          </p>
        </div>
      </div>
    </div>
  );
}
