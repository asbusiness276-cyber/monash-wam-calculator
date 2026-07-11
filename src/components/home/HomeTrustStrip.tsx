import { BookOpen, GraduationCap, Lock, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { CALCULATOR_COUNT } from '../../data/calculatorCatalog';
import { articles } from '../../data/articles';
import TrustStatCard from './ui/TrustStatCard';

const trustItems: Array<{ icon: LucideIcon; label: string; detail: string }> = [
  {
    icon: GraduationCap,
    label: `${CALCULATOR_COUNT}+ calculators`,
    detail: 'WAM, GPA, exams & merit',
  },
  {
    icon: BookOpen,
    label: `${articles.length}+ guides`,
    detail: 'Long-form student articles',
  },
  {
    icon: ShieldCheck,
    label: 'WES-aligned',
    detail: 'Year 1 · 0.5 weighting',
  },
  {
    icon: Lock,
    label: 'Private & free',
    detail: 'No signup · in-browser',
  },
];

export default function HomeTrustStrip() {
  return (
    <section aria-label="Trust highlights" className="border-b border-gray-200/80 bg-gray-50/80 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="home-container py-6 md:py-8">
        <ul className="card-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(item => (
            <TrustStatCard key={item.label} icon={item.icon} label={item.label} detail={item.detail} />
          ))}
        </ul>
      </div>
    </section>
  );
}
