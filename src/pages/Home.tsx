import { BookOpen, CheckCircle, ArrowDown, ArrowRight } from 'lucide-react';
import WAMCalculator from '../components/WAMCalculator';
import FAQSection from '../components/FAQSection';
import Seo from '../components/Seo';
import ProductShowcase from '../components/ProductShowcase';
import ArticlesSection from '../components/ArticlesSection';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [homeWtg, homeGtw] = PAGE_KEYWORD_LINKS['/'];

const homeFaqs = [
  {
    question: 'How is WAM calculated at Monash?',
    answer:
      'Monash WAM = sum of (mark × credit points) ÷ sum of credit points, with first-year units weighted at 0.5. Enter each unit in our free Monash WAM calculator for an instant result — verify final numbers on your official transcript.',
  },
  {
    question: 'What is a good WAM at Monash?',
    answer:
      'Rough bands: HD 80+, distinction 70–79, credit 60–69, pass 50–59. What counts as good depends on honours, scholarships, and your course — use our calculator to track your WAM against your goals.',
  },
  {
    question: 'What is a WAM calculator?',
    answer:
      'A WAM calculator is a tool that computes your Weighted Average Mark from unit marks and credit points. Monash WAM Calculator is a free WAM calculator built for Monash University students, with credit-weighted maths and optional WAM to GPA conversion.',
  },
  {
    question: 'Is this Monash WAM Calculator official?',
    answer:
      'No, this is an independent educational calculator. It is useful for planning, but official academic outcomes should always be confirmed through your Monash transcript and faculty policies.',
  },
  {
    question: 'How accurate is the WAM result?',
    answer:
      'Accuracy depends on your inputs. Credit-weighted marks usually match closely, but official Monash WAM also uses first-year 0.5 level weighting and may exclude some grade codes. Always verify on WES or your transcript.',
  },
  {
    question: 'Can I include ongoing units?',
    answer:
      'Yes, you can add expected marks for ongoing units to model scenarios. Keep these clearly separated from confirmed marks so you can compare optimistic and conservative forecasts.',
  },
  {
    question: 'Why should I use WAM and GPA tools together?',
    answer:
      'WAM is common for local academic tracking, while GPA is often required for external applications. Using both tools helps you communicate your performance clearly across different systems.',
  },
  {
    question: 'Do failed units matter in WAM?',
    answer:
      'In many cases, yes. Failed units can affect weighted averages depending on policy. Always verify treatment of failed or repeated units in official Monash documentation.',
  },
  {
    question: 'What is the best way to improve WAM?',
    answer:
      'Focus on high-weight assessments, track progress weekly, and review mistakes systematically. Consistent improvement across the semester usually gives better outcomes than last-minute cramming.',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Monash WAM Calculator - Free WAM Calculator Online (2026)"
        description="Calculate Monash WAM in seconds. Free WAM calculator for Monash students - enter marks & credit points, get instant WAM + HD/D grade. WAM to GPA included. No signup."
        canonicalPath="/"
        faqItems={homeFaqs}
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
            Free WAM Calculator — Monash University Students
          </p>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Calculate Monash WAM instantly: add unit marks and credit points, see your weighted average and grade band in seconds. Free WAM calculator with WAM to GPA — no signup.
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
          </div>
        </div>
      </section>

      {/* Calculator */}
      <WAMCalculator />

      {/* WAM Calculator — keyword section for SEO + users */}
      <section id="wam-calculator" className="scroll-mt-20 max-w-3xl mx-auto px-4 pt-4 pb-2">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Why Use This WAM Calculator?
          </h2>
          <div className="text-sm leading-relaxed space-y-3 text-gray-600 dark:text-gray-400">
            <p>
              Searching for a <strong className="text-gray-800 dark:text-gray-200">WAM calculator</strong> usually means you want a fast, credit-weighted average — not a simple mean of percentages. <strong className="text-gray-800 dark:text-gray-200">Monash WAM Calculator</strong> is built for that: enter each unit&apos;s mark and credit points, and the tool applies Monash-style credit weighting so high-credit subjects count more.
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

      <ProductShowcase startIndex={1} endIndex={6} />

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
            Monash University calculates WAM using credit-weighted marks. Each unit mark is multiplied by credit points
            (and for official WAM, first-year undergraduate units also use a 0.5 year-level weight). This calculator uses
            credit-weighted maths for fast planning — confirm your official WAM on WES or your transcript.
          </p>

          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4 mb-6 text-center">
            <p className="text-sm text-primary-700 dark:text-primary-300 font-medium mb-1">Planning formula (credit-weighted)</p>
            <p className="font-mono text-primary-800 dark:text-primary-200 text-base font-bold">
              WAM = &Sigma;(Mark &times; Credit Points) &divide; &Sigma;(Credit Points)
            </p>
            <p className="text-xs text-primary-600 dark:text-primary-400 mt-2">
              Official Monash WAM also applies 0.5 weighting to first-year units.
            </p>
          </div>

          <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-3">Example Calculation</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold rounded-tl-lg">Unit</th>
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold">Mark</th>
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold rounded-tr-lg">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { unit: 'FIT1045', mark: 80, credits: 6 },
                  { unit: 'MAT1830', mark: 75, credits: 6 },
                  { unit: 'ENG1005', mark: 70, credits: 6 },
                ].map(row => (
                  <tr key={row.unit} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-200 font-medium">{row.unit}</td>
                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.mark}</td>
                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Using the above example, the calculated WAM would be <strong className="text-gray-800 dark:text-gray-200">75.00</strong>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Articles */}
      <ArticlesSection />

    </>
  );
}
