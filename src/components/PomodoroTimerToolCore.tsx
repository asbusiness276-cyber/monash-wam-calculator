import { useState, useEffect } from 'react';

export default function PomodoroTimerToolCore() {
  const [mode, setMode] = useState<'work' | 'break'>('work');
  const [timeLeft, setTimeLeft] = useState<number>(25 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Play a simple beep sound if supported (using browser API)
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
        audio.play().catch(() => {});
      } catch (e) {
        // ignore
      }
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'work' ? 25 * 60 : 5 * 60);
  };

  const switchMode = (newMode: 'work' | 'break') => {
    setIsActive(false);
    setMode(newMode);
    setTimeLeft(newMode === 'work' ? 25 * 60 : 5 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const displayTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Pomodoro Study Timer</h2>
        <p className="text-sm text-slate-600 mt-1">Boost focus using the 25/5 minute technique.</p>
      </div>

      <div className="p-8 space-y-8 flex flex-col items-center">
        
        <div className="flex bg-slate-100 p-1 rounded-full w-fit">
          <button 
            onClick={() => switchMode('work')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${mode === 'work' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Study (25m)
          </button>
          <button 
            onClick={() => switchMode('break')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${mode === 'break' ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Break (5m)
          </button>
        </div>

        <div className={`text-7xl sm:text-8xl font-black tabular-nums tracking-tight ${mode === 'work' ? 'text-indigo-600' : 'text-emerald-500'}`}>
          {displayTime}
        </div>

        <div className="flex gap-4 w-full max-w-xs">
          <button
            onClick={toggleTimer}
            className={`flex-1 py-4 rounded-xl text-white font-bold text-lg shadow-sm transition-transform active:scale-95 ${isActive ? 'bg-amber-500 hover:bg-amber-600' : 'bg-slate-800 hover:bg-slate-900'}`}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={resetTimer}
            className="px-6 py-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold transition-transform active:scale-95"
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  );
}
