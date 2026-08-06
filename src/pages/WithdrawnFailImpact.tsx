import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WithdrawnFailImpactToolCore from '../components/WithdrawnFailImpactToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [wnConverter, wnFailGuide] = PAGE_KEYWORD_LINKS['/withdrawn-fail-impact-calculator'];

const faqs = [
  {
    question: 'What is WN at Monash?',
    answer:
      'WN generally means withdrawn fail. On the Monash 4.0 GPA scale, WN has GPA value 0.0, which is lower than a standard fail (N = 0.3).',
  },
  {
    question: 'Does WN affect Monash GPA?',
    answer:
      'Yes. If WN appears as a GPA-counted unit on your record, it contributes 0.0 grade points for that unit credit value.',
  },
  {
    question: 'Does WN affect WAM?',
    answer:
      'WAM treatment can depend on result codes and official exclusions. This calculator shows an excluded/no-change scenario and a worst-case counted-as-zero scenario so you can plan conservatively.',
  },
  {
    question: 'How is WN different from a standard fail?',
    answer:
      'A standard fail (N/NH) uses GPA value 0.3. WN uses 0.0, so it can lower GPA more for the same credit-point value.',
  },
  {
    question: 'Should I use this for official decisions?',
    answer:
      'Use it for planning only. Confirm official WAM/GPA treatment in WES, your academic record, or with your faculty.',
  },
];

export default function WithdrawnFailImpact() {
  return (
    <>
      <Seo
        title="Monash Withdrawn Fail (WN) Calculator — GPA 0.0 & WAM Impact (2026)"
        description="Model Monash withdrawn fail (WN) impact: see how GPA 0.0 affects your average and compare WAM excluded vs worst-case zero-counted scenarios."
        canonicalPath="/withdrawn-fail-impact-calculator"
        ogImage="/article-images/featured-monash-withdrawn-fail-wam.webp"
        ogImageAlt="Monash student checking withdrawn fail impact on cumulative WAM planning"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-red-700 to-red-950 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Withdrawn Fail Impact Calculator</h1>
        <p className="text-red-100 max-w-xl mx-auto">
          Model how WN affects Monash GPA, and compare possible WAM treatment without assuming one policy outcome.
        </p>
        <p className="text-red-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Convert special grades with the{' '}
          <a href={absoluteUrl(wnConverter.path)} className={HERO_INLINE_LINK_CLASS}>{wnConverter.keyword}</a>
          . Read fail recovery context:{' '}
          <a href={absoluteUrl(wnFailGuide.path)} className={HERO_INLINE_LINK_CLASS}>{wnFailGuide.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/withdrawn-fail-impact-calculator">
        <WithdrawnFailImpactToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/withdrawn-fail-impact-calculator" />
      <RelatedCalculators
        hrefs={[
          '/failed-unit-wam-calculator',
          '/supp-repeat-wam-calculator',
          '/monash-grade-converter',
          '/monash-cgpa-calculator',
        ]}
      />
      <PageFaq items={faqs} />
    </>
  );
}
