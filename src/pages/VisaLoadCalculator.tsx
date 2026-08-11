import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import VisaLoadToolCore from '../components/VisaLoadToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaWam] = PAGE_KEYWORD_LINKS['/visa-load-calculator'] || [
  { keyword: 'GPA & WAM Calculators', path: '/' },
];

const faqs = [
  {
    question: 'What is Student Visa Condition 8202?',
    answer: 'Condition 8202 requires international students in Australia to maintain full-time enrollment and achieve satisfactory academic progress to complete their course within the duration specified on their Confirmation of Enrolment (CoE).',
  },
  {
    question: 'What happens if I need to underload?',
    answer: 'You must apply for a reduced study load through your university faculty. Underloading without permission can lead to the cancellation of your student visa. Valid reasons typically include compassionate circumstances or medical issues.',
  },
  {
    question: 'Can I take summer units to reduce my load later?',
    answer: 'Yes, passing units in summer or winter teaching periods reduces the total number of credits you need to complete during standard semesters, making it easier to manage your workload while staying visa-compliant.',
  },
  {
    question: 'What if I fail a unit and fall behind?',
    answer: 'If you fail a unit, you may need to overload in a future semester or take summer/winter units to catch up. If this is not possible, you will need to apply for a CoE extension before your current one expires.',
  }
];

export default function VisaLoadCalculator() {
  return (
    <>
      <Seo
        title="International Student Visa Load Calculator - Australia Condition 8202"
        description="Calculate how many credit points you need per semester to finish on time and comply with Australian student visa condition 8202."
        canonicalPath="/visa-load-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Visa Study Load Calculator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Ensure you comply with student visa condition 8202. Calculate your required study load to finish before your CoE expires.
        </p>
        <p className="text-blue-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Maintain your academic progress using our{' '}
          <a href={absoluteUrl(gpaWam.path)} className={HERO_INLINE_LINK_CLASS}>{gpaWam.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/visa-load-calculator">
        <VisaLoadToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/visa-load-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
