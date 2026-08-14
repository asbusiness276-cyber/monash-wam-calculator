import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import StudentTaxToolCore from '../components/StudentTaxToolCore';

const faqs = [
  {
    question: 'What is the tax-free threshold in Australia?',
    answer: 'The tax-free threshold for Australian residents is $18,200. If your total income for the financial year is below this amount, you do not pay any income tax.',
  },
  {
    question: 'Why is my employer taking tax if I earn under $18,200?',
    answer: 'If your employer estimates your weekly pay would push you over $18,200 for the year, they must withhold tax (PAYG). Don\'t worry, you will get this refunded when you lodge your tax return in July.',
  },
  {
    question: 'Do international students pay taxes?',
    answer: 'Yes. Most international students studying for more than 6 months are considered "residents for tax purposes" and get the exact same $18,200 tax-free threshold as Australian citizens.',
  }
];

export default function StudentTaxCalculator() {
  return (
    <>
      <Seo
        title="Australian Student Tax Calculator | Tax-Free Threshold"
        description="Calculate your estimated income tax and Medicare levy. Find out if you are under the $18,200 tax-free threshold as an Australian or international student."
        canonicalPath="/student-tax-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Student Tax Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Working a part-time job? See exactly how much tax you should be paying and if you'll get a refund.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/student-tax-calculator">
        <StudentTaxToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/student-tax-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
