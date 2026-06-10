import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import ProductShowcase from '../components/ProductShowcase';
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

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Worked Example</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Current WAM <strong className="text-gray-800 dark:text-gray-200">72</strong> on{' '}
            <strong className="text-gray-800 dark:text-gray-200">96 cp</strong>. Upcoming: 80% (6 cp), 75% (6 cp), 85%
            (12 cp) → projected WAM = (72×96 + 80×6 + 75×6 + 85×12) ÷ 120 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">73.85%</strong> (+1.85).
          </p>
        </div>
      </section>

      <ProductShowcase startIndex={1} endIndex={6} />
      <PageFaq items={wamProjectionFaqs} />
    </>
  );
}
