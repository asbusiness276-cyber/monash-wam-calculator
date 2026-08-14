import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import BinaryTextConverterToolCore from '../components/BinaryTextConverterToolCore';

const faqs = [
  {
    question: 'What is Binary Code?',
    answer: 'Binary code represents text, computer processor instructions, or any other data using a two-symbol system. The two-symbol system used is often "0" and "1" from the binary number system.',
  },
  {
    question: 'Why does each letter need 8 numbers (bits)?',
    answer: 'In computer science, 8 bits make up 1 Byte. Standard ASCII text encoding uses 8-bit sequences (one Byte) to represent each unique letter, number, and punctuation mark.',
  }
];

export default function BinaryTextConverter() {
  return (
    <>
      <Seo
        title="Binary to Text Converter | Binary Translator"
        description="Encode plain text into binary code or decode binary back to English text. Free online binary translator tool."
        canonicalPath="/binary-to-text-converter"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Binary Translator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Instantly translate english text into binary code (0s and 1s), or decode binary strings back to readable text.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/binary-to-text-converter">
        <BinaryTextConverterToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/binary-to-text-converter" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
