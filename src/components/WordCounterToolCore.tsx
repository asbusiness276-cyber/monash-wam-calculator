import { useState } from 'react';

export default function WordCounterToolCore() {
  const [text, setText] = useState<string>('');

  const charCount = text.length;
  const charNoSpacesCount = text.replace(/\s/g, '').length;
  
  // Count words matching general word characters
  const wordsArray = text.match(/\b\w+\b/g);
  const wordCount = wordsArray ? wordsArray.length : 0;
  
  // Count sentences based on punctuation ending
  const sentenceArray = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
  const sentenceCount = sentenceArray.length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Word Counter</h2>
          <p className="text-sm text-slate-600 mt-1">Live text statistics.</p>
        </div>
        <button onClick={() => setText('')} className="text-xs bg-white px-3 py-1.5 border border-slate-200 rounded font-semibold text-slate-600 hover:text-slate-900 shadow-sm">Clear Text</button>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-indigo-50 p-4 border border-indigo-200 rounded-lg shadow-sm">
                <p className="text-3xl font-extrabold text-indigo-700">{wordCount}</p>
                <p className="text-xs uppercase text-indigo-600 font-bold mt-1">Words</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-2xl font-bold text-slate-800">{charCount}</p>
                <p className="text-xs uppercase text-slate-500 font-bold mt-1">Characters</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-2xl font-bold text-slate-800">{charNoSpacesCount}</p>
                <p className="text-xs uppercase text-slate-500 font-bold mt-1">Chars (No Spaces)</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-2xl font-bold text-slate-800">{sentenceCount}</p>
                <p className="text-xs uppercase text-slate-500 font-bold mt-1">Sentences</p>
            </div>
        </div>

        <div>
          <textarea 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Type or paste your text here..." 
            className="w-full h-64 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-4"
          />
        </div>

      </div>
    </div>
  );
}
