import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamTargetToolCore from '../components/WamTargetToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [wtHome, wtWtg] = PAGE_KEYWORD_LINKS['/wam-target-calculator'];

const wamTargetFaqs = [
  {
    question: 'How does the WAM target calculator work?',
    answer:
      'It uses your current WAM, completed credit points, remaining credit points, and target WAM to calculate the average mark you need on remaining units.',
  },
  {
    question: 'Where do I get completed credit points?',
    answer:
      'Sum credit points from finished units on WES or your transcript. Use planned cp only for units you have not yet completed.',
  },
  {
    question: 'What if required average is above 100%?',
    answer:
      'Your target WAM is not achievable with the remaining credit load unless performance improves beyond 100% — adjust the goal or timeline.',
  },
  {
    question: 'Is this official Monash maths?',
    answer:
      'It uses standard credit-weighted WAM logic for planning. Official WAM also applies Monash year-level weighting — confirm on your transcript.',
  },
  {
    question: 'Can I target honours or scholarship WAM?',
    answer:
      'Yes. Enter your goal (e.g. 70 for distinction average, 75+ for competitive honours planning) and see required future performance.',
  },
  {
    question: 'Should I combine this with other tools?',
    answer:
      'Use Monash WAM calculator to verify current WAM, this tool for targets, and final grade calculator for per-unit exam marks.',
  },
];

export default function WamTarget() {
  return (
    <>
      <Seo
        title="WAM Target Calculator - What Average Do You Need? (Monash 2026)"
        description="Free WAM target calculator for Monash students: enter current WAM and credit points to see what average you need on remaining units to hit your goal."
        canonicalPath="/wam-target-calculator"
        faqItems={wamTargetFaqs}
      />

      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM Target Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Find the average mark you need on remaining units to reach your target Monash WAM — honours, scholarship, or personal goals.
        </p>
        <p className="text-indigo-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Confirm current WAM with the{' '}
          <a href={absoluteUrl(wtHome.path)} className={HERO_INLINE_LINK_CLASS}>{wtHome.keyword}</a>
          . Converting for applications? Open the{' '}
          <a href={absoluteUrl(wtWtg.path)} className={HERO_INLINE_LINK_CLASS}>{wtWtg.keyword}</a>.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-8">
        <WamTargetToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">How the Formula Works</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Required average on remaining units = (target WAM × total cp − current WAM × completed cp) ÷ remaining cp.
            Credit points weight each unit in your WAM, so a 12-credit unit moves your average more than a 6-credit unit.
            Enter completed cp only for units already on your transcript — not future enrolments you have not finished.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Example: WAM 72 on 96 cp done, 24 cp left, target 75 → need (75×120 − 72×96) ÷ 24 = 87% average on
            remaining units. If the result exceeds 100%, the target is not reachable with that remaining load unless you
            add more credit-bearing performance later.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Common Target Bands at Monash</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Students use this calculator for honours cut-offs, scholarship benchmarks, and personal goals. Requirements
            vary by faculty and year — always confirm with Monash — but these bands are a practical starting point for
            planning.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300 rounded-tl-lg">Goal</th>
                  <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">Typical WAM band</th>
                  <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300 rounded-tr-lg">Planning note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                <tr>
                  <td className="px-3 py-2 font-medium">Distinction average</td>
                  <td className="px-3 py-2">70+</td>
                  <td className="px-3 py-2">Strong baseline for many pathways</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Competitive honours</td>
                  <td className="px-3 py-2">75–80+</td>
                  <td className="px-3 py-2">Faculty-specific; check handbook</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Scholarship planning</td>
                  <td className="px-3 py-2">Varies</td>
                  <td className="px-3 py-2">Merit and equity schemes differ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Verify your current WAM with the{' '}
            <a href={absoluteUrl(wtHome.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              Monash WAM calculator
            </a>
            . For deeper context read{' '}
            <a href="/articles/monash-honours-wam-requirements" className="text-primary-600 dark:text-primary-400 hover:underline">
              honours WAM requirements
            </a>
            ,{' '}
            <a href="/articles/what-is-a-good-wam" className="text-primary-600 dark:text-primary-400 hover:underline">
              what is a good WAM
            </a>
            , and our{' '}
            <a href={absoluteUrl(wtWtg.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              WAM to GPA converter
            </a>{' '}
            for postgraduate applications.
          </p>
        </div>
      </section>
      <CalculatorPageGuide path="/wam-target-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={wamTargetFaqs} />
    </>
  );
}
