import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamToGpaToolCore from '../components/WamToGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [w40Main, w40Gpa] = PAGE_KEYWORD_LINKS['/wam-to-4-0-gpa-calculator'];

const faqs = [
  {
    question: 'How do I convert WAM to 4.0 GPA at Monash?',
    answer:
      'Enter your overall WAM (0–100). Monash maps each WAM band to a 4.0 GPA value: HD = 4.0, D = 3.0, C = 2.0, P = 1.0, N = 0.0 for planning.',
  },
  {
    question: 'What WAM is a 4.0 GPA?',
    answer: '4.0 on the Monash 4.0 scale corresponds to High Distinction — typically WAM 80 and above.',
  },
  {
    question: 'Is WAM to 4.0 GPA exact?',
    answer:
      'It maps to grade bands. Official transcript GPA uses per-unit letter grades with credit weighting, so two students with the same WAM can differ slightly in GPA.',
  },
  {
    question: 'When should I use 4.0 GPA instead of WAM?',
    answer:
      'Use 4.0 when US-style forms, scholarships, or Monash official GPA fields ask for it. WAM remains the native Monash percentage metric.',
  },
  {
    question: 'What about 7.0 GPA?',
    answer: 'For the Australian 7-point scale, use our WAM to 7.0 GPA calculator or the combined WAM to GPA tool.',
  },
  {
    question: 'Can I convert CGPA from WAM?',
    answer:
      'Monash CGPA is on the 4.0 scale. This tool gives the band-equivalent 4.0 value from your WAM for planning — use the WAM to CGPA page for cumulative wording.',
  },
];

export default function WamTo40Gpa() {
  return (
    <>
      <Seo
        title="WAM to 4.0 GPA Calculator - Monash Converter (2026)"
        description="Free WAM to 4.0 GPA calculator for Monash students. Convert your weighted average mark to the US-style 4.0 GPA scale instantly."
        canonicalPath="/wam-to-4-0-gpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM to 4.0 GPA Calculator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Convert your Monash WAM to the 4.0 GPA scale — the format used on Monash transcripts and many international applications.
        </p>
        <p className="text-blue-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Need both scales? Try the{' '}
          <a href={absoluteUrl(w40Main.path)} className={HERO_INLINE_LINK_CLASS}>{w40Main.keyword}</a>
          . Reverse direction:{' '}
          <a href={absoluteUrl(w40Gpa.path)} className={HERO_INLINE_LINK_CLASS}>{w40Gpa.keyword}</a>.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-8">
        <WamToGpaToolCore emphasizeGpa4 screenshotId="wam-to-4-0-gpa" />
      </section>
      <CalculatorPageGuide path="/wam-to-4-0-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
