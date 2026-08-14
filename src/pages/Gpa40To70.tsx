import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaScaleConverterToolCore from '../components/GpaScaleConverterToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [s47Wam, s477] = PAGE_KEYWORD_LINKS['/4-0-to-7-0-gpa-calculator'];

const faqs = [
  {
    question: 'How do I convert 4.0 GPA to 7.0?',
    answer:
      'Uni maps grade bands across scales: HD 4.0 = 7.0, D 3.0 = 6.0, C 2.0 = 5.0, P 1.0 = 4.0, Fail = 0.',
  },
  {
    question: 'Is 3.5 on 4.0 equal to 6.5 on 7.0?',
    answer:
      'Band mapping uses Uni letter grades. Mid-band GPAs map to the nearest grade band — enter your value for the exact conversion.',
  },
  {
    question: 'When do I need 7.0 GPA?',
    answer:
      'Australian HDR programs, some scholarships, and comparison tables use the 7-point scale.',
  },
  {
    question: 'Uni official scale?',
    answer: 'Uni transcripts commonly show 4.0 GPA. The 7.0 scale is widely used for Australian comparisons.',
  },
  {
    question: 'Reverse conversion?',
    answer: 'Use the 7.0 to 4.0 GPA calculator for the opposite direction.',
  },
  {
    question: 'WAM involved?',
    answer: 'For overall WAM conversion, use the WAM to GPA calculators instead of scale-only tools.',
  },
];

export default function Gpa40To70() {
  return (
    <>
      <Seo
        title="4.0 to 7.0 GPA Calculator - Australian Uni Converter (2026)"
        description="Free 4.0 to 7.0 GPA calculator using Uni grade bands. Convert US-style GPA to the Australian 7-point scale."
        canonicalPath="/4-0-to-7-0-gpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-rose-700 to-rose-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">4.0 to 7.0 GPA Calculator</h1>
        <p className="text-rose-100 max-w-xl mx-auto">
          Convert GPA from the 4.0 scale to the Australian 7.0 scale using official Uni grade band mapping.
        </p>
        <p className="text-rose-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Overall WAM? See{' '}
          <a href={absoluteUrl(s47Wam.path)} className={HERO_INLINE_LINK_CLASS}>{s47Wam.keyword}</a>
          . Reverse:{' '}
          <a href={absoluteUrl(s477.path)} className={HERO_INLINE_LINK_CLASS}>{s477.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/4-0-to-7-0-gpa-calculator">
        <GpaScaleConverterToolCore direction="4-to-7" screenshotId="4-0-to-7-0-gpa" />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/4-0-to-7-0-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
