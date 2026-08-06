import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaToWamToolCore from '../components/GpaToWamToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [cwWam, cwCgpa] = PAGE_KEYWORD_LINKS['/cgpa-to-wam-calculator'];

const faqs = [
  {
    question: 'How do I convert CGPA to WAM?',
    answer:
      'Enter your cumulative GPA on the 4.0 scale. Monash maps CGPA bands to WAM percentage ranges for planning.',
  },
  {
    question: 'Is CGPA to WAM exact?',
    answer:
      'No — CGPA compresses marks into bands. You get an approximate WAM range, not a precise percentage.',
  },
  {
    question: 'What WAM is CGPA 3.0?',
    answer: 'CGPA around 3.0 typically maps to Distinction — WAM roughly 70–79 at Monash.',
  },
  {
    question: 'Monash CGPA vs other universities?',
    answer:
      'Monash fail grades count as 0.3 on the 4.0 scale. Cross-institution CGPA comparisons need caution.',
  },
  {
    question: 'How do I calculate official WAM?',
    answer: 'Use the Monash WAM calculator with unit marks and credit points from your transcript.',
  },
  {
    question: 'Reverse conversion?',
    answer: 'Use the WAM to CGPA calculator to estimate cumulative GPA band from overall WAM.',
  },
];

export default function CgpaToWam() {
  return (
    <>
      <Seo
        title="CGPA to WAM Calculator - Monash 4.0 Scale (2026)"
        description="Free CGPA to WAM calculator for Monash students. Convert cumulative 4.0 GPA to approximate weighted average mark ranges."
        canonicalPath="/cgpa-to-wam-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-cyan-700 to-cyan-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">CGPA to WAM Calculator</h1>
        <p className="text-cyan-100 max-w-xl mx-auto">
          Convert cumulative GPA (CGPA) on the 4.0 scale to an approximate Monash WAM range for degree planning.
        </p>
        <p className="text-cyan-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Calculate WAM from units:{' '}
          <a href={absoluteUrl(cwWam.path)} className={HERO_INLINE_LINK_CLASS}>{cwWam.keyword}</a>
          . Official CGPA maths:{' '}
          <a href={absoluteUrl(cwCgpa.path)} className={HERO_INLINE_LINK_CLASS}>{cwCgpa.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/cgpa-to-wam-calculator">
        <GpaToWamToolCore fixedScale={4} inputLabel="CGPA" screenshotId="cgpa-to-wam" />
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/cgpa-to-wam-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
