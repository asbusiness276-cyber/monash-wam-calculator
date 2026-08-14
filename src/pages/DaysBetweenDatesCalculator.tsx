import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import DaysBetweenDatesToolCore from '../components/DaysBetweenDatesToolCore';

const faqs = [
  {
    question: 'Does this calculator include the end date?',
    answer: 'The calculator counts the mathematical difference between midnight on the first day and midnight on the second day. It does not count the end date as a full day.',
  },
  {
    question: 'How are months calculated?',
    answer: 'Since months vary in length (28 to 31 days), the month conversion uses the standard average of 30.44 days per month for estimation purposes.',
  }
];

export default function DaysBetweenDatesCalculator() {
  return (
    <>
      <Seo
        title="Days Between Dates Calculator | Time Duration Counter"
        description="Calculate the exact number of days, weeks, and months between any two dates. Perfect for assignment deadlines and exam countdowns."
        canonicalPath="/days-between-dates-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Days Between Dates</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Need to know exactly how many days you have left to study? Find the exact time duration between any two dates.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/days-between-dates-calculator">
        <DaysBetweenDatesToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/days-between-dates-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
