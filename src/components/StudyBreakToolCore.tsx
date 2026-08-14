import React, { useState } from 'react';

export default function StudyBreakToolCore() {
  const [totalHours, setTotalHours] = useState<number>(4);
  const [strategy, setStrategy] = useState<'pomodoro' | 'desktime' | 'ultradian'>('pomodoro');

  // Logic based on strategy
  // Pomodoro: 25 min study, 5 min break. (Every 4th break is 15 min, but we'll approximate a simple 25/5 cycle for the table)
  // DeskTime: 52 min study, 17 min break.
  // Ultradian: 90 min study, 20 min break.

  const calculateSchedule = () => {
    let studyLen = 25;
    let breakLen = 5;
    if (strategy === 'desktime') { studyLen = 52; breakLen = 17; }
    if (strategy === 'ultradian') { studyLen = 90; breakLen = 20; }

    // const totalMins = totalHours * 60;
    const cycleLen = studyLen + breakLen;
    const cycles = Math.floor(totalMins / cycleLen);
    const remainder = totalMins % cycleLen;

    return { studyLen, breakLen, cycles, remainder, totalMins };
  };

  const { studyLen, breakLen, cycles, remainder, totalMins } = calculateSchedule();

  let totalStudyMins = cycles * studyLen;
  let totalBreakMins = cycles * breakLen;
  if (remainder > studyLen) {
    totalStudyMins += studyLen;
    totalBreakMins += (remainder - studyLen);
  } else {
    totalStudyMins += remainder;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Study Break Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Optimize your study schedule using neuroscience-backed intervals.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Total Time Available (Hours)</label>
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={totalHours || ''}
              onChange={(e) => setTotalHours(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Focus Strategy</label>
            <select
              value={strategy}
              onChange={(e) => setStrategy(e.target.value as any)}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="pomodoro">Pomodoro (25m Focus / 5m Break)</option>
              <option value="desktime">DeskTime (52m Focus / 17m Break)</option>
              <option value="ultradian">Ultradian Rhythm (90m Focus / 20m Break)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100 text-center">
            <p className="text-3xl font-extrabold text-indigo-700">{Math.floor(totalStudyMins/60)}h {totalStudyMins%60}m</p>
            <p className="text-sm font-semibold text-indigo-800 mt-1 uppercase tracking-wide">Total Deep Work</p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100 text-center">
            <p className="text-3xl font-extrabold text-emerald-700">{Math.floor(totalBreakMins/60)}h {totalBreakMins%60}m</p>
            <p className="text-sm font-semibold text-emerald-800 mt-1 uppercase tracking-wide">Total Recovery Break</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-800 mb-3">Recommended Schedule</h3>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 uppercase tracking-wide text-xs">
                <tr>
                  <th className="px-4 py-3">Block</th>
                  <th className="px-4 py-3">Activity</th>
                  <th className="px-4 py-3 text-right">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {Array.from({ length: cycles }).map((_, i) => (
                  <React.Fragment key={i}>
                    <tr>
                      <td className="px-4 py-2 text-slate-500 font-medium">#{i + 1}</td>
                      <td className="px-4 py-2 font-bold text-indigo-700">Deep Work</td>
                      <td className="px-4 py-2 text-right text-slate-700 font-medium">{studyLen} min</td>
                    </tr>
                    <tr className="bg-emerald-50/30">
                      <td className="px-4 py-2 text-slate-500"></td>
                      <td className="px-4 py-2 font-bold text-emerald-600">Break</td>
                      <td className="px-4 py-2 text-right text-slate-700 font-medium">{breakLen} min</td>
                    </tr>
                  </React.Fragment>
                ))}
                {remainder > 0 && (
                  <tr>
                    <td className="px-4 py-2 text-slate-500 font-medium">#{cycles + 1}</td>
                    <td className="px-4 py-2 font-bold text-indigo-700">Deep Work (Partial)</td>
                    <td className="px-4 py-2 text-right text-slate-700 font-medium">{Math.min(remainder, studyLen)} min</td>
                  </tr>
                )}
                {remainder > studyLen && (
                  <tr className="bg-emerald-50/30">
                    <td className="px-4 py-2 text-slate-500"></td>
                    <td className="px-4 py-2 font-bold text-emerald-600">Break (Partial)</td>
                    <td className="px-4 py-2 text-right text-slate-700 font-medium">{remainder - studyLen} min</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
