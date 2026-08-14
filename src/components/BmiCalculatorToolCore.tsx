import { useState } from 'react';

export default function BmiCalculatorToolCore() {
  const [heightCm, setHeightCm] = useState<number | ''>(175);
  const [weightKg, setWeightKg] = useState<number | ''>(70);

  let bmi = 0;
  let category = '';
  let colorClass = '';

  if (heightCm && weightKg) {
    const heightM = heightCm / 100;
    bmi = weightKg / (heightM * heightM);
    
    if (bmi < 18.5) {
      category = 'Underweight';
      colorClass = 'text-blue-600';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = 'Healthy Weight';
      colorClass = 'text-emerald-600';
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = 'Overweight';
      colorClass = 'text-amber-500';
    } else {
      category = 'Obese';
      colorClass = 'text-rose-600';
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">BMI Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate your Body Mass Index (Metric).</p>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Height (cm)</label>
            <input
              type="number"
              value={heightCm}
              onChange={(e) => setHeightCm(e.target.value ? Number(e.target.value) : '')}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Weight (kg)</label>
            <input
              type="number"
              value={weightKg}
              onChange={(e) => setWeightKg(e.target.value ? Number(e.target.value) : '')}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        {bmi > 0 && (
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 text-center">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Your BMI</p>
            <p className="text-5xl font-extrabold text-slate-800 mt-2 mb-2">{bmi.toFixed(1)}</p>
            <p className={`text-xl font-bold ${colorClass}`}>{category}</p>
          </div>
        )}
      </div>
    </div>
  );
}
