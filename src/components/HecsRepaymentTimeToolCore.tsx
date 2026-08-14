import { useState } from 'react';

export default function HecsRepaymentTimeToolCore() {
  const [debt, setDebt] = useState<number>(35000);
  const [salary, setSalary] = useState<number>(85000);
  const [indexation, setIndexation] = useState<number>(4.0); // Historical average indexation roughly

  // 2023-2024 ATO Repayment Thresholds roughly
  const getRepaymentRate = (income: number) => {
    if (income < 51550) return 0;
    if (income < 59518) return 0.01;
    if (income < 63089) return 0.02;
    if (income < 66875) return 0.025;
    if (income < 70888) return 0.03;
    if (income < 75140) return 0.035;
    if (income < 79649) return 0.04;
    if (income < 84429) return 0.045;
    if (income < 89494) return 0.05;
    if (income < 94865) return 0.055;
    if (income < 100557) return 0.06;
    if (income < 106590) return 0.065;
    if (income < 112985) return 0.07;
    if (income < 119764) return 0.075;
    if (income < 126950) return 0.08;
    if (income < 134568) return 0.085;
    if (income < 142642) return 0.09;
    if (income < 151200) return 0.095;
    return 0.10;
  };

  const calculateYears = () => {
    let currentDebt = debt;
    let years = 0;
    const rate = getRepaymentRate(salary);
    const yearlyRepayment = salary * rate;

    if (yearlyRepayment === 0) {
      return -1; // Never paid off
    }

    if (yearlyRepayment <= currentDebt * (indexation / 100)) {
      return -2; // Interest is higher than repayment
    }

    // Safety limit to avoid infinite loops
    while (currentDebt > 0 && years < 100) {
      years++;
      // Indexation applied on June 1
      currentDebt += currentDebt * (indexation / 100);
      // Repayment applied after tax return
      currentDebt -= yearlyRepayment;
    }

    return years;
  };

  const yearsToPayOff = calculateYears();
  const yearlyRepayment = salary * getRepaymentRate(salary);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">HECS Repayment Time Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">See how many years it will take to pay off your debt.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Total HELP/HECS Debt ($)</label>
            <input
              type="number"
              min="0"
              value={debt || ''}
              onChange={(e) => setDebt(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Expected Salary ($)</label>
            <input
              type="number"
              min="0"
              value={salary || ''}
              onChange={(e) => setSalary(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Yearly Indexation (%)</label>
            <input
              type="number"
              step="0.1"
              value={indexation || ''}
              onChange={(e) => setIndexation(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-center">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Time to Pay Off</p>
          <div className="mt-3">
            {yearsToPayOff === -1 ? (
              <p className="text-2xl font-bold text-rose-600">Never (Salary is below the mandatory repayment threshold)</p>
            ) : yearsToPayOff === -2 ? (
              <p className="text-2xl font-bold text-rose-600">Never (Indexation outpaces your repayments!)</p>
            ) : yearsToPayOff >= 100 ? (
              <p className="text-2xl font-bold text-amber-600">Over 100 Years</p>
            ) : (
              <p className="text-5xl font-extrabold text-emerald-600">
                {yearsToPayOff} <span className="text-xl font-medium text-emerald-500">years</span>
              </p>
            )}
          </div>
          {yearsToPayOff > 0 && yearsToPayOff < 100 && (
            <p className="text-sm text-slate-500 font-medium mt-4">
              At a salary of ${salary.toLocaleString()}, your mandatory repayment is <strong className="text-slate-700">${yearlyRepayment.toLocaleString()}</strong> per year ({(getRepaymentRate(salary) * 100).toFixed(1)}%).
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
