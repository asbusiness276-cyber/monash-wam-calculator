import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaToPercentageToolCore from '../components/GpaToPercentageToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpPct, gpWam] = PAGE_KEYWORD_LINKS['/gpa-to-percentage-calculator'];

const faqs = [
  {
    question: 'How do I convert GPA to percentage?',
    answer:
      'Enter GPA on 4.0 or 7.0 scale. Monash maps each GPA band to a percentage range — e.g. 3.0 ≈ 70–79%.',
  },
  {
    question: 'What percentage is GPA 3.5?',
    answer: '3.5 on 4.0 is High Distinction territory — roughly 80–100% at Monash.',
  },
  {
    question: 'Is GPA to percentage exact?',
    answer:
      'You get a band range, not one number. Official marks preserve finer differences inside each grade.',
  },
  {
    question: 'Reverse: percentage to GPA?',
    answer: 'Use the percentage to GPA calculator for single-mark or assessment conversions.',
  },
  {
    question: 'WAM vs percentage?',
    answer:
      'At Monash, WAM is a percentage-style weighted average. This tool maps GPA bands to equivalent % ranges.',
  },
  {
    question: 'Which scale should I use?',
    answer: 'Match the scale on your transcript or application form — 4.0 for Monash official GPA, 7.0 for Australian HDR.',
  },
];

export default function GpaToPercentage() {
  return (
    <>
      <Seo
        title="GPA to Percentage Calculator - Monash 4.0 & 7.0 (2026)"
        description="Free GPA to percentage calculator for Monash students. Convert 4.0 or 7.0 GPA to approximate percentage and WAM bands."
        canonicalPath="/gpa-to-percentage-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">GPA to Percentage Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Convert GPA on the 4.0 or 7.0 scale to approximate Monash percentage / WAM ranges instantly.
        </p>
        <p className="text-indigo-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Reverse direction:{' '}
          <a href={absoluteUrl(gpPct.path)} className={HERO_INLINE_LINK_CLASS}>{gpPct.keyword}</a>
          . GPA to WAM wording:{' '}
          <a href={absoluteUrl(gpWam.path)} className={HERO_INLINE_LINK_CLASS}>{gpWam.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/gpa-to-percentage-calculator">
        <GpaToPercentageToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/gpa-to-percentage-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
