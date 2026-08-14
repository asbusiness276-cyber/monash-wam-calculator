import { useState } from 'react';

export default function SleepCycleToolCore() {
  const [wakeHour, setWakeHour] = useState<number>(7);
  const [wakeMinute, setWakeMinute] = useState<number>(0);
  const [isPM, setIsPM] = useState<boolean>(false);

  // Calculate 90 minute sleep cycles backwards from wake time
  const calculateCycles = () => {
    // Convert to 24h for math
    let h24 = wakeHour;
    if (isPM && h24 !== 12) h24 += 12;
    if (!isPM && h24 === 12) h24 = 0;

    const wakeTimeMinutes = (h24 * 60) + wakeMinute;
    
    // Allow 15 mins to fall asleep
    const fallAsleepBuffer = 15;
    
    const cycles = [];
    // Calculate 6, 5, 4, and 3 cycles (9 hours, 7.5 hours, 6 hours, 4.5 hours)
    for (let c = 6; c >= 3; c--) {
      const cycleLength = 90;
      const totalSleepTime = c * cycleLength;
      
      let sleepTimeMinutes = wakeTimeMinutes - totalSleepTime - fallAsleepBuffer;
      
      // Handle wrapping across midnight
      if (sleepTimeMinutes < 0) {
        sleepTimeMinutes += 24 * 60;
      }
      
      const sleepH24 = Math.floor(sleepTimeMinutes / 60);
      const sleepMin = sleepTimeMinutes % 60;
      
      const sleepH12 = sleepH24 % 12 || 12;
      const sleepPM = sleepH24 >= 12;
      
      cycles.push({
        cycleCount: c,
        hours: totalSleepTime / 60,
        timeString: `${sleepH12}:${sleepMin.toString().padStart(2, '0')} ${sleepPM ? 'PM' : 'AM'}`,
        optimal: c === 5 || c === 6 // 7.5 or 9 hours is optimal
      });
    }
    
    return cycles;
  };

  const cycles = calculateCycles();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Sleep Cycle Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Wake up refreshed by sleeping in 90-minute REM cycles.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">What time do you need to wake up?</label>
          <div className="flex gap-2 max-w-sm">
            <select
              value={wakeHour}
              onChange={(e) => setWakeHour(Number(e.target.value))}
              className="flex-1 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
            >
              {[...Array(12)].map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
            <span className="text-2xl font-bold text-slate-400 py-1">:</span>
            <select
              value={wakeMinute}
              onChange={(e) => setWakeMinute(Number(e.target.value))}
              className="flex-1 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg"
            >
              <option value="0">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
            <select
              value={isPM ? 'PM' : 'AM'}
              onChange={(e) => setIsPM(e.target.value === 'PM')}
              className="flex-1 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-lg font-bold"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
          <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-4">You should try to fall asleep at:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cycles.map((cycle, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${cycle.optimal ? 'bg-indigo-50 border-indigo-200 shadow-sm' : 'bg-white border-slate-200'}`}>
                <p className={`text-2xl font-bold ${cycle.optimal ? 'text-indigo-700' : 'text-slate-700'}`}>
                  {cycle.timeString}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  <strong>{cycle.cycleCount} cycles</strong> ({cycle.hours} hours of sleep)
                </p>
                {cycle.optimal && (
                  <span className="inline-block mt-2 text-xs font-bold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                    Optimal
                  </span>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            * These times include a 15-minute buffer to fall asleep. If you go to bed at these exact times, you should wake up exactly at the end of a sleep cycle!
          </p>
        </div>
      </div>
    </div>
  );
}
