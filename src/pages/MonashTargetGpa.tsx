import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashTargetGpaToolCore from '../components/MonashTargetGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [tgpaGpa, tgpaWamTarget] = PAGE_KEYWORD_LINKS['/monash-target-gpa-calculator'];

const faqs = [
  {
    question: 'How does the Monash target GPA calculator work?',
    answer:
      'Enter current cumulative GPA, credits earned, planned credits next term, and target GPA. It calculates the semester GPA you need to reach the goal.',
  },
  {
    question: 'What target GPA is distinction average?',
    answer:
      'GPA 3.0 on Monash 4.0 scale is commonly treated as distinction average — roughly equivalent to WAM 70+.',
  },
  {
    question: 'What if required GPA is above 4.0?',
    answer:
      'The target cumulative GPA is not achievable with the planned credits in one term. Extend your timeline or adjust the goal.',
  },
  {
    question: 'Is this different from WAM target calculator?',
    answer:
      'Yes. WAM target uses percentage marks and credit-weighted WAM. This tool uses Monash 4.0 GPA points — use whichever metric your goal requires.',
  },
  {
    question: 'Where do I get credits earned?',
    answer:
      'Sum credit points from completed units on your transcript or WES. Do not include future enrolments you have not finished.',
  },
  {
    question: 'Can I plan for honours or scholarships with this?',
    answer:
      'Yes. Enter a target such as 3.0 (distinction) or 3.5+ and see what next-semester performance is required.',
  },
];

export default function MonashTargetGpa() {
  return (
    <>
      <Seo
        title="Monash Target GPA Calculator — Desired GPA Planner (2026)"
        description="Free Monash target GPA calculator: see what semester GPA you need on planned credits to reach your desired cumulative GPA."
        canonicalPath="/monash-target-gpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-orange-600 to-orange-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Target GPA Calculator</h1>
        <p className="text-orange-100 max-w-xl mx-auto">
          Plan what GPA you need next semester to reach your desired cumulative GPA at Monash University.
        </p>
        <p className="text-orange-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Calculate current GPA with the{' '}
          <a href={absoluteUrl(tgpaGpa.path)} className={HERO_INLINE_LINK_CLASS}>{tgpaGpa.keyword}</a>
          . Planning in WAM instead? Use the{' '}
          <a href={absoluteUrl(tgpaWamTarget.path)} className={HERO_INLINE_LINK_CLASS}>{tgpaWamTarget.keyword}</a>.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-8">
        <MonashTargetGpaToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Formula</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-mono bg-gray-50 dark:bg-gray-900/40 p-3 rounded-lg">
            Required term GPA = (target × total cp − current GPA × earned cp) ÷ planned cp
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Example: GPA 2.750 on 96 cp, 24 cp planned, target 3.000 → need (3.0×120 − 2.75×96) ÷ 24 = 3.500 next term.
          </p>
        </div>
      </section>
      <CalculatorPageGuide path="/monash-target-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
