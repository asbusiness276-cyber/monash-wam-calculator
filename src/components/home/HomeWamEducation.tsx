import { BookOpen, CheckCircle } from 'lucide-react';
import PremiumCard from './ui/PremiumCard';
import { absoluteUrl, INLINE_LINK_CLASS } from '../../constants/site';
import { PAGE_KEYWORD_LINKS } from '../../data/pageKeywordLinks';

const [homeWtg, homeGtw] = PAGE_KEYWORD_LINKS['/'];

const wamUses = [
  'Scholarship and merit applications',
  'Honours and graduate program entry',
  'Internship and graduate job screening',
  'Semester progress tracking',
];

const exampleRows = [
  { unit: 'FIT1045', year: '1', mark: 78, credits: 6 },
  { unit: 'MAT1830', year: '1', mark: 72, credits: 6 },
  { unit: 'FIT2004', year: '2', mark: 85, credits: 6 },
];

export default function HomeWamEducation() {
  return (
    <>
      <section id="what-is-wam" className="home-section scroll-mt-20">
        <div className="home-container max-w-4xl">
          <PremiumCard className="rounded-3xl p-8 md:p-10">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
                <BookOpen size={22} strokeWidth={2} aria-hidden />
              </span>
              <div className="min-w-0">
                <h2 className="home-section-title text-gray-900 dark:text-white">What is WAM at Monash University?</h2>
                <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  <p>
                    WAM stands for{' '}
                    <strong className="text-gray-800 dark:text-gray-200">Weighted Average Mark</strong>. It is the
                    percentage average Monash uses to measure your overall academic performance across completed units —
                    weighted by credit points and year level.
                  </p>
                  <p>
                    Unlike GPA, WAM keeps your raw marks. When a form asks for grade points instead, use our{' '}
                    <a href={absoluteUrl(homeWtg.path)} className={INLINE_LINK_CLASS}>
                      {homeWtg.keyword}
                    </a>{' '}
                    or{' '}
                    <a href={absoluteUrl(homeGtw.path)} className={INLINE_LINK_CLASS}>
                      {homeGtw.keyword}
                    </a>
                    .
                  </p>
                  <p className="font-medium text-gray-700 dark:text-gray-300">Your WAM is commonly used for:</p>
                  <ul className="space-y-2">
                    {wamUses.map(item => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CheckCircle size={15} className="shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </PremiumCard>
        </div>
      </section>

      <section id="how-wam-calculated" className="home-section scroll-mt-20 pb-4">
        <div className="home-container max-w-4xl">
          <PremiumCard className="rounded-3xl p-8 md:p-10">
            <h2 className="home-section-title text-gray-900 dark:text-white">How is Monash WAM Calculated?</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Monash official WAM multiplies each unit by credit points and year-level weight (Year 1 = 0.5, Year 2+ =
              1.0). Our calculator shows both official Monash WAM and a simpler planning WAM so you can compare
              scenarios and verify against WES.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-primary-200/80 bg-primary-50/80 p-5 text-center dark:border-primary-800/60 dark:bg-primary-950/30">
                <p className="text-sm font-semibold text-primary-700 dark:text-primary-300">Official Monash WAM</p>
                <p className="mt-2 font-mono text-sm font-bold leading-relaxed text-primary-800 dark:text-primary-200">
                  &Sigma;(Mark &times; CP &times; Year weight) &divide; &Sigma;(CP &times; Year weight)
                </p>
                <p className="mt-2 text-xs text-primary-600 dark:text-primary-400">Year 1 weight = 0.5 · Year 2+ = 1.0</p>
              </div>
              <div className="rounded-2xl border border-gray-200/80 bg-gray-50/80 p-5 text-center dark:border-gray-700 dark:bg-gray-900/40">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Planning WAM (simple)</p>
                <p className="mt-2 font-mono text-sm font-bold text-gray-800 dark:text-gray-200">
                  &Sigma;(Mark &times; Credit Points) &divide; &Sigma;(Credit Points)
                </p>
              </div>
            </div>

            <h3 className="mb-3 mt-8 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Example: Year 1 vs Year 2 Weighting
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200/80 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/80">
                    <th className="rounded-tl-2xl px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">
                      Unit
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Year</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">Mark</th>
                    <th className="rounded-tr-2xl px-4 py-3 text-left font-semibold text-gray-600 dark:text-gray-400">
                      CP
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {exampleRows.map(row => (
                    <tr key={row.unit} className="bg-white dark:bg-gray-800/50">
                      <td className="px-4 py-3 font-medium text-gray-800 dark:text-gray-200">{row.unit}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.year}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.mark}</td>
                      <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.credits}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              <strong className="text-gray-800 dark:text-gray-200">Planning WAM</strong> ≈{' '}
              <strong className="text-gray-800 dark:text-gray-200">78.33</strong>.{' '}
              <strong className="text-gray-800 dark:text-gray-200">Official Monash WAM</strong> with Year 1 at 0.5
              weight ≈ <strong className="text-gray-800 dark:text-gray-200">80.00</strong>. Track bands with the{' '}
              <a href={absoluteUrl('/wam-milestones-calculator')} className={INLINE_LINK_CLASS}>
                WAM milestones checker
              </a>
              .
            </p>
          </PremiumCard>
        </div>
      </section>
    </>
  );
}
