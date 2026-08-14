import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import PassMarkToolCore from '../components/PassMarkToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [pmFinal, pmUnit] = PAGE_KEYWORD_LINKS['/pass-mark-calculator'];

const faqs = [
  {
    question: 'What mark do I need to pass a Uni unit?',
    answer:
      'Most standard units require 50% overall for a Pass (P). This calculator finds the minimum final exam mark needed when coursework is already complete.',
  },
  {
    question: 'How is the pass mark calculated?',
    answer:
      'Required exam % = (50 − coursework mark × coursework weight) ÷ exam weight. Weights must sum to 100% for standard units.',
  },
  {
    question: 'What if I need above 100% on the exam?',
    answer:
      'Your coursework is too low to reach 50% overall with the remaining exam weight. Speak with your unit coordinator about options.',
  },
  {
    question: 'Is this different from the final grade calculator?',
    answer:
      'Yes. This tool targets pass (50%) only. Use the final grade calculator for HD, D, or credit targets.',
  },
  {
    question: 'Do hurdle requirements apply?',
    answer:
      'Some units require minimum exam or assessment hurdles regardless of overall mark. Check your unit guide — this tool models overall percentage only.',
  },
];

export default function PassMark() {
  return (
    <>
      <Seo
        title="Pass Mark Calculator — Exam Score Needed to Pass (Uni 2026)"
        description="Free pass mark calculator for Uni students: find the minimum final exam percentage needed to reach 50% overall and pass your unit."
        canonicalPath="/pass-mark-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-amber-600 to-amber-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Pass Mark Calculator</h1>
        <p className="text-amber-100 max-w-xl mx-auto">
          What final exam mark do you need to pass at 50%? Enter coursework marks and weights for an instant answer.
        </p>
        <p className="text-amber-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Aiming higher than pass? Use the{' '}
          <a href={absoluteUrl(pmFinal.path)} className={HERO_INLINE_LINK_CLASS}>{pmFinal.keyword}</a>
          . Weighted unit mark:{' '}
          <a href={absoluteUrl(pmUnit.path)} className={HERO_INLINE_LINK_CLASS}>{pmUnit.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/pass-mark-calculator">
        <PassMarkToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/pass-mark-calculator" />
      <RelatedCalculators
        hrefs={['/final-grade-calculator', '/unit-mark-calculator', '/unit-target-calculator', '/mark-to-grade-calculator']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
