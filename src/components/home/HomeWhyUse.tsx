import SectionHeader from './ui/SectionHeader';
import IllustrationCard from './ui/IllustrationCard';
import { HOME_IMAGES } from '../../data/homeImages';

const whyUseCards = [
  {
    image: HOME_IMAGES.whyUse.accurate,
    imageAlt: 'Target accuracy illustration showing precise WAM goal tracking',
    title: 'Official Monash maths',
    description:
      'Credit-weighted WAM with Year 1 half weighting (0.5) — closer to WES than generic Australian average calculators.',
  },
  {
    image: HOME_IMAGES.whyUse.fast,
    imageAlt: 'Stopwatch with lightning-fast calculation and live analytics',
    title: 'Instant as you type',
    description:
      'Results update live in your browser. Recalculate after every results release without spreadsheets or account setup.',
  },
  {
    image: HOME_IMAGES.whyUse.secure,
    imageAlt: 'Secure laptop with shield protecting private academic data',
    title: 'GPA & planning tools',
    description:
      'Convert WAM to GPA, set semester targets, model projections, and check honours or scholarship cut-offs in one place.',
  },
  {
    image: HOME_IMAGES.whyUse.free,
    imageAlt: 'Graduation dashboard celebrating free academic planning tools',
    title: 'Works on mobile',
    description:
      'Enter marks from your phone after WES updates — every calculator is responsive and touch-friendly.',
  },
] as const;

export default function HomeWhyUse() {
  return (
    <section id="wam-calculator" className="home-section-alt scroll-mt-20">
      <div className="home-container">
        <SectionHeader
          eyebrow="Why students choose us"
          title="Why Use This Monash WAM Calculator?"
          description="Generic WAM tools ignore Monash year-level weighting. This site is built around Monash coursework from the ground up."
        />

        <div className="card-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {whyUseCards.map(card => (
            <IllustrationCard
              key={card.title}
              image={card.image}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
              variant="why"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
