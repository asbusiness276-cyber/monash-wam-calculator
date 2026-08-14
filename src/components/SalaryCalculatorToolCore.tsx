import { useState } from 'react';

export default function SalaryCalculatorToolCore() {
  const [annualSalary, setAnnualSalary] = useState<number | ''>(60000);
  const [hoursPerWeek, setHoursPerWeek] = useState<number | ''>(38);

  const salary = annualSalary || 0;
  const hours = Math.max(1, hoursPerWeek || 38);

  const monthly = salary / 12;
  const weekly = salary / 52;
  const daily = weekly / (hours / 7.6); // Assuming standard 7.6 hr day
  const hourly = weekly / hours;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Salary to Hourly Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Annual Salary ($)</label>
            <input type="number" value={annualSalary} onChange={(e) => setAnnualSalary(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Hours worked per week</label>
            <input type="number" value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">Monthly</p>
                <p className="text-xl font-bold text-slate-800">${monthly.toFixed(2)}</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">Weekly</p>
                <p className="text-xl font-bold text-slate-800">${weekly.toFixed(2)}</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">Daily (7.6h)</p>
                <p className="text-xl font-bold text-slate-800">${daily.toFixed(2)}</p>
            </div>
            <div className="bg-indigo-50 p-4 border border-indigo-200 rounded-lg shadow-sm">
                <p className="text-xs uppercase text-indigo-600 font-bold mb-1">Hourly</p>
                <p className="text-xl font-extrabold text-indigo-700">${hourly.toFixed(2)}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
