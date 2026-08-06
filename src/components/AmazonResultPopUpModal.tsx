import { useState, useEffect } from 'react';
import { X, Flame, Star, ExternalLink, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { AMAZON_STUDENT_PRODUCTS, AMAZON_STORE_ID } from '../data/amazonProducts';
import ProductImageDisplay from './ProductImageDisplay';

interface AmazonResultPopUpModalProps {
  hasResult: boolean;
}

export default function AmazonResultPopUpModal({ hasResult }: AmazonResultPopUpModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(299); // 4 mins 59 secs

  // Trigger 2 seconds after result appears
  useEffect(() => {
    if (hasResult && !hasTriggered) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasTriggered(true);
      }, 2000); // 2 seconds delay as requested

      return () => clearTimeout(timer);
    }
  }, [hasResult, hasTriggered]);

  // Countdown timer effect
  useEffect(() => {
    if (!isOpen) return;
    const countdown = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [isOpen]);

  if (!isOpen) return null;

  const product = AMAZON_STUDENT_PRODUCTS[4]; // Anker Power Bank (Unique Product)

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'amazon_post_result_popup_click', {
        product_title: product.title,
        destination: product.amazonUrl,
        store_id: AMAZON_STORE_ID,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-slate-900 border-2 border-amber-400 p-6 md:p-8 text-white shadow-2xl animate-scale-up">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close offer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Alert Strip */}
        <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-amber-500 text-white shadow-md animate-pulse">
            <Flame className="w-4 h-4 fill-white" />
            <span>HURRY UP! Monash Exam Special Deal</span>
          </div>

          <div className="flex items-center gap-1 text-xs font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/30">
            <Clock className="w-3.5 h-3.5" />
            <span>{formattedTime}</span>
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
          {/* Left Product Image */}
          <div className="sm:col-span-5 relative h-40 w-full rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg border border-slate-100 overflow-hidden">
            <span className="absolute top-2 left-2 z-10 text-[9px] font-black uppercase tracking-wider bg-slate-950 text-amber-400 px-2 py-0.5 rounded">
              Exam Approved
            </span>
            <ProductImageDisplay
              productId={product.id}
              title={product.title}
              imageUrl={product.imageUrl}
              fallbackImageUrl={product.fallbackImageUrl}
            />
          </div>

          {/* Right Product Details */}
          <div className="sm:col-span-7 space-y-2">
            <div className="flex items-center gap-1 text-amber-400 font-bold text-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{product.rating} / 5.0</span>
              <span className="text-slate-400 font-normal">({product.reviewsCount} reviews)</span>
            </div>

            <h3 className="text-base font-black text-white leading-snug">
              {product.title}
            </h3>

            <p className="text-xs text-slate-300 font-medium leading-relaxed">
              Required for Monash invigilated mid-terms & final exams.
            </p>

            <ul className="space-y-1 pt-1">
              <li className="flex items-center gap-1.5 text-[11px] text-slate-300 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Monash Exam Invigilator Approved</span>
              </li>
              <li className="flex items-center gap-1.5 text-[11px] text-slate-300 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Dual-Line Textbook Natural Display</span>
              </li>
            </ul>
          </div>
        </div>

        {/* High-CTR CTA Button */}
        <div className="mt-6 pt-4 border-t border-slate-800">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-xl shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>🔥 Claim Monash Deal on Amazon AU →</span>
            <ExternalLink className="w-4 h-4 shrink-0" />
          </a>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-medium px-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified Amazon Associate (visitbest-22)
            </span>
            <button onClick={() => setIsOpen(false)} className="underline hover:text-white">
              No thanks, close window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
