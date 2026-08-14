import { useState, useEffect } from 'react';

export default function TimeDurationCalculatorToolCore() {
  const [startTime, setStartTime] = useState<string>('09:00');
  const [endTime, setEndTime] = useState<string>('17:30');
  
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);

  useEffect(() => {
    if (!startTime || !endTime) return;
    
    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);
    
    let startTotal = startH * 60 + startM;
    let endTotal = endH * 60 + endM;
    
    if (endTotal < startTotal) {
      endTotal += 24 * 60; // Assuming it crosses midnight
    }
    
    const diff = endTotal - startTotal;
    setHours(Math.floor(diff / 60));
    setMinutes(diff % 60);
  }, [startTime, endTime]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Time Duration Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Start Time</label>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">End Time</label>
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3" />
          </div>
        </div>

        <div className="bg-indigo-50 p-6 border border-indigo-200 rounded-lg text-center shadow-sm">
            <p className="text-sm uppercase text-indigo-600 font-bold mb-1">Time Elapsed</p>
            <div className="flex justify-center items-baseline gap-2">
               <span className="text-5xl font-extrabold text-indigo-700">{hours}</span>
               <span className="text-xl font-bold text-indigo-500">hours</span>
               <span className="text-5xl font-extrabold text-indigo-700 ml-2">{minutes}</span>
               <span className="text-xl font-bold text-indigo-500">mins</span>
            </div>
            <p className="text-sm font-semibold text-slate-500 mt-3">Total Minutes: {hours * 60 + minutes}</p>
        </div>
      </div>
    </div>
  );
}
