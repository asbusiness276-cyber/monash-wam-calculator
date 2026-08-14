import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PercentageChangeCalculatorToolCore from '../components/PercentageChangeCalculatorToolCore';

export default function PercentageChangeCalculator() {
  return (
    <>
      <Seo title="Percentage Change Calculator | Increase & Decrease" description="Calculate the exact percentage increase or decrease between two numbers instantly." canonicalPath="/percentage-change-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Percentage Change Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Calculate exactly how much a value has increased or decreased.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/percentage-change-calculator">
        <PercentageChangeCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/percentage-change-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
