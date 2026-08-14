import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import TypingTimeToolCore from '../components/TypingTimeToolCore';

const faqs = [
  {
    question: 'What is a good typing speed?',
    answer: 'An average typing speed is around 40 words per minute (WPM). A fast typing speed is 60+ WPM.',
  },
  {
    question: 'Why does an essay take longer than the typing time?',
    answer: 'Typing time is only the physical act of hitting the keys. Writing an academic essay requires reading, researching, outlining, thinking, and proofreading, which usually takes 10x longer than raw typing time.',
  }
];

export default function TypingTimeEstimator() {
  return (
    <>
      <Seo
        title="Typing Time Estimator | Words Per Minute Calculator"
        description="Find out exactly how long it takes to type out an essay or assignment based on your Words Per Minute (WPM) speed."
        canonicalPath="/typing-time-estimator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Typing Time Estimator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Calculate the raw physical typing time required to finish writing your assignment.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/typing-time-estimator">
        <TypingTimeToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/typing-time-estimator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
