import { ArrowRight, GraduationCap } from 'lucide-react';

interface TopSchoolsPromoBannerProps {
  className?: string;
}

export default function TopSchoolsPromoBanner({
  className = '',
}: TopSchoolsPromoBannerProps) {
  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'topschools_promo_click', {
        destination: 'https://topschoolsrankings.com/',
      });
    }
  };

  return (
    <a
      href="https://topschoolsrankings.com/"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-black text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-300 shadow-md shadow-amber-500/25 hover:shadow-amber-500/40 active:scale-[0.98] cursor-pointer whitespace-nowrap ${className}`}
      title="List Your School or University on Top Schools Rankings"
    >
      <GraduationCap className="w-4 h-4 shrink-0 text-slate-950" />
      <span>List Your School Now</span>
      <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}
