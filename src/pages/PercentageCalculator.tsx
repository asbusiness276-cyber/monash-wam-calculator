import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import PercentageCalculatorToolCore from '../components/PercentageCalculatorToolCore';

const faqs = [
  {
    question: 'How do I calculate what percentage one number is of another?',
    answer: 'Use the second row of the calculator. Mathematically, you divide the first number by the second number, and then multiply by 100.',
  },
  {
    question: 'How is percentage difference calculated?',
    answer: 'The formula for percentage increase or decrease is: ((New Value - Old Value) / Old Value) × 100.',
  }
];

export default function PercentageCalculator() {
  return (
    <>
      <Seo
        title="Percentage Calculator | Find % Increase & Decrease"
        description="Easily solve percentage problems. Calculate percentage increase, decrease, or find out what percent one number is of another."
        canonicalPath="/percentage-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Percentage Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Instantly solve the most common math problems: finding a percentage, and calculating percentage growth.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/percentage-calculator">
        <PercentageCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/percentage-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
