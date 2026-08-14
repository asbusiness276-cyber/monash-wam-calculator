import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import UnitMarkToolCore from '../components/UnitMarkToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [umFinal, umHome] = PAGE_KEYWORD_LINKS['/unit-mark-calculator'];

const unitMarkFaqs = [
  {
    question: 'How do I calculate overall unit mark from assessments?',
    answer:
      'Multiply each assessment mark by its weight (%), then add the results. Example: 75% at 25% weight + 80% at 25% + 65% at 50% = 18.75 + 20 + 32.5 = 71.25% unit mark.',
  },
  {
    question: 'Do assessment weights have to total 100%?',
    answer:
      'Yes. This calculator requires weights to sum to 100% so the overall unit mark is valid. Check your unit guide or Moodle assessment table if unsure.',
  },
  {
    question: 'Is this the same as WAM?',
    answer:
      'No. This tool calculates one unit mark from its internal assessments. WAM combines multiple completed units using credit points across your degree.',
  },
  {
    question: 'What if I only know coursework and final exam weights?',
    answer:
      'Enter two rows (coursework + exam) or use the final grade calculator if you need the exact exam mark required for a target.',
  },
  {
    question: 'Does this match my official transcript grade?',
    answer:
      'It should match when your inputs mirror the published assessment weighting. Special scaling or hurdle rules may differ — confirm on your official result.',
  },
  {
    question: 'Can I add more than three assessments?',
    answer:
      'Yes. Add as many rows as needed for assignments, labs, tests, and exams until weights total 100%.',
  },
];

export default function UnitMark() {
  return (
    <>
      <Seo
        title="Unit Mark Calculator - Weighted Assessments (Uni 2026)"
        description="Free Uni unit mark calculator: combine assignment, test, and exam marks with weights to get your overall unit percentage and grade band."
        canonicalPath="/unit-mark-calculator"
        faqItems={unitMarkFaqs}
      />

      <section className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Unit Mark Calculator</h1>
        <p className="text-cyan-100 max-w-2xl mx-auto">
          Combine assignment, mid-semester, and exam marks using your unit weighting table — get your overall unit
          percentage and Uni grade band instantly.
        </p>
        <p className="text-cyan-100/95 max-w-2xl mx-auto text-sm mt-4 leading-relaxed">
          Need exam-only target maths? Open the{' '}
          <a href={absoluteUrl(umFinal.path)} className={HERO_INLINE_LINK_CLASS}>{umFinal.keyword}</a>
          . Tracking degree WAM? Use the{' '}
          <a href={absoluteUrl(umHome.path)} className={HERO_INLINE_LINK_CLASS}>{umHome.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/unit-mark-calculator">
        <UnitMarkToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Formula</h2>
          <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
            Unit mark = Σ(assessment mark × weight ÷ 100)
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Example: Assignment 75% (25%), mid-sem 68% (25%), final 72% (50%) → 18.75 + 17 + 36 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">71.75%</strong> overall (Distinction band).
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Reading Your Unit Guide</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Every Uni unit publishes assessment weights in the handbook or Moodle site. Weights must total 100% for
            this calculator to return a valid overall mark. If your unit uses hurdle requirements — such as a minimum
            exam mark to pass — this tool shows the weighted percentage only; it does not replace faculty pass rules.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Enter marks as released percentages (0–100). For group work or scaled marks, use the final adjusted score
            shown on Moodle. Once you know your running unit total, check the letter band with the{' '}
            <a href="/mark-to-grade-calculator" className="text-primary-600 dark:text-primary-400 hover:underline">
              mark to grade calculator
            </a>{' '}
            or plan the remaining exam with the{' '}
            <a href={absoluteUrl(umFinal.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              final grade calculator
            </a>
            . When the unit is complete, add it to your{' '}
            <a href={absoluteUrl(umHome.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              cumulative WAM
            </a>
            .
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            For a full walkthrough of exam-weight planning, see our{' '}
            <a href="/articles/uni-final-exam-mark-calculator-guide" className="text-primary-600 dark:text-primary-400 hover:underline">
              final exam mark calculator guide
            </a>
            .
          </p>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/unit-mark-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={unitMarkFaqs} />
    </>
  );
}
