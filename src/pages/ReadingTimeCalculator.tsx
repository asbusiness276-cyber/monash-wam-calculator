import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import ReadingTimeToolCore from '../components/ReadingTimeToolCore';

const faqs = [
  {
    question: 'What is a normal reading speed?',
    answer: 'The average adult reads at about 200 to 250 words per minute (WPM). However, dense academic texts or textbooks are usually read slower, closer to 130-150 WPM.',
  },
  {
    question: 'How many words are on a page?',
    answer: 'A standard double-spaced academic page (Times New Roman, 12pt) contains roughly 250 to 300 words.',
  },
  {
    question: 'How long does it take to read 10,000 words?',
    answer: 'At an average speed of 200 WPM, it will take about 50 minutes to read 10,000 words.',
  }
];

export default function ReadingTimeCalculator() {
  return (
    <>
      <Seo
        title="Reading Time Calculator | Words Per Minute Estimator"
        description="Estimate how long it will take to read a book, essay, or textbook chapter based on word count and reading speed."
        canonicalPath="/reading-time-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Reading Time Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Got a heavy reading load? Calculate exactly how long it will take to finish your readings.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/reading-time-calculator">
        <ReadingTimeToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/reading-time-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
