import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import SemesterWamToolCore from '../components/SemesterWamToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [swHome, swTarget] = PAGE_KEYWORD_LINKS['/semester-wam-calculator'];

const semesterWamFaqs = [
  {
    question: 'What is a semester WAM?',
    answer:
      'A semester WAM is the credit-weighted average of marks from units completed in one teaching period only. It shows how strong your current semester was, separate from your cumulative degree WAM.',
  },
  {
    question: 'How is semester WAM calculated?',
    answer:
      'Semester WAM = sum(mark × credit points) ÷ sum(credit points) for the units you enter. Only include units from the semester you are measuring.',
  },
  {
    question: 'Is semester WAM the same as my Uni transcript WAM?',
    answer:
      'No. Your official transcript WAM is cumulative across your whole course (with Uni year-level weighting). This tool is for one-semester tracking and planning.',
  },
  {
    question: 'Why is weighted average different from a simple average?',
    answer:
      'A 12-credit unit affects the weighted result twice as much as a 6-credit unit. Simple average treats every unit equally regardless of credit points.',
  },
  {
    question: 'Can I use this to plan next semester targets?',
    answer:
      'Yes. Pair it with the WAM target calculator and main WAM calculator to connect semester performance with your overall degree average.',
  },
  {
    question: 'Should I include failed units?',
    answer:
      'Include any unit from this semester with a final mark if you want an honest semester snapshot. For cumulative recovery planning, also use the Supp vs Repeat WAM calculator.',
  },
];

export default function SemesterWam() {
  return (
    <>
      <Seo
        title="Semester WAM Calculator - Uni Semester Average (2026)"
        description="Free semester WAM calculator for Uni students: enter this semester's unit marks and credit points to get your weighted semester average instantly."
        canonicalPath="/semester-wam-calculator"
        faqItems={semesterWamFaqs}
      />

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Semester WAM Calculator</h1>
        <p className="text-teal-100 max-w-2xl mx-auto">
          Calculate your credit-weighted average for this semester only — see how strong your current teaching period was
          before results release or course advice meetings.
        </p>
        <p className="text-teal-100/95 max-w-2xl mx-auto text-sm mt-4 leading-relaxed">
          Need cumulative degree WAM? Use the{' '}
          <a href={absoluteUrl(swHome.path)} className={HERO_INLINE_LINK_CLASS}>{swHome.keyword}</a>
          . Planning ahead? Try the{' '}
          <a href={absoluteUrl(swTarget.path)} className={HERO_INLINE_LINK_CLASS}>{swTarget.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/semester-wam-calculator">
        <SemesterWamToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Examples</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Four 6-credit units at 78%, 72%, 81%, and 69% → semester WAM = (78+72+81+69) × 6 ÷ 24 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">75.00%</strong>.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            A 12-credit unit at 85% and a 6-credit unit at 70% → weighted average = (85×12 + 70×6) ÷ 18 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">80.00%</strong>, while the simple unit average is
            77.50%. Credit weighting matters — never average unit percentages without weighting when cp differs.
          </p>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Semester WAM vs Cumulative WAM</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Your semester WAM measures performance in one teaching period only. Your degree WAM on a Uni transcript
            includes every completed unit across all semesters, weighted by credit points (and, for official WAM,
            year-level rules). A strong semester can lift cumulative WAM slowly if you already have many cp behind you;
            a weak semester has the same gradual effect in reverse.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Use this calculator after results to review how the current semester went before planning the next enrolment.
            Then open the{' '}
            <a href={absoluteUrl(swHome.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              WAM calculator
            </a>{' '}
            for your full cumulative average, or the{' '}
            <a href={absoluteUrl(swTarget.path)} className="text-primary-600 dark:text-primary-400 hover:underline">
              WAM target tool
            </a>{' '}
            to see what you need going forward. Our{' '}
            <a href="/articles/uni-credit-points-wam-explained" className="text-primary-600 dark:text-primary-400 hover:underline">
              credit points and WAM guide
            </a>{' '}
            explains how cp weighting shapes both semester and degree averages.
          </p>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/semester-wam-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={semesterWamFaqs} />
    </>
  );
}
