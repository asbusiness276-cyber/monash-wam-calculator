import { useState } from 'react';

interface ProductImageDisplayProps {
  productId: string;
  title: string;
  imageUrl: string;
  fallbackImageUrl?: string;
  className?: string;
}

export default function ProductImageDisplay({
  productId,
  title,
  imageUrl,
  fallbackImageUrl,
  className = 'max-h-full max-w-full object-contain',
}: ProductImageDisplayProps) {
  const [failStage, setFailStage] = useState<number>(0);

  // If stage 0: try primary URL
  // If stage 1: try fallback URL
  // If stage 2: render rich, high-trust SVG vector graphic

  if (failStage === 0) {
    return (
      <img
        src={imageUrl}
        alt={title}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onError={() => setFailStage(1)}
        className={className}
        loading="lazy"
      />
    );
  }

  if (failStage === 1 && fallbackImageUrl) {
    return (
      <img
        src={fallbackImageUrl}
        alt={title}
        referrerPolicy="no-referrer"
        crossOrigin="anonymous"
        onError={() => setFailStage(2)}
        className={className}
        loading="lazy"
      />
    );
  }

  // Fallback Stage 2: Rich, Pixel-Perfect Vector Product SVG Graphics
  if (productId === 'casio-fx82au') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-1.5 bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl text-white shadow-inner">
        {/* Casio Brand & Screen */}
        <div className="w-full text-[9px] font-black tracking-widest text-slate-300 text-center mb-1 uppercase">
          CASIO fx-82AU
        </div>
        <div className="w-full h-8 bg-emerald-950 border border-emerald-500/50 rounded-md p-1 flex items-center justify-between font-mono text-xs text-emerald-400 font-bold shadow-inner">
          <span className="text-[9px] text-emerald-600">DEG</span>
          <span className="text-sm font-black">78.50%</span>
        </div>
        {/* Keypad Grid */}
        <div className="w-full grid grid-cols-4 gap-1 mt-2">
          {['shift', 'optn', 'calc', 'del', '7', '8', '9', 'AC', '4', '5', '6', '×', '1', '2', '3', '+', '0', '.', '=', 'ANS'].map((k, idx) => (
            <div
              key={idx}
              className={`h-3 rounded text-[8px] font-black flex items-center justify-center shadow-sm ${
                k === 'AC' || k === 'del'
                  ? 'bg-amber-600 text-white'
                  : k === '='
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 text-slate-200'
              }`}
            >
              {k}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (productId === 'macbook-air-m2') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-2">
        {/* Screen */}
        <div className="w-28 h-16 bg-slate-900 border-2 border-slate-700 rounded-t-lg p-1.5 flex flex-col items-center justify-center shadow-lg relative">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-slate-900 rounded flex items-center justify-center">
            <span className="text-[10px] font-black text-white tracking-tight">MacBook Air M2</span>
          </div>
          <div className="absolute top-0 w-4 h-1 bg-slate-950 rounded-b"></div>
        </div>
        {/* Base */}
        <div className="w-36 h-2 bg-slate-300 dark:bg-slate-700 rounded-b-md shadow-md flex justify-center">
          <div className="w-8 h-0.5 bg-slate-400 dark:bg-slate-600 rounded-full mt-0.5"></div>
        </div>
      </div>
    );
  }

  if (productId === 'ipad-air') {
    return (
      <div className="w-full h-full flex items-center justify-center p-2">
        <div className="w-20 h-28 bg-slate-900 border-2 border-slate-700 rounded-xl p-1.5 flex flex-col justify-between shadow-lg relative">
          <div className="w-full h-full bg-gradient-to-br from-sky-900 to-indigo-950 rounded-lg p-1 flex flex-col justify-between">
            <span className="text-[9px] font-black text-sky-200">iPad Air M2</span>
            <div className="h-1 w-8 bg-sky-400/50 rounded-full mx-auto mb-1"></div>
          </div>
          {/* Apple Pencil */}
          <div className="absolute -right-2 top-4 w-1 h-16 bg-slate-200 rounded-full shadow border border-slate-400"></div>
        </div>
      </div>
    );
  }

  // Generic Tech/Study SVG Illustration
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl p-3 text-center">
      <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-black text-lg mb-1">
        ⭐
      </div>
      <span className="text-[10px] font-black text-slate-800 dark:text-slate-200 leading-tight">
        {title}
      </span>
    </div>
  );
}
