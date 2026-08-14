import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import DateCalculatorToolCore from '../components/DateCalculatorToolCore';

export default function DateCalculator() {
  return (
    <>
      <Seo title="Date Calculator | Add & Subtract Days" description="Add or subtract days, weeks, months, or years from any given date to find a past or future date." canonicalPath="/date-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Date Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Add or subtract time from a date instantly.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/date-calculator">
        <DateCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/date-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
