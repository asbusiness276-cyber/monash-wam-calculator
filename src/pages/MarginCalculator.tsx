import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import MarginCalculatorToolCore from '../components/MarginCalculatorToolCore';

export default function MarginCalculator() {
  return (
    <>
      <Seo title="Margin Calculator | Profit & Markup" description="Calculate gross profit, profit margin, and markup percentages easily." canonicalPath="/margin-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Margin Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Calculate profit margins and markups instantly.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/margin-calculator">
        <MarginCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/margin-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
