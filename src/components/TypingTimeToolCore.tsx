import { useState } from 'react';

export default function TypingTimeToolCore() {
  const [wordCount, setWordCount] = useState<number>(2000);
  const [wpm, setWpm] = useState<number>(40);

  const typingTimeMinutes = wordCount / wpm;
  const hours = Math.floor(typingTimeMinutes / 60);
  const minutes = Math.ceil(typingTimeMinutes % 60);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Typing Time Estimator</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate how long it takes to literally type your essay.</p>
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
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Typing Speed (WPM)</label>
            <select
              value={wpm}
              onChange={(e) => setWpm(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="20">Slow (20 WPM)</option>
              <option value="40">Average (40 WPM)</option>
              <option value="60">Fast (60 WPM)</option>
              <option value="80">Very Fast (80 WPM)</option>
              <option value="100">Professional (100 WPM)</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-center">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Raw Typing Time</p>
          <p className="text-4xl font-extrabold text-slate-800 mt-3">
            {hours > 0 && <>{hours} <span className="text-xl font-medium text-slate-500">hr</span> </>}
            {minutes} <span className="text-xl font-medium text-slate-500">min</span>
          </p>
          <p className="text-xs text-rose-500 font-medium mt-3">
            * This is non-stop typing time. Does not include research, thinking, or editing!
          </p>
        </div>
      </div>
    </div>
  );
}
