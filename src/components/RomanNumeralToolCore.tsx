import { useState } from 'react';

export default function RomanNumeralToolCore() {
  const [numberInput, setNumberInput] = useState<string>('');
  const [romanInput, setRomanInput] = useState<string>('');

  const numToRoman = (num: number): string => {
    if (num < 1 || num > 3999) return "Out of range (1-3999)";
    const romanMap: { [key: string]: number } = {
      M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let result = '';
    for (const key in romanMap) {
      while (num >= romanMap[key]) {
        result += key;
        num -= romanMap[key];
      }
    }
    return result;
  };

  const romanToNum = (roman: string): number => {
    const romanMap: { [key: string]: number } = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    for (let idx = 0; idx < roman.length; idx++) {
      const current = romanMap[roman[idx]];
      const next = romanMap[roman[idx + 1]];
      if (next && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
    return total;
  };

  const handleNumChange = (val: string) => {
    setNumberInput(val);
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      setRomanInput(numToRoman(num));
    } else {
      setRomanInput('');
    }
  };

  const handleRomanChange = (val: string) => {
    const cleaned = val.toUpperCase().replace(/[^IVXLCDM]/g, '');
    setRomanInput(cleaned);
    if (cleaned) {
      setNumberInput(romanToNum(cleaned).toString());
    } else {
      setNumberInput('');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Roman Numeral Converter</h2>
      </div>
      <div className="p-4 sm:p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
             <div className="bg-white rounded-full p-2 border border-slate-200 shadow-sm mt-6">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
             </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Standard Number (1-3999)</label>
            <input type="number" value={numberInput} onChange={(e) => handleNumChange(e.target.value)} placeholder="e.g. 2024" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-lg" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Roman Numeral</label>
            <input type="text" value={romanInput} onChange={(e) => handleRomanChange(e.target.value)} placeholder="e.g. MMXXIV" className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-lg font-mono uppercase" />
          </div>
        </div>
      </div>
    </div>
  );
}
