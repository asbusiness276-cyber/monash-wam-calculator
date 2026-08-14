import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import NumberToWordsToolCore from '../components/NumberToWordsToolCore';

const faqs = [
  {
    question: 'Why do I need to convert numbers to words?',
    answer: 'In formal essay writing, numbers under 100 are often required to be spelled out. Additionally, it is required for writing formal cheques or legal documents to prevent fraudulent alteration.',
  }
];

export default function NumberToWordsConverter() {
  return (
    <>
      <Seo
        title="Number to Words Converter | Write Numbers in English"
        description="Instantly convert any number into its written English word equivalent. Perfect for essays, cheques, and formal writing."
        canonicalPath="/number-to-words-converter"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Number to Words Converter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Not sure how to spell out a massive number? Type the digits below to instantly translate them into written English.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/number-to-words-converter">
        <NumberToWordsToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/number-to-words-converter" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
