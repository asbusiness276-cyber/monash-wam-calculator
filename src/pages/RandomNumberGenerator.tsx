import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import RandomNumberToolCore from '../components/RandomNumberToolCore';

const faqs = [
  {
    question: 'Are these numbers truly random?',
    answer: 'The generator uses your browser\'s built-in Math.random() cryptographic engine, which produces highly distributed pseudo-random numbers suitable for general statistical use, games, and draws.',
  },
  {
    question: 'Can I generate numbers without repeats?',
    answer: 'Yes! Simply uncheck the "Allow Duplicate Numbers" box, and the tool will ensure that every single number generated in the batch is completely unique.',
  }
];

export default function RandomNumberGenerator() {
  return (
    <>
      <Seo
        title="Random Number Generator | Free Number Picker"
        description="Generate random numbers instantly. Set your min/max range, choose how many numbers you need, and optionally prevent duplicate results."
        canonicalPath="/random-number-generator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Random Number Generator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Need a random choice? Generate up to 1,000 random numbers at once, with or without duplicates.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/random-number-generator">
        <RandomNumberToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/random-number-generator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
