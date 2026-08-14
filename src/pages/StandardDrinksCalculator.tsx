import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import StandardDrinksToolCore from '../components/StandardDrinksToolCore';

const faqs = [
  {
    question: 'What is an Australian Standard Drink?',
    answer: 'In Australia, one standard drink contains exactly 10 grams of pure alcohol (ethanol). This helps you keep track of how much you are drinking regardless of glass size or alcohol type.',
  },
  {
    question: 'Is one glass of wine one standard drink?',
    answer: 'Usually no! A typical restaurant pour of wine (150mL) at 13% ABV is about 1.5 standard drinks. A large pour can be nearly 2 standard drinks in a single glass.',
  },
  {
    question: 'How is it calculated mathematically?',
    answer: 'The formula is: Volume (in Liters) × ABV (%) × 0.789 = Standard Drinks. The 0.789 represents the specific gravity of ethyl alcohol.',
  }
];

export default function StandardDrinksCalculator() {
  return (
    <>
      <Seo
        title="Standard Drinks Calculator | Alcohol Unit Converter"
        description="Calculate exactly how many Australian standard drinks are in your beer, wine, or spirits based on volume and ABV."
        canonicalPath="/standard-drinks-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Standard Drinks Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Ensure you are drinking safely. Calculate exactly how many standard drinks are in your beverage.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/standard-drinks-calculator">
        <StandardDrinksToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/standard-drinks-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
