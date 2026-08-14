import { useState } from 'react';

export default function DetailedTextAnalyzerToolCore() {
  const [text, setText] = useState<string>('');

  const words = text.trim() ? text.trim().split(/\s+/) : [];
  const wordCount = words.length;
  const charsTotal = text.length;
  const charsNoSpaces = text.replace(/\s/g, '').length;
  
  // Splitting by typical sentence enders
  const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
  const sentenceCount = sentences.length;

  // Splitting by double newline
  const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim().length > 0) : [];
  const paragraphCount = paragraphs.length;

  // Average speaking speed is 130-150 words per minute
  const speakingTimeMinutes = wordCount / 140;
  const speakingMins = Math.floor(speakingTimeMinutes);
  const speakingSecs = Math.round((speakingTimeMinutes - speakingMins) * 60);

  // Average reading speed is 200-250 words per minute
  const readingTimeMinutes = wordCount / 225;
  const readingMins = Math.floor(readingTimeMinutes);
  const readingSecs = Math.round((readingTimeMinutes - readingMins) * 60);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Detailed Text & Speech Analyzer</h2>
        <p className="text-sm text-slate-600 mt-1">Paste your essay or speech script below.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here..."
            className="w-full h-48 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-sm"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-800">{wordCount}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Words</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-800">{charsTotal}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Characters</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-800">{sentenceCount}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Sentences</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-800">{paragraphCount}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Paragraphs</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Speaking Time</p>
              <p className="text-xs text-indigo-600 mt-1">At ~140 words per minute</p>
            </div>
            <p className="text-2xl font-extrabold text-indigo-600">
              {speakingMins}m {speakingSecs}s
            </p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-5 border border-emerald-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">Reading Time</p>
              <p className="text-xs text-emerald-600 mt-1">At ~225 words per minute</p>
            </div>
            <p className="text-2xl font-extrabold text-emerald-600">
              {readingMins}m {readingSecs}s
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
