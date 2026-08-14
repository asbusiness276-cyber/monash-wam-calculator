import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WordsToPagesToolCore from '../components/WordsToPagesToolCore';

const faqs = [
  {
    question: 'How many pages is 1000 words?',
    answer: 'At standard 12pt Times New Roman font, 1000 words is about 2 pages single-spaced, or 4 pages double-spaced.',
  },
  {
    question: 'How many pages is 2000 words?',
    answer: 'At standard 12pt Times New Roman font, 2000 words is approximately 4 pages single-spaced, or 8 pages double-spaced.',
  },
  {
    question: 'Does the font type change the page count?',
    answer: 'Yes. Fonts like Arial or Calibri are slightly wider than Times New Roman, meaning the same amount of words will take up slightly more space (about 10% more).',
  }
];

export default function WordsToPagesConverter() {
  return (
    <>
      <Seo
        title="Words to Pages Converter | Word Count Calculator"
        description="Convert your word count to physical pages instantly. Works for single and double spacing, Times New Roman, and Arial fonts."
        canonicalPath="/words-to-pages-converter"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Words to Pages Converter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Writing an essay? Find out exactly how many physical pages your word count translates to.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/words-to-pages-converter">
        <WordsToPagesToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/words-to-pages-converter" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
