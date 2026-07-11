import { BookOpen, GraduationCap, Lock, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { CALCULATOR_COUNT } from '../../data/calculatorCatalog';
import { articles } from '../../data/articles';

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
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, label, detail }) => (
            <li
              key={label}
              className="premium-card flex items-center gap-3.5 rounded-2xl px-4 py-3.5 dark:bg-gray-800/60"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-950/60 dark:text-primary-400">
                <Icon size={20} strokeWidth={2} aria-hidden />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                  {label}
                </span>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">{detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
