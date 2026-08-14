import { useState } from 'react';

export default function AlphabetizerToolCore() {
  const [text, setText] = useState<string>('');

  const alphabetize = (reverse: boolean) => {
    if (!text.trim()) return;
    
    // Split by newline, remove empty lines, trim whitespace
    let lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    // Sort case-insensitively
    lines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
    
    if (reverse) {
      lines.reverse();
    }
    
    setText(lines.join('\n'));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  const lineCount = text.trim() ? text.split('\n').filter(l => l.trim().length > 0).length : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Alphabetizer (List Sorter)</h2>
        <p className="text-sm text-slate-600 mt-1">Sort your references, bibliographies, or lists alphabetically.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <button onClick={() => alphabetize(false)} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded shadow-sm">
            Sort A-Z
          </button>
          <button onClick={() => alphabetize(true)} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-bold rounded shadow-sm">
            Sort Z-A
          </button>
          <button onClick={() => setText('')} className="px-4 py-2 bg-rose-100 hover:bg-rose-200 text-rose-800 text-sm font-bold rounded shadow-sm ml-auto">
            Clear
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your list here (one item per line)..."
          className="w-full h-64 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm"
        />

        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-500 font-medium">
            Items detected: {lineCount}
          </p>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg shadow-sm"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
}
