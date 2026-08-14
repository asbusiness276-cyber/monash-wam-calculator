import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import RomanNumeralToolCore from '../components/RomanNumeralToolCore';

export default function RomanNumeralConverter() {
  return (
    <>
      <Seo title="Roman Numeral Converter | Numbers to Numerals" description="Easily convert standard numbers to Roman Numerals and vice versa." canonicalPath="/roman-numeral-converter" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Roman Numeral Converter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Instantly translate standard digits to ancient Roman numerals.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/roman-numeral-converter">
        <RomanNumeralToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/roman-numeral-converter" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
