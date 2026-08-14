import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import HecsRepaymentTimeToolCore from '../components/HecsRepaymentTimeToolCore';

const faqs = [
  {
    question: 'Do I have to pay back my HECS debt if I earn under $50,000?',
    answer: 'No. As of the 2023-2024 financial year, the mandatory repayment threshold is $51,550. If you earn less than this, you do not have to make mandatory repayments.',
  },
  {
    question: 'Why is indexation important?',
    answer: 'HELP/HECS debts do not accrue standard interest, but they are indexed annually to match inflation (CPI). If inflation is high, your debt can grow faster than your repayments, extending the time it takes to pay off.',
  },
  {
    question: 'Can I make voluntary repayments?',
    answer: 'Yes, you can make voluntary repayments to the ATO at any time to pay off your debt faster and reduce the amount of indexation applied on June 1st.',
  }
];

export default function HecsRepaymentTimeCalculator() {
  return (
    <>
      <Seo
        title="HECS Debt Payoff Time Calculator | Australian Student Loan"
        description="Calculate exactly how many years it will take to pay off your Australian HELP/HECS student debt based on your salary and indexation rates."
        canonicalPath="/hecs-repayment-time-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">HECS Debt Payoff Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Find out how many years you will be paying off your student loan based on the ATO repayment thresholds.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/hecs-repayment-time-calculator">
        <HecsRepaymentTimeToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/hecs-repayment-time-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
