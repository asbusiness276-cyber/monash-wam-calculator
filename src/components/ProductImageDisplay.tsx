import { useState } from 'react';
import { BatteryCharging, Headphones, Laptop, Tablet, ShieldCheck } from 'lucide-react';

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

  // Fallback Stage 2: Rich, Pixel-Perfect Vector Product Graphics
  if (productId === 'casio-fx82au') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl text-white shadow-inner">
        <div className="w-full flex items-center justify-between text-[9px] font-black tracking-widest text-slate-300 uppercase px-1 mb-1">
          <span>CASIO</span>
          <span className="text-amber-400">fx-82AU</span>
        </div>
        <div className="w-full h-8 bg-emerald-950 border border-emerald-500/50 rounded-md px-2 flex items-center justify-between font-mono text-xs text-emerald-400 font-bold shadow-inner">
          <span className="text-[8px] text-emerald-600">DEG</span>
          <span className="text-sm font-black">78.50%</span>
        </div>
        <div className="w-full grid grid-cols-4 gap-1 mt-2">
          {['shift', 'optn', 'del', 'AC', '7', '8', '9', '×', '4', '5', '6', '+', '1', '2', '3', '='].map((k, idx) => (
            <div
              key={idx}
              className={`h-3.5 rounded text-[8px] font-black flex items-center justify-center shadow-sm ${
                k === 'AC' || k === 'del'
                  ? 'bg-amber-600 text-white'
                  : k === '='
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-200'
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
        <div className="w-32 h-18 bg-slate-900 border-2 border-slate-700 rounded-t-lg p-1.5 flex flex-col items-center justify-center shadow-lg relative">
          <div className="w-full h-full bg-gradient-to-tr from-indigo-900 via-purple-900 to-slate-900 rounded flex flex-col items-center justify-center">
            <Laptop className="w-5 h-5 text-indigo-300 mb-0.5" />
            <span className="text-[10px] font-black text-white tracking-tight">MacBook Air M2</span>
          </div>
          <div className="absolute top-0 w-4 h-1 bg-slate-950 rounded-b"></div>
        </div>
        <div className="w-40 h-2.5 bg-slate-300 dark:bg-slate-700 rounded-b-md shadow-md flex justify-center">
          <div className="w-8 h-0.5 bg-slate-400 dark:bg-slate-600 rounded-full mt-0.5"></div>
        </div>
      </div>
    );
  }

  if (productId === 'ipad-air') {
    return (
      <div className="w-full h-full flex items-center justify-center p-2">
        <div className="w-22 h-28 bg-slate-900 border-2 border-slate-700 rounded-xl p-1.5 flex flex-col justify-between shadow-lg relative">
          <div className="w-full h-full bg-gradient-to-br from-sky-900 to-indigo-950 rounded-lg p-2 flex flex-col justify-between items-center">
            <Tablet className="w-6 h-6 text-sky-300 mt-1" />
            <span className="text-[9px] font-black text-sky-200">iPad Air M2</span>
            <div className="h-1 w-8 bg-sky-400/50 rounded-full mb-0.5"></div>
          </div>
          <div className="absolute -right-2 top-4 w-1.5 h-16 bg-slate-100 rounded-full shadow border border-slate-400"></div>
        </div>
      </div>
    );
  }

  if (productId === 'sony-wh1000xm5') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl text-white shadow-inner">
        <Headphones className="w-10 h-10 text-amber-400 mb-1" />
        <span className="text-[10px] font-black text-amber-300">Sony WH-1000XM5</span>
        <span className="text-[8px] font-bold text-slate-400">Active Noise Cancelling</span>
      </div>
    );
  }

  if (productId === 'anker-power-bank') {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 rounded-xl text-white border border-amber-500/30 shadow-inner">
        {/* Anker Magnetic Power Bank Illustration */}
        <div className="flex items-center gap-1 mb-1">
          <BatteryCharging className="w-6 h-6 text-emerald-400" />
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
          </div>
        </div>
        <span className="text-xs font-black text-white tracking-tight">ANKER 10,000mAh</span>
        <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest mt-0.5">Fast Wireless Power</span>
      </div>
    );
  }

  // Default Ergonomic Stand / Study Product
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl text-white shadow-inner">
      <ShieldCheck className="w-8 h-8 text-amber-400 mb-1" />
      <span className="text-[10px] font-black text-white leading-tight text-center">
        {title}
      </span>
    </div>
  );
}
