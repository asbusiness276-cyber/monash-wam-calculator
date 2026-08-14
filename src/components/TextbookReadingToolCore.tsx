import { useState } from 'react';

export default function TextbookReadingToolCore() {
  const [pages, setPages] = useState<number>(50);
  const [minsPerPage, setMinsPerPage] = useState<number>(3); // Academic reading is slower
  
  const totalMinutes = pages * minsPerPage;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Textbook Reading Time</h2>
        <p className="text-sm text-slate-600 mt-1">Estimate how long it will take to read a textbook chapter.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Total Pages to Read</label>
            <input
              type="number"
              min="1"
              value={pages || ''}
              onChange={(e) => setPages(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Time to read 1 page (Minutes)</label>
            <select
              value={minsPerPage}
              onChange={(e) => setMinsPerPage(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="1.5">1.5 mins (Light novel/Skimming)</option>
              <option value="3">3.0 mins (Standard textbook)</option>
              <option value="5">5.0 mins (Dense math/science text)</option>
              <option value="7">7.0 mins (Heavy highlighting/note-taking)</option>
            </select>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Total Study Time</p>
          <p className="text-5xl font-extrabold text-indigo-600 mt-3">
            {hours > 0 && <>{hours} <span className="text-xl font-medium">hr</span> </>}
            {minutes} <span className="text-xl font-medium">min</span>
          </p>
        </div>
      </div>
    </div>
  );
}
