import {
  ArrowDown,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  ClipboardList,
  GraduationCap,
  LineChart,
  Lock,
  Monitor,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WAMCalculator from '../components/WAMCalculator';
import CalculatorSearch from '../components/CalculatorSearch';
import FAQSection from '../components/FAQSection';
import Seo from '../components/Seo';
import RelatedCalculators from '../components/RelatedCalculators';
import ArticlesSection from '../components/ArticlesSection';
import AuthorAvatar from '../components/AuthorAvatar';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { CALCULATOR_COUNT } from '../data/calculatorCatalog';
import { articles } from '../data/articles';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';
import { HOME_FAQS } from '../data/homeFaqs';

const [homeWtg, homeGtw] = PAGE_KEYWORD_LINKS['/'];

const HOME_OG_IMAGE = '/article-images/featured-calculate-wam.webp';
const HOME_OG_ALT =
  'Monash university student using a laptop to calculate weighted average mark from unit marks and credit points';

const trustBadges = [
  { icon: GraduationCap, label: `${CALCULATOR_COUNT}+ free calculators` },
  { icon: BookOpen, label: `${articles.length}+ student guides` },
  { icon: ShieldCheck, label: 'WES-aligned Year 1 weighting' },
  { icon: Lock, label: 'Private · No signup required' },
];

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
    title: 'Plan what\'s next',
    description:
      'Use WAM target, projection, or WAM to GPA tools when planning scholarships, honours, or the next semester.',
  },
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.12),transparent_50%)]" />
        <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-primary-100 text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/10">
            <CheckCircle size={14} aria-hidden />
            Built for Monash University students · 100% free
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold mb-4 leading-tight tracking-tight">
            Plan Your Monash WAM
            <span className="block text-primary-200 mt-1">With Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-100 max-w-3xl mx-auto mb-3 leading-relaxed">
            MonashWAMCalculator.com turns official grading rules into free tools — credit-weighted WAM, Year 1
            half-weighting, GPA conversion, and semester planning. No spreadsheets. No signup.
          </p>
          <p className="text-sm md:text-base text-primary-200/90 max-w-2xl mx-auto mb-8">
            Enter marks from WES, get your weighted average and grade band in seconds, then explore{' '}
            {CALCULATOR_COUNT}+ calculators and {articles.length}+ guides when you need deeper answers.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            >
              <ArrowDown size={18} aria-hidden />
              Start Calculating
            </a>
            <a
              href="#featured-articles"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/25"
            >
              Read Featured Guides
              <ArrowRight size={18} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-5">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 justify-center lg:justify-start text-center lg:text-left"
              >
                <span className="inline-flex shrink-0 items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon size={20} aria-hidden />
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-2 relative z-10">
        <CalculatorSearch />
      </section>

      <WAMCalculator />

      {/* Visual step-by-step */}
      <section id="how-to-use-wam-calculator" className="scroll-mt-20 max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2">
            How it works
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Calculate Your WAM in 4 Steps
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
            From WES export to honours planning — the workflow Monash students use every results period.
          </p>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="relative flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm"
              >
                <span className="absolute top-4 right-4 text-3xl font-black text-primary-100 dark:text-primary-900/50 select-none">
                  {index + 1}
                </span>
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 mb-4">
                  <Icon size={22} aria-hidden />
                </span>
                <h3 className="text-base font-bold text-gray-900 dark:text-white pr-8">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
      </section>

      {/* Why use — 4 benefit cards */}
      <section id="wam-calculator" className="scroll-mt-20 max-w-6xl mx-auto px-4 pt-10 pb-2">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2">
            Why students choose us
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Why Use This Monash WAM Calculator?
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
            Generic WAM tools ignore Monash year-level weighting. This site is built around Monash coursework from the
            ground up.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyUseCards.map(card => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:border-primary-300 dark:hover:border-primary-600 transition-colors"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 mb-3">
                  <Icon size={20} aria-hidden />
                </span>
                <h3 className="font-bold text-gray-900 dark:text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Featured calculators */}
      <RelatedCalculators
        title="Featured Calculators"
        description="Popular free tools for WAM, GPA conversion, exam targets, and merit planning."
        hrefs={[
          '/wam-to-gpa-calculator',
          '/wam-target-calculator',
          '/final-grade-calculator',
          '/monash-distinction-average-calculator',
          '/semester-wam-calculator',
          '/monash-honours-calculator',
        ]}
        maxItems={6}
      />

      {/* WES + author trust row */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            id="wes-wam"
            className="scroll-mt-20 rounded-2xl border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 p-6 md:p-8 shadow-sm"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Monitor size={22} className="text-primary-600 dark:text-primary-400 shrink-0" aria-hidden />
              Verify on Monash WES
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Your certified cumulative WAM appears on your unofficial academic record in WES. After each results
              release, compare WES with this calculator using the same marks, credit points, and year levels. Step-by-step
              paths are in our{' '}
              <a href={absoluteUrl('/articles/how-to-find-wam-on-monash-transcript')} className={INLINE_LINK_CLASS}>
                Monash transcript guide
              </a>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 shadow-sm flex gap-4">
            <AuthorAvatar size="md" />
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                About the editor
              </p>
              <h2 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">{ARTICLE_AUTHOR.name}</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
                {ARTICLE_AUTHOR.bio}
              </p>
              <a
                href={absoluteUrl('/about-author')}
                className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
              >
                Meet the author
                <ArrowRight size={14} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WAM to GPA promo */}
      <section className="max-w-3xl mx-auto px-4 pb-2">
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
              Convert your WAM to 4.0 and 7.0 GPA scales — ideal for scholarships and overseas applications.
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 shrink-0 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold group-hover:bg-emerald-500 transition-colors">
            Open WAM to GPA
            <ArrowRight size={16} aria-hidden />
          </span>
        </a>
      </section>

      {/* What is WAM */}
      <section id="what-is-wam" className="scroll-mt-20 max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen size={22} className="text-primary-600 dark:text-primary-400" aria-hidden />
            What is WAM at Monash University?
          </h2>
          <div className="text-sm leading-relaxed space-y-3 text-gray-600 dark:text-gray-400">
            <p>
              WAM stands for{' '}
              <strong className="text-gray-800 dark:text-gray-200">Weighted Average Mark</strong>. It is the percentage
              average Monash uses to measure your overall academic performance across completed units — weighted by credit
              points and year level.
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
            <ul className="space-y-1.5">
              {[
                'Scholarship and merit applications',
                'Honours and graduate program entry',
                'Internship and graduate job screening',
                'Semester progress tracking',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary-500 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
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
                  <tr key={row.unit}>
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
            <strong className="text-gray-800 dark:text-gray-200">Planning WAM</strong> ≈{' '}
            <strong className="text-gray-800 dark:text-gray-200">78.33</strong>.{' '}
            <strong className="text-gray-800 dark:text-gray-200">Official Monash WAM</strong> with Year 1 at 0.5 weight ≈{' '}
            <strong className="text-gray-800 dark:text-gray-200">80.00</strong>. Track bands with the{' '}
            <a href={absoluteUrl('/wam-milestones-calculator')} className={INLINE_LINK_CLASS}>
              WAM milestones checker
            </a>
            .
          </p>
        </div>
      </section>

      <ArticlesSection featured />

      <FAQSection items={HOME_FAQS} title="Monash WAM Calculator — FAQs" />
    </>
  );
}
