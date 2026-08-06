import { useState } from 'react';
import {
  Calculator,
  Laptop,
  Tablet,
  Headphones,
  BatteryCharging,
  Monitor,
  Star,
  Check,
  ExternalLink,
  ShoppingBag,
  ShieldCheck,
} from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, type AmazonProduct } from '../data/amazonProducts';

interface AmazonStudentDealsProps {
  title?: string;
  subtitle?: string;
  defaultCategory?: string;
  className?: string;
  limit?: number;
}

export default function AmazonStudentDeals({
  title = 'Essential Monash Student Gear & Approved Calculators',
  subtitle = 'Hand-picked study tools, exam-approved scientific calculators, laptops, and focus gear for Australian university students.',
  defaultCategory = 'all',
  className = '',
  limit,
}: AmazonStudentDealsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(defaultCategory);

  const categories = [
    { id: 'all', label: 'All Essentials' },
    { id: 'calculators', label: 'Exam Calculators' },
    { id: 'tech', label: 'Laptops & Tablets' },
    { id: 'study', label: 'Library & Focus' },
    { id: 'desk', label: 'Desk & Posture' },
  ];

  const filteredProducts = AMAZON_STUDENT_PRODUCTS.filter(product => {
    if (activeCategory === 'all') return true;
    return product.category === activeCategory;
  }).slice(0, limit);

  const handleProductClick = (product: AmazonProduct) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'amazon_affiliate_click', {
        product_id: product.id,
        product_title: product.title,
        destination: product.amazonUrl,
        store_id: 'visitbest-22',
      });
    }
  };

  const renderIcon = (iconName: AmazonProduct['iconName']) => {
    switch (iconName) {
      case 'calculator':
        return <Calculator className="w-5 h-5 text-amber-500" />;
      case 'laptop':
        return <Laptop className="w-5 h-5 text-blue-500" />;
      case 'tablet':
        return <Tablet className="w-5 h-5 text-indigo-500" />;
      case 'headphones':
        return <Headphones className="w-5 h-5 text-purple-500" />;
      case 'battery':
        return <BatteryCharging className="w-5 h-5 text-emerald-500" />;
      case 'stand':
        return <Monitor className="w-5 h-5 text-sky-500" />;
      default:
        return <ShoppingBag className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section className={`my-12 ${className}`}>
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-slate-800 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-400 border border-amber-500/30 mb-3">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Amazon Australia Verified Deals</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                {title}
              </h2>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                    activeCategory === cat.id
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/25 scale-105'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1"
              >
                <div>
                  {/* Card Top: Badge & Rating */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wide bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {product.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-500 font-normal text-[11px]">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/80 shrink-0">
                      {renderIcon(product.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {product.categoryLabel}
                      </span>
                      <h3 className="text-sm font-black text-white leading-snug group-hover:text-amber-300 transition-colors">
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  {/* Tagline & Description */}
                  <p className="mt-3 text-xs text-slate-300 font-medium leading-snug">
                    {product.tagline}
                  </p>
                  <p className="mt-1.5 text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Key Benefits */}
                  <ul className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-3">
                    {product.keyBenefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* High-Converting CTA Button */}
                <div className="mt-5 pt-3 border-t border-slate-800">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleProductClick(product)}
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-black text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 active:scale-[0.98]"
                  >
                    <span>{product.ctaText}</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Amazon Associates Compliance Legal Disclaimer */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4 flex-col sm:flex-row text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                As an Amazon Associate, MonashWAMCalculator earns from qualifying purchases made via links on this site (Store ID: <strong className="text-slate-300">visitbest-22</strong>).
              </span>
            </div>
            <a
              href="https://www.amazon.com.au/?tag=visitbest-22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-amber-400 hover:underline shrink-0"
            >
              Browse All Student Deals on Amazon AU →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
