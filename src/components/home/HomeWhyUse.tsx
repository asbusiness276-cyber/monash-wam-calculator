import { LineChart, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import PremiumCard from './ui/PremiumCard';

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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyUseCards.map(card => {
            const Icon = card.icon;
            return (
              <PremiumCard key={card.title} hover as="article" className="rounded-3xl p-6">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <Icon size={20} strokeWidth={2} aria-hidden />
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{card.description}</p>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
