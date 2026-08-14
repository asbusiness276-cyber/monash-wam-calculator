import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WordCounterToolCore from '../components/WordCounterToolCore';

export default function WordCounterTool() {
  return (
    <>
      <Seo title="Word Counter Tool | Word & Character Count" description="Free online word counter. Instantly count words, characters, and sentences in your text." canonicalPath="/word-counter-tool" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Word Counter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Instantly check the length of your essays and articles.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/word-counter-tool">
        <WordCounterToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/word-counter-tool" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
