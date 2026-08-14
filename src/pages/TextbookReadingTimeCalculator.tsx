import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import TextbookReadingToolCore from '../components/TextbookReadingToolCore';

const faqs = [
  {
    question: 'How long does it take to read a textbook page?',
    answer: 'Unlike light fiction which takes ~1.5 minutes per page, a dense university textbook usually takes 3 to 5 minutes per page to read and comprehend properly.',
  },
  {
    question: 'How many pages can I read in an hour?',
    answer: 'At a standard academic reading pace of 3 minutes per page, you can expect to read about 20 pages per hour. If you are taking detailed notes, it may drop to 10-12 pages per hour.',
  }
];

export default function TextbookReadingTimeCalculator() {
  return (
    <>
      <Seo
        title="Textbook Reading Time Calculator | Study Planner"
        description="Calculate how many hours it will take to read your university textbook chapters based on page count and reading speed."
        canonicalPath="/textbook-reading-time-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Textbook Reading Time Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Need to read 50 pages before tomorrow's lecture? Calculate exactly how many hours of study time you need.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/textbook-reading-time-calculator">
        <TextbookReadingToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/textbook-reading-time-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
