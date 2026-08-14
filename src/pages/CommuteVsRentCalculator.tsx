import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import CommuteVsRentToolCore from '../components/CommuteVsRentToolCore';

const faqs = [
  {
    question: 'Should I live close to campus or far away?',
    answer: 'Living far away often looks cheaper on paper due to lower rent. However, once you add daily public transport or fuel costs, the gap closes. The biggest hidden factor is the time you lose commuting, which could be spent studying or working.',
  },
  {
    question: 'How do I value my time?',
    answer: 'A good benchmark is the minimum wage (e.g. $23.23 in Australia). If you commute 10 hours a week, that is 10 hours you could have theoretically spent doing paid work.',
  },
  {
    question: 'What about fuel and parking?',
    answer: 'If you drive to campus, make sure to set the Daily Transit Cost to include fuel, vehicle wear-and-tear, and exorbitant campus parking fees. Public transport is usually a flat daily cap.',
  }
];

export default function CommuteVsRentCalculator() {
  return (
    <>
      <Seo
        title="Commute vs Rent Calculator | Where to live for Uni"
        description="Compare the true cost of living close to campus vs living further away, factoring in rent, public transport, and the hidden cost of commute time."
        canonicalPath="/commute-vs-rent-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Commute vs Rent Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Is that cheap house in the suburbs really saving you money? Calculate the true financial and time cost of commuting.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/commute-vs-rent-calculator">
        <CommuteVsRentToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/commute-vs-rent-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
