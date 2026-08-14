import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import TimeDurationCalculatorToolCore from '../components/TimeDurationCalculatorToolCore';

export default function TimeDurationCalculator() {
  return (
    <>
      <Seo title="Time Duration Calculator | Hours & Minutes Between Times" description="Calculate the exact duration, hours, and minutes elapsed between two times." canonicalPath="/time-duration-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Time Duration Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Calculate the exact time difference between two clocks.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/time-duration-calculator">
        <TimeDurationCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/time-duration-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
