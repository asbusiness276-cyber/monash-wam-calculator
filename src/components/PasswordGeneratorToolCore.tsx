import { useState, useEffect } from 'react';

export default function PasswordGeneratorToolCore() {
  const [length, setLength] = useState<number>(16);
  const [useUpper, setUseUpper] = useState<boolean>(true);
  const [useLower, setUseLower] = useState<boolean>(true);
  const [useNumbers, setUseNumbers] = useState<boolean>(true);
  const [useSymbols, setUseSymbols] = useState<boolean>(true);
  
  const [password, setPassword] = useState<string>('');

  const generatePassword = () => {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    const syms = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let chars = '';
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += nums;
    if (useSymbols) chars += syms;
    
    if (chars === '') {
      setPassword('Select at least one option');
      return;
    }
    
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, useUpper, useLower, useNumbers, useSymbols]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Secure Password Generator</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        
        <div className="relative bg-slate-800 rounded-lg p-6 flex justify-between items-center break-all shadow-inner border border-slate-700">
            <p className="text-2xl md:text-3xl font-mono text-emerald-400 font-bold mr-4">{password}</p>
            <button 
              onClick={() => navigator.clipboard.writeText(password)} 
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded shadow shrink-0 font-semibold"
            >
              Copy
            </button>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-slate-700">Password Length: {length}</label>
          </div>
          <input 
            type="range" min="4" max="64" value={length} 
            onChange={(e) => setLength(Number(e.target.value))} 
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={useUpper} onChange={(e) => setUseUpper(e.target.checked)} className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-slate-700">Uppercase (A-Z)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={useLower} onChange={(e) => setUseLower(e.target.checked)} className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-slate-700">Lowercase (a-z)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-slate-700">Numbers (0-9)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span className="text-sm font-medium text-slate-700">Symbols (!@#)</span>
          </label>
        </div>

        <button onClick={generatePassword} className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg shadow-sm border border-slate-300 transition-colors">
          Generate New Password
        </button>

      </div>
    </div>
  );
}
