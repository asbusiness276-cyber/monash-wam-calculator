import { useState } from 'react';

export default function RandomNumberToolCore() {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [count, setCount] = useState<number>(1);
  const [allowDuplicates, setAllowDuplicates] = useState<boolean>(true);
  const [results, setResults] = useState<number[]>([]);
  const [error, setError] = useState<string>('');

  const generateNumbers = () => {
    setError('');
    if (min >= max) {
      setError('Minimum must be less than maximum.');
      return;
    }
    if (count < 1 || count > 1000) {
      setError('Count must be between 1 and 1000.');
      return;
    }

    const range = max - min + 1;
    if (!allowDuplicates && count > range) {
      setError(`Cannot generate ${count} unique numbers in a range of ${range}.`);
      return;
    }

    const newResults: number[] = [];
    if (!allowDuplicates) {
      // Generate unique pool if range is small enough, else use set tracking
      if (range <= 10000) {
        const pool = Array.from({ length: range }, (_, i) => i + min);
        for (let i = 0; i < count; i++) {
          const randomIndex = Math.floor(Math.random() * pool.length);
          newResults.push(pool[randomIndex]);
          pool.splice(randomIndex, 1);
        }
      } else {
        const uniqueSet = new Set<number>();
        while (uniqueSet.size < count) {
          uniqueSet.add(Math.floor(Math.random() * range) + min);
        }
        newResults.push(...Array.from(uniqueSet));
      }
    } else {
      for (let i = 0; i < count; i++) {
        newResults.push(Math.floor(Math.random() * range) + min);
      }
    }
    
    setResults(newResults);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Random Number Generator</h2>
        <p className="text-sm text-slate-600 mt-1">Generate highly secure, unbiased random numbers.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Minimum</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Maximum</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">How Many?</label>
            <input
              type="number"
              min="1"
              max="1000"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="allowDupes"
            checked={allowDuplicates}
            onChange={(e) => setAllowDuplicates(e.target.checked)}
            className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 h-4 w-4"
          />
          <label htmlFor="allowDupes" className="text-sm font-medium text-slate-700">
            Allow Duplicate Numbers
          </label>
        </div>

        {error && <p className="text-rose-600 text-sm font-medium">{error}</p>}

        <button
          onClick={generateNumbers}
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow transition-colors"
        >
          Generate Numbers
        </button>

        {results.length > 0 && (
          <div className="mt-6">
            <p className="text-sm font-semibold text-slate-700 mb-2">Results:</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 max-h-64 overflow-y-auto">
              <p className="text-lg text-slate-800 font-mono break-words leading-relaxed">
                {results.join(', ')}
              </p>
            </div>
            <button
              onClick={() => navigator.clipboard.writeText(results.join(', '))}
              className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-semibold"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
