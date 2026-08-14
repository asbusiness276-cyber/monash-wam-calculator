import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import AlphabetizerToolCore from '../components/AlphabetizerToolCore';

const faqs = [
  {
    question: 'How do I use this to sort my references?',
    answer: 'Just copy your entire bibliography or reference list and paste it into the box. Make sure each reference is on its own line. Click "Sort A-Z" and it will instantly organize them according to APA/Harvard alphabetical rules.',
  },
  {
    question: 'Does it remove empty lines?',
    answer: 'Yes! When you click sort, the tool automatically strips out any blank lines and accidental whitespace at the start of your references.',
  }
];

export default function Alphabetizer() {
  return (
    <>
      <Seo
        title="Alphabetizer | Sort Lists A-Z Instantly"
        description="Instantly sort lists, references, and bibliographies alphabetically (A-Z or Z-A). Free online list sorter tool."
        canonicalPath="/alphabetizer"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Alphabetizer & List Sorter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Don't waste time manually sorting your bibliography. Paste your list below to instantly alphabetize it.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/alphabetizer">
        <AlphabetizerToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/alphabetizer" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
