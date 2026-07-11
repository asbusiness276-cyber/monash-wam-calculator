import { Award, ClipboardList, Target, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import PremiumCard from './ui/PremiumCard';
import { absoluteUrl, INLINE_LINK_CLASS } from '../../constants/site';

const useSteps: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: ClipboardList,
    title: 'Gather your marks',
    description: 'Open WES or your unofficial academic record and note each unit mark, credit points, and year level.',
  },
  {
    icon: Target,
    title: 'Enter units below',
    description:
      'Add unit codes, marks (0–100), credit points, and year level. Year 1 units use Monash official 0.5 weight.',
  },
  {
    icon: TrendingUp,
    title: 'Read your WAM',
    description:
      'See official Monash WAM, planning WAM, HD/D/C/P grade band, and total credit points — updated instantly.',
  },
  {
    icon: Award,
    title: "Plan what's next",
    description:
      'Use WAM target, projection, or WAM to GPA tools when planning scholarships, honours, or the next semester.',
  },
];

export default function HomeHowItWorks() {
  return (
    <section id="how-to-use-wam-calculator" className="home-section scroll-mt-20">
      <div className="home-container">
        <SectionHeader
          eyebrow="How it works"
          title="Calculate Your WAM in 4 Steps"
          description="From WES export to honours planning — the workflow Monash students use every results period."
        />

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <PremiumCard
                  hover
                  as="article"
                  className="relative flex h-full flex-col rounded-3xl p-6"
                >
                  <span
                    className="absolute right-5 top-5 select-none text-3xl font-black text-primary-100 dark:text-primary-900/40"
                    aria-hidden
                  >
                    {index + 1}
                  </span>
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                    <Icon size={22} strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="pr-8 text-base font-bold text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </PremiumCard>
              </li>
            );
          })}
        </ol>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Need the full formula? Read{' '}
          <a href={absoluteUrl('/articles/how-to-calculate-wam')} className={INLINE_LINK_CLASS}>
            how to calculate wam
          </a>{' '}
          or our{' '}
          <a href={absoluteUrl('/articles/monash-year-1-wam-weighting-guide')} className={INLINE_LINK_CLASS}>
            Year 1 weighting guide
          </a>
          .
        </p>
      </div>
    </section>
  );
}
