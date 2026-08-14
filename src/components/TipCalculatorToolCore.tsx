import { useState } from 'react';

export default function TipCalculatorToolCore() {
  const [bill, setBill] = useState<number | ''>(100);
  const [tipPercent, setTipPercent] = useState<number | ''>(15);
  const [people, setPeople] = useState<number | ''>(1);

  const billVal = bill || 0;
  const tipVal = tipPercent || 0;
  const pplVal = Math.max(1, people || 1);

  const tipAmount = billVal * (tipVal / 100);
  const totalAmount = billVal + tipAmount;
  const perPerson = totalAmount / pplVal;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Tip Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Bill Amount ($)</label>
            <input type="number" value={bill} onChange={(e) => setBill(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Tip (%)</label>
            <input type="number" value={tipPercent} onChange={(e) => setTipPercent(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Split Between</label>
            <input type="number" min="1" value={people} onChange={(e) => setPeople(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 flex justify-between items-center text-center">
            <div>
               <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Total Tip</p>
               <p className="text-3xl font-extrabold text-indigo-600 mt-1">${tipAmount.toFixed(2)}</p>
            </div>
            <div>
               <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Total Bill</p>
               <p className="text-3xl font-extrabold text-indigo-600 mt-1">${totalAmount.toFixed(2)}</p>
            </div>
            <div>
               <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Per Person</p>
               <p className="text-3xl font-extrabold text-indigo-600 mt-1">${perPerson.toFixed(2)}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
