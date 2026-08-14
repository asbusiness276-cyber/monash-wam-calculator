import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import FuelCostCalculatorToolCore from '../components/FuelCostCalculatorToolCore';

export default function FuelCostCalculator() {
  return (
    <>
      <Seo title="Fuel Cost Calculator | Gas Price Estimator" description="Estimate the fuel cost and gas needed for your next road trip." canonicalPath="/fuel-cost-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Fuel Cost Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Calculate the exact fuel cost for your next road trip.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/fuel-cost-calculator">
        <FuelCostCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/fuel-cost-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
