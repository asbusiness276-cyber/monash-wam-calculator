import { useState } from 'react';

export default function StudyTimeToolCore() {
  const [creditPoints, setCreditPoints] = useState<number>(24);
  
  // A standard assumption: 1 credit point in Australia (e.g., 6 cp unit at Uni) 
  // typically equates to 2 hours of total workload per week per credit point (12 hours/week for a 6cp unit).
  // Total workload = contact hours + self-directed study.
  // We can simplify and just use standard calculations.
  
  const totalWorkload = creditPoints * 2; 
  const contactHoursEstimate = creditPoints * 0.6; // Rough estimate of contact hours
  const selfStudyHours = totalWorkload - contactHoursEstimate;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Study Time Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate how many hours you need to study per week based on your course load.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Total Credit Points (Per Semester)</label>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="48"
              step="3"
              value={creditPoints}
              onChange={(e) => setCreditPoints(Number(e.target.value))}
              className="w-full accent-indigo-600"
            />
            <input
              type="number"
              min="0"
              max="48"
              value={creditPoints || ''}
              onChange={(e) => setCreditPoints(Number(e.target.value))}
              className="w-20 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <p className="text-xs text-slate-500 mt-2">Standard full-time load is typically 24 credit points (e.g., 4 x 6 credit point units).</p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100 mt-8 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Recommended Weekly Workload</p>
          <p className="text-4xl font-extrabold text-indigo-600 mt-2">{totalWorkload.toFixed(1)} <span className="text-xl font-medium text-indigo-400">hours</span></p>
          
          <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-indigo-200/60">
            <div>
              <p className="text-xs text-indigo-700 font-medium">Estimated Contact Hours</p>
              <p className="text-lg font-bold text-indigo-900">~{contactHoursEstimate.toFixed(1)} hrs</p>
            </div>
            <div>
              <p className="text-xs text-indigo-700 font-medium">Self-Directed Study</p>
              <p className="text-lg font-bold text-indigo-900">~{selfStudyHours.toFixed(1)} hrs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
