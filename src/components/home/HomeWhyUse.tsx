import { LineChart, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import FeatureCard from './ui/FeatureCard';

const whyUseCards: Array<{ icon: LucideIcon; title: string; description: string }> = [
  {
    icon: ShieldCheck,
    title: 'Official Monash maths',
    description:
      'Credit-weighted WAM with Year 1 half weighting (0.5) — closer to WES than generic Australian average calculators.',
  },
  {
    icon: Zap,
    title: 'Instant as you type',
    description:
      'Results update live in your browser. Recalculate after every results release without spreadsheets or account setup.',
  },
  {
    icon: LineChart,
    title: 'GPA & planning tools',
    description:
      'Convert WAM to GPA, set semester targets, model projections, and check honours or scholarship cut-offs in one place.',
  },
  {
    icon: Smartphone,
    title: 'Works on mobile',
    description:
      'Enter marks from your phone after WES updates — every calculator is responsive and touch-friendly.',
  },
];

export default function HomeWhyUse() {
  return (
    <section id="wam-calculator" className="home-section-alt scroll-mt-20">
      <div className="home-container">
        <SectionHeader
          eyebrow="Why students choose us"
          title="Why Use This Monash WAM Calculator?"
          description="Generic WAM tools ignore Monash year-level weighting. This site is built around Monash coursework from the ground up."
        />

        <div className="card-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {whyUseCards.map(card => (
            <FeatureCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              tone="emerald"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
