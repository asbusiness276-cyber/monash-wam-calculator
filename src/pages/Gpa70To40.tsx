import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaScaleConverterToolCore from '../components/GpaScaleConverterToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [s74Wam, s744] = PAGE_KEYWORD_LINKS['/7-0-to-4-0-gpa-calculator'];

const faqs = [
  {
    question: 'How do I convert 7.0 GPA to 4.0?',
    answer:
      'Australian 7-point GPA maps to Monash 4.0 bands: 7 = 4.0, 6 = 3.0, 5 = 2.0, 4 = 1.0, 0 = 0.0 for planning.',
  },
  {
    question: 'What is 6.0 GPA on 4.0 scale?',
    answer: '6.0 on 7.0 is Distinction — equivalent to 3.0 on the Monash 4.0 scale.',
  },
  {
    question: 'US applications?',
    answer:
      'Many US forms request 4.0 GPA. Convert from 7.0 using this tool, then verify with official Monash records.',
  },
  {
    question: 'Exact or approximate?',
    answer: 'Conversion follows Monash grade bands. Mid-band values map to the nearest band.',
  },
  {
    question: 'Opposite direction?',
    answer: 'Use the 4.0 to 7.0 GPA calculator.',
  },
  {
    question: 'Need WAM?',
    answer: 'Use GPA to WAM or 7.0 GPA to WAM calculators for percentage-style ranges.',
  },
];

export default function Gpa70To40() {
  return (
    <>
      <Seo
        title="7.0 to 4.0 GPA Calculator - Monash Converter (2026)"
        description="Free 7.0 to 4.0 GPA calculator for Monash and Australian students. Convert 7-point GPA to the US-style 4.0 scale."
        canonicalPath="/7-0-to-4-0-gpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-orange-700 to-orange-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">7.0 to 4.0 GPA Calculator</h1>
        <p className="text-orange-100 max-w-xl mx-auto">
          Convert Australian 7-point GPA to the 4.0 scale — the format used on Monash transcripts and many international forms.
        </p>
        <p className="text-orange-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          WAM conversion:{' '}
          <a href={absoluteUrl(s74Wam.path)} className={HERO_INLINE_LINK_CLASS}>{s74Wam.keyword}</a>
          . 4.0 to 7.0:{' '}
          <a href={absoluteUrl(s744.path)} className={HERO_INLINE_LINK_CLASS}>{s744.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/7-0-to-4-0-gpa-calculator">
        <GpaScaleConverterToolCore direction="7-to-4" screenshotId="7-0-to-4-0-gpa" />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/7-0-to-4-0-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
