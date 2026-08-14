import { useState } from 'react';

export default function MarginCalculatorToolCore() {
  const [cost, setCost] = useState<number | ''>(50);
  const [revenue, setRevenue] = useState<number | ''>(100);

  const costVal = cost || 0;
  const revVal = revenue || 0;

  const grossProfit = revVal - costVal;
  const margin = revVal > 0 ? (grossProfit / revVal) * 100 : 0;
  const markup = costVal > 0 ? (grossProfit / costVal) * 100 : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Margin & Markup Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Cost of Item ($)</label>
            <input type="number" value={cost} onChange={(e) => setCost(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Sale Price / Revenue ($)</label>
            <input type="number" value={revenue} onChange={(e) => setRevenue(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">Gross Profit</p>
                <p className="text-2xl font-bold text-emerald-600">${grossProfit.toFixed(2)}</p>
            </div>
            <div className="bg-indigo-50 p-4 border border-indigo-200 rounded-lg shadow-sm">
                <p className="text-xs uppercase text-indigo-600 font-bold mb-1">Profit Margin</p>
                <p className="text-3xl font-extrabold text-indigo-700">{margin.toFixed(2)}%</p>
            </div>
            <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">Markup</p>
                <p className="text-2xl font-bold text-slate-800">{markup.toFixed(2)}%</p>
            </div>
        </div>
      </div>
    </div>
  );
}
