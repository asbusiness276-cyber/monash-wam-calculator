import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamToGpaToolCore from '../components/WamToGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [w70Main, w70Pct] = PAGE_KEYWORD_LINKS['/wam-to-7-0-gpa-calculator'];

const faqs = [
  {
    question: 'How do I convert WAM to 7.0 GPA?',
    answer:
      'Enter your Monash WAM. Australian universities map HD = 7, D = 6, CR = 5, P = 4, Fail = 0 on the 7-point scale.',
  },
  {
    question: 'What WAM is a 7.0 GPA?',
    answer: '7.0 corresponds to High Distinction — WAM 80% and above at Monash.',
  },
  {
    question: 'Is 7.0 GPA the same as 4.0?',
    answer: 'Same grade band, different numeric scale. HD = 4.0 = 7.0. Use whichever scale your application requests.',
  },
  {
    question: 'Does Monash report 7.0 GPA officially?',
    answer:
      'Many Monash records emphasise WAM and 4.0 GPA. The 7.0 scale is still common for Australian HDR and comparison tables.',
  },
  {
    question: 'Single mark vs overall WAM?',
    answer:
      'This tool converts overall WAM. For one assessment percentage, use the percentage to GPA or 7.0 scale GPA calculators.',
  },
  {
    question: 'Need 4.0 GPA as well?',
    answer: 'Use the combined WAM to GPA calculator or the dedicated WAM to 4.0 GPA page.',
  },
];

export default function WamTo70Gpa() {
  return (
    <>
      <Seo
        title="WAM to 7.0 GPA Calculator - Australian Monash Scale (2026)"
        description="Free WAM to 7.0 GPA calculator for Monash students. Map your weighted average mark to the Australian 7-point HD/D/CR/P scale."
        canonicalPath="/wam-to-7-0-gpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM to 7.0 GPA Calculator</h1>
        <p className="text-teal-100 max-w-xl mx-auto">
          Convert your Monash WAM to the Australian 7-point GPA scale — HD (7), D (6), CR (5), P (4).
        </p>
        <p className="text-teal-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Both scales together? See{' '}
          <a href={absoluteUrl(w70Main.path)} className={HERO_INLINE_LINK_CLASS}>{w70Main.keyword}</a>
          . Single mark conversion:{' '}
          <a href={absoluteUrl(w70Pct.path)} className={HERO_INLINE_LINK_CLASS}>{w70Pct.keyword}</a>.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-8">
        <WamToGpaToolCore emphasizeGpa7 screenshotId="wam-to-7-0-gpa" />
      </section>
      <CalculatorPageGuide path="/wam-to-7-0-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
