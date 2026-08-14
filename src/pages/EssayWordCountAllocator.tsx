import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import EssayWordCountToolCore from '../components/EssayWordCountToolCore';

const faqs = [
  {
    question: 'How many words should my introduction be?',
    answer: 'A standard academic essay uses about 10% of the total word count for the introduction. For a 2000-word essay, aim for roughly 200 words.',
  },
  {
    question: 'How long should the conclusion be?',
    answer: 'Like the introduction, the conclusion typically takes up 10% of the essay. It should succinctly summarize your arguments without introducing new information.',
  },
  {
    question: 'Does the reference list count towards the word count?',
    answer: 'Usually, in-text citations are included in the word count, but the final reference list or bibliography is excluded. Always check your unit guide for specific rules.',
  }
];

export default function EssayWordCountAllocator() {
  return (
    <>
      <Seo
        title="Essay Word Count Allocator | Structure Your Writing"
        description="Plan your academic essay structure. Calculate the exact word count needed for your introduction, body paragraphs, and conclusion."
        canonicalPath="/essay-word-count-allocator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Essay Word Count Allocator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Stop rambling. Structure your assignments perfectly by allocating the right amount of words to each section.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/essay-word-count-allocator">
        <EssayWordCountToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/essay-word-count-allocator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
