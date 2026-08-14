import { useState } from 'react';

export default function YouthAllowanceToolCore() {
  const [age, setAge] = useState<number>(20);
  const [independent, setIndependent] = useState<boolean>(false);
  const [livingAtHome, setLivingAtHome] = useState<boolean>(true);

  // Simplified max rates (Approximate 2024 Centrelink rates per fortnight)
  const calculateRate = () => {
    if (age >= 25) {
      return 749.20; // Austudy roughly
    }
    
    if (independent) {
      if (livingAtHome) {
        return 455.20; // Independent, at home
      } else {
        return 639.00; // Independent, away from home
      }
    } else {
      if (age < 18) {
        return livingAtHome ? 354.60 : 639.00;
      } else {
        return livingAtHome ? 422.00 : 639.00;
      }
    }
  };

  const rate = calculateRate();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Youth Allowance Estimator</h2>
        <p className="text-sm text-slate-600 mt-1">Estimate your maximum fortnightly Centrelink payment.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Your Age</label>
            <input
              type="number"
              min="16"
              max="99"
              value={age || ''}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="indep"
              checked={independent}
              onChange={(e) => setIndependent(e.target.checked)}
              className="h-5 w-5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="indep" className="text-sm font-medium text-slate-700 cursor-pointer">
              Are you classified as Independent? <span className="text-slate-500 font-normal">(Usually age 22+, or working full-time for 18 months, or married)</span>
            </label>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="home"
              checked={livingAtHome}
              onChange={(e) => setLivingAtHome(e.target.checked)}
              className="h-5 w-5 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="home" className="text-sm font-medium text-slate-700 cursor-pointer">
              Do you live at the parental home?
            </label>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Estimated Max Fortnightly Rate</p>
          <p className="text-4xl font-extrabold text-indigo-600 mt-3">
            ${rate.toFixed(2)}
          </p>
          <p className="text-xs text-indigo-600 font-medium mt-3">
            * This is the MAXIMUM base rate. If you are dependent, your parents' income may reduce this to $0. If you earn over $508 a fortnight from a job, this rate will also reduce.
          </p>
        </div>
      </div>
    </div>
  );
}
