import { useState } from 'react';

export default function HexDecimalToolCore() {
  const [hexInput, setHexInput] = useState<string>('');
  const [decInput, setDecInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleHexChange = (val: string) => {
    setHexInput(val);
    setError('');
    if (!val) {
      setDecInput('');
      return;
    }
    
    // Validate hex
    if (!/^[0-9A-Fa-f]+$/.test(val.trim())) {
      setError('Invalid Hexadecimal characters.');
      setDecInput('');
      return;
    }

    try {
      // Parse as base-16
      const decimal = parseInt(val.trim(), 16);
      if (isNaN(decimal)) throw new Error('Invalid');
      setDecInput(decimal.toString(10));
    } catch (e) {
      setError('Number is too large or invalid.');
      setDecInput('');
    }
  };

  const handleDecChange = (val: string) => {
    setDecInput(val);
    setError('');
    if (!val) {
      setHexInput('');
      return;
    }
    
    // Validate dec
    if (!/^[0-9]+$/.test(val.trim())) {
      setError('Invalid Decimal characters (must be 0-9).');
      setHexInput('');
      return;
    }

    try {
      const decimal = parseInt(val.trim(), 10);
      if (isNaN(decimal)) throw new Error('Invalid');
      setHexInput(decimal.toString(16).toUpperCase());
    } catch (e) {
      setError('Number is too large or invalid.');
      setHexInput('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Hexadecimal / Decimal Converter</h2>
        <p className="text-sm text-slate-600 mt-1">Instantly convert between Base-16 (Hex) and Base-10 (Decimal).</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Arrow Icon in middle on desktop */}
          <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
             <div className="bg-white rounded-full p-2 border border-slate-200 shadow-sm mt-6">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
             </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Hexadecimal (Base 16)</label>
            <input
              type="text"
              value={hexInput}
              onChange={(e) => handleHexChange(e.target.value)}
              placeholder="e.g. 1A3F"
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 font-mono text-lg uppercase"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Decimal (Base 10)</label>
            <input
              type="text"
              value={decInput}
              onChange={(e) => handleDecChange(e.target.value)}
              placeholder="e.g. 6719"
              className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 font-mono text-lg"
            />
          </div>
        </div>
        
        {error && (
          <div className="bg-rose-50 text-rose-700 p-3 rounded border border-rose-200 text-sm font-medium text-center">
            {error}
          </div>
        )}

      </div>
    </div>
  );
}
