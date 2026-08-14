import { useState, useEffect } from 'react';

export default function AgeCalculatorToolCore() {
  const [dob, setDob] = useState<string>('2000-01-01');
  const [targetDate, setTargetDate] = useState<string>(new Date().toISOString().split('T')[0]);
  
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [totalWeeks, setTotalWeeks] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);

  useEffect(() => {
    if (!dob || !targetDate) return;
    
    const d1 = new Date(dob);
    const d2 = new Date(targetDate);
    
    // Exact Age
    let y = d2.getFullYear() - d1.getFullYear();
    let m = d2.getMonth() - d1.getMonth();
    let d = d2.getDate() - d1.getDate();

    if (d < 0) {
      m -= 1;
      // Get days in previous month
      const prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
      d += prevMonth.getDate();
    }
    if (m < 0) {
      y -= 1;
      m += 12;
    }
    
    setYears(y >= 0 ? y : 0);
    setMonths(y >= 0 ? m : 0);
    setDays(y >= 0 ? d : 0);

    // Totals
    const diffTime = d2.getTime() - d1.getTime();
    if (diffTime >= 0) {
      const tDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setTotalDays(tDays);
      setTotalWeeks(Math.floor(tDays / 7));
      setTotalMonths(y * 12 + m);
    } else {
      setTotalDays(0);
      setTotalWeeks(0);
      setTotalMonths(0);
    }
  }, [dob, targetDate]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Age Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate your exact age in years, months, and days.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Target Date</label>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg p-2"
            />
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Exact Age</p>
          <div className="flex flex-wrap justify-center items-end gap-2 mt-3">
            <span className="text-5xl font-extrabold text-indigo-600">{years}</span>
            <span className="text-xl font-bold text-indigo-800 pb-1 mr-2">years</span>
            
            <span className="text-5xl font-extrabold text-indigo-600">{months}</span>
            <span className="text-xl font-bold text-indigo-800 pb-1 mr-2">months</span>
            
            <span className="text-5xl font-extrabold text-indigo-600">{days}</span>
            <span className="text-xl font-bold text-indigo-800 pb-1">days</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-800">{totalMonths.toLocaleString()}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Total Months</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-800">{totalWeeks.toLocaleString()}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Total Weeks</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
            <p className="text-2xl font-bold text-slate-800">{totalDays.toLocaleString()}</p>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Total Days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
