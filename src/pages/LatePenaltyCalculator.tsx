import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import LatePenaltyToolCore from '../components/LatePenaltyToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaWam] = PAGE_KEYWORD_LINKS['/late-penalty-calculator'] || [
  { keyword: 'GPA & WAM Calculators', path: '/' },
];

const faqs = [
  {
    question: 'How much do you get penalised for a late assignment at Monash?',
    answer: 'At Monash University, the standard late penalty is 5% of the total maximum mark for the assignment per day it is late.',
  },
  {
    question: 'Is the penalty deducted from my score or the total score?',
    answer: 'The penalty is usually calculated based on the total possible mark for the assignment, not the mark you achieved. For example, 5% of a 100-mark assignment is 5 marks per day.',
  },
  {
    question: 'What happens if I submit my assignment more than 7 days late?',
    answer: 'According to Monash policy, assignments submitted more than 7 days after the due date (without an approved extension) will generally receive a mark of zero.',
  },
  {
    question: 'Are weekends and public holidays included in the late days?',
    answer: 'Yes, university policies typically count all calendar days, including weekends and public holidays, when calculating late penalties.',
  }
];

export default function LatePenaltyCalculator() {
  return (
    <>
      <Seo
        title="Late Penalty & Extension Calculator Australia - Mark Deductions"
        description="Calculate how many marks you will lose for submitting an assignment late. Find out your final grade after standard 5% per day university deductions."
        canonicalPath="/late-penalty-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Late Penalty Calculator</h1>
        <p className="text-red-100 max-w-xl mx-auto">
          Submitted your assignment late? Calculate exactly how many marks you'll lose based on standard university daily deductions.
        </p>
        <p className="text-red-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Check how this impacts your overall grade with our{' '}
          <a href={absoluteUrl(gpaWam.path)} className={HERO_INLINE_LINK_CLASS}>{gpaWam.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/late-penalty-calculator">
        <LatePenaltyToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/late-penalty-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
