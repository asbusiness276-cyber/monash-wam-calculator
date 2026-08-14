import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import HecsIndexationToolCore from '../components/HecsIndexationToolCore';

const faqs = [
  {
    question: 'What is HECS indexation?',
    answer: 'In Australia, student loans do not have an interest rate. However, on June 1st every year, the balance is "indexed" to inflation to maintain its real value. If inflation is high, a significant amount of debt is added to your loan overnight.',
  },
  {
    question: 'When is indexation applied?',
    answer: 'Indexation is applied to your HELP debt on June 1st of every year. It only applies to debts that are older than 11 months.',
  },
  {
    question: 'Should I pay off my debt before June 1?',
    answer: 'If you have spare cash and the indexation rate is higher than what you could earn in a high-interest savings account, it can make financial sense to make a voluntary repayment before June 1 to avoid the indexation hit.',
  }
];

export default function HecsIndexationCalculator() {
  return (
    <>
      <Seo
        title="HECS Indexation Calculator | Student Debt Growth"
        description="Calculate exactly how much your Australian HECS/HELP debt will increase on June 1st based on the latest CPI indexation rates."
        canonicalPath="/hecs-indexation-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">HECS Indexation Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Student debt is interest-free, but it's not inflation-free. See exactly how much debt will be added to your loan on June 1st.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/hecs-indexation-calculator">
        <HecsIndexationToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/hecs-indexation-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
