import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GradeAverageToolCore from '../components/GradeAverageToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gaHome, gaWeighted] = PAGE_KEYWORD_LINKS['/grade-average-calculator'];

const gradeAverageFaqs = [
  {
    question: 'What is a grade average calculator?',
    answer:
      'It averages percentage marks you enter. With credit points, it also shows a credit-weighted average — the method Monash uses for WAM.',
  },
  {
    question: 'How do I calculate a simple grade average?',
    answer:
      'Add your marks and divide by the count. Example: 78, 72, 81, 69 → (78+72+81+69) ÷ 4 = 75%.',
  },
  {
    question: 'When should I use credit-weighted average?',
    answer:
      'When units have different credit points (6 vs 12 cp). Enter cp per row to see the weighted result alongside the simple mean.',
  },
  {
    question: 'Is grade average the same as semester WAM?',
    answer:
      'Semester WAM is credit-weighted only. This tool shows both simple and weighted averages so you can compare methods.',
  },
  {
    question: 'Can I use this for assignment marks?',
    answer:
      'Yes for a quick mean of several percentages. For assessment weights inside one unit, use the unit mark calculator.',
  },
  {
    question: 'Does this match my Monash transcript?',
    answer:
      'Official WAM uses certified marks and year-level weighting on WES. Use this for planning and semester snapshots.',
  },
];

export default function GradeAverage() {
  return (
    <>
      <Seo
        title="Grade Average Calculator - Simple & Weighted Mean (Monash 2026)"
        description="Free grade average calculator: find the simple mean of your marks or a credit-weighted average with Monash credit points."
        canonicalPath="/grade-average-calculator"
        faqItems={gradeAverageFaqs}
      />

      <section className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Grade Average Calculator</h1>
        <p className="text-cyan-100 max-w-2xl mx-auto">
          Average your unit or assessment marks — see both a simple mean and an optional credit-weighted average for
          Monash planning.
        </p>
        <p className="text-cyan-100/95 max-w-2xl mx-auto text-sm mt-4 leading-relaxed">
          Tracking full degree WAM? Use the{' '}
          <a href={absoluteUrl(gaHome.path)} className={HERO_INLINE_LINK_CLASS}>{gaHome.keyword}</a>
          . Need credit weighting only? Try the{' '}
          <a href={absoluteUrl(gaWeighted.path)} className={HERO_INLINE_LINK_CLASS}>{gaWeighted.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/grade-average-calculator">
        <GradeAverageToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Examples</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Marks 78, 72, 81, 69 → simple average = <strong className="text-gray-800 dark:text-gray-200">75.00%</strong>.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Same marks with 12 cp on the 81 and 6 cp on the others → weighted average ={' '}
            <strong className="text-gray-800 dark:text-gray-200">76.67%</strong>.
          </p>
        </div>
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/grade-average-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={gradeAverageFaqs} />
    </>
  );
}
