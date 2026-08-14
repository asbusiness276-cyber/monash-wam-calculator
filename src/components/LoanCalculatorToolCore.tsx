import { useState } from 'react';

export default function LoanCalculatorToolCore() {
  const [principal, setPrincipal] = useState<number | ''>(50000);
  const [rate, setRate] = useState<number | ''>(5);
  const [years, setYears] = useState<number | ''>(5);

  const p = principal || 0;
  const r = (rate || 0) / 100 / 12;
  const n = (years || 0) * 12;

  let monthly = 0;
  if (r === 0) {
    monthly = n > 0 ? p / n : 0;
  } else {
    monthly = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }
  
  if (isNaN(monthly) || !isFinite(monthly)) monthly = 0;

  const totalPaid = monthly * n;
  const totalInterest = totalPaid - p;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Loan Repayment Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Amount ($)</label>
            <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Interest Rate (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Loan Term (Years)</label>
            <input type="number" value={years} onChange={(e) => setYears(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="bg-indigo-50 p-6 border border-indigo-200 rounded-lg text-center shadow-sm">
            <p className="text-sm uppercase text-indigo-600 font-bold mb-1">Monthly Repayment</p>
            <p className="text-5xl font-extrabold text-indigo-700">${monthly.toFixed(2)}</p>
            
            <div className="mt-6 flex justify-center gap-8">
               <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Total Interest</p>
                  <p className="text-lg font-bold text-slate-800">${Math.max(0, totalInterest).toFixed(2)}</p>
               </div>
               <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Total Paid</p>
                  <p className="text-lg font-bold text-slate-800">${totalPaid.toFixed(2)}</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
