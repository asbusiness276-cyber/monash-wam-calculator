import { useState } from 'react';

export default function BinaryTextConverterToolCore() {
  const [mode, setMode] = useState<'text2bin' | 'bin2text'>('text2bin');
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const processConversion = (val: string, currentMode: 'text2bin' | 'bin2text') => {
    setError('');
    if (!val) return '';
    
    try {
      if (currentMode === 'text2bin') {
        // Text to Binary
        return val.split('').map(char => {
          return char.charCodeAt(0).toString(2).padStart(8, '0');
        }).join(' ');
      } else {
        // Binary to Text
        // Remove spaces and split into 8-bit chunks if user didn't use spaces
        let binStr = val.replace(/\s/g, '');
        if (binStr.length % 8 !== 0) {
          setError('Binary input length must be a multiple of 8 bits.');
          return '';
        }
        if (/[^01]/.test(binStr)) {
          setError('Binary input can only contain 0s and 1s.');
          return '';
        }
        
        let output = '';
        for (let i = 0; i < binStr.length; i += 8) {
          const byte = binStr.slice(i, i + 8);
          output += String.fromCharCode(parseInt(byte, 2));
        }
        return output;
      }
    } catch (e) {
      setError('Invalid input.');
      return '';
    }
  };

  const output = processConversion(input, mode);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Binary Translator</h2>
        <p className="text-sm text-slate-600 mt-1">Encode text to binary code, or decode binary back to text.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div className="flex justify-center mb-6">
          <div className="inline-flex bg-slate-100 rounded-lg p-1 border border-slate-200">
            <button
              className={`px-4 py-2 text-sm font-bold rounded-md ${mode === 'text2bin' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              onClick={() => { setMode('text2bin'); setInput(''); }}
            >
              Text to Binary
            </button>
            <button
              className={`px-4 py-2 text-sm font-bold rounded-md ${mode === 'bin2text' ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              onClick={() => { setMode('bin2text'); setInput(''); }}
            >
              Binary to Text
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">
            Input {mode === 'text2bin' ? '(Plain Text)' : '(Binary Code)'}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'text2bin' ? "Type your message here..." : "01001000 01101001..."}
            className="w-full h-32 rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 font-mono text-sm"
          />
          {error && <p className="text-rose-600 text-sm mt-1 font-medium">{error}</p>}
        </div>

        <div>
          <div className="flex justify-between items-end mb-2">
            <label className="block text-sm font-bold text-slate-700">
              Output {mode === 'text2bin' ? '(Binary Code)' : '(Plain Text)'}
            </label>
            <button
              onClick={() => navigator.clipboard.writeText(output)}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              Copy Output
            </button>
          </div>
          <div className="w-full h-40 rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-sm overflow-auto text-slate-800 whitespace-pre-wrap break-all">
            {output || <span className="text-slate-400">Waiting for input...</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
