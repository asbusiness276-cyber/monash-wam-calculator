import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import MonashGradeConverterToolCore from '../components/MonashGradeConverterToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [convMark, convGpa] = PAGE_KEYWORD_LINKS['/monash-grade-converter'];

const faqs = [
  {
    question: 'How do I convert a Monash mark to a grade?',
    answer:
      'HD = 80–100, D = 70–79, C = 60–69, P = 50–59, N = 0–49. Enter any percentage to see the letter grade and official GPA value.',
  },
  {
    question: 'What GPA value is a fail at Monash?',
    answer:
      'Fail (N) maps to GPA 0.3 on the official Monash 4.0 scale. Near pass (NP) is 0.7. Withdrawn fail (WN) is 0.0.',
  },
  {
    question: 'Can I convert GPA back to a mark?',
    answer:
      'GPA to mark is approximate because GPA bands cover ranges. This tool shows the representative mark and letter for planning.',
  },
  {
    question: 'Is this the same as WAM to GPA converter?',
    answer:
      'This converts single grades. WAM to GPA converts your overall weighted average across all units — different use case.',
  },
  {
    question: 'Does 79 convert to HD or D?',
    answer:
      '79% is Distinction (D), GPA 3.0. HD starts at 80%.',
  },
  {
    question: 'Are special grades included?',
    answer:
      'Yes. Select NP, NH, or WN when converting from letter grade for special result codes on your transcript.',
  },
];

export default function MonashGradeConverter() {
  return (
    <>
      <Seo
        title="Monash Grade Converter — Mark, Letter & GPA (2026)"
        description="Free Monash grade converter: convert between percentage marks, HD/D/C/P letter grades, and official 4.0 GPA values instantly."
        canonicalPath="/monash-grade-converter"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-violet-700 to-violet-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Grade Converter</h1>
        <p className="text-violet-100 max-w-xl mx-auto">
          Convert Monash marks, letter grades, and official GPA values using the published grading schema.
        </p>
        <p className="text-violet-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Single mark lookup? Try the{' '}
          <a href={absoluteUrl(convMark.path)} className={HERO_INLINE_LINK_CLASS}>{convMark.keyword}</a>
          . Full degree GPA? Use the{' '}
          <a href={absoluteUrl(convGpa.path)} className={HERO_INLINE_LINK_CLASS}>{convGpa.keyword}</a>.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-8">
        <MonashGradeConverterToolCore />
      </section>
      <PageFaq items={faqs} />
    </>
  );
}
