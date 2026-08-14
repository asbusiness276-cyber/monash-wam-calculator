import { useState } from 'react';

export default function PercentageCalculatorToolCore() {
  // Mode 1: What is X% of Y?
  const [m1X, setM1X] = useState<number>(20);
  const [m1Y, setM1Y] = useState<number>(150);
  const m1Result = (m1X / 100) * m1Y;

  // Mode 2: X is what percent of Y?
  const [m2X, setM2X] = useState<number>(30);
  const [m2Y, setM2Y] = useState<number>(150);
  const m2Result = m2Y !== 0 ? (m2X / m2Y) * 100 : 0;

  // Mode 3: Percentage increase/decrease from X to Y
  const [m3X, setM3X] = useState<number>(50);
  const [m3Y, setM3Y] = useState<number>(75);
  const m3Result = m3X !== 0 ? ((m3Y - m3X) / m3X) * 100 : 0;
  const m3IsIncrease = m3Result >= 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Percentage Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Solve the 3 most common percentage problems instantly.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-8">
        
        {/* Mode 1 */}
        <div className="border border-slate-200 rounded-lg p-5">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-semibold text-slate-700 whitespace-nowrap">What is</span>
            <input
              type="number"
              value={m1X || ''}
              onChange={(e) => setM1X(Number(e.target.value))}
              className="w-24 rounded border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
            <span className="font-semibold text-slate-700 whitespace-nowrap">% of</span>
            <input
              type="number"
              value={m1Y || ''}
              onChange={(e) => setM1Y(Number(e.target.value))}
              className="w-24 rounded border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
            <span className="font-semibold text-slate-700 mx-2">?</span>
            <div className="ml-auto bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100 min-w-[120px] text-center">
              <span className="text-xl font-bold text-indigo-700">{m1Result.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Mode 2 */}
        <div className="border border-slate-200 rounded-lg p-5">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="number"
              value={m2X || ''}
              onChange={(e) => setM2X(Number(e.target.value))}
              className="w-24 rounded border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
            <span className="font-semibold text-slate-700 whitespace-nowrap">is what % of</span>
            <input
              type="number"
              value={m2Y || ''}
              onChange={(e) => setM2Y(Number(e.target.value))}
              className="w-24 rounded border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
            <span className="font-semibold text-slate-700 mx-2">?</span>
            <div className="ml-auto bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100 min-w-[120px] text-center">
              <span className="text-xl font-bold text-indigo-700">{m2Result.toFixed(2)}%</span>
            </div>
          </div>
        </div>

        {/* Mode 3 */}
        <div className="border border-slate-200 rounded-lg p-5">
          <p className="text-sm font-semibold text-slate-600 mb-3">Percentage Increase/Decrease</p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="font-semibold text-slate-700 whitespace-nowrap">From</span>
            <input
              type="number"
              value={m3X || ''}
              onChange={(e) => setM3X(Number(e.target.value))}
              className="w-24 rounded border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
            <span className="font-semibold text-slate-700 whitespace-nowrap">to</span>
            <input
              type="number"
              value={m3Y || ''}
              onChange={(e) => setM3Y(Number(e.target.value))}
              className="w-24 rounded border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-center"
            />
            <span className="font-semibold text-slate-700 mx-2">is a</span>
            <div className={`ml-auto px-4 py-2 rounded-lg border min-w-[150px] text-center ${m3IsIncrease ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
              <span className={`text-xl font-bold ${m3IsIncrease ? 'text-emerald-700' : 'text-rose-700'}`}>
                {Math.abs(m3Result).toFixed(2)}% {m3IsIncrease ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
