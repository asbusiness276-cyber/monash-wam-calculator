import { Award, ClipboardList, Target, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FeatureCard from './ui/FeatureCard';
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

        <ol className="card-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {useSteps.map((step, index) => (
            <li key={step.title}>
              <FeatureCard
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={index + 1}
                tone="primary"
              />
            </li>
          ))}
        </ol>

        <p className="card-body mx-auto mt-8 max-w-2xl text-center">
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
