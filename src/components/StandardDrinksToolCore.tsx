import { useState } from 'react';

export default function StandardDrinksToolCore() {
  const [volume, setVolume] = useState<number>(375);
  const [abv, setAbv] = useState<number>(4.8);
  const [quantity, setQuantity] = useState<number>(1);

  // Australian standard drink formula: Volume (L) x ABV (%) x 0.789 = Standard Drinks
  const calculateStandardDrinks = (volMl: number, abvPercent: number) => {
    return (volMl / 1000) * abvPercent * 0.789;
  };

  const stdDrinksPerItem = calculateStandardDrinks(volume, abv);
  const totalDrinks = stdDrinksPerItem * quantity;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Standard Drinks Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate how many Australian standard drinks are in your beverage.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Volume per drink (mL)</label>
            <input
              type="number"
              min="0"
              value={volume || ''}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-500 mt-1">e.g., 375 for a can of beer, 150 for a glass of wine.</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Alcohol % (ABV)</label>
            <input
              type="number"
              step="0.1"
              min="0"
              value={abv || ''}
              onChange={(e) => setAbv(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity || ''}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Total Standard Drinks</p>
          <p className="text-5xl font-extrabold text-indigo-600 mt-3">
            {totalDrinks.toFixed(2)}
          </p>
          <p className="text-sm text-indigo-700 font-medium mt-3">
            Each item contains {stdDrinksPerItem.toFixed(2)} standard drinks.
          </p>
        </div>
      </div>
    </div>
  );
}
