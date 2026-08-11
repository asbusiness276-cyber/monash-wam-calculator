import { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';

export default function HecsHelpDebtToolCore() {
  const [band, setBand] = useState<number>(16323); // Default to Band 4 (highest)
  const [degreeLength, setDegreeLength] = useState<number>(3);
  const [indexationRate, setIndexationRate] = useState<number>(4.7); // Historical avg

  const bands = [
    { label: 'Band 1 (Agriculture, English, Maths, Education, Nursing)', value: 4445 },
    { label: 'Band 2 (IT, Engineering, Science, Architecture, Allied Health)', value: 8948 },
    { label: 'Band 3 (Medicine, Dentistry, Veterinary Science)', value: 12720 },
    { label: 'Band 4 (Law, Commerce, Accounting, Arts, Communications)', value: 16323 },
  ];

  const result = useMemo(() => {
    let totalDebt = 0;
    for (let year = 1; year <= degreeLength; year++) {
      totalDebt += band;
      totalDebt *= (1 + indexationRate / 100);
    }
    return Math.round(totalDebt);
  }, [band, degreeLength, indexationRate]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-indigo-100 rounded-xl text-indigo-700">
          <Calculator size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">HECS-HELP Debt Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Study Area (Student Contribution Band)
            </label>
            <select
              value={band}
              onChange={(e) => setBand(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            >
              {bands.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label} (~${b.value.toLocaleString()}/yr)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Degree Duration (Years)
            </label>
            <input
              type="number"
              min="1"
              max="10"
              value={degreeLength}
              onChange={(e) => setDegreeLength(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Estimated Annual Indexation Rate (%)
            </label>
            <input
              type="number"
              step="0.1"
              value={indexationRate}
              onChange={(e) => setIndexationRate(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            />
            <p className="text-xs text-slate-500 mt-1">
              Currently sits around 4.7% (CPI-based).
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100 flex flex-col justify-center text-center">
          <p className="text-indigo-900/70 font-medium mb-2">Estimated Debt Upon Graduation</p>
          <p className="text-5xl font-black text-indigo-700 mb-4">
            ${result.toLocaleString()}
          </p>
          <div className="bg-white/60 p-4 rounded-lg space-y-2 text-sm text-slate-700">
            <p>
              Without indexation: <strong>${(band * degreeLength).toLocaleString()}</strong>
            </p>
            <p>
              Added by indexation: <strong>${(result - (band * degreeLength)).toLocaleString()}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
