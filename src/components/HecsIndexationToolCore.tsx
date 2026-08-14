import { useState } from 'react';

export default function HecsIndexationToolCore() {
  const [currentDebt, setCurrentDebt] = useState<number>(35000);
  const [indexationRate, setIndexationRate] = useState<number>(4.7); // E.g., recent high rates
  
  const indexationAmount = currentDebt * (indexationRate / 100);
  const newDebt = currentDebt + indexationAmount;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">HECS Indexation Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">See how much your student debt will increase on June 1st.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Current HECS/HELP Debt ($)</label>
            <input
              type="number"
              min="0"
              value={currentDebt || ''}
              onChange={(e) => setCurrentDebt(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Expected Indexation Rate (%)</label>
            <input
              type="number"
              step="0.1"
              min="0"
              value={indexationRate || ''}
              onChange={(e) => setIndexationRate(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">June 1st Indexation Reality Check</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
              <span className="font-semibold text-slate-700">Current Debt</span>
              <span className="font-bold text-slate-700">${currentDebt.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border-l-4 border-rose-500">
              <span className="font-semibold text-slate-800">Debt Added Overnight</span>
              <span className="text-xl font-bold text-rose-600">+ ${indexationAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center mt-6">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">New Total Debt (After June 1)</p>
          <p className="text-4xl font-extrabold text-indigo-600 mt-3">
            ${newDebt.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}
