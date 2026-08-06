import { useState } from 'react';
import { ExternalLink, Star, CheckCircle2, ShieldCheck, Award, Calculator } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID, type AmazonProduct } from '../data/amazonProducts';

interface AmazonCalculatorResultWidgetProps {
  productId?: string;
  className?: string;
}

export default function AmazonCalculatorResultWidget({
  productId = 'casio-fx82au',
  className = '',
}: AmazonCalculatorResultWidgetProps) {
  const [failCount, setFailCount] = useState(0);

  const product: AmazonProduct =
    AMAZON_STUDENT_PRODUCTS.find(p => p.id === productId) || AMAZON_STUDENT_PRODUCTS[0];

  const currentSrc =
    failCount === 0
      ? product.imageUrl
      : failCount === 1
      ? product.fallbackImageUrl
      : null;

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'amazon_calculator_aside_click', {
        product_id: product.id,
        product_title: product.title,
        destination: product.amazonUrl,
        store_id: AMAZON_STORE_ID,
      });
    }
  };

  return (
    <div
      className={`mt-5 overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-amber-500/40 p-4 text-white shadow-xl relative ${className}`}
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

      <div className="relative z-10">
        {/* Badge Header */}
        <div className="flex items-center justify-between gap-1.5 mb-2.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
            <Award className="w-3 h-3 text-amber-400" />
            Monash Exam Recommended
          </span>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Sponsored</span>
        </div>

        {/* Product Image */}
        <div className="my-2.5 h-36 w-full rounded-xl bg-white p-2 flex items-center justify-center shadow-inner overflow-hidden">
          {currentSrc ? (
            <img
              src={currentSrc}
              alt={product.title}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              onError={() => setFailCount(prev => prev + 1)}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="text-center text-slate-800 font-black text-xs flex flex-col items-center gap-1 p-2">
              <Calculator className="w-6 h-6 text-amber-500" />
              <span>{product.title}</span>
            </div>
          )}
        </div>

        {/* Product Title */}
        <h4 className="text-xs font-black text-white leading-snug">
          {product.title}
        </h4>

        <div className="mt-1 flex items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
          </div>
          <span className="text-emerald-400 font-bold text-[10px] uppercase tracking-wider">Exam Approved</span>
        </div>

        {/* Key Feature List */}
        <ul className="mt-2.5 space-y-1 text-[11px] text-slate-300 font-medium">
          <li className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">Official Monash Exam Approved</span>
          </li>
          <li className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">Dual-Line Textbook Display</span>
          </li>
        </ul>

        {/* High-CTR CTA Button */}
        <a
          href={product.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="mt-3.5 group flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98]"
        >
          <span>Buy on Amazon AU</span>
          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>

        {/* Store ID Tag */}
        <p className="mt-2 text-[9px] text-slate-400 text-center flex items-center justify-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Amazon Associate Link (Tag: visitbest-22)</span>
        </p>
      </div>
    </div>
  );
}
