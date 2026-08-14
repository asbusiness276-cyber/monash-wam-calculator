import { useState, useEffect } from 'react';

export default function DateCalculatorToolCore() {
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  
  const [years, setYears] = useState<number | ''>(0);
  const [months, setMonths] = useState<number | ''>(0);
  const [weeks, setWeeks] = useState<number | ''>(0);
  const [days, setDays] = useState<number | ''>(30);
  
  const [resultDate, setResultDate] = useState<string>('');

  useEffect(() => {
    if (!startDate) return;
    
    const d = new Date(startDate);
    const sign = operation === 'add' ? 1 : -1;
    
    const y = years || 0;
    const m = months || 0;
    const w = weeks || 0;
    const day = days || 0;

    d.setFullYear(d.getFullYear() + (y * sign));
    d.setMonth(d.getMonth() + (m * sign));
    d.setDate(d.getDate() + (w * 7 * sign) + (day * sign));

    setResultDate(d.toDateString());
  }, [startDate, operation, years, months, weeks, days]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Date Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Start Date</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Operation</label>
            <select value={operation} onChange={(e) => setOperation(e.target.value as 'add' | 'subtract')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Years</label>
            <input type="number" min="0" value={years} onChange={(e) => setYears(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Months</label>
            <input type="number" min="0" value={months} onChange={(e) => setMonths(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Weeks</label>
            <input type="number" min="0" value={weeks} onChange={(e) => setWeeks(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Days</label>
            <input type="number" min="0" value={days} onChange={(e) => setDays(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="bg-indigo-50 p-6 border border-indigo-200 rounded-lg text-center shadow-sm">
            <p className="text-sm uppercase text-indigo-600 font-bold mb-1">Result Date</p>
            <p className="text-3xl font-extrabold text-indigo-700">{resultDate}</p>
        </div>
      </div>
    </div>
  );
}
