import { useState, type ReactNode } from 'react';
import { ExternalLink, Star, Award, ShieldCheck, Zap, ShoppingBag } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID } from '../data/amazonProducts';

interface CalculatorSectionWithInlineAdsProps {
  children: ReactNode;
  path?: string;
}

export default function CalculatorSectionWithInlineAds({
  children,
  path = typeof window !== 'undefined' ? window.location.pathname : '/',
}: CalculatorSectionWithInlineAdsProps) {
  const [leftFailCount, setLeftFailCount] = useState(0);
  const [rightFailCount, setRightFailCount] = useState(0);

  const leftProduct = AMAZON_STUDENT_PRODUCTS[0]; // Casio Calculator
  const rightProduct = AMAZON_STUDENT_PRODUCTS[1]; // MacBook Air

  const leftSrc =
    leftFailCount === 0
      ? leftProduct.imageUrl
      : leftFailCount === 1
      ? leftProduct.fallbackImageUrl
      : null;

  const rightSrc =
    rightFailCount === 0
      ? rightProduct.imageUrl
      : rightFailCount === 1
      ? rightProduct.fallbackImageUrl
      : null;

  const handleClick = (productTitle: string, url: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'inline_calculator_ad_click', {
        page_path: path,
        product_title: productTitle,
        destination: url,
        store_id: AMAZON_STORE_ID,
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT RED BOX: Left Skyscraper Affiliate Card (Casio Exam Calculator) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-24">
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-amber-400/50 p-4 text-slate-900 dark:text-white shadow-xl group hover:border-amber-400 transition-all duration-300">
            <div className="flex items-center justify-between gap-1 mb-2.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                Exam Approved
              </span>
              <span className="text-[10px] font-extrabold text-slate-400">Amazon AU</span>
            </div>

            {/* Photo Container */}
            <div className="my-2.5 h-44 w-full rounded-xl bg-white p-3 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner overflow-hidden relative">
              <span className="absolute top-2 left-2 z-10 text-[9px] font-black uppercase tracking-wider bg-slate-950 text-amber-400 px-2 py-0.5 rounded shadow">
                Monash Allowed
              </span>
              {leftSrc ? (
                <img
                  src={leftSrc}
                  alt={leftProduct.title}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  onError={() => setLeftFailCount(prev => prev + 1)}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-800 p-2 text-center">
                  <ShoppingBag className="w-8 h-8 text-amber-500 mb-1" />
                  <span className="text-xs font-black">{leftProduct.title}</span>
                </div>
              )}
            </div>

            <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug group-hover:text-amber-500 transition-colors">
              {leftProduct.title}
            </h4>

            <div className="mt-1.5 flex items-center gap-1 text-xs text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span>{leftProduct.rating}</span>
              <span className="text-slate-400 font-normal">({leftProduct.reviewsCount} reviews)</span>
            </div>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Official Monash & Australian Uni invigilated exam approved calculator.
            </p>

            <a
              href={leftProduct.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(leftProduct.title, leftProduct.amazonUrl)}
              className="mt-4 flex items-center justify-center gap-1.5 w-full py-3 px-3 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/20 active:scale-[0.98]"
            >
              <span>Buy on Amazon AU</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="mt-2.5 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Store ID: visitbest-22</span>
            </div>
          </div>
        </div>

        {/* MIDDLE COLUMN: Calculator Input Form & Content */}
        <div className="lg:col-span-6 w-full space-y-6">
          {children}
        </div>

        {/* RIGHT RED BOX: Right Skyscraper Affiliate Card (MacBook Air / Headphones) */}
        <div className="hidden lg:block lg:col-span-3 sticky top-24">
          <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-blue-400/50 p-4 text-slate-900 dark:text-white shadow-xl group hover:border-blue-400 transition-all duration-300">
            <div className="flex items-center justify-between gap-1 mb-2.5">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                <Zap className="w-3.5 h-3.5 text-blue-500" />
                #1 Student Laptop
              </span>
              <span className="text-[10px] font-extrabold text-slate-400">Amazon AU</span>
            </div>

            {/* Photo Container */}
            <div className="my-2.5 h-44 w-full rounded-xl bg-white p-3 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner overflow-hidden relative">
              <span className="absolute top-2 left-2 z-10 text-[9px] font-black uppercase tracking-wider bg-slate-950 text-blue-400 px-2 py-0.5 rounded shadow">
                Top Uni Laptop
              </span>
              {rightSrc ? (
                <img
                  src={rightSrc}
                  alt={rightProduct.title}
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  onError={() => setRightFailCount(prev => prev + 1)}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-800 p-2 text-center">
                  <ShoppingBag className="w-8 h-8 text-blue-500 mb-1" />
                  <span className="text-xs font-black">{rightProduct.title}</span>
                </div>
              )}
            </div>

            <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug group-hover:text-blue-500 transition-colors">
              {rightProduct.title}
            </h4>

            <div className="mt-1.5 flex items-center gap-1 text-xs text-amber-500 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span>{rightProduct.rating}</span>
              <span className="text-slate-400 font-normal">({rightProduct.reviewsCount} reviews)</span>
            </div>

            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Lightweight, all-day 18-hour battery life for Monash campus lectures.
            </p>

            <a
              href={rightProduct.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(rightProduct.title, rightProduct.amazonUrl)}
              className="mt-4 flex items-center justify-center gap-1.5 w-full py-3 px-3 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 hover:from-blue-300 hover:to-sky-200 transition-all duration-300 shadow-md shadow-blue-500/20 active:scale-[0.98]"
            >
              <span>View Deal on Amazon AU</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="mt-2.5 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Store ID: visitbest-22</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
