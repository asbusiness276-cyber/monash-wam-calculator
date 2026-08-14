import { useState } from 'react';

export default function CommuteVsRentToolCore() {
  const [closeRent, setCloseRent] = useState<number>(350);
  const [farRent, setFarRent] = useState<number>(200);
  const [commuteDays, setCommuteDays] = useState<number>(4);
  const [dailyTransportCost, setDailyTransportCost] = useState<number>(10.60); // Myki daily cap
  const [commuteHoursPerDay, setCommuteHoursPerDay] = useState<number>(2); // 1hr each way
  const [hourlyValue, setHourlyValue] = useState<number>(23.23); // Minimum wage

  // Weekly calculations
  const weeklyTransportCost = commuteDays * dailyTransportCost;
  const weeklyCommuteTime = commuteDays * commuteHoursPerDay;
  const timeValueCost = weeklyCommuteTime * hourlyValue;

  const farTotalFinancialCost = farRent + weeklyTransportCost;
  const farTotalTrueCost = farRent + weeklyTransportCost + timeValueCost;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Commute vs Rent Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Is it cheaper to live near campus, or commute from further away?</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-slate-200 pb-6">
          <div>
            <h3 className="text-sm font-bold text-slate-700 mb-3 border-b pb-1">Option A: Living Close</h3>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Weekly Rent ($)</label>
            <input
              type="number"
              min="0"
              value={closeRent || ''}
              onChange={(e) => setCloseRent(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-500 mt-1">Assuming walking/biking distance (0 commute cost).</p>
          </div>
          
          <div>
            <h3 className="text-sm font-bold text-slate-700 mb-3 border-b pb-1">Option B: Living Far</h3>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Weekly Rent ($)</label>
            <input
              type="number"
              min="0"
              value={farRent || ''}
              onChange={(e) => setFarRent(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mb-3"
            />
            <label className="block text-sm font-semibold text-slate-700 mb-1">Total Commute Time Per Day (Hours)</label>
            <input
              type="number"
              min="0"
              value={commuteHoursPerDay || ''}
              onChange={(e) => setCommuteHoursPerDay(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Days on Campus / wk</label>
            <input
              type="number"
              min="1"
              max="7"
              value={commuteDays || ''}
              onChange={(e) => setCommuteDays(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Daily Transit Cost ($)</label>
            <input
              type="number"
              min="0"
              value={dailyTransportCost || ''}
              onChange={(e) => setDailyTransportCost(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Value of your Time ($/hr)</label>
            <input
              type="number"
              min="0"
              value={hourlyValue || ''}
              onChange={(e) => setHourlyValue(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className={`rounded-lg p-5 border ${closeRent < farTotalFinancialCost ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
            <h4 className="font-bold text-slate-800 text-lg mb-2">Living Close</h4>
            <div className="flex justify-between text-sm mb-1"><span>Rent</span> <span>${closeRent}</span></div>
            <div className="flex justify-between text-sm mb-1"><span>Transport</span> <span>$0</span></div>
            <div className="flex justify-between font-bold text-slate-800 mt-3 pt-3 border-t border-slate-300">
              <span>Financial Cost</span> <span>${closeRent}/wk</span>
            </div>
          </div>
          
          <div className={`rounded-lg p-5 border ${farTotalFinancialCost <= closeRent ? 'bg-emerald-50 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
            <h4 className="font-bold text-slate-800 text-lg mb-2">Living Far</h4>
            <div className="flex justify-between text-sm mb-1"><span>Rent</span> <span>${farRent}</span></div>
            <div className="flex justify-between text-sm mb-1"><span>Transport</span> <span>${weeklyTransportCost.toFixed(2)}</span></div>
            <div className="flex justify-between font-bold text-slate-800 mt-3 pt-3 border-t border-slate-300">
              <span>Financial Cost</span> <span>${farTotalFinancialCost.toFixed(2)}/wk</span>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
          <h4 className="font-bold text-indigo-800 mb-2">The Hidden "Time" Cost</h4>
          <p className="text-sm text-indigo-700">
            Living far means you spend <strong>{weeklyCommuteTime} hours</strong> commuting every week. 
            If you spent that time working a part-time job at ${hourlyValue}/hr, you would earn <strong>${timeValueCost.toFixed(2)}</strong>.
          </p>
          <p className="text-sm font-bold text-indigo-900 mt-3">
            True Cost of Living Far: ${farTotalTrueCost.toFixed(2)} / week
          </p>
        </div>
      </div>
    </div>
  );
}
