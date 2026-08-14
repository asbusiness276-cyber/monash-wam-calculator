import { useState } from 'react';

export default function AttendanceToolCore() {
  const [targetPercentage, setTargetPercentage] = useState<number>(75);

  // Improved Logic for "ongoing" semester:
  const [totalClassesInSemester, setTotalClassesInSemester] = useState<number>(36);
  const [classesMissed, setClassesMissed] = useState<number>(3);
  
  const currentAttendance = totalClassesInSemester > 0 ? ((totalClassesInSemester - classesMissed) / totalClassesInSemester) * 100 : 0;
  const maxMissable = Math.floor(totalClassesInSemester * (1 - (targetPercentage / 100)));
  const remainingSkips = maxMissable - classesMissed;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Attendance Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Find out how many classes you can afford to skip.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Total Classes in Semester</label>
            <input
              type="number"
              min="1"
              value={totalClassesInSemester || ''}
              onChange={(e) => setTotalClassesInSemester(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Classes Missed So Far</label>
            <input
              type="number"
              min="0"
              value={classesMissed ?? ''}
              onChange={(e) => setClassesMissed(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Target Attendance (%)</label>
            <input
              type="number"
              min="1"
              max="100"
              value={targetPercentage || ''}
              onChange={(e) => setTargetPercentage(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className={`rounded-lg p-5 border text-center ${remainingSkips >= 0 ? 'bg-emerald-50 border-emerald-100' : 'bg-rose-50 border-rose-100'}`}>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Status</p>
          <div className="mt-2 flex items-center justify-center gap-6">
            <div>
              <p className="text-xs font-medium text-slate-500">Projected Attendance</p>
              <p className="text-2xl font-bold text-slate-800">{currentAttendance.toFixed(1)}%</p>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div>
              <p className="text-xs font-medium text-slate-500">Remaining Skips</p>
              <p className={`text-3xl font-extrabold ${remainingSkips > 0 ? 'text-emerald-600' : remainingSkips === 0 ? 'text-amber-500' : 'text-rose-600'}`}>
                {remainingSkips}
              </p>
            </div>
          </div>
          
          <p className="text-sm font-medium mt-4">
            {remainingSkips > 0 ? (
              <span className="text-emerald-700">You can safely miss {remainingSkips} more class(es) and still meet your {targetPercentage}% target.</span>
            ) : remainingSkips === 0 ? (
              <span className="text-amber-700">You cannot miss any more classes! You are exactly at your limit.</span>
            ) : (
              <span className="text-rose-700">You have already failed the attendance requirement. You are {Math.abs(remainingSkips)} class(es) over the limit.</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
