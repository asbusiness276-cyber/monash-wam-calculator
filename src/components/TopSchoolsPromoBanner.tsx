import { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, X, GraduationCap } from 'lucide-react';

interface TopSchoolsPromoBannerProps {
  className?: string;
  isFloating?: boolean;
}

export default function TopSchoolsPromoBanner({
  className = '',
  isFloating = false,
}: TopSchoolsPromoBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'topschools_promo_click', {
        destination: 'https://topschoolsrankings.com/',
      });
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-950/95 border border-amber-400/40 p-4 shadow-xl text-white transition-all duration-300 hover:border-amber-400/60 ${
        isFloating ? 'hidden md:block fixed bottom-5 right-5 z-40 w-[270px] shadow-2xl shadow-amber-950/50' : 'w-full max-w-[280px]'
      } ${className}`}
    >
      {/* Ambient Gold Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

      {isFloating && (
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
          title="Dismiss"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}

      {/* Header Badge & Sponsor Tag */}
      <div className="flex items-center justify-between gap-1.5">
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/35">
          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
          Directory
        </span>
        {!isFloating && (
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Sponsored</span>
        )}
      </div>

      {/* Main Title */}
      <h4 className="mt-2 text-xs font-black text-white leading-snug flex items-center gap-1.5">
        <GraduationCap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>List Your School or University</span>
      </h4>

      {/* Short Punchy Copy */}
      <p className="mt-1 text-[11px] text-slate-300 leading-snug">
        Feature your institution on <strong className="text-amber-300 font-semibold">Top Schools Rankings</strong> to reach prospective students worldwide.
      </p>

      {/* Compact Bullets Grid */}
      <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-[10px] font-medium text-slate-300">
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">Verified Profile</span>
        </div>
        <div className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate">Global Reach</span>
        </div>
      </div>

      {/* Compact High-Converting CTA Button */}
      <a
        href="https://topschoolsrankings.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="mt-3 group flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl font-extrabold text-[11px] text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98]"
      >
        <span>List Your School Now</span>
        <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
