import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import SharehouseRentToolCore from '../components/SharehouseRentToolCore';

const faqs = [
  {
    question: 'How is the fair rent mathematically calculated?',
    answer: 'This tool uses a standard fairness model: 40% of the total rent is split equally among all housemates (for common areas like the kitchen and living room), and the remaining 60% is split proportionally based on the square meterage of each individual bedroom, plus an added premium for ensuites.',
  },
  {
    question: 'How much extra should an ensuite cost?',
    answer: 'Typically, an ensuite (private bathroom) in a sharehouse is worth a $20 to $50 per week premium, depending on the overall quality of the house and location.',
  },
  {
    question: 'Is room size really that important?',
    answer: 'Yes! A master bedroom is often 30-40% larger than a standard bedroom. If everyone pays the exact same rent, the person with the smallest room is subsidizing the master bedroom.',
  }
];

export default function SharehouseRentSplitter() {
  return (
    <>
      <Seo
        title="Sharehouse Rent Splitter | Fair Room Calculator"
        description="Calculate a mathematically fair rent split for your sharehouse based on bedroom sizes and ensuites to avoid arguments with your roommates."
        canonicalPath="/sharehouse-rent-splitter"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Sharehouse Fair Rent Splitter</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Don't argue with your roommates. Let math decide exactly how much everyone should pay based on their room size.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/sharehouse-rent-splitter">
        <SharehouseRentToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/sharehouse-rent-splitter" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
