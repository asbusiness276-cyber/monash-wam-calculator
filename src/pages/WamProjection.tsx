import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamProjectionToolCore from '../components/WamProjectionToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [wpHome, wpTarget] = PAGE_KEYWORD_LINKS['/wam-projection-calculator'];

const wamProjectionFaqs = [
  {
    question: 'What is a WAM projection calculator?',
    answer:
      'It estimates your new cumulative WAM if upcoming units finish at the marks you enter. Use it for what-if planning before results are official.',
  },
  {
    question: 'How is projected WAM calculated?',
    answer:
      'Projected WAM = (current WAM × completed cp + Σ upcoming mark × cp) ÷ (completed cp + upcoming cp). This is standard credit-weighted planning maths.',
  },
  {
    question: 'Where do I get current WAM and completed credit points?',
    answer:
      'Use WES or your academic transcript for cumulative WAM and total completed credit points before adding upcoming units.',
  },
  {
    question: 'How is this different from the WAM target calculator?',
    answer:
      'WAM target works backwards: it tells you what average you need on remaining units to hit a goal. WAM projection works forwards: you enter expected marks and see the resulting WAM.',
  },
  {
    question: 'Will this match my official Monash WAM exactly?',
    answer:
      'It should be close for planning when inputs are correct, but official WAM also applies year-level weighting and faculty rules. Always verify on WES.',
  },
  {
    question: 'Can I model multiple semesters of units?',
    answer:
      'Yes. Add every upcoming unit you want to include in the scenario until you reach the credit total you are modelling.',
  },
];

export default function WamProjection() {
  return (
    <>
      <Seo
        title="WAM Projection Calculator - What If Your Marks? (Monash 2026)"
        description="Free Monash WAM projection calculator: enter current WAM and upcoming unit marks to see your projected cumulative WAM after those results."
        canonicalPath="/wam-projection-calculator"
        faqItems={wamProjectionFaqs}
      />

      <section className="bg-gradient-to-br from-violet-700 to-violet-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM Projection Calculator</h1>
        <p className="text-violet-100 max-w-2xl mx-auto">
          What if your next units finish at 75, 80, or 85? Model upcoming marks and see your projected cumulative Monash
          WAM instantly.
        </p>
        <p className="text-violet-100/95 max-w-2xl mx-auto text-sm mt-4 leading-relaxed">
          Confirm baseline with the{' '}
          <a href={absoluteUrl(wpHome.path)} className={HERO_INLINE_LINK_CLASS}>{wpHome.keyword}</a>
          . Need a target instead? Use the{' '}
          <a href={absoluteUrl(wpTarget.path)} className={HERO_INLINE_LINK_CLASS}>{wpTarget.keyword}</a>.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-8">
        <WamProjectionToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Worked Example</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Current WAM <strong className="text-gray-800 dark:text-gray-200">72</strong> on{' '}
            <strong className="text-gray-800 dark:text-gray-200">96 cp</strong>. Upcoming: 80% (6 cp), 75% (6 cp), 85%
            (12 cp) → projected WAM = (72×96 + 80×6 + 75×6 + 85×12) ÷ 120 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">73.85%</strong> (+1.85).
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">When to Use Projection vs Target</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Use this projection tool when you already have realistic marks in mind for enrolled units — for example after
            mid-semester results or practice exams. It answers: &quot;if I finish at these levels, where will my cumulative
            WAM land?&quot; That is different from the{' '}
            <a href={absoluteUrl(wpTarget.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              WAM target calculator
            </a>
            , which works backwards from a goal to tell you what average you still need.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Higher credit-point units move your WAM more. If you are carrying a 12-credit capstone, model conservative
            and optimistic marks for that row first — small changes there often swing the projected total more than
            elective units. Pair projections with the{' '}
            <a href={absoluteUrl(wpHome.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              main WAM calculator
            </a>{' '}
            to confirm your starting point matches your transcript.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            For semester-by-semester improvement strategies, read{' '}
            <a href="/articles/how-to-improve-wam-at-monash" className="text-primary-600 dark:text-primary-400 hover:underline">
              how to improve WAM at Monash
            </a>{' '}
            and{' '}
            <a href="/articles/how-to-calculate-wam" className="text-primary-600 dark:text-primary-400 hover:underline">
              how to calculate WAM
            </a>
            . Official Monash WAM may apply year-level weighting not reflected in simple planning projections.
          </p>
        </div>
      </section>
      <CalculatorPageGuide path="/wam-projection-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={wamProjectionFaqs} />
    </>
  );
}
