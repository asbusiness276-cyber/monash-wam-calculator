import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import TextCaseConverterToolCore from '../components/TextCaseConverterToolCore';

const faqs = [
  {
    question: 'What is Title Case?',
    answer: 'Title Case means the first letter of almost every word is capitalized. It is standard for essay titles, headings, and book covers.',
  },
  {
    question: 'What is Sentence case?',
    answer: 'Sentence case means only the first letter of the first word in a sentence is capitalized, just like a standard English sentence.',
  }
];

export default function TextCaseConverter() {
  return (
    <>
      <Seo
        title="Text Case Converter | UPPERCASE and Title Case Generator"
        description="Instantly convert text to uppercase, lowercase, Title Case, or Sentence case. A simple utility for essay formatting and titles."
        canonicalPath="/text-case-converter"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Text Case Converter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Accidentally left Caps Lock on? Instantly fix capitalization and formatting without retyping everything.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/text-case-converter">
        <TextCaseConverterToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/text-case-converter" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
