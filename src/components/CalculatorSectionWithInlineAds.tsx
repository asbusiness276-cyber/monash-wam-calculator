import { type ReactNode } from 'react';
import { Star, Award, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID } from '../data/amazonProducts';
import ProductImageDisplay from './ProductImageDisplay';
import AmazonCtaButton from './AmazonCtaButton';
import GrammarlyAffiliateBanner from './GrammarlyAffiliateBanner';

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
          
          <GrammarlyAffiliateBanner className="mt-8" />
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
                <span className="text-[10px] font-extrabold text-slate-400">Amazon</span>
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

              <div className="flex flex-col xl:flex-row gap-4 items-center xl:items-start">
                {/* Enriched Large Photo */}
                <div className="w-full sm:w-48 xl:w-28 h-32 shrink-0 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                  <ProductImageDisplay
                    productId={casioProduct.id}
                    title={casioProduct.title}
                    imageUrl={casioProduct.imageUrl}
                    fallbackImageUrl={casioProduct.fallbackImageUrl}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 w-full space-y-1 text-center xl:text-left">
                  <h4 className="text-sm xl:text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {casioProduct.title}
                  </h4>
                  <p className="text-xs xl:text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Official Monash invigilated exam approved.
                  </p>
                  <ul className="pt-1 flex flex-col xl:block items-center">
                    <li className="flex items-center gap-1.5 xl:gap-1 text-xs xl:text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-4 h-4 xl:w-3 xl:h-3 text-emerald-500 shrink-0" />
                      <span>Natural textbook display</span>
                    </li>
                  </ul>
                </div>
              </div>

              <AmazonCtaButton
                href={casioProduct.amazonUrl}
                defaultText={casioProduct.ctaText}
                onClick={() => handleClick(casioProduct.title, casioProduct.amazonUrl)}
                className="mt-3 py-2.5"
              />
              {casioProduct.originalPrice && casioProduct.dealPrice && (
                <div className="mt-2 flex items-center justify-center gap-2 mb-1">
                  <span className="text-[11px] text-slate-400 line-through">{casioProduct.originalPrice}</span>
                  <span className="text-sm font-black text-red-500">{casioProduct.dealPrice}</span>
                </div>
              )}
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

              <div className="flex flex-col xl:flex-row gap-4 items-center xl:items-start">
                {/* Enriched Large Photo */}
                <div className="w-full sm:w-48 xl:w-28 h-32 shrink-0 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                  <ProductImageDisplay
                    productId={techProduct.id}
                    title={techProduct.title}
                    imageUrl={techProduct.imageUrl}
                    fallbackImageUrl={techProduct.fallbackImageUrl}
                    discountBadge={techProduct.discountBadge}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 w-full space-y-1 text-center xl:text-left">
                  <h4 className="text-sm xl:text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {techProduct.title}
                  </h4>
                  <p className="text-xs xl:text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    18-hour battery life for campus lectures.
                  </p>
                  <ul className="pt-1 flex flex-col xl:block items-center">
                    <li className="flex items-center gap-1.5 xl:gap-1 text-xs xl:text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-4 h-4 xl:w-3 xl:h-3 text-emerald-500 shrink-0" />
                      <span>Ultra-lightweight for backpacks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <AmazonCtaButton
                href={techProduct.amazonUrl}
                defaultText={techProduct.ctaText}
                onClick={() => handleClick(techProduct.title, techProduct.amazonUrl)}
                className="mt-3 py-2.5"
              />
              {techProduct.originalPrice && techProduct.dealPrice && (
                <div className="mt-2 flex items-center justify-center gap-2 mb-1">
                  <span className="text-[11px] text-slate-400 line-through">{techProduct.originalPrice}</span>
                  <span className="text-sm font-black text-red-500">{techProduct.dealPrice}</span>
                </div>
              )}
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

              <div className="flex flex-col xl:flex-row gap-4 items-center xl:items-start">
                {/* Enriched Large Photo */}
                <div className="w-full sm:w-48 xl:w-28 h-32 shrink-0 rounded-xl bg-white p-1 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner overflow-hidden">
                  <ProductImageDisplay
                    productId={ipadProduct.id}
                    title={ipadProduct.title}
                    imageUrl={ipadProduct.imageUrl}
                    fallbackImageUrl={ipadProduct.fallbackImageUrl}
                    discountBadge={ipadProduct.discountBadge}
                  />
                </div>

                {/* Details */}
                <div className="flex-1 w-full space-y-1 text-center xl:text-left">
                  <h4 className="text-sm xl:text-xs font-black text-slate-900 dark:text-white leading-snug">
                    {ipadProduct.title}
                  </h4>
                  <p className="text-xs xl:text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                    Perfect digital notepad for lecture PDF annotations.
                  </p>
                  <ul className="pt-1 flex flex-col xl:block items-center">
                    <li className="flex items-center gap-1.5 xl:gap-1 text-xs xl:text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                      <CheckCircle2 className="w-4 h-4 xl:w-3 xl:h-3 text-emerald-500 shrink-0" />
                      <span>Apple Pencil Pro Support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <AmazonCtaButton
                href={ipadProduct.amazonUrl}
                defaultText={ipadProduct.ctaText}
                onClick={() => handleClick(ipadProduct.title, ipadProduct.amazonUrl)}
                className="mt-3 py-2.5"
              />
              {ipadProduct.originalPrice && ipadProduct.dealPrice && (
                <div className="mt-2 flex items-center justify-center gap-2 mb-1">
                  <span className="text-[11px] text-slate-400 line-through">{ipadProduct.originalPrice}</span>
                  <span className="text-sm font-black text-red-500">{ipadProduct.dealPrice}</span>
                </div>
              )}
            </div>

            {/* Footer Trust Tag */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Verified Amazon Associate</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
