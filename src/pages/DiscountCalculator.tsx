import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import DiscountCalculatorToolCore from '../components/DiscountCalculatorToolCore';

export default function DiscountCalculator() {
  return (
    <>
      <Seo title="Discount Calculator | Percentage Off Sale Price" description="Calculate the final price and amount saved after a percentage discount." canonicalPath="/discount-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Discount Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Find out exactly how much you save on a sale.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/discount-calculator">
        <DiscountCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/discount-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
