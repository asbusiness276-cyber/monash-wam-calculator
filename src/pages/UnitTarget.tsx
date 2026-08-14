import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import UnitTargetToolCore from '../components/UnitTargetToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [utUnit, utFinal] = PAGE_KEYWORD_LINKS['/unit-target-calculator'];

const unitTargetFaqs = [
  {
    question: 'How do I calculate required mark on remaining assessments?',
    answer:
      'Enter completed assessment marks and weights, leave pending assessments blank, and set your target unit mark. The tool calculates the weighted average needed on remaining components.',
  },
  {
    question: 'Is this different from the final grade calculator?',
    answer:
      'Yes. Final grade handles one coursework block and one exam. This tool supports multiple assessments (assignments, labs, tests, exam) with separate weights.',
  },
  {
    question: 'Do weights need to total 100%?',
    answer: 'Yes. Assessment weights must add up to 100% for a valid unit mark calculation.',
  },
  {
    question: 'What if required mark is above 100%?',
    answer:
      'Your target is not achievable with current marks unless weights or expectations change. Consider adjusting your target or speaking with your unit coordinator.',
  },
  {
    question: 'Can I leave multiple assessments blank?',
    answer:
      'Yes. The result is the average mark needed across the combined weight of all pending assessments.',
  },
  {
    question: 'Does this match Uni official grading?',
    answer:
      'It uses standard weighted percentage maths from your unit guide. Hurdles, scaling, or special rules may differ — confirm on official unit information.',
  },
];

export default function UnitTarget() {
  return (
    <>
      <Seo
        title="Unit Target Mark Calculator - What Do You Need? (Uni 2026)"
        description="Free Uni unit target calculator: enter completed assessment marks and weights to see what you need on remaining tasks to reach your target unit mark."
        canonicalPath="/unit-target-calculator"
        faqItems={unitTargetFaqs}
      />

      <section className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Unit Target Mark Calculator</h1>
        <p className="text-sky-100 max-w-2xl mx-auto">
          Assignments done, exam pending? Enter completed marks and weights to find what you need on remaining
          assessments to hit your target unit percentage.
        </p>
        <p className="text-sky-100/95 max-w-2xl mx-auto text-sm mt-4 leading-relaxed">
          Already know all marks? Use the{' '}
          <a href={absoluteUrl(utUnit.path)} className={HERO_INLINE_LINK_CLASS}>{utUnit.keyword}</a>
          . Simple coursework + exam only? Try the{' '}
          <a href={absoluteUrl(utFinal.path)} className={HERO_INLINE_LINK_CLASS}>{utFinal.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/unit-target-calculator">
        <UnitTargetToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Example</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Assignment 75% (25%), mid-sem 68% (25%), final pending (50%), target 75% → completed contribution = 35.75 →
            need (75 − 35.75) ÷ 0.5 = <strong className="text-gray-800 dark:text-gray-200">78.50%</strong> on the
            final.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Planning Multiple Assessments</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Many Uni units split marks across assignments, labs, tests, and a final exam. This calculator supports
            any number of weighted components: enter marks you already have, leave pending rows empty, set your target
            unit percentage, and read the required average on whatever remains. Weights must still sum to 100%.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            If only the final exam is outstanding, the simpler{' '}
            <a href={absoluteUrl(utFinal.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              final grade calculator
            </a>{' '}
            may be faster. Use this tool when you have three or more assessment types with different weights — common in
            science, engineering, and arts units with participation or portfolio tasks.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            After you know the required mark, convert it to a letter band with the{' '}
            <a href="/mark-to-grade-calculator" className="text-primary-600 dark:text-primary-400 hover:underline">
              mark to grade tool
            </a>
            , or see how the unit affects degree standing via the{' '}
            <a href={absoluteUrl(utUnit.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              unit mark calculator
            </a>
            . Read our{' '}
            <a href="/articles/uni-final-exam-mark-calculator-guide" className="text-primary-600 dark:text-primary-400 hover:underline">
              final exam planning guide
            </a>{' '}
            for study tactics once you know the number you need.
          </p>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/unit-target-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={unitTargetFaqs} />
    </>
  );
}
