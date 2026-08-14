import { useState } from 'react';

export default function TextCaseConverterToolCore() {
  const [text, setText] = useState<string>('');

  const toUpperCase = () => setText(text.toUpperCase());
  const toLowerCase = () => setText(text.toLowerCase());
  
  const toTitleCase = () => {
    // Simple title case (capitalizes first letter of every word)
    // Note: A true title case algorithm is more complex (ignoring 'and', 'the', etc.), but this is standard for utility tools
    const converted = text.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
    setText(converted);
  };
  
  const toSentenceCase = () => {
    // Capitalize first letter of string and after periods
    const converted = text.toLowerCase().replace(/(^\s*|\.\s+)([a-z])/g, (match) => {
      return match.toUpperCase();
    });
    setText(converted);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Text Case Converter</h2>
        <p className="text-sm text-slate-600 mt-1">Instantly convert your text to uppercase, lowercase, or Title Case.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <button onClick={toSentenceCase} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded border border-slate-300">
            Sentence case
          </button>
          <button onClick={toLowerCase} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded border border-slate-300">
            lower case
          </button>
          <button onClick={toUpperCase} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded border border-slate-300">
            UPPER CASE
          </button>
          <button onClick={toTitleCase} className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded border border-slate-300">
            Title Case
          </button>
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          className="w-full h-48 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm"
        />

        <div className="flex justify-between items-center">
          <p className="text-xs text-slate-500 font-medium">
            Character count: {text.length}
          </p>
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-lg shadow-sm"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
}
