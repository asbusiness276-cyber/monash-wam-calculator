import { useState } from 'react';
import { ExternalLink, Sparkles, CheckCircle2, Award, ArrowRight, X, Building2, GraduationCap } from 'lucide-react';

interface TopSchoolsPromoBannerProps {
  variant?: 'sidebar' | 'inline' | 'floating' | 'card';
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

  // 1. FLOATING DESKTOP AD (Corner empty space)
  if (variant === 'floating') {
    return (
      <div className={`hidden lg:block fixed bottom-6 right-6 z-40 max-w-sm w-full animate-fade-in ${className}`}>
        <div className="relative overflow-hidden rounded-3xl bg-slate-950/95 border border-amber-500/40 p-5 shadow-2xl shadow-amber-950/40 backdrop-blur-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
          
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-3.5 right-3.5 p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            title="Dismiss Ad"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
              <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
              Academic Directory
            </span>
          </div>

          <h3 className="mt-3 text-base font-extrabold text-white leading-snug">
            List Your School or University
          </h3>
          
          <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
            Get your institution featured on <strong className="text-amber-300">Top Schools Rankings</strong> & reach prospective students worldwide.
          </p>

          <a
            href="https://topschoolsrankings.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="mt-4 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>List Your School Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  // 2. INLINE EMPTY-SPACE WIDE BANNER (Between sections / Below Calculators)
  if (variant === 'inline') {
    return (
      <div className={`my-8 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 border border-amber-500/30 p-6 md:p-8 shadow-2xl text-white relative ${className}`}>
        {/* Background Lights */}
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Official University & School Directory</span>
            </div>

            <h3 className="mt-3 text-xl md:text-2xl font-black text-white leading-tight">
              Promote & List Your School or University Globally
            </h3>
            
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              If you represent an educational institution, university, or college, <strong className="text-amber-300">Top Schools Rankings</strong> is the best platform to feature your school and attract high-intent student applicants.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-200 font-semibold">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Verified School Ranking Profile
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Direct International Student Reach
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Trusted Academic Accreditation
              </span>
            </div>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="https://topschoolsrankings.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="group flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Building2 className="w-4 h-4" />
              <span>List Your School or University</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 3. CARD VARIANT (Empty Grid Slot / Feature Cards)
  if (variant === 'card') {
    return (
      <div className={`overflow-hidden rounded-3xl bg-slate-900 border border-amber-500/30 p-6 text-white shadow-xl relative ${className}`}>
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
            Featured Partner
          </span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sponsored</span>
        </div>

        <h3 className="mt-3.5 text-lg font-black text-white leading-snug">
          List Your School or University
        </h3>

        <p className="mt-2 text-xs text-slate-300 leading-relaxed">
          Promote your educational institution on <strong className="text-amber-300">Top Schools Rankings</strong> to reach prospective students searching for top universities.
        </p>

        <a
          href="https://topschoolsrankings.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="mt-5 group flex items-center justify-center gap-2 w-full px-5 py-3 rounded-2xl font-bold text-xs text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/20 hover:shadow-amber-500/40"
        >
          <span>List Your School Now</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    );
  }

  // 4. DEFAULT SIDEBAR COMPACT BANNER (Sidebar empty space)
  return (
    <aside className={`overflow-hidden rounded-3xl bg-slate-950 border border-amber-500/35 p-5 text-white shadow-xl relative ${className}`}>
      {/* Golden Radial Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/35">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Global Directory
          </span>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sponsored</span>
        </div>

        <h3 className="mt-3.5 text-base font-black text-white leading-snug">
          List Your School or University
        </h3>

        <p className="mt-2 text-xs text-slate-300 leading-relaxed">
          If you run a school, college, or university, <strong className="text-amber-300">Top Schools Rankings</strong> is the best platform to list your institution and reach global student applicants.
        </p>

        <ul className="mt-4 space-y-2 text-xs text-slate-300 font-medium">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Verified Institution Listing</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Global Student Applicants</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Top Academic Authority</span>
          </li>
        </ul>

        <a
          href="https://topschoolsrankings.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="mt-4.5 group flex items-center justify-center gap-2 w-full px-4 py-3 rounded-2xl font-extrabold text-xs text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98]"
        >
          <span>List Your School Now</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </aside>
  );
}
