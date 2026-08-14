import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import StudyTimeToolCore from '../components/StudyTimeToolCore';

const faqs = [
  {
    question: 'How many hours should a university student study?',
    answer: 'The general rule of thumb is that for every 1 credit point, you should expect about 2 hours of total workload per week. A standard 24 credit point load requires roughly 48 hours of total commitment per week (including classes and self-study).',
  },
  {
    question: 'How do I calculate study time for a 6 credit point unit?',
    answer: 'A standard 6 credit point unit usually requires 12 hours of total workload per week. If you have 3 hours of classes, you should aim for 9 hours of independent study for that unit.',
  },
  {
    question: 'How do I balance part-time work and full-time study?',
    answer: 'Full-time study (24 credit points) is equivalent to a full-time job (48 hours/week). If you work more than 15-20 hours a week, it is highly recommended to underload (take 3 units instead of 4) to avoid burnout and maintain good grades.',
  },
];

export default function StudyTimeCalculator() {
  return (
    <>
      <Seo
        title="Study Time Calculator | University Workload Estimator"
        description="Calculate your recommended weekly study hours based on your university credit points. Plan your schedule and balance your study load effectively."
        canonicalPath="/study-time-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Study Time Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Find out exactly how many hours you should dedicate to your studies each week based on your course load.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/study-time-calculator">
        <StudyTimeToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/study-time-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
