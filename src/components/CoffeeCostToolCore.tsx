import { useState } from 'react';

export default function CoffeeCostToolCore() {
  const [dailyCost, setDailyCost] = useState<number>(5.50);
  const [coffeesPerWeek, setCoffeesPerWeek] = useState<number>(5);

  const weeklyCost = dailyCost * coffeesPerWeek;
  const monthlyCost = weeklyCost * 4.333; // 52 weeks / 12 months
  const yearlyCost = weeklyCost * 52;

  // Investment projection: 5% annual return compounding monthly over 10 years
  // Future Value of an Annuity formula
  const monthlyContribution = monthlyCost;
  const rate = 0.05 / 12;
  const periods = 10 * 12;
  const futureValue = monthlyContribution * ((Math.pow(1 + rate, periods) - 1) / rate);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Daily Coffee Cost Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">See how much you spend on coffee, and what it could be worth.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Cost of one coffee ($)</label>
            <input
              type="number"
              step="0.10"
              min="0"
              value={dailyCost || ''}
              onChange={(e) => setDailyCost(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Coffees purchased per week</label>
            <input
              type="number"
              min="1"
              max="21"
              value={coffeesPerWeek || ''}
              onChange={(e) => setCoffeesPerWeek(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">Your Spending Habit</p>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
              <span className="font-semibold text-slate-700">Weekly</span>
              <span className="font-bold text-rose-600">${weeklyCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm">
              <span className="font-semibold text-slate-700">Monthly</span>
              <span className="font-bold text-rose-600">${monthlyCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border-l-4 border-rose-500">
              <span className="font-semibold text-slate-800">Yearly Total</span>
              <span className="text-xl font-bold text-rose-600">${yearlyCost.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100 text-center mt-6">
          <p className="text-sm font-semibold text-emerald-800 uppercase tracking-wide">The "Invest It" Reality Check</p>
          <p className="text-sm text-emerald-700 mt-2">
            If you made coffee at home and invested that money at a conservative 5% annual return for 10 years, you would have:
          </p>
          <p className="text-4xl font-extrabold text-emerald-600 mt-3">
            ${futureValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
        </div>
      </div>
    </div>
  );
}
