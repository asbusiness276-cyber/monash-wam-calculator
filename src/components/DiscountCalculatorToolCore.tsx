import { useState } from 'react';

export default function DiscountCalculatorToolCore() {
  const [price, setPrice] = useState<number | ''>(100);
  const [discount, setDiscount] = useState<number | ''>(20);

  const priceVal = price || 0;
  const discountVal = discount || 0;

  const saved = priceVal * (discountVal / 100);
  const finalPrice = priceVal - saved;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Discount Calculator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Original Price ($)</label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Discount (%)</label>
            <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value ? Number(e.target.value) : '')} className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
            <div className="bg-rose-50 p-6 border border-rose-200 rounded-lg">
                <p className="text-sm uppercase text-rose-600 font-bold mb-1">You Save</p>
                <p className="text-3xl font-bold text-rose-700">${saved.toFixed(2)}</p>
            </div>
            <div className="bg-emerald-50 p-6 border border-emerald-200 rounded-lg shadow-sm">
                <p className="text-sm uppercase text-emerald-600 font-bold mb-1">Final Price</p>
                <p className="text-4xl font-extrabold text-emerald-700">${finalPrice.toFixed(2)}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
