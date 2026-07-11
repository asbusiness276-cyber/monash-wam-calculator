import SectionHeader from './ui/SectionHeader';
import IllustrationCard from './ui/IllustrationCard';
import { HOME_IMAGES } from '../../data/homeImages';
import { absoluteUrl, INLINE_LINK_CLASS } from '../../constants/site';

const useSteps = [
  {
    image: HOME_IMAGES.steps.enterMarks,
    imageAlt: 'Student reviewing unit marks and grades on a laptop dashboard',
    title: 'Gather your marks',
    description: 'Open WES or your unofficial academic record and note each unit mark, credit points, and year level.',
  },
  {
    image: HOME_IMAGES.steps.addSubjects,
    imageAlt: 'Student adding subjects, marks, and credit points to the WAM calculator',
    title: 'Enter units below',
    description:
      'Add unit codes, marks (0–100), credit points, and year level. Year 1 units use Monash official 0.5 weight.',
  },
  {
    image: HOME_IMAGES.steps.instantWam,
    imageAlt: 'Instant WAM calculation dashboard with live academic analytics',
    title: 'Read your WAM',
    description:
      'See official Monash WAM, planning WAM, HD/D/C/P grade band, and total credit points — updated instantly.',
  },
  {
    image: HOME_IMAGES.steps.viewResults,
    imageAlt: 'Student celebrating WAM results with academic performance charts',
    title: "Plan what's next",
    description:
      'Use WAM target, projection, or WAM to GPA tools when planning scholarships, honours, or the next semester.',
  },
] as const;

export default function HomeHowItWorks() {
  return (
    <section id="how-to-use-wam-calculator" className="home-section scroll-mt-20">
      <div className="home-container">
        <SectionHeader
          eyebrow="How it works"
          title="Calculate Your WAM in 4 Steps"
          description="From WES export to honours planning — the workflow Monash students use every results period."
        />

        <ol className="home-steps-flow card-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {useSteps.map((step, index) => (
            <li key={step.title} className="home-steps-flow-item">
              <IllustrationCard
                image={step.image}
                imageAlt={step.imageAlt}
                title={step.title}
                description={step.description}
                step={index + 1}
                variant="step"
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
