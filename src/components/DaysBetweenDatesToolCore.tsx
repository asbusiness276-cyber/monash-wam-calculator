import { useState } from 'react';

export default function DaysBetweenDatesToolCore() {
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  
  // Default end date to a week from now
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const [endDate, setEndDate] = useState<string>(nextWeek.toISOString().split('T')[0]);

  let totalDays = 0;
  let isPast = false;
  
  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Normalize to midnight to avoid daylight saving issues
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
    
    const diffTime = end.getTime() - start.getTime();
    totalDays = diffTime / (1000 * 60 * 60 * 24);
    
    if (totalDays < 0) {
      totalDays = Math.abs(totalDays);
      isPast = true;
    }
  }

  const weeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;
  const months = (totalDays / 30.44).toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Days Between Dates</h2>
        <p className="text-sm text-slate-600 mt-1">Find out exactly how much time is between two dates.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
            />
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center mt-6">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Result</p>
          <p className="text-6xl font-extrabold text-indigo-600 mt-3">
            {totalDays} <span className="text-2xl font-bold">days</span>
          </p>
          <p className="text-lg text-indigo-700 font-medium mt-2">
            {isPast ? 'in the past' : ''}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-xl font-bold text-slate-800">{weeks} weeks, {remainingDays} days</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">In Weeks</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-xl font-bold text-slate-800">~{months} months</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">In Months</p>
          </div>
        </div>
      </div>
    </div>
  );
}
