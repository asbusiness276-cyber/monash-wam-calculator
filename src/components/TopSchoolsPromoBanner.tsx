import { ArrowRight, GraduationCap, Sparkles } from 'lucide-react';

interface TopSchoolsPromoBannerProps {
  variant?: 'button' | 'top-bar';
  className?: string;
}

export default function TopSchoolsPromoBanner({
  variant = 'button',
  className = '',
}: TopSchoolsPromoBannerProps) {
  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'topschools_promo_click', {
        variant,
        destination: 'https://topschoolsrankings.com/',
      });
    }
  };

  if (variant === 'top-bar') {
    return (
      <div className="bg-slate-950 border-b border-amber-500/30 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/35 shrink-0">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              Spotlight
            </span>
            <p className="text-slate-300 font-medium truncate text-[11px] sm:text-xs">
              Represent a school or university? Feature your institution on <strong className="text-amber-300 font-semibold">Top Schools Rankings</strong>.
            </p>
          </div>

          <a
            href="https://topschoolsrankings.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="group shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40 active:scale-[0.98]"
          >
            <span>List Your School Now</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    );
  }

  // Pure Standalone Pill Button matching user screenshot
  return (
    <a
      href="https://topschoolsrankings.com/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98] cursor-pointer whitespace-nowrap ${className}`}
      title="List Your School or University on Top Schools Rankings"
    >
      <GraduationCap className="w-4 h-4 shrink-0 text-slate-950" />
      <span>List Your School Now</span>
      <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
