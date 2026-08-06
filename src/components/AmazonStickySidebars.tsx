import { Star, Award, ShieldCheck, Zap } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID } from '../data/amazonProducts';
import { EXCLUDED_AFFILIATE_PATHS } from './ContextualAmazonAffiliateCard';
import ProductImageDisplay from './ProductImageDisplay';
import AmazonCtaButton from './AmazonCtaButton';

interface AmazonStickySidebarsProps {
  path?: string;
}

export default function AmazonStickySidebars({
  path = typeof window !== 'undefined' ? window.location.pathname : '/',
}: AmazonStickySidebarsProps) {
  // Check if current page is legal/info page
  const isExcluded = EXCLUDED_AFFILIATE_PATHS.some(excluded => path === excluded || path.startsWith(excluded));
  if (isExcluded) return null;

  const leftProduct = AMAZON_STUDENT_PRODUCTS[2]; // iPad Air M2
  const rightProduct = AMAZON_STUDENT_PRODUCTS[3]; // Sony Headphones

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
              {leftProduct.categoryLabel}
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
            {leftProduct.tagline}
          </p>

          <AmazonCtaButton
            href={leftProduct.amazonUrl}
            defaultText="Grab This Offer on Amazon AU"
            onClick={() => handleClick(leftProduct.title, leftProduct.amazonUrl)}
            className="mt-3 py-2 text-xs"
          />

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
              {rightProduct.categoryLabel}
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
            {rightProduct.tagline}
          </p>

          <AmazonCtaButton
            href={rightProduct.amazonUrl}
            defaultText="Grab This Offer on Amazon AU"
            onClick={() => handleClick(rightProduct.title, rightProduct.amazonUrl)}
            className="mt-3 py-2 text-xs"
          />

          <div className="mt-2 text-[9px] text-slate-400 text-center flex items-center justify-center gap-1 font-semibold">
            <ShieldCheck className="w-3 h-3 text-emerald-500" />
            <span>Tag: visitbest-22</span>
          </div>
        </div>
      </aside>
    </>
  );
}
