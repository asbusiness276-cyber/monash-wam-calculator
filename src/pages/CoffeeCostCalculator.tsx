import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import CoffeeCostToolCore from '../components/CoffeeCostToolCore';

const faqs = [
  {
    question: 'How is the investment value calculated?',
    answer: 'The "Reality Check" block uses a standard Future Value of an Annuity formula. It assumes you take your monthly coffee spend and invest it in an index fund returning 5% annually, compounded monthly, over a 10-year period.',
  },
  {
    question: 'Is it actually worth cutting out coffee?',
    answer: 'That depends! While the math shows a massive financial saving, for many students, a daily coffee brings significant mental health or productivity benefits. This tool simply provides the data so you can make an informed choice.',
  }
];

export default function CoffeeCostCalculator() {
  return (
    <>
      <Seo
        title="Daily Coffee Cost Calculator | Budget Reality Check"
        description="Calculate exactly how much your daily coffee or energy drink habit is costing you per year, and see how much it would be worth if you invested it."
        canonicalPath="/daily-coffee-cost-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Daily Coffee Cost Calculator</h1>
        <p className="text-emerald-100 max-w-xl mx-auto">
          Give yourself a budget reality check. See the yearly cost of your caffeine habit.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/daily-coffee-cost-calculator">
        <CoffeeCostToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/daily-coffee-cost-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
