import { ArrowDown, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import SiteLogo from '../SiteLogo';
import ButtonLink from './ui/ButtonLink';
import { CALCULATOR_COUNT } from '../../data/calculatorCatalog';
import { articles } from '../../data/articles';

export default function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="relative overflow-hidden border-b border-gray-200/80 bg-gradient-to-b from-slate-50 via-white to-white dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900"
    >
      {/* Ambient gradient orbs */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl dark:bg-primary-500/15"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-500/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        aria-hidden
      />

      <div className="home-container relative py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="home-animate-in text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-gray-700 shadow-premium-sm backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/80 dark:text-gray-200">
              <Sparkles size={14} className="text-primary-600 dark:text-primary-400" aria-hidden />
              Built for Monash University students · 100% free
            </div>

            <h1
              id="home-hero-heading"
              className="home-hero-title text-gray-900 dark:text-white text-balance"
            >
              Plan Your Monash WAM
              <span className="mt-1 block bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-300">
                With Confidence
              </span>
            </h1>

            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-pretty max-w-xl mx-auto lg:mx-0">
              MonashWAMCalculator.com turns official grading rules into free tools — credit-weighted WAM, Year 1
              half-weighting, GPA conversion, and semester planning. No spreadsheets. No signup.
            </p>

            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Enter marks from WES, get your weighted average and grade band in seconds, then explore{' '}
              {CALCULATOR_COUNT}+ calculators and {articles.length}+ guides when you need deeper answers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start">
              <ButtonLink
                href="#calculator"
                variant="accent"
                icon={<ArrowDown size={18} aria-hidden />}
              >
                Start Calculating
              </ButtonLink>
              <ButtonLink
                href="#featured-articles"
                variant="secondary"
                iconRight={<ArrowRight size={18} aria-hidden />}
              >
                Read Featured Guides
              </ButtonLink>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-gray-500 dark:text-gray-400">
              {['WES-aligned formula', 'Instant results', 'Private in-browser'].map(item => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual preview card — decorative only */}
          <div className="home-animate-in home-animate-delay-1 relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="premium-card premium-card-hover rounded-3xl border border-gray-200/80 bg-white/90 p-6 shadow-premium-lg backdrop-blur-sm dark:border-gray-700/80 dark:bg-gray-800/90">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4 dark:border-gray-700">
                <SiteLogo size="md" />
                <div className="min-w-0 text-left">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Monash WAM Calculator</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Live preview · sample data</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-5 text-white">
                <p className="text-xs font-medium uppercase tracking-wide text-primary-200">Official Monash WAM</p>
                <p className="mt-1 text-4xl font-bold tracking-tight">78.42</p>
                <p className="mt-1 text-sm text-primary-100">Distinction · WAM 70–79 band</p>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3 text-left">
                {[
                  { label: 'Planning WAM', value: '76.67' },
                  { label: 'Credit points', value: '18' },
                  { label: 'Units entered', value: '3' },
                  { label: 'Year 1 weight', value: '0.5×' },
                ].map(row => (
                  <div
                    key={row.label}
                    className="rounded-xl bg-gray-50 px-3 py-2.5 dark:bg-gray-900/50"
                  >
                    <dt className="text-[11px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {row.label}
                    </dt>
                    <dd className="mt-0.5 text-lg font-semibold text-gray-900 dark:text-white">{row.value}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center leading-relaxed">
                Illustrative values only — use the calculator below with your real marks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
