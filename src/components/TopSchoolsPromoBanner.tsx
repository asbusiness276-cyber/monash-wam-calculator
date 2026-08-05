import { useState } from 'react';
import { ExternalLink, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface TopSchoolsPromoBannerProps {
  variant?: 'sidebar' | 'inline' | 'floating';
  className?: string;
}

export default function TopSchoolsPromoBanner({
  variant = 'sidebar',
  className = '',
}: TopSchoolsPromoBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'topschools_promo_click', {
        variant,
        destination: 'https://topschoolsrankings.com/',
      });
    }
  };

  // FLOATING BOTTOM-RIGHT BANNER (Desktop Only)
  if (variant === 'floating') {
    return (
      <div className={`hidden xl:block fixed bottom-6 right-6 z-40 max-w-sm w-full animate-fade-in ${className}`}>
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-indigo-500/30 p-5 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Dismiss"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-indigo-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              Spotlight
            </span>
          </div>

          <h3 className="mt-2.5 text-base font-bold text-white leading-snug">
            List Your Education Platform
          </h3>
          <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
            Get verified and reach active students worldwide on <strong className="text-indigo-300">Top Schools Rankings</strong>.
          </p>

          <a
            href="https://topschoolsrankings.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="mt-3.5 flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.98]"
          >
            <span>List Your Platform Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    );
  }

  // INLINE WIDE BANNER (Inside pages / Below Calculators)
  if (variant === 'inline') {
    return (
      <div className={`my-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 p-6 md:p-8 shadow-xl text-white relative ${className}`}>
        {/* Glowing Orbs Background */}
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official Partner Directory</span>
            </div>

            <h3 className="mt-3 text-xl md:text-2xl font-extrabold text-white leading-tight">
              Looking to Feature Your Institution or Education Service?
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              <strong>Top Schools Rankings</strong> is the premier directory for universities, colleges, and educational tools to gain global student visibility.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-indigo-200 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Verified Ranking Badge
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Global Student Reach
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                High Conversion & Leads
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="https://topschoolsrankings.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="group flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-600 bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get Listed on Top Schools Rankings</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // SIDEBAR COMPACT BANNER (Sidebar placement)
  return (
    <aside className={`overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 border border-indigo-500/30 p-5 text-white shadow-lg relative ${className}`}>
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Partner Spotlight
          </span>
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Ad</span>
        </div>

        <h3 className="mt-3 text-base font-extrabold text-white leading-snug">
          Want to List Your Education Platform?
        </h3>

        <p className="mt-2 text-xs text-slate-300 leading-relaxed">
          If you run a university, college, or education service, <strong className="text-indigo-300">Top Schools Rankings</strong> is the best platform to feature your institution to thousands of students worldwide.
        </p>

        <ul className="mt-3.5 space-y-2 text-xs text-slate-300">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Highest Quality Listing</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Direct Student Leads</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Trusted Ranking Badge</span>
          </li>
        </ul>

        <a
          href="https://topschoolsrankings.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="mt-4 group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-[length:200%_auto] hover:bg-right transition-all duration-300 shadow-md shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.98]"
        >
          <span>Claim Your Listing Today</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </aside>
  );
}
