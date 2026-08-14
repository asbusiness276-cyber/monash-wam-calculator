import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import AgeCalculatorToolCore from '../components/AgeCalculatorToolCore';

const faqs = [
  {
    question: 'How is exact age calculated?',
    answer: 'The exact age calculates the difference in years, then handles the remaining months, and finally the remaining days based on the exact length of the specific months involved (accounting for leap years).',
  }
];

export default function AgeCalculator() {
  return (
    <>
      <Seo
        title="Age Calculator | Find Your Exact Age"
        description="Calculate your exact age in years, months, and days. Find out exactly how many days you have been alive."
        canonicalPath="/age-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Age Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Enter your date of birth to find out exactly how old you are down to the day.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/age-calculator">
        <AgeCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/age-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
