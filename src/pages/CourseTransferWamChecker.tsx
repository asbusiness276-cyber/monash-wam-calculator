import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import CourseTransferToolCore from '../components/CourseTransferToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaWam] = PAGE_KEYWORD_LINKS['/course-transfer-wam-checker'] || [
  { keyword: 'GPA & WAM Calculators', path: '/' },
];

const faqs = [
  {
    question: 'What WAM do I need to transfer internally at Monash?',
    answer: 'It depends entirely on the course. Arts or Science typically require around a 60 WAM, while highly competitive courses like Law (Honours) or Physiotherapy usually require a 75+ WAM.',
  },
  {
    question: 'Does my WAM guarantee an internal transfer?',
    answer: 'No. Meeting the minimum WAM cut-off only makes you eligible to apply. If there are more applicants than spots, they will rank students by WAM. You must also meet any subject prerequisites.',
  },
  {
    question: 'Are my previous failed units counted in my WAM for transfers?',
    answer: 'Yes, your total cumulative WAM is usually used for internal transfers, which includes all units you have attempted, even failed ones.',
  },
  {
    question: 'Can I transfer in my first semester?',
    answer: 'Most internal transfers require you to have completed at least one full year (48 credit points) of study before you can apply, though some faculties allow applications after one semester.',
  }
];

export default function CourseTransferWamChecker() {
  return (
    <>
      <Seo
        title="Course Transfer WAM Checker - Internal Transfer Requirements"
        description="Check if your Monash WAM meets the minimum cut-off requirements for an internal course transfer to Law, Medicine, Engineering, and more."
        canonicalPath="/course-transfer-wam-checker"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-purple-700 to-purple-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Course Transfer WAM Checker</h1>
        <p className="text-purple-100 max-w-xl mx-auto">
          Thinking of switching degrees? Check if your current WAM meets the minimum cut-off for an internal transfer.
        </p>
        <p className="text-purple-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Need to boost your WAM? Track your goals with our{' '}
          <a href={absoluteUrl(gpaWam.path)} className={HERO_INLINE_LINK_CLASS}>{gpaWam.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/course-transfer-wam-checker">
        <CourseTransferToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/course-transfer-wam-checker" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
