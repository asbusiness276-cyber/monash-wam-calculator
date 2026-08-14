import { useState } from 'react';

export default function LectureSpeedToolCore() {
  const [hours, setHours] = useState<number>(1);
  const [minutes, setMinutes] = useState<number>(30);
  const [speed, setSpeed] = useState<number>(1.5);

  const totalOriginalMinutes = (hours * 60) + (minutes || 0);
  const realTimeMinutes = totalOriginalMinutes / speed;

  const realHours = Math.floor(realTimeMinutes / 60);
  const realMins = Math.round(realTimeMinutes % 60);
  
  const savedMinutes = totalOriginalMinutes - realTimeMinutes;
  const savedHoursStr = Math.floor(savedMinutes / 60);
  const savedMinsStr = Math.round(savedMinutes % 60);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Lecture Speed Calculator</h2>
        <p className="text-sm text-slate-600 mt-1">Calculate how long it takes to watch a lecture at 1.5x or 2x speed.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Lecture Hours</label>
            <input
              type="number"
              min="0"
              value={hours || ''}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Lecture Minutes</label>
            <input
              type="number"
              min="0"
              max="59"
              value={minutes === 0 ? '' : minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Playback Speed</label>
            <select
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="1">1.0x (Normal)</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="1.75">1.75x</option>
              <option value="2">2.0x</option>
              <option value="2.5">2.5x</option>
            </select>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100 text-center">
          <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Real Watch Time</p>
          <p className="text-5xl font-extrabold text-indigo-600 mt-3">
            {realHours > 0 && <>{realHours} <span className="text-xl font-medium">hr</span> </>}
            {realMins} <span className="text-xl font-medium">min</span>
          </p>
          {speed > 1 && (
            <p className="text-sm text-emerald-600 font-bold mt-4">
              You save {savedHoursStr > 0 ? `${savedHoursStr} hr ` : ''}{savedMinsStr} min!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
