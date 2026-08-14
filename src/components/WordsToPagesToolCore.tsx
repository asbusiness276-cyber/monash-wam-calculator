import { useState } from 'react';

export default function WordsToPagesToolCore() {
  const [wordCount, setWordCount] = useState<number>(2000);
  const [spacing, setSpacing] = useState<'single' | 'double'>('double');
  const [font, setFont] = useState<'times' | 'arial'>('times');
  const [fontSize, setFontSize] = useState<number>(12);

  // Approximate words per page calculations
  // Times New Roman, 12pt, Single spacing ~ 500 words per page
  // Times New Roman, 12pt, Double spacing ~ 250 words per page
  // Arial is slightly larger, so ~450 single, 225 double
  
  const getWordsPerPage = () => {
    let base = font === 'times' ? 500 : 450;
    
    // Adjust for font size (rough inverse square approximation, since 12pt is our baseline)
    base = base * (144 / (fontSize * fontSize));
    
    // Adjust for spacing
    if (spacing === 'double') {
      base = base / 2;
    }
    
    return base;
  };

  const wordsPerPage = getWordsPerPage();
  const estimatedPages = wordCount / wordsPerPage;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Words to Pages Converter</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate how many pages your essay will be.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-200 pt-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Line Spacing</label>
            <select
              value={spacing}
              onChange={(e) => setSpacing(e.target.value as 'single' | 'double')}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="single">Single Spaced</option>
              <option value="double">Double Spaced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Font Family</label>
            <select
              value={font}
              onChange={(e) => setFont(e.target.value as 'times' | 'arial')}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="times">Times New Roman</option>
              <option value="arial">Arial / Calibri</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Font Size</label>
            <select
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="10">10 pt</option>
              <option value="11">11 pt</option>
              <option value="12">12 pt (Standard)</option>
              <option value="14">14 pt</option>
            </select>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Estimated Pages</p>
          <p className="text-5xl font-extrabold text-indigo-600 mt-3">
            {estimatedPages.toFixed(1)} <span className="text-xl font-medium text-indigo-400">pages</span>
          </p>
          <p className="text-xs text-indigo-500 font-medium mt-3">
            * Assuming 1-inch margins and standard A4/Letter size paper.
          </p>
        </div>
      </div>
    </div>
  );
}
