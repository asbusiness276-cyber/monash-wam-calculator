import { useState } from 'react';
import { Star, CheckCircle2, ShieldCheck, ExternalLink, Award, Sparkles, ShoppingBag } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID, type AmazonProduct } from '../data/amazonProducts';

// Excluded Pages (Legal & Info pages where ads must NOT render)
export const EXCLUDED_AFFILIATE_PATHS = [
  '/about-us',
  '/about-author',
  '/contact-us',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer',
  '/write-for-us',
];

interface ContextualAmazonAffiliateCardProps {
  path?: string;
  variant?: 'inline' | 'sidebar' | 'widget';
  className?: string;
}

export default function ContextualAmazonAffiliateCard({
  path = typeof window !== 'undefined' ? window.location.pathname : '/',
  variant = 'inline',
  className = '',
}: ContextualAmazonAffiliateCardProps) {
  const [imageError, setImageError] = useState(false);

  // Check if current page is in excluded legal/info list
  const isExcluded = EXCLUDED_AFFILIATE_PATHS.some(excluded => path === excluded || path.startsWith(excluded));
  if (isExcluded) return null;

  // Determine most relevant product based on URL context
  let selectedProductId = 'casio-fx82au'; // Default for calculators

  if (path.includes('/articles/best-') || path.includes('university') || path.includes('ranking')) {
    selectedProductId = 'macbook-air-m2';
  } else if (path.includes('/articles/') || path.includes('guide') || path.includes('transcript')) {
    selectedProductId = 'sony-wh1000xm5';
  } else if (path.includes('gpa') || path.includes('grade') || path.includes('atar')) {
    selectedProductId = 'casio-fx82au';
  }

  const product: AmazonProduct =
    AMAZON_STUDENT_PRODUCTS.find(p => p.id === selectedProductId) || AMAZON_STUDENT_PRODUCTS[0];

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'contextual_amazon_affiliate_click', {
        page_path: path,
        product_id: product.id,
        product_title: product.title,
        destination: product.amazonUrl,
        store_id: AMAZON_STORE_ID,
      });
    }
  };

  // 1. SIDEBAR COMPACT CARD
  if (variant === 'sidebar') {
    return (
      <aside
        className={`overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-950 to-indigo-950 border border-amber-400/40 p-4 text-white shadow-xl relative group transition-all duration-300 hover:border-amber-400/70 ${className}`}
      >
        <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/15 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-1.5 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Award className="w-3 h-3 text-amber-400" />
              {product.badge}
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Amazon AU</span>
          </div>

          <div className="my-2.5 h-36 w-full rounded-xl bg-white/95 p-2 flex items-center justify-center shadow-inner overflow-hidden">
            {!imageError && product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.title}
                onError={() => setImageError(true)}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <ShoppingBag className="w-8 h-8 text-slate-400" />
            )}
          </div>

          <h4 className="text-xs font-black text-white leading-snug group-hover:text-amber-300 transition-colors">
            {product.title}
          </h4>

          <div className="mt-1 flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount})</span>
            </div>
          </div>

          <p className="mt-1.5 text-[11px] text-slate-300 font-medium leading-snug">
            {product.tagline}
          </p>

          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="mt-3.5 flex items-center justify-center gap-1.5 w-full py-2.5 px-3 rounded-xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98]"
          >
            <span>{product.ctaText}</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </aside>
    );
  }

  // 2. INLINE IRRESISTIBLE WIDE BANNER CARD (Main Content & Below Calculators)
  return (
    <div
      className={`my-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border border-amber-400/40 p-6 md:p-8 shadow-2xl text-white relative group transition-all duration-300 hover:border-amber-400/60 ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Image Section */}
        <div className="shrink-0 w-full md:w-56 h-44 rounded-2xl bg-white/95 p-4 flex items-center justify-center shadow-lg overflow-hidden relative">
          <span className="absolute top-2 left-2 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-black uppercase bg-slate-950 text-amber-400">
            {product.badge}
          </span>
          {!imageError && product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.title}
              onError={() => setImageError(true)}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <ShoppingBag className="w-12 h-12 text-slate-400" />
          )}
        </div>

        {/* Middle Info Section */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Verified Amazon AU Deal
            </span>
            <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating} Rating</span>
              <span className="text-slate-400">({product.reviewsCount} verified reviews)</span>
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-black text-white leading-snug group-hover:text-amber-300 transition-colors">
            {product.title}
          </h3>

          <p className="mt-2 text-xs md:text-sm text-slate-300 font-medium leading-relaxed">
            {product.tagline} — {product.description}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-300 font-semibold">
            {product.keyBenefits.map((benefit, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Right CTA Button */}
        <div className="shrink-0 w-full md:w-auto">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="group/btn flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            <span>{product.ctaText}</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
          <p className="mt-2 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Store ID: visitbest-22</span>
          </p>
        </div>
      </div>
    </div>
  );
}
