import { useState } from 'react';

const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const TENS = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const SCALES = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

export default function NumberToWordsToolCore() {
  const [input, setInput] = useState<string>('');

  const numberToWords = (num: number): string => {
    if (num === 0) return 'Zero';
    
    let words = '';
    
    if (num < 0) {
      words += 'Negative ';
      num = Math.abs(num);
    }

    const chunkNumber = (n: number): string => {
      let chunkStr = '';
      if (n >= 100) {
        chunkStr += ONES[Math.floor(n / 100)] + ' Hundred ';
        n %= 100;
      }
      if (n >= 20) {
        chunkStr += TENS[Math.floor(n / 10)] + ' ';
        n %= 10;
      }
      if (n > 0) {
        chunkStr += ONES[n] + ' ';
      }
      return chunkStr;
    };

    let scaleIndex = 0;
    while (num > 0) {
      const chunk = num % 1000;
      if (chunk !== 0) {
        words = chunkNumber(chunk) + SCALES[scaleIndex] + ' ' + words;
      }
      num = Math.floor(num / 1000);
      scaleIndex++;
      if (scaleIndex >= SCALES.length && num > 0) {
          return "Number is too large";
      }
    }

    return words.trim();
  };

  const getResult = () => {
    if (!input) return '...';
    // Remove commas
    const cleanInput = input.replace(/,/g, '');
    const num = parseInt(cleanInput, 10);
    
    if (isNaN(num)) return 'Please enter a valid whole number.';
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) return 'Number is too large (exceeds safe limits).';
    
    return numberToWords(num);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Number to Words Converter</h2>
        <p className="text-sm text-slate-600 mt-1">Convert digits into written English text.</p>
      </div>

      <div className="p-4 sm:p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Enter a Number</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 1234"
            className="w-full rounded-lg border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-lg"
          />
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-semibold text-indigo-800 uppercase tracking-wide">Written English</p>
            <button
              onClick={() => navigator.clipboard.writeText(getResult())}
              className="text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-white px-3 py-1 rounded shadow-sm border border-indigo-200"
            >
              Copy
            </button>
          </div>
          <p className="text-xl md:text-2xl font-bold text-indigo-900 leading-relaxed">
            {getResult()}
          </p>
        </div>
      </div>
    </div>
  );
}
