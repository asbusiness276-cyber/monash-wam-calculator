import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashHonoursToolCore from '../components/MonashHonoursToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [honHome, honArticle] = PAGE_KEYWORD_LINKS['/monash-honours-calculator'];

const faqs = [
  {
    question: 'What WAM do I need for First Class Honours at Monash?',
    answer:
      'Monash honours course grade H1 (First Class Honours) requires WAM 80 or above on the official honours grading schema.',
  },
  {
    question: 'Is H2A 70 or 75 at Monash?',
    answer:
      'At Monash, H2A (Second Class Honours Division A) is WAM 70 to below 80 — not 75 like some generic Australian calculators show.',
  },
  {
    question: 'Is this the same as honours entry requirements?',
    answer:
      'No. This shows the official honours course grade from WAM. Faculty entry cut-offs for honours admission can differ and change each year.',
  },
  {
    question: 'How is honours WAM calculated?',
    answer:
      'For many embedded honours degrees, Monash uses standard WAM with year-1 units weighted at 0.5. One-year honours may weight thesis units differently — check your handbook.',
  },
  {
    question: 'What if my WAM is 79.5?',
    answer:
      '79.5% is H2A (below 80). H1 starts at exactly 80.00 on the official schema.',
  },
  {
    question: 'Where can I read more about honours planning?',
    answer:
      'See our honours WAM requirements guide and use the Monash WAM calculator with transcript marks for accurate WAM.',
  },
];

export default function MonashHonours() {
  return (
    <>
      <Seo
        title="Monash Honours Calculator — H1, H2A, H2B Classification (2026)"
        description="Free Monash honours classification calculator: enter your WAM to see H1, H2A, H2B or pass band using official Monash thresholds (H2A from 70)."
        canonicalPath="/monash-honours-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Honours Calculator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          See your Monash honours classification (H1, H2A, H2B) from WAM using official grade thresholds.
        </p>
        <p className="text-blue-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Calculate WAM first with the{' '}
          <a href={absoluteUrl(honHome.path)} className={HERO_INLINE_LINK_CLASS}>{honHome.keyword}</a>
          . Read our{' '}
          <a href={absoluteUrl(honArticle.path)} className={HERO_INLINE_LINK_CLASS}>{honArticle.keyword}</a>{' '}
          guide for faculty entry planning.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/monash-honours-calculator">
        <MonashHonoursToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/monash-honours-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
