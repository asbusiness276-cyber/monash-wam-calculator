import { useState } from 'react';

export default function CaffeineCrashToolCore() {
  const [mgCaffeine, setMgCaffeine] = useState<number>(150);
  const [halfLife] = useState<number>(5); // Average half-life is 5 hours
  const [consumedHour, setConsumedHour] = useState<number>(14); // 2:00 PM

  // Function to calculate hours until caffeine drops below 30mg (safe for sleep for most)
  const calculateSleepSafeTime = () => {
    let currentMg = mgCaffeine;
    let hoursElapsed = 0;
    while (currentMg > 30 && hoursElapsed < 24) {
      hoursElapsed++;
      // Decay formula: N(t) = N0 * (1/2)^(t/t_half)
      currentMg = mgCaffeine * Math.pow(0.5, hoursElapsed / halfLife);
    }
    return hoursElapsed;
  };

  const hoursUntilSleepSafe = calculateSleepSafeTime();
  const safeSleepHour = (consumedHour + hoursUntilSleepSafe) % 24;

  const formatHour = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Caffeine Crash Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Find out when the coffee wears off and when you can sleep.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Caffeine Consumed (mg)</label>
            <input
              type="number"
              min="0"
              value={mgCaffeine || ''}
              onChange={(e) => setMgCaffeine(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <p className="text-xs text-slate-500 mt-2">
              Guide: Espresso (60mg), Red Bull (80mg), Large Iced Latte (150mg), Pre-workout (250mg).
            </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Time Consumed</label>
            <select
              value={consumedHour}
              onChange={(e) => setConsumedHour(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {[...Array(24)].map((_, i) => (
                <option key={i} value={i}>{formatHour(i)}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-orange-50 rounded-lg p-6 border border-orange-100 text-center">
          <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide">Caffeine Clear Time</p>
          <p className="text-4xl font-extrabold text-orange-600 mt-3">
            {formatHour(safeSleepHour)}
          </p>
          <p className="text-sm text-orange-700 font-medium mt-3">
            You need to wait approximately {Math.floor(hoursUntilSleepSafe)} hours before it leaves your system enough for a deep sleep.
          </p>
        </div>
      </div>
    </div>
  );
}
