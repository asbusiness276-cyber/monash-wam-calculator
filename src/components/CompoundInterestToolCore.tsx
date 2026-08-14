import { useState } from 'react';

export default function CompoundInterestToolCore() {
  const [initial, setInitial] = useState<number | ''>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number | ''>(100);
  const [years, setYears] = useState<number | ''>(10);
  const [rate, setRate] = useState<number | ''>(5);

  const p = initial || 0;
  const pmt = monthlyContribution || 0;
  const t = years || 0;
  const r = (rate || 0) / 100;
  const n = 12; // monthly compounding

  // Compound Interest for Principal
  const compoundPrincipal = p * Math.pow(1 + (r / n), n * t);
  
  // Future Value of a Series (Contributions)
  let futureValueOfSeries = 0;
  if (r > 0) {
    futureValueOfSeries = pmt * ((Math.pow(1 + (r / n), n * t) - 1) / (r / n));
  } else {
    futureValueOfSeries = pmt * n * t;
  }

  const finalBalance = compoundPrincipal + futureValueOfSeries;
  const totalContributions = p + (pmt * n * t);
  const totalInterest = finalBalance - totalContributions;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Compound Interest Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Initial Investment ($)</label>
            <input type="number" value={initial} onChange={(e) => setInitial(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Contribution ($)</label>
            <input type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Length of Time (Years)</label>
            <input type="number" value={years} onChange={(e) => setYears(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Estimated Interest Rate (%)</label>
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="bg-indigo-50 p-6 border border-indigo-200 rounded-lg text-center shadow-sm">
            <p className="text-sm uppercase text-indigo-600 font-bold mb-1">Final Balance</p>
            <p className="text-5xl font-extrabold text-indigo-700">${finalBalance.toFixed(2)}</p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
               <div className="bg-white p-3 rounded shadow-sm border border-indigo-100">
                  <p className="text-xs text-slate-500 font-semibold uppercase">Total Invested</p>
                  <p className="text-lg font-bold text-slate-800">${totalContributions.toFixed(2)}</p>
               </div>
               <div className="bg-white p-3 rounded shadow-sm border border-indigo-100">
                  <p className="text-xs text-slate-500 font-semibold uppercase">Total Interest Earned</p>
                  <p className="text-lg font-bold text-emerald-600">+${totalInterest.toFixed(2)}</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
