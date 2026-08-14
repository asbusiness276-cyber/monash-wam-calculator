import { useState } from 'react';

export default function EssayWordCountToolCore() {
  const [totalWords, setTotalWords] = useState<number>(2000);
  const [introPercent, setIntroPercent] = useState<number>(10);
  const [conclusionPercent, setConclusionPercent] = useState<number>(10);

  const bodyPercent = 100 - introPercent - conclusionPercent;
  const introWords = Math.round(totalWords * (introPercent / 100));
  const conclusionWords = Math.round(totalWords * (conclusionPercent / 100));
  const bodyWords = totalWords - introWords - conclusionWords;
  
  // Standard 10% +/- allowance margin
  const margin = Math.round(totalWords * 0.1);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Essay Word Count Allocator</h2>
        <p className="text-sm text-slate-600 mt-1">Structure your essay and avoid rambling.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Total Required Word Count</label>
          <input
            type="number"
            min="100"
            step="100"
            value={totalWords || ''}
            onChange={(e) => setTotalWords(Number(e.target.value))}
            className="w-full max-w-xs rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg font-bold text-slate-700"
          />
          <p className="text-xs text-slate-500 mt-2">Target Range: {totalWords - margin} to {totalWords + margin} words (standard ±10% limit)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-200 pt-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Introduction Size (%)</label>
            <input
              type="range" min="5" max="25"
              value={introPercent}
              onChange={(e) => setIntroPercent(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <p className="text-xs text-center text-slate-600 mt-1">{introPercent}%</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Conclusion Size (%)</label>
            <input
              type="range" min="5" max="25"
              value={conclusionPercent}
              onChange={(e) => setConclusionPercent(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <p className="text-xs text-center text-slate-600 mt-1">{conclusionPercent}%</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex h-32 overflow-hidden items-end gap-1 px-8 pb-4">
            {/* Intro Bar */}
            <div className="flex-1 bg-sky-400 rounded-t flex flex-col items-center justify-end text-white pb-2 transition-all" style={{ height: `${introPercent}%` }}>
              <span className="text-xs font-bold">{introWords}</span>
            </div>
            {/* Body Bar */}
            <div className="flex-[4] bg-indigo-500 rounded-t flex flex-col items-center justify-end text-white pb-2 transition-all" style={{ height: `${bodyPercent}%` }}>
              <span className="text-lg font-bold">{bodyWords}</span>
            </div>
            {/* Conclusion Bar */}
            <div className="flex-1 bg-teal-400 rounded-t flex flex-col items-center justify-end text-white pb-2 transition-all" style={{ height: `${conclusionPercent}%` }}>
              <span className="text-xs font-bold">{conclusionWords}</span>
            </div>
          </div>
          <div className="flex text-center mt-2 text-sm font-semibold text-slate-600">
            <div className="flex-1 text-sky-600">Intro ({introPercent}%)</div>
            <div className="flex-[4] text-indigo-600">Body Paragraphs ({bodyPercent}%)</div>
            <div className="flex-1 text-teal-600">Conclusion ({conclusionPercent}%)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
