import { type ReactNode } from 'react';
import { Star, Award, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID } from '../data/amazonProducts';
import ProductImageDisplay from './ProductImageDisplay';
import AmazonCtaButton from './AmazonCtaButton';

interface CalculatorSectionWithInlineAdsProps {
  children: ReactNode;
  path?: string;
}

export default function CalculatorSectionWithInlineAds({
  children,
  path = typeof window !== 'undefined' ? window.location.pathname : '/',
}: CalculatorSectionWithInlineAdsProps) {
  const casioProduct = AMAZON_STUDENT_PRODUCTS[0]; // Casio Calculator
  const techProduct = AMAZON_STUDENT_PRODUCTS[1]; // MacBook Air
  const ipadProduct = AMAZON_STUDENT_PRODUCTS[2]; // iPad Air

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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* 2-Column Desktop Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Calculator Form & Result Area */}
        <div className="lg:col-span-7 w-full">
          {children}
        </div>

        {/* RIGHT COLUMN: Recommended Study Items (Tight Flowing Container with Zero White Space) */}
        <div className="lg:col-span-5 w-full">
          <div className="flex flex-col space-y-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 md:p-6 shadow-xl relative overflow-hidden group hover:border-amber-400/80 transition-all duration-300">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Recommended Student Essentials</span>
                </div>
                <span className="text-[10px] font-extrabold text-slate-400">Amazon AU</span>
              </div>
              <h3 className="text-base font-black text-slate-900 dark:text-white">
                Monash Exam & Study Gear
              </h3>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                Official exam-approved calculators & high-rated student tech.
              </p>
            </div>

            {/* Product 1: Casio Scientific Calculator */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 p-4 transition-all duration-300 hover:border-amber-400/60 shadow-sm">
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
                {/* Enriched Large Photo */}
                <div className="col-span-5 h-32 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                  <ProductImageDisplay
                    productId={casioProduct.id}
                    title={casioProduct.title}
                    imageUrl={casioProduct.imageUrl}
                    fallbackImageUrl={casioProduct.fallbackImageUrl}
                    className="max-h-full max-w-full object-cover rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="col-span-7 space-y-1">
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

              <AmazonCtaButton
                href={casioProduct.amazonUrl}
                defaultText="Grab This Offer on Amazon AU"
                onClick={() => handleClick(casioProduct.title, casioProduct.amazonUrl)}
                className="mt-3 py-2.5"
              />
            </div>

            {/* Product 2: Apple MacBook Air M2 */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 p-4 transition-all duration-300 hover:border-blue-400/60 shadow-sm">
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
                {/* Enriched Large Photo */}
                <div className="col-span-5 h-32 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                  <ProductImageDisplay
                    productId={techProduct.id}
                    title={techProduct.title}
                    imageUrl={techProduct.imageUrl}
                    fallbackImageUrl={techProduct.fallbackImageUrl}
                    className="max-h-full max-w-full object-cover rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="col-span-7 space-y-1">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {techProduct.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    18-hour battery life for campus lectures.
                  </p>
                  <ul className="pt-1">
                    <li className="flex items-center gap-1 text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>Ultra-lightweight for backpacks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <AmazonCtaButton
                href={techProduct.amazonUrl}
                defaultText="Grab This Offer on Amazon AU"
                onClick={() => handleClick(techProduct.title, techProduct.amazonUrl)}
                className="mt-3 py-2.5"
              />
            </div>

            {/* Product 3: Apple iPad Air M2 */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/70 p-4 transition-all duration-300 hover:border-indigo-400/60 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wide bg-indigo-500/20 text-indigo-700 dark:text-indigo-300">
                  <Sparkles className="w-3 h-3 text-indigo-500" />
                  {ipadProduct.badge}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{ipadProduct.rating}</span>
                  <span className="text-slate-400 font-normal">({ipadProduct.reviewsCount})</span>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-3 items-center">
                {/* Enriched Large Photo */}
                <div className="col-span-5 h-32 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                  <ProductImageDisplay
                    productId={ipadProduct.id}
                    title={ipadProduct.title}
                    imageUrl={ipadProduct.imageUrl}
                    fallbackImageUrl={ipadProduct.fallbackImageUrl}
                    className="max-h-full max-w-full object-cover rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="col-span-7 space-y-1">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {ipadProduct.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Perfect digital notepad for lecture PDF annotations.
                  </p>
                  <ul className="pt-1">
                    <li className="flex items-center gap-1 text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span>Apple Pencil Pro Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <AmazonCtaButton
                href={ipadProduct.amazonUrl}
                defaultText="Grab This Offer on Amazon AU"
                onClick={() => handleClick(ipadProduct.title, ipadProduct.amazonUrl)}
                className="mt-3 py-2.5"
              />
            </div>

            {/* Footer Trust Tag */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Amazon Associate Store ID: visitbest-22</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
