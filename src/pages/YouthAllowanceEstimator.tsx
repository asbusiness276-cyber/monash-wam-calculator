import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import YouthAllowanceToolCore from '../components/YouthAllowanceToolCore';

const faqs = [
  {
    question: 'How do I prove I am independent?',
    answer: 'Centrelink generally considers you independent if you are 22 or older, married, have a child, or have supported yourself through full-time work (e.g. working 30 hours a week for 18 months).',
  },
  {
    question: 'Will my part-time job affect my Youth Allowance?',
    answer: 'Yes. You can earn up to $508 per fortnight before your payment is affected. Every dollar earned above this reduces your Youth Allowance by 50 cents or 60 cents, depending on your earnings.',
  },
  {
    question: 'Does my parents income matter?',
    answer: 'If you are classified as dependent (under 22 and not meeting independence criteria), your parents income and assets will be tested. If they earn over a certain threshold, your payment rate will drop, sometimes to zero.',
  }
];

export default function YouthAllowanceEstimator() {
  return (
    <>
      <Seo
        title="Youth Allowance Estimator | Centrelink Payment Calculator"
        description="Estimate your maximum Centrelink Youth Allowance or Austudy fortnightly payment based on your age and living situation."
        canonicalPath="/youth-allowance-estimator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Youth Allowance Estimator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Find out the maximum base rate of student payments you might be eligible for from Centrelink.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/youth-allowance-estimator">
        <YouthAllowanceToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/youth-allowance-estimator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
