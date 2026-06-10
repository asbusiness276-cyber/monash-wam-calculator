import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import ProductShowcase from '../components/ProductShowcase';
import SemesterWamToolCore from '../components/SemesterWamToolCore';
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
    question: 'Is semester WAM the same as my Monash transcript WAM?',
    answer:
      'No. Your official transcript WAM is cumulative across your whole course (with Monash year-level weighting). This tool is for one-semester tracking and planning.',
  },
  {
    question: 'Why is weighted average different from a simple average?',
    answer:
      'A 12-credit unit affects the weighted result twice as much as a 6-credit unit. Simple average treats every unit equally regardless of credit points.',
  },
  {
    question: 'Can I use this to plan next semester targets?',
    answer:
      'Yes. Pair it with the WAM target calculator and main Monash WAM calculator to connect semester performance with your overall degree average.',
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
        title="Semester WAM Calculator - Monash Semester Average (2026)"
        description="Free semester WAM calculator for Monash students: enter this semester's unit marks and credit points to get your weighted semester average instantly."
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

      <section className="max-w-2xl mx-auto px-4 py-8">
        <SemesterWamToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Example</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            Four 6-credit units at 78%, 72%, 81%, and 69% → semester WAM = (78+72+81+69) × 6 ÷ 24 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">75.00%</strong>.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            A 12-credit unit at 85% and a 6-credit unit at 70% → weighted average = (85×12 + 70×6) ÷ 18 ={' '}
            <strong className="text-gray-800 dark:text-gray-200">80.00%</strong>, while the simple unit average is
            77.50%.
          </p>
        </div>
      </section>

      <ProductShowcase startIndex={13} endIndex={18} />
      <PageFaq items={semesterWamFaqs} />
    </>
  );
}
