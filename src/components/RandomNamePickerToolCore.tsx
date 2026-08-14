import { useState } from 'react';

export default function RandomNamePickerToolCore() {
  const [inputList, setInputList] = useState<string>("Alice\nBob\nCharlie\nDiana\nEdward");
  const [winner, setWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const pickName = () => {
    const names = inputList.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    if (names.length === 0) return;
    
    setIsSpinning(true);
    setWinner(null);
    
    // Fake spin effect
    let count = 0;
    const interval = setInterval(() => {
       const randomIndex = Math.floor(Math.random() * names.length);
       setWinner(names[randomIndex]);
       count++;
       if (count > 15) {
         clearInterval(interval);
         setIsSpinning(false);
         // Final pick
         const finalIndex = Math.floor(Math.random() * names.length);
         setWinner(names[finalIndex]);
       }
    }, 50);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Random Name Picker</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Enter names (one per line):</label>
          <textarea 
            value={inputList} 
            onChange={(e) => setInputList(e.target.value)} 
            className="w-full h-48 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 font-mono text-sm"
          />
        </div>

        <button 
          onClick={pickName} 
          disabled={isSpinning}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-sm transition-colors text-lg disabled:opacity-50"
        >
          {isSpinning ? 'Picking...' : 'Pick a Random Name'}
        </button>

        {winner && (
          <div className={`p-8 border rounded-lg text-center shadow-inner transition-all ${isSpinning ? 'bg-slate-100 border-slate-200 scale-95' : 'bg-emerald-50 border-emerald-300 scale-100'}`}>
              <p className="text-sm uppercase font-bold text-emerald-600 mb-2">And the winner is...</p>
              <p className="text-4xl md:text-5xl font-extrabold text-emerald-700 break-words">{winner}</p>
          </div>
        )}

      </div>
    </div>
  );
}
