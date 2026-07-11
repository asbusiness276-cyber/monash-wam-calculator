import { ArrowRight } from 'lucide-react';
import { absoluteUrl } from '../../constants/site';
import { PAGE_KEYWORD_LINKS } from '../../data/pageKeywordLinks';

const [homeWtg] = PAGE_KEYWORD_LINKS['/'];

export default function HomeGpaPromo() {
  return (
    <section className="home-section pb-2">
      <div className="home-container max-w-4xl">
        <a
          href={absoluteUrl(homeWtg.path)}
          className="group flex flex-col gap-4 rounded-3xl border border-emerald-200/80 bg-gradient-to-r from-emerald-50/90 via-white to-emerald-50/50 p-6 shadow-premium-sm transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-premium-lg sm:flex-row sm:items-center sm:justify-between dark:border-emerald-800/50 dark:from-emerald-950/30 dark:via-gray-800/90 dark:to-emerald-950/20 dark:hover:border-emerald-700/60"
        >
          <div className="min-w-0 text-left">
            <p className="home-eyebrow text-emerald-700 dark:text-emerald-400">Popular tool</p>
            <p className="mt-2 text-lg font-bold text-gray-900 dark:text-white md:text-xl">
              WAM to GPA Calculator — free Monash converter
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Convert your WAM to 4.0 and 7.0 GPA scales — ideal for scholarships and overseas applications.
            </p>
          </div>
          <span className="home-btn inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-premium transition-[transform,background-color,box-shadow] duration-200 group-hover:bg-emerald-500 group-hover:shadow-premium-lg">
            Open WAM to GPA
            <ArrowRight size={16} aria-hidden />
          </span>
        </a>
      </div>
    </section>
  );
}
