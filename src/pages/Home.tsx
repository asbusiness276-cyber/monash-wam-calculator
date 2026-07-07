import { BookOpen, CheckCircle, ArrowDown, ArrowRight, ListOrdered, Monitor } from 'lucide-react';
import WAMCalculator from '../components/WAMCalculator';
import FAQSection from '../components/FAQSection';
import Seo from '../components/Seo';
import RelatedCalculators from '../components/RelatedCalculators';
import ArticlesSection from '../components/ArticlesSection';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';
import { HOME_FAQS } from '../data/homeFaqs';

const [homeWtg, homeGtw] = PAGE_KEYWORD_LINKS['/'];

const HOME_OG_IMAGE = '/article-images/featured-calculate-wam.webp';
const HOME_OG_ALT =
  'Monash university student using a laptop to calculate weighted average mark from unit marks and credit points';

const useSteps = [
  'Copy unit marks and credit points from WES or your unofficial academic record.',
  'Enter each unit code, mark (0–100), credit points, and year level (Year 1 uses 0.5 official weight).',
  'Read official Monash WAM and planning WAM instantly — compare against WES after results release.',
  'Use WAM to GPA or WAM target tools if you are planning scholarships, honours, or next semester.',
];

export default function Home() {
  return (
    <>
      <Seo
        title="Monash WAM Calculator | Free WAM Calculator Monash University (2026)"
        description="Free Monash WAM calculator with official Year 1 (0.5) weighting. Enter marks & credit points — instant weighted average, HD/D bands & WAM to GPA. No signup."
        canonicalPath="/"
        faqItems={HOME_FAQS}
        ogImage={HOME_OG_IMAGE}
        ogImageAlt={HOME_OG_ALT}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 py-14 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-primary-200 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <CheckCircle size={14} />
            Free • Instant Results • Mobile Friendly • No Signup Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Monash WAM Calculator
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary-100 mb-4">
            Free WAM Calculator for Monash University Students
          </p>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            The only free <strong className="text-white font-semibold">WAM calculator Monash</strong> students need:
            official Year 1 (0.5) weighting, credit-point maths, HD/D/C/P bands, and{' '}
            <a href={absoluteUrl(homeWtg.path)} className="text-white underline underline-offset-2 hover:text-primary-50">
              WAM to GPA
            </a>
            {' '}— instant results, no signup.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#calculator"
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            >
              <ArrowDown size={16} />
              Calculate WAM
            </a>
            <a
              href={absoluteUrl(homeWtg.path)}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-colors shadow-lg ring-2 ring-white/30"
            >
              WAM to GPA
              <ArrowRight size={16} />
            </a>
            <a
              href="#how-wam-calculated"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
            >
              Learn How WAM Works
            </a>
            <a
              href={absoluteUrl('/calculators')}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
            >
              All Calculators
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <WAMCalculator />

      {/* How to use — steps for users + HowTo schema support */}
      <section id="how-to-use-wam-calculator" className="scroll-mt-20 max-w-3xl mx-auto px-4 pt-8 pb-2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <ListOrdered size={22} className="text-primary-600 dark:text-primary-400 shrink-0" />
            How to Use This Monash WAM Calculator
          </h2>
          <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed list-decimal list-inside marker:font-semibold marker:text-primary-600 dark:marker:text-primary-400">
            {useSteps.map(step => (
              <li key={step} className="pl-1">
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            For the full weighted formula, read{' '}
            <a href={absoluteUrl('/articles/how-to-calculate-wam')} className={INLINE_LINK_CLASS}>
              how to calculate wam
            </a>
            . For Year 1 half weighting details, see{' '}
            <a href={absoluteUrl('/articles/monash-year-1-wam-weighting-guide')} className={INLINE_LINK_CLASS}>
              monash year 1 wam weighting
            </a>
            .
          </p>
        </div>
      </section>

      {/* WES verification */}
      <section id="wes-wam" className="scroll-mt-20 max-w-3xl mx-auto px-4 pt-6 pb-2">
        <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-200 dark:border-primary-800 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
            <Monitor size={22} className="text-primary-600 dark:text-primary-400 shrink-0" />
            Check Your WAM on Monash WES
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Your certified cumulative WAM appears on your unofficial academic record in the Web Enrolment System (WES).
            After each results release, compare WES with this calculator using the same marks, credit points, and year
            levels. Step-by-step screenshots and paths are in our{' '}
            <a href={absoluteUrl('/articles/how-to-find-wam-on-monash-transcript')} className={INLINE_LINK_CLASS}>
              monash wam transcript
            </a>{' '}
            guide.
          </p>
        </div>
      </section>

      {/* WAM Calculator — keyword section for SEO + users */}
      <section id="wam-calculator" className="scroll-mt-20 max-w-3xl mx-auto px-4 pt-6 pb-2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Use This Monash WAM Calculator?
          </h2>
          <div className="text-sm leading-relaxed space-y-3 text-gray-600 dark:text-gray-400">
            <p>
              Searching for a <strong className="text-gray-800 dark:text-gray-200">WAM calculator</strong> or{' '}
              <strong className="text-gray-800 dark:text-gray-200">wam calculator monash</strong> usually means you
              want credit-weighted maths — not a simple mean of percentages. MonashWAMCalculator.com applies{' '}
              <strong className="text-gray-800 dark:text-gray-200">official-style year-level weighting</strong> (Year 1 =
              0.5) so your result aligns with WES more closely than generic Australian WAM tools.
            </p>
            <p>
              Unlike generic calculators, this WAM calculator is tuned for Monash University workflows — honours planning, scholarship targets, and semester tracking. Pair it with our{' '}
              <a href={absoluteUrl(homeWtg.path)} className={INLINE_LINK_CLASS}>{homeWtg.keyword}</a>
              {' '}when applications need GPA, or read{' '}
              <a href={absoluteUrl('/articles/how-to-calculate-wam')} className={INLINE_LINK_CLASS}>how to calculate wam</a>
              {' '}for the full formula.
            </p>
            <p>
              The calculator runs in your browser, updates as you type, and works on mobile — so you can recalculate after every results release without spreadsheets.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 -mt-2 mb-2">
        <a
          href={absoluteUrl(homeWtg.path)}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/40 dark:border-emerald-600/50 px-5 py-4 shadow-sm hover:border-emerald-500 transition-colors group"
        >
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-400 mb-1">
              Popular tool
            </p>
            <p className="text-base font-bold text-gray-900 dark:text-white">
              WAM to GPA Calculator — free Monash converter
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Convert your WAM to 4.0 and 7.0 GPA scales in seconds — ideal for scholarships and overseas applications.
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold group-hover:bg-emerald-500 transition-colors">
            Open WAM to GPA
            <ArrowRight size={16} />
          </span>
        </a>
      </section>

      <RelatedCalculators />

      {/* What is WAM */}
      <section id="what-is-wam" className="scroll-mt-20 max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen size={22} className="text-primary-600 dark:text-primary-400" />
            What is WAM at Monash University?
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none text-sm leading-relaxed space-y-3 text-gray-600 dark:text-gray-400">
            <p>
              WAM stands for <strong className="text-gray-800 dark:text-gray-200">Weighted Average Mark</strong>. It is a numerical average used by Monash University to measure a student's overall academic performance across all completed units.
            </p>
            <p>
              Unlike GPA, which converts grades into points, WAM uses your actual percentage marks and weighs them according to the credit points of each subject. When an application asks for a different scale, use our{' '}
              <a href={absoluteUrl(homeWtg.path)} className={INLINE_LINK_CLASS}>{homeWtg.keyword}</a>
              {' '}or{' '}
              <a href={absoluteUrl(homeGtw.path)} className={INLINE_LINK_CLASS}>{homeGtw.keyword}</a>
              {' '}for quick conversions.
            </p>
            <p className="font-medium text-gray-700 dark:text-gray-300">Your WAM is commonly used for:</p>
            <ul className="space-y-1.5 ml-4">
              {[
                'Academic progress tracking',
                'Scholarship applications',
                'Graduate program applications',
                'Honours eligibility',
                'Internship and job opportunities',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>A higher WAM generally indicates stronger academic performance.</p>
          </div>
        </div>
      </section>

      {/* How WAM is Calculated */}
      <section id="how-wam-calculated" className="scroll-mt-20 max-w-3xl mx-auto px-4 pb-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How is Monash WAM Calculated?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
            Monash official WAM multiplies each unit by credit points and year-level weight (Year 1 = 0.5, Year 2+ = 1.0).
            Our calculator shows both official Monash WAM and a simpler planning WAM so you can compare scenarios and
            verify against WES.
          </p>

          <div className="space-y-3 mb-6">
            <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4 text-center">
              <p className="text-sm text-primary-700 dark:text-primary-300 font-medium mb-1">Official Monash WAM</p>
              <p className="font-mono text-primary-800 dark:text-primary-200 text-sm font-bold leading-relaxed">
                &Sigma;(Mark &times; CP &times; Year weight) &divide; &Sigma;(CP &times; Year weight)
              </p>
              <p className="text-xs text-primary-600 dark:text-primary-400 mt-2">Year 1 weight = 0.5 · Year 2+ = 1.0</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-1">Planning WAM (simple)</p>
              <p className="font-mono text-gray-800 dark:text-gray-200 text-sm font-bold">
                &Sigma;(Mark &times; Credit Points) &divide; &Sigma;(Credit Points)
              </p>
            </div>
          </div>

          <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-3">Example: Year 1 vs Year 2 Weighting</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold rounded-tl-lg">Unit</th>
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold">Year</th>
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold">Mark</th>
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold rounded-tr-lg">CP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { unit: 'FIT1045', year: '1', mark: 78, credits: 6 },
                  { unit: 'MAT1830', year: '1', mark: 72, credits: 6 },
                  { unit: 'FIT2004', year: '2', mark: 85, credits: 6 },
                ].map(row => (
                  <tr key={row.unit} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-200 font-medium">{row.unit}</td>
                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.year}</td>
                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.mark}</td>
                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
            <strong className="text-gray-800 dark:text-gray-200">Planning WAM</strong> (simple credit average) ≈{' '}
            <strong className="text-gray-800 dark:text-gray-200">78.33</strong>.{' '}
            <strong className="text-gray-800 dark:text-gray-200">Official Monash WAM</strong> with Year 1 at 0.5 weight ≈{' '}
            <strong className="text-gray-800 dark:text-gray-200">80.00</strong> — the strong Year 2 mark counts fully
            while Year 1 units are half-weighted. Track your bands with the{' '}
            <a href={absoluteUrl('/wam-milestones-calculator')} className={INLINE_LINK_CLASS}>
              WAM milestones checker
            </a>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={HOME_FAQS} title="Monash WAM Calculator — FAQs" />

      {/* Articles */}
      <ArticlesSection />

    </>
  );
}
