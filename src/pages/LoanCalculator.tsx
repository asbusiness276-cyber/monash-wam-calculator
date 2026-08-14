import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import LoanCalculatorToolCore from '../components/LoanCalculatorToolCore';

export default function LoanCalculator() {
  return (
    <>
      <Seo title="Loan Repayment Calculator | Monthly EMI" description="Calculate your monthly loan repayments, total interest, and total cost of the loan." canonicalPath="/loan-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Loan Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Find out exactly what your monthly loan repayments will be.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/loan-calculator">
        <LoanCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/loan-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
