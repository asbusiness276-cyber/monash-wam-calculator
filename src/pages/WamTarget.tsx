import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import ProductShowcase from '../components/ProductShowcase';
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

      <section className="max-w-xl mx-auto px-4 py-8">
        <WamTargetToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Formula</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Required average on remaining units = (target WAM × total cp − current WAM × completed cp) ÷ remaining cp.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Example: WAM 72 on 96 cp done, 24 cp left, target 75 → need (75×120 − 72×96) ÷ 24 = 87% average on
            remaining units.
          </p>
        </div>
      </section>

      <ProductShowcase startIndex={1} endIndex={6} />
      <PageFaq items={wamTargetFaqs} />
    </>
  );
}
