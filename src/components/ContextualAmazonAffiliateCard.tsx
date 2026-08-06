import { Star, CheckCircle2, ShieldCheck, Award, Truck } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID, type AmazonProduct } from '../data/amazonProducts';
import ProductImageDisplay from './ProductImageDisplay';
import AmazonCtaButton from './AmazonCtaButton';

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
  const isExcluded = EXCLUDED_AFFILIATE_PATHS.some(excluded => path === excluded || path.startsWith(excluded));
  if (isExcluded) return null;

  let selectedProductId = 'laptop-stand-ergonomic'; // Unique Product #6 for inline banner

  if (path.includes('/articles/best-') || path.includes('university') || path.includes('ranking')) {
    selectedProductId = 'macbook-air-m2';
  } else if (path.includes('/articles/') || path.includes('guide') || path.includes('transcript')) {
    selectedProductId = 'sony-wh1000xm5';
  } else if (path.includes('gpa') || path.includes('grade') || path.includes('atar')) {
    selectedProductId = 'laptop-stand-ergonomic';
  }

  const product: AmazonProduct =
    AMAZON_STUDENT_PRODUCTS.find(p => p.id === selectedProductId) || AMAZON_STUDENT_PRODUCTS[5];

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
        className={`overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 text-slate-900 dark:text-white shadow-xl relative group transition-all duration-300 hover:border-amber-400 ${className}`}
      >
        <div className="flex items-center justify-between gap-1.5 mb-3">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
            <Award className="w-3 h-3 text-amber-500" />
            {product.badge}
          </span>
          <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Amazon AU</span>
        </div>

        {/* Image Container */}
        <div className="relative my-3 h-40 w-full rounded-xl bg-white p-3 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-inner overflow-hidden">
          <ProductImageDisplay
            productId={product.id}
            title={product.title}
            imageUrl={product.imageUrl}
            fallbackImageUrl={product.fallbackImageUrl}
          />
        </div>

        <h4 className="text-sm font-black text-slate-900 dark:text-white leading-snug group-hover:text-amber-500 transition-colors">
          {product.title}
        </h4>

        <div className="mt-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{product.rating}</span>
            <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
          </div>
        </div>

        <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          {product.tagline}
        </p>

        <AmazonCtaButton
          href={product.amazonUrl}
          defaultText="Grab This Offer on Amazon AU"
          onClick={handleClick}
          className="mt-4"
        />

        <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-bold">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span>Amazon Verified Associate (Store ID: visitbest-22)</span>
        </div>
      </aside>
    );
  }

  // 2. INLINE E-COMMERCE BANNER CARD (Main Content & Below Calculators)
  return (
    <div
      className={`my-8 overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-2xl text-slate-900 dark:text-white relative group transition-all duration-300 hover:border-amber-400/80 ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Column: Product Image Container */}
        <div className="md:col-span-4 lg:col-span-4 flex flex-col items-center">
          <div className="relative w-full h-48 rounded-2xl bg-white p-4 flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
            <span className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase bg-slate-950 text-amber-400 shadow-sm">
              {product.badge}
            </span>
            <ProductImageDisplay
              productId={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              fallbackImageUrl={product.fallbackImageUrl}
            />
          </div>

          {/* Rating Badge */}
          <div className="mt-2.5 flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300">
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
            <span>{product.rating} / 5.0</span>
            <span className="text-slate-400 font-normal">({product.reviewsCount.toLocaleString()} verified reviews)</span>
          </div>
        </div>

        {/* Middle Column: Details & Benefits */}
        <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 w-fit mb-2.5">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>Monash Student Recommended</span>
          </div>

          <h3 className="text-xl font-black text-slate-900 dark:text-white leading-snug group-hover:text-amber-500 transition-colors">
            {product.title}
          </h3>

          <p className="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
            {product.description}
          </p>

          <ul className="mt-3.5 space-y-1.5">
            {product.keyBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: CTA Button & Trust Badges */}
        <div className="md:col-span-3 lg:col-span-3 flex flex-col items-center md:items-end justify-center pt-4 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
          <AmazonCtaButton
            href={product.amazonUrl}
            defaultText="Grab This Offer on Amazon AU"
            onClick={handleClick}
            className="w-full py-4 text-sm"
          />

          <div className="mt-3 space-y-1 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
              <Truck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>Prime Free Fast Delivery</span>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-1 text-[11px] text-slate-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Amazon Associate (Tag: visitbest-22)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
