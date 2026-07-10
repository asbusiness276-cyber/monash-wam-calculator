import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaToWamToolCore from '../components/GpaToWamToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [g70Wam, g70Main] = PAGE_KEYWORD_LINKS['/7-0-gpa-to-wam-calculator'];

const faqs = [
  {
    question: 'How do I convert 7.0 GPA to WAM?',
    answer:
      'Enter GPA on the Australian 7-point scale. HD (7) maps to WAM 80–100, D (6) to 70–79, and so on at Monash.',
  },
  {
    question: 'What WAM is 6.0 GPA?',
    answer: '6.0 on the 7.0 scale is Distinction — approximately WAM 70–79% at Monash.',
  },
  {
    question: 'Is 7.0 GPA used at Monash?',
    answer:
      'Monash transcripts often show 4.0 GPA and WAM. The 7.0 scale is common for Australian university comparisons.',
  },
  {
    question: 'Why a WAM range not one number?',
    answer: 'Each GPA band covers a span of percentage marks. Ranges reflect that honestly.',
  },
  {
    question: '4.0 GPA instead?',
    answer: 'Use the 4.0 GPA to WAM calculator or the combined GPA to WAM tool.',
  },
  {
    question: 'Transferring to Monash?',
    answer:
      'Use this for planning, then confirm with official Monash assessment once you receive credit decisions.',
  },
];

export default function Gpa70ToWam() {
  return (
    <>
      <Seo
        title="7.0 GPA to WAM Calculator - Australian Monash Scale (2026)"
        description="Free 7.0 GPA to WAM calculator. Convert Australian 7-point GPA to approximate Monash weighted average mark ranges."
        canonicalPath="/7-0-gpa-to-wam-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">7.0 GPA to WAM Calculator</h1>
        <p className="text-emerald-100 max-w-xl mx-auto">
          Convert 7-point Australian GPA to approximate Monash WAM — HD (7), D (6), CR (5), P (4) bands.
        </p>
        <p className="text-emerald-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Official WAM from units:{' '}
          <a href={absoluteUrl(g70Wam.path)} className={HERO_INLINE_LINK_CLASS}>{g70Wam.keyword}</a>
          . WAM to 7.0 GPA:{' '}
          <a href={absoluteUrl(g70Main.path)} className={HERO_INLINE_LINK_CLASS}>{g70Main.keyword}</a>.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-8">
        <GpaToWamToolCore fixedScale={7} screenshotId="7-0-gpa-to-wam" />
      </section>
      <CalculatorPageGuide path="/7-0-gpa-to-wam-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
