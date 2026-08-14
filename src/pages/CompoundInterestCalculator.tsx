import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import CompoundInterestToolCore from '../components/CompoundInterestToolCore';

export default function CompoundInterestCalculator() {
  return (
    <>
      <Seo title="Compound Interest Calculator | Investment Growth" description="Calculate how your money grows over time with compound interest and monthly contributions." canonicalPath="/compound-interest-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Compound Interest Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Watch your money grow through the magic of compound interest.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/compound-interest-calculator">
        <CompoundInterestToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/compound-interest-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
