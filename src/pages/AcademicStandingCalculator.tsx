import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import AcademicStandingToolCore from '../components/AcademicStandingToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaWam] = PAGE_KEYWORD_LINKS['/academic-standing-calculator'] || [
  { keyword: 'GPA & WAM Calculators', path: '/' },
];

const faqs = [
  {
    question: 'What happens if I fail 50% or more of my units?',
    answer: 'Passing less than 50% of your enrolled credit points in a teaching period will usually trigger an academic progress review. You will receive an academic warning (Risk Level 1) or a Notice of Referral to the Academic Progress Committee (APC).',
  },
  {
    question: 'What is a Notice of Referral and Hearing?',
    answer: 'It is a formal notification that your academic progress is unsatisfactory. You will be asked to complete a student response form or attend a hearing to explain your circumstances and show cause why you should not be excluded from your course.',
  },
  {
    question: 'I failed the same compulsory unit twice, what now?',
    answer: 'Failing the same compulsory (core) unit twice is another major trigger for a faculty academic progress review, even if you passed all your other units.',
  },
  {
    question: 'Can I be kicked out of university for failing?',
    answer: 'Yes, if the Academic Progress Committee determines that you are unlikely to successfully complete your course, they have the power to exclude (expel) you from the university. This is why responding to risk notices is critical.',
  }
];

export default function AcademicStandingCalculator() {
  return (
    <>
      <Seo
        title="Academic Standing & Risk Calculator - Uni Progress Rules"
        description="Check if you are at risk of academic exclusion or warning. Calculate your pass rate and academic standing based on failed units."
        canonicalPath="/academic-standing-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Academic Standing Calculator</h1>
        <p className="text-orange-100 max-w-xl mx-auto">
          Worried about failing units? Check if you're at risk of an academic progress review, warning, or exclusion hearing.
        </p>
        <p className="text-orange-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          See how fails affect your grades with our{' '}
          <a href={absoluteUrl(gpaWam.path)} className={HERO_INLINE_LINK_CLASS}>{gpaWam.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/academic-standing-calculator">
        <AcademicStandingToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/academic-standing-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
