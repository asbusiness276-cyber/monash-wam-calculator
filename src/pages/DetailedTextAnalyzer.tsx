import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import DetailedTextAnalyzerToolCore from '../components/DetailedTextAnalyzerToolCore';

const faqs = [
  {
    question: 'How is speaking time calculated?',
    answer: 'The average adult speaks at a pace of roughly 130 to 150 words per minute during a presentation. This tool uses an average of 140 WPM to accurately estimate how long your speech will take.',
  },
  {
    question: 'How is reading time calculated?',
    answer: 'Reading silently in your head is much faster than speaking out loud. The average adult reads at about 200 to 250 words per minute.',
  },
  {
    question: 'Does character count include spaces?',
    answer: 'The primary character count block includes all characters (including spaces). This is the standard measurement used in most character limit systems (like Twitter or application forms).',
  }
];

export default function DetailedTextAnalyzer() {
  return (
    <>
      <Seo
        title="Detailed Text Analyzer & Speech Time Calculator"
        description="Count words, characters, sentences, and paragraphs. Accurately calculate presentation speaking time based on standard words-per-minute."
        canonicalPath="/detailed-text-analyzer"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Text & Speech Analyzer</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Writing an essay or preparing a presentation? Get instant stats on your text including accurate speaking times.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/detailed-text-analyzer">
        <DetailedTextAnalyzerToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/detailed-text-analyzer" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
