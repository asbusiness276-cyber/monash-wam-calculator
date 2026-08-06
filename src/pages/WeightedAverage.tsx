import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import SemesterWamToolCore from '../components/SemesterWamToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [waHome, waGrade] = PAGE_KEYWORD_LINKS['/weighted-average-calculator'];

const weightedAverageFaqs = [
  {
    question: 'What is a weighted average calculator?',
    answer:
      'It calculates a credit-weighted mean of percentage marks. Each value is multiplied by its weight (credit points) before dividing by total weight.',
  },
  {
    question: 'How is weighted average different from a simple average?',
    answer:
      'Simple average treats every mark equally. Weighted average gives more influence to higher-credit units — a 12 cp distinction moves the result more than a 6 cp pass.',
  },
  {
    question: 'Is this the same as Monash WAM?',
    answer:
      'This uses standard credit-weighted planning maths. Official Monash WAM on WES also applies Year 1 half-weighting — use the main WAM calculator for transcript-aligned totals.',
  },
  {
    question: 'What marks should I enter?',
    answer:
      'Enter final unit percentages (0–100) and each unit credit points. Include only the units you want in this weighted average.',
  },
  {
    question: 'Can I use this for one semester?',
    answer:
      'Yes. Add every unit from the semester you are measuring. For a simple mean without credit weighting, use the grade average calculator.',
  },
  {
    question: 'Why do my weights matter at Monash?',
    answer:
      'Monash WAM is credit-weighted. Two distinction marks do not affect your average equally if one unit is 12 cp and another is 6 cp.',
  },
];

export default function WeightedAverage() {
  return (
    <>
      <Seo
        title="Weighted Average Calculator - Monash Credit-Weighted Marks (2026)"
        description="Free weighted average calculator for Monash students: enter unit marks and credit points to get a credit-weighted percentage average instantly."
        canonicalPath="/weighted-average-calculator"
        faqItems={weightedAverageFaqs}
      />

      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Weighted Average Calculator</h1>
        <p className="text-indigo-100 max-w-2xl mx-auto">
          Calculate a credit-weighted average from unit marks and credit points — the same maths Monash uses for WAM
          planning.
        </p>
        <p className="text-indigo-100/95 max-w-2xl mx-auto text-sm mt-4 leading-relaxed">
          Need cumulative degree WAM? Use the{' '}
          <a href={absoluteUrl(waHome.path)} className={HERO_INLINE_LINK_CLASS}>{waHome.keyword}</a>
          . Want a simple mean? Try the{' '}
          <a href={absoluteUrl(waGrade.path)} className={HERO_INLINE_LINK_CLASS}>{waGrade.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/weighted-average-calculator">
        <SemesterWamToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Worked Example</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            85% (12 cp) + 70% (6 cp) → weighted average = (85×12 + 70×6) ÷ 18 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">80.00%</strong>. Simple average would be 77.50% —
            credit weighting matters.
          </p>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/weighted-average-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={weightedAverageFaqs} />
    </>
  );
}
