import { useState, type ReactNode } from 'react';
import { ExternalLink, Star, Award, ShieldCheck, Zap, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID } from '../data/amazonProducts';

interface CalculatorSectionWithInlineAdsProps {
  children: ReactNode;
  path?: string;
}

export default function CalculatorSectionWithInlineAds({
  children,
  path = typeof window !== 'undefined' ? window.location.pathname : '/',
}: CalculatorSectionWithInlineAdsProps) {
  const [casioFailCount, setCasioFailCount] = useState(0);
  const [techFailCount, setTechFailCount] = useState(0);

  const casioProduct = AMAZON_STUDENT_PRODUCTS[0]; // Casio Calculator
  const techProduct = AMAZON_STUDENT_PRODUCTS[1]; // MacBook Air

  const casioSrc =
    casioFailCount === 0
      ? casioProduct.imageUrl
      : casioFailCount === 1
      ? casioProduct.fallbackImageUrl
      : null;

  const techSrc =
    techFailCount === 0
      ? techProduct.imageUrl
      : techFailCount === 1
      ? techProduct.fallbackImageUrl
      : null;

  const handleClick = (productTitle: string, url: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'calculator_side_ad_click', {
        page_path: path,
        product_title: productTitle,
        destination: url,
        store_id: AMAZON_STORE_ID,
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Equal-Height 2-Column Desktop Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Calculator Form & Result Area */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="w-full h-full">
            {children}
          </div>
        </div>

        {/* RIGHT COLUMN: Recommended Study Items (Full Stretch Equal-Height) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="h-full flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-7 shadow-xl relative overflow-hidden group hover:border-amber-400/80 transition-all duration-300">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Recommended Student Gear</span>
                </div>
                <span className="text-[10px] font-extrabold text-slate-400">Amazon AU</span>
              </div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Monash Exam & Study Essentials
              </h3>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                Top rated study gear required for Monash lectures & invigilated exams.
              </p>
            </div>

            {/* Product 1: Casio Scientific Calculator */}
            <div className="my-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 p-4 transition-all duration-300 hover:border-amber-400/60">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wide bg-amber-500/20 text-amber-700 dark:text-amber-300">
                  <Award className="w-3 h-3 text-amber-500" />
                  {casioProduct.badge}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{casioProduct.rating}</span>
                  <span className="text-slate-400 font-normal">({casioProduct.reviewsCount})</span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                {/* Photo */}
                <div className="col-span-4 h-28 rounded-xl bg-white p-2 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                  {casioSrc ? (
                    <img
                      src={casioSrc}
                      alt={casioProduct.title}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      onError={() => setCasioFailCount(prev => prev + 1)}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <ShoppingBag className="w-6 h-6 text-amber-500" />
                  )}
                </div>

                {/* Details */}
                <div className="col-span-8 space-y-1">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {casioProduct.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Official Monash invigilated exam approved.
                  </p>
                  <ul className="pt-1">
                    <li className="flex items-center gap-1 text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>Natural textbook display</span>
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={casioProduct.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick(casioProduct.title, casioProduct.amazonUrl)}
                className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/20 active:scale-[0.98]"
              >
                <span>Buy Exam Calculator on Amazon AU →</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Product 2: Apple MacBook Air M2 */}
            <div className="mb-2 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 p-4 transition-all duration-300 hover:border-blue-400/60">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wide bg-blue-500/20 text-blue-700 dark:text-blue-300">
                  <Zap className="w-3 h-3 text-blue-500" />
                  {techProduct.badge}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{techProduct.rating}</span>
                  <span className="text-slate-400 font-normal">({techProduct.reviewsCount})</span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                {/* Photo */}
                <div className="col-span-4 h-28 rounded-xl bg-white p-2 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
                  {techSrc ? (
                    <img
                      src={techSrc}
                      alt={techProduct.title}
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      onError={() => setTechFailCount(prev => prev + 1)}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <ShoppingBag className="w-6 h-6 text-blue-500" />
                  )}
                </div>

                {/* Details */}
                <div className="col-span-8 space-y-1">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {techProduct.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    18-hour battery life for campus lectures & assignments.
                  </p>
                  <ul className="pt-1">
                    <li className="flex items-center gap-1 text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>Ultra-lightweight for uni bags</span>
                    </li>
                  </ul>
                </div>
              </div>

              <a
                href={techProduct.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClick(techProduct.title, techProduct.amazonUrl)}
                className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 hover:from-blue-300 hover:to-sky-200 transition-all duration-300 shadow-md shadow-blue-500/20 active:scale-[0.98]"
              >
                <span>Check Student Deal on Amazon AU →</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Footer Trust Tag */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Amazon Associate Store ID: visitbest-22</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
