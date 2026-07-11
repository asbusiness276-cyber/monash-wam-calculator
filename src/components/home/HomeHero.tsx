import { ArrowDown, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import ButtonLink from './ui/ButtonLink';
import HomeImage from './ui/HomeImage';
import { HOME_IMAGES } from '../../data/homeImages';
import { CALCULATOR_COUNT } from '../../data/calculatorCatalog';
import { articles } from '../../data/articles';

const TRUST_BADGES = ['WES-aligned formula', 'Instant results', 'Private in-browser'] as const;

export default function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-heading"
      className="home-hero relative overflow-hidden border-b border-gray-200/80 dark:border-gray-800"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900" aria-hidden />
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-96 w-96 rounded-full bg-primary-400/8 blur-3xl dark:bg-primary-500/12" aria-hidden />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-5%] h-80 w-80 rounded-full bg-emerald-400/8 blur-3xl dark:bg-emerald-500/10" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_0%,#000_65%,transparent_100%)]"
        aria-hidden
      />

      <div className="home-container relative">
        <div className="home-hero-grid">
          {/* Left — copy */}
          <div className="home-hero-copy home-animate-in">
            <div className="home-hero-badge">
              <Sparkles size={14} className="shrink-0 text-primary-600 dark:text-primary-400" aria-hidden />
              Built for Monash University students · 100% free
            </div>

            <h1 id="home-hero-heading" className="home-hero-title text-gray-900 dark:text-white">
              Plan Your Monash WAM
              <span className="home-hero-title-accent">With Confidence</span>
            </h1>

            <p className="home-hero-lead">
              MonashWAMCalculator.com turns official grading rules into free tools — credit-weighted WAM, Year 1
              half-weighting, GPA conversion, and semester planning. No spreadsheets. No signup.
            </p>

            <p className="home-hero-sublead">
              Enter marks from WES, get your weighted average and grade band in seconds, then explore{' '}
              {CALCULATOR_COUNT}+ calculators and {articles.length}+ guides when you need deeper answers.
            </p>

            <div className="home-hero-actions">
              <ButtonLink
                href="#calculator"
                variant="accent"
                className="home-hero-cta-primary w-full sm:w-auto px-7 py-3.5 text-base"
                icon={<ArrowDown size={18} aria-hidden />}
              >
                Start Calculating
              </ButtonLink>
              <ButtonLink
                href="#featured-articles"
                variant="ghost"
                className="home-hero-cta-secondary w-full sm:w-auto px-6 py-3 text-sm"
                iconRight={<ArrowRight size={16} aria-hidden />}
              >
                Read Featured Guides
              </ButtonLink>
            </div>

            <ul className="home-hero-trust" aria-label="Key benefits">
              {TRUST_BADGES.map(item => (
                <li key={item} className="home-hero-trust-badge">
                  <CheckCircle size={15} className="shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — hero illustration */}
          <div className="home-hero-visual home-animate-in home-animate-delay-1">
            <HomeImage
              image={HOME_IMAGES.hero}
              alt="Monash student workspace with WAM calculator dashboard, academic charts, and Australian university setting"
              priority
              wrapperClassName="home-hero-image-wrap"
              className="home-hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
