import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import HecsHelpDebtToolCore from '../components/HecsHelpDebtToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaWam] = PAGE_KEYWORD_LINKS['/hecs-debt-calculator'] || [
  { keyword: 'GPA & WAM Calculators', path: '/' },
];

const faqs = [
  {
    question: 'How is HECS-HELP debt indexed in Australia?',
    answer: 'Your HECS-HELP debt is indexed annually on June 1st to maintain its real value in line with inflation, typically based on the Consumer Price Index (CPI).',
  },
  {
    question: 'Do I have to pay interest on my HECS debt?',
    answer: 'No, the Australian government does not charge interest on HECS-HELP debt. However, it is subject to annual indexation which increases the total amount you owe.',
  },
  {
    question: 'When do I have to start repaying my HECS debt?',
    answer: 'You start making compulsory repayments through the tax system once your repayment income exceeds the minimum repayment threshold for that income year.',
  },
  {
    question: 'What are the student contribution bands?',
    answer: 'Units are grouped into bands based on the area of study. Band 1 is generally the cheapest (e.g., nursing, education) and Band 4 is the most expensive (e.g., law, commerce).',
  }
];

export default function HecsHelpDebtCalculator() {
  return (
    <>
      <Seo
        title="HECS-HELP Debt Calculator Australia - Estimate Total Debt"
        description="Free HECS-HELP debt calculator for Australian university students. Estimate your total degree cost and projected indexation."
        canonicalPath="/hecs-debt-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">HECS-HELP Debt Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Estimate your total university degree cost and project future HECS indexation in Australia.
        </p>
        <p className="text-indigo-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Need academic tools? Check our{' '}
          <a href={absoluteUrl(gpaWam.path)} className={HERO_INLINE_LINK_CLASS}>{gpaWam.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/hecs-debt-calculator">
        <HecsHelpDebtToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/hecs-debt-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
