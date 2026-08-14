import { useState, useMemo } from 'react';
import { Clock } from 'lucide-react';

export default function LatePenaltyToolCore() {
  const [maxMark, setMaxMark] = useState<number>(100);
  const [achievedMark, setAchievedMark] = useState<number>(85);
  const [penaltyPerDay, setPenaltyPerDay] = useState<number>(5);
  const [daysLate, setDaysLate] = useState<number>(2);

  const result = useMemo(() => {
    // Standard university penalty is typically % of the MAXIMUM possible mark, not achieved mark.
    const penaltyAmount = (maxMark * (penaltyPerDay / 100)) * daysLate;
    let finalMark = achievedMark - penaltyAmount;
    if (finalMark < 0) finalMark = 0; // Can't go below 0

    return {
      penaltyAmount,
      finalMark,
      percentageLost: (penaltyAmount / maxMark) * 100
    };
  }, [maxMark, achievedMark, penaltyPerDay, daysLate]);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-100">
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-red-100 rounded-xl text-red-700">
          <Clock size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Late Penalty Calculator</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Maximum Possible Mark (Total)
            </label>
            <input
              type="number"
              min="1"
              value={maxMark}
              onChange={(e) => setMaxMark(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Mark Achieved (Before Penalty)
            </label>
            <input
              type="number"
              min="0"
              max={maxMark}
              value={achievedMark}
              onChange={(e) => setAchievedMark(Number(e.target.value))}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Penalty (% per day)
              </label>
              <input
                type="number"
                step="0.5"
                min="0"
                value={penaltyPerDay}
                onChange={(e) => setPenaltyPerDay(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Days Late
              </label>
              <input
                type="number"
                min="0"
                step="1"
                value={daysLate}
                onChange={(e) => setDaysLate(Number(e.target.value))}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Note: the university typically deducts 5% of the total possible mark per day late (up to 7 days, after which it is a zero).
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-red-100 flex flex-col justify-center text-center">
          <p className="text-red-900/70 font-medium mb-2">Final Adjusted Mark</p>
          <p className="text-6xl font-black text-red-600 mb-4">
            {result.finalMark.toFixed(1)} <span className="text-2xl text-red-400">/ {maxMark}</span>
          </p>
          
          <div className="bg-white/60 p-4 rounded-lg space-y-2 text-sm text-slate-700">
            <div className="flex justify-between border-b border-slate-200/50 pb-2">
              <span>Original Mark:</span>
              <span className="font-semibold">{achievedMark}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200/50 pb-2 text-red-600">
              <span>Total Penalty Deducted:</span>
              <span className="font-semibold">-{result.penaltyAmount.toFixed(1)} marks</span>
            </div>
            <div className="flex justify-between pt-1">
              <span>Percentage Grade:</span>
              <span className="font-semibold">
                {maxMark > 0 ? ((result.finalMark / maxMark) * 100).toFixed(1) : 0}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
