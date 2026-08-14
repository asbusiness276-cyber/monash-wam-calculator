import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import TipCalculatorToolCore from '../components/TipCalculatorToolCore';

export default function TipCalculator() {
  return (
    <>
      <Seo title="Tip Calculator & Bill Splitter" description="Calculate tips and split the bill easily between friends." canonicalPath="/tip-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Tip Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Calculate your tip and easily split the bill.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/tip-calculator">
        <TipCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/tip-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
