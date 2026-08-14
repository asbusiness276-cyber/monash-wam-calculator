import { useState } from 'react';

export default function FuelCostCalculatorToolCore() {
  const [distance, setDistance] = useState<number | ''>(500);
  const [efficiency, setEfficiency] = useState<number | ''>(8);
  const [price, setPrice] = useState<number | ''>(1.85);

  const d = distance || 0;
  const e = efficiency || 0;
  const p = price || 0;

  const totalFuelNeeded = (d / 100) * e;
  const totalCost = totalFuelNeeded * p;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Fuel Cost Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Distance (km)</label>
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Fuel Economy (L/100km)</label>
            <input type="number" value={efficiency} onChange={(e) => setEfficiency(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Fuel Price per L ($)</label>
            <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="bg-indigo-50 p-6 border border-indigo-200 rounded-lg flex flex-col md:flex-row justify-around items-center text-center shadow-sm">
            <div className="mb-4 md:mb-0">
               <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Total Fuel Needed</p>
               <p className="text-3xl font-bold text-indigo-600 mt-1">{totalFuelNeeded.toFixed(2)} L</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-indigo-200"></div>
            <div>
               <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Estimated Cost</p>
               <p className="text-4xl font-extrabold text-indigo-700 mt-1">${totalCost.toFixed(2)}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
