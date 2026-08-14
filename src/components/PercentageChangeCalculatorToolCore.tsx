import { useState } from 'react';

export default function PercentageChangeCalculatorToolCore() {
  const [initial, setInitial] = useState<number | ''>(100);
  const [final, setFinal] = useState<number | ''>(150);

  const initialVal = initial || 0;
  const finalVal = final || 0;

  let change = 0;
  if (initialVal !== 0) {
    change = ((finalVal - initialVal) / Math.abs(initialVal)) * 100;
  }
  
  const isIncrease = change > 0;
  const isDecrease = change < 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Percentage Change Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Initial Value</label>
            <input type="number" value={initial} onChange={(e) => setInitial(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Final Value</label>
            <input type="number" value={final} onChange={(e) => setFinal(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className={`p-6 border rounded-lg text-center shadow-sm ${isIncrease ? 'bg-emerald-50 border-emerald-200' : isDecrease ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'}`}>
            <p className={`text-sm uppercase font-bold mb-1 ${isIncrease ? 'text-emerald-600' : isDecrease ? 'text-rose-600' : 'text-slate-500'}`}>
              {isIncrease ? 'Percentage Increase' : isDecrease ? 'Percentage Decrease' : 'No Change'}
            </p>
            <p className={`text-5xl font-extrabold ${isIncrease ? 'text-emerald-700' : isDecrease ? 'text-rose-700' : 'text-slate-700'}`}>
              {Math.abs(change).toFixed(2)}%
            </p>
            
            <div className="mt-4">
              <p className="text-sm font-medium text-slate-600">Absolute Difference: <span className="font-bold text-slate-800">{Math.abs(finalVal - initialVal)}</span></p>
            </div>
        </div>
      </div>
    </div>
  );
}
