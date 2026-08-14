import { useState } from 'react';

export default function StudentTaxToolCore() {
  const [annualIncome, setAnnualIncome] = useState<number>(20000);

  // Australian Tax Rates 2023-2024
  const calculateTax = (income: number) => {
    let tax = 0;
    if (income <= 18200) {
      tax = 0;
    } else if (income <= 45000) {
      tax = (income - 18200) * 0.19;
    } else if (income <= 120000) {
      tax = 5092 + (income - 45000) * 0.325;
    } else if (income <= 180000) {
      tax = 29467 + (income - 120000) * 0.37;
    } else {
      tax = 51667 + (income - 180000) * 0.45;
    }
    
    // Low Income Tax Offset (LITO) up to $700
    let lito = 0;
    if (income <= 37500) {
      lito = 700;
    } else if (income <= 45000) {
      lito = 700 - (income - 37500) * 0.05;
    } else if (income <= 66667) {
      lito = 325 - (income - 45000) * 0.015;
    }
    
    // Apply LITO
    tax = Math.max(0, tax - lito);
    
    // Medicare Levy (2% for most, but exemptions for low income)
    // Low income threshold for singles is roughly $24,276 (2023-24)
    let medicare = 0;
    if (income > 30345) {
      medicare = income * 0.02;
    } else if (income > 24276) {
      medicare = (income - 24276) * 0.10;
    }

    return {
      tax,
      medicare,
      total: tax + medicare,
      takeHome: income - tax - medicare
    };
  };

  const results = calculateTax(annualIncome || 0);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Australian Student Tax Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Estimate your income tax and Medicare levy (2023-24 Rates).</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Total Annual Income (Before Tax)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-slate-500 sm:text-lg">$</span>
            </div>
            <input
              type="number"
              min="0"
              value={annualIncome || ''}
              onChange={(e) => setAnnualIncome(Number(e.target.value))}
              className="w-full pl-8 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <div className="flex justify-between items-center mb-3">
            <span className="text-slate-600 font-medium">Estimated Income Tax</span>
            <span className="font-semibold text-slate-800">${results.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <span className="text-slate-600 font-medium">Estimated Medicare Levy</span>
            <span className="font-semibold text-slate-800">${results.medicare.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center pt-3 border-t border-slate-300">
            <span className="text-slate-800 font-bold">Total Tax Payable</span>
            <span className="font-bold text-rose-600">${results.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Estimated Take-Home Pay</p>
          <p className="text-4xl font-extrabold text-indigo-600 mt-3">
            ${results.takeHome.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          {annualIncome <= 18200 && (
            <p className="text-sm text-emerald-600 font-medium mt-3">
              You are below the $18,200 tax-free threshold! You should get 100% of any withheld tax back in your tax return.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
