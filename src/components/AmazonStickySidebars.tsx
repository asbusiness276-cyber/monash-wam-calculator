import { ExternalLink, Star, Award, ShieldCheck, Zap } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID } from '../data/amazonProducts';
import { EXCLUDED_AFFILIATE_PATHS } from './ContextualAmazonAffiliateCard';
import ProductImageDisplay from './ProductImageDisplay';

interface AmazonStickySidebarsProps {
  path?: string;
}

export default function AmazonStickySidebars({
  path = typeof window !== 'undefined' ? window.location.pathname : '/',
}: AmazonStickySidebarsProps) {
  // Check if current page is legal/info page
  const isExcluded = EXCLUDED_AFFILIATE_PATHS.some(excluded => path === excluded || path.startsWith(excluded));
  if (isExcluded) return null;

  const leftProduct = AMAZON_STUDENT_PRODUCTS[0]; // Casio Calculator
  const rightProduct = AMAZON_STUDENT_PRODUCTS[1]; // MacBook Air

  const handleClick = (productTitle: string, url: string) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'amazon_skyscraper_sidebar_click', {
        page_path: path,
        product_title: productTitle,
        destination: url,
        store_id: AMAZON_STORE_ID,
      });
    }
  };

  return (
    <>
      {/* LEFT SKYSCRAPER SIDEBAR (Desktop 1280px+) */}
      <aside className="hidden 2xl:block fixed left-4 top-32 z-20 w-56 animate-fade-in pointer-events-auto">
        <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-amber-400/50 p-4 text-slate-900 dark:text-white shadow-2xl group hover:border-amber-400 transition-all duration-300">
          <div className="flex items-center justify-between gap-1 mb-2.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
              <Award className="w-3 h-3 text-amber-500" />
              Exam Approved
            </span>
            <span className="text-[9px] font-extrabold text-slate-400">Amazon AU</span>
          </div>

          <div className="my-2 h-36 w-full rounded-xl bg-white p-2 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner overflow-hidden">
            <ProductImageDisplay
              productId={leftProduct.id}
              title={leftProduct.title}
              imageUrl={leftProduct.imageUrl}
              fallbackImageUrl={leftProduct.fallbackImageUrl}
            />
          </div>

          <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug group-hover:text-amber-500 transition-colors">
            {leftProduct.title}
          </h4>

          <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-500 font-bold">
            <Star className="w-3 h-3 fill-amber-500" />
            <span>{leftProduct.rating}</span>
            <span className="text-slate-400 font-normal">({leftProduct.reviewsCount})</span>
          </div>

          <p className="mt-1.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
            Official Monash & Uni exam approved calculator.
          </p>

          <a
            href={leftProduct.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(leftProduct.title, leftProduct.amazonUrl)}
            className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/20 active:scale-[0.98]"
          >
            <span>Buy on Amazon AU</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="mt-2 text-[9px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Tag: visitbest-22</span>
          </div>
        </div>
      </aside>

      {/* RIGHT SKYSCRAPER SIDEBAR (Desktop 1280px+) */}
      <aside className="hidden 2xl:block fixed right-4 top-32 z-20 w-56 animate-fade-in pointer-events-auto">
        <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-blue-400/50 p-4 text-slate-900 dark:text-white shadow-2xl group hover:border-blue-400 transition-all duration-300">
          <div className="flex items-center justify-between gap-1 mb-2.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30">
              <Zap className="w-3 h-3 text-blue-500" />
              #1 Student Laptop
            </span>
            <span className="text-[9px] font-extrabold text-slate-400">Amazon AU</span>
          </div>

          <div className="my-2 h-36 w-full rounded-xl bg-white p-2 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner overflow-hidden">
            <ProductImageDisplay
              productId={rightProduct.id}
              title={rightProduct.title}
              imageUrl={rightProduct.imageUrl}
              fallbackImageUrl={rightProduct.fallbackImageUrl}
            />
          </div>

          <h4 className="text-xs font-black text-slate-900 dark:text-white leading-snug group-hover:text-blue-500 transition-colors">
            {rightProduct.title}
          </h4>

          <div className="mt-1 flex items-center gap-1 text-[11px] text-amber-500 font-bold">
            <Star className="w-3 h-3 fill-amber-500" />
            <span>{rightProduct.rating}</span>
            <span className="text-slate-400 font-normal">({rightProduct.reviewsCount})</span>
          </div>

          <p className="mt-1.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
            18-hour battery life for all-day campus lectures.
          </p>

          <a
            href={rightProduct.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(rightProduct.title, rightProduct.amazonUrl)}
            className="mt-3 flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-blue-400 via-sky-300 to-blue-400 hover:from-blue-300 hover:to-sky-200 transition-all duration-300 shadow-md shadow-blue-500/20 active:scale-[0.98]"
          >
            <span>View Deal on Amazon AU</span>
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="mt-2 text-[9px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Tag: visitbest-22</span>
          </div>
        </div>
      </aside>
    </>
  );
}
