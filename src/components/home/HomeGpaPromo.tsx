import { ArrowRight } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';
import { absoluteUrl } from '../../constants/site';
import { PAGE_KEYWORD_LINKS } from '../../data/pageKeywordLinks';

const [homeWtg] = PAGE_KEYWORD_LINKS['/'];

export default function HomeGpaPromo() {
  return (
    <section className="home-section pb-2">
      <div className="home-container max-w-4xl">
        <PremiumCard
          href={absoluteUrl(homeWtg.path)}
          variant="emerald"
          padding="lg"
          hover
          className="group flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div className="min-w-0 text-left">
            <p className="home-eyebrow text-emerald-700 dark:text-emerald-400">Popular tool</p>
            <p className="card-title-lg mt-2">WAM to GPA Calculator — free Monash converter</p>
            <p className="card-body mt-2">
              Convert your WAM to 4.0 and 7.0 GPA scales — ideal for scholarships and overseas applications.
            </p>
          </div>
          <span className="home-btn mt-4 inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-premium transition-[transform,background-color,box-shadow] duration-200 group-hover:bg-emerald-500 group-hover:shadow-premium-lg sm:mt-0">
            Open WAM to GPA
            <ArrowRight size={16} aria-hidden />
          </span>
        </PremiumCard>
      </div>
    </section>
  );
}
