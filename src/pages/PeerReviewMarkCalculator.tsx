import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import PeerReviewMarkToolCore from '../components/PeerReviewMarkToolCore';

const faqs = [
  {
    question: 'How do peer evaluation multipliers work?',
    answer: 'Universities (like Monash using SPARKPLUS) require team members to rate each other. An algorithm creates a "factor" based on these ratings. A factor of 1.0 means you did your fair share. A factor of 0.5 means you did half the expected work.',
  },
  {
    question: 'Can I get over 100%?',
    answer: 'No. While a peer factor of 1.2 applied to a group mark of 90% theoretically equals 108%, universities hard-cap all individual grades at 100%.',
  },
  {
    question: 'What happens if my factor is below 1?',
    answer: 'Your individual mark will be lower than the group mark. For example, if the group scores 80%, but your factor is 0.8, your final grade will be 64%.',
  }
];

export default function PeerReviewMarkCalculator() {
  return (
    <>
      <Seo
        title="Group Assignment Peer Mark Calculator | SPARKPLUS Evaluator"
        description="Calculate your individual group assignment mark based on peer review multipliers and evaluation factors."
        canonicalPath="/peer-review-mark-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Group Peer Mark Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Did someone carry the team? Did someone do nothing? Calculate individual grades based on peer evaluation multipliers.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/peer-review-mark-calculator">
        <PeerReviewMarkToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/peer-review-mark-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
