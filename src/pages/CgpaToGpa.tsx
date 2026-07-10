import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import CgpaToGpaToolCore from '../components/CgpaToGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [ctgGpa, ctgWam] = PAGE_KEYWORD_LINKS['/cgpa-to-gpa-calculator'];

const faqs = [
  {
    question: 'How do I convert CGPA to GPA?',
    answer:
      'On Monash 4.0 transcripts, CGPA and cumulative GPA are the same metric. For 10-point CGPA, use linear conversion: GPA = CGPA ÷ 10 × 4.',
  },
  {
    question: 'Is CGPA the same as GPA at Monash?',
    answer: 'Yes — Monash reports cumulative GPA on the 4.0 scale; CGPA is the same value for planning.',
  },
  {
    question: '10-point CGPA from India?',
    answer:
      'Many international students use a 10-point scale. This tool converts to 4.0 for US/Monash-style forms — verify with your evaluator.',
  },
  {
    question: 'CGPA to WAM?',
    answer: 'Use the CGPA to WAM calculator for Monash percentage planning ranges.',
  },
  {
    question: 'Official conversion?',
    answer: 'Credential services may use different rules — use this for planning before formal assessment.',
  },
  {
    question: 'GPA to CGPA reverse?',
    answer: 'Use the GPA to CGPA calculator to update cumulative GPA after a new semester.',
  },
];

export default function CgpaToGpa() {
  return (
    <>
      <Seo
        title="CGPA to GPA Calculator - 10-Point & Monash 4.0 (2026)"
        description="Free CGPA to GPA calculator: convert 10-point CGPA to 4.0 GPA or confirm Monash cumulative GPA equals CGPA."
        canonicalPath="/cgpa-to-gpa-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-violet-700 to-violet-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">CGPA to GPA Calculator</h1>
        <p className="text-violet-100 max-w-xl mx-auto">
          Convert 10-point CGPA to 4.0 GPA, or confirm Monash CGPA on the official 4.0 cumulative scale.
        </p>
        <p className="text-violet-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Monash GPA tool:{' '}
          <a href={absoluteUrl(ctgGpa.path)} className={HERO_INLINE_LINK_CLASS}>{ctgGpa.keyword}</a>
          . CGPA to WAM:{' '}
          <a href={absoluteUrl(ctgWam.path)} className={HERO_INLINE_LINK_CLASS}>{ctgWam.keyword}</a>.
        </p>
      </section>
      <section className="max-w-xl mx-auto px-4 py-8">
        <CgpaToGpaToolCore />
      </section>
      <CalculatorPageGuide path="/cgpa-to-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
