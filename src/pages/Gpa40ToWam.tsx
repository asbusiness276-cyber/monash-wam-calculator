import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaToWamToolCore from '../components/GpaToWamToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [g40Wam, g40Main] = PAGE_KEYWORD_LINKS['/4-0-gpa-to-wam-calculator'];

const faqs = [
  {
    question: 'How do I convert 4.0 GPA to WAM?',
    answer:
      'Enter your GPA on the 4.0 scale. Monash maps each GPA band to a WAM percentage range — e.g. 3.0 ≈ 70–79% (Distinction).',
  },
  {
    question: 'What WAM is GPA 3.5?',
    answer: '3.5 on 4.0 sits in the High Distinction band — approximately WAM 80–100 at Monash.',
  },
  {
    question: 'Why is the result a range?',
    answer: 'Grade bands span several percentage points. A range is more accurate than a single false-precision WAM.',
  },
  {
    question: 'Is this for Monash only?',
    answer:
      'Bands follow Monash coursework standards. Other universities may use different mappings — note your source institution.',
  },
  {
    question: 'What about 7.0 GPA?',
    answer: 'Use the dedicated 7.0 GPA to WAM calculator or the combined GPA to WAM tool with scale toggle.',
  },
  {
    question: 'How do I get exact WAM?',
    answer: 'Enter real unit marks in the Monash WAM calculator once you have transcript percentages.',
  },
];

export default function Gpa40ToWam() {
  return (
    <>
      <Seo
        title="4.0 GPA to WAM Calculator - Monash Converter (2026)"
        description="Free 4.0 GPA to WAM calculator for Monash planning. Convert US-style GPA to approximate Monash weighted average mark ranges."
        canonicalPath="/4-0-gpa-to-wam-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">4.0 GPA to WAM Calculator</h1>
        <p className="text-teal-100 max-w-xl mx-auto">
          Convert 4.0 GPA to an approximate Monash WAM range — ideal for transfer planning, scholarships, and comparing US-style grades.
        </p>
        <p className="text-teal-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Track real WAM from units:{' '}
          <a href={absoluteUrl(g40Wam.path)} className={HERO_INLINE_LINK_CLASS}>{g40Wam.keyword}</a>
          . Reverse:{' '}
          <a href={absoluteUrl(g40Main.path)} className={HERO_INLINE_LINK_CLASS}>{g40Main.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/4-0-gpa-to-wam-calculator">
        <GpaToWamToolCore fixedScale={4} screenshotId="4-0-gpa-to-wam" />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/4-0-gpa-to-wam-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
