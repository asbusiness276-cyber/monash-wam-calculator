import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import HexDecimalToolCore from '../components/HexDecimalToolCore';

const faqs = [
  {
    question: 'What is Hexadecimal?',
    answer: 'Hexadecimal (Base 16) is a number system that uses 16 symbols. It uses the standard numbers 0-9, and the letters A-F to represent the values 10 to 15. It is heavily used in computer science for memory addresses and color codes.',
  },
  {
    question: 'What is Decimal?',
    answer: 'Decimal (Base 10) is the standard human counting system we use every day, utilizing the 10 digits from 0 to 9.',
  }
];

export default function HexToDecimalConverter() {
  return (
    <>
      <Seo
        title="Hex to Decimal Converter | Base 16 Calculator"
        description="Instantly convert Hexadecimal (Base-16) values to Decimal (Base-10) numbers, and vice versa. Free tool for CS students."
        canonicalPath="/hex-to-decimal-converter"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Hex & Decimal Converter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Seamlessly translate computer Hexadecimal strings (Base-16) into standard human Decimal numbers (Base-10).
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/hex-to-decimal-converter">
        <HexDecimalToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/hex-to-decimal-converter" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
