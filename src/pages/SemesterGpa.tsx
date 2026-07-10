import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashGpaToolCore from '../components/MonashGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [sgWam, sgCgpa] = PAGE_KEYWORD_LINKS['/semester-gpa-calculator'];

const faqs = [
  {
    question: 'How do I calculate semester GPA?',
    answer:
      'Enter each unit grade or mark and credit points for one teaching period. Semester GPA = sum(grade value × credits) ÷ sum(credits) on the Monash 4.0 scale.',
  },
  {
    question: 'Is semester GPA the same as CGPA?',
    answer:
      'No. Semester GPA (SGPA) is one term only. CGPA is cumulative across all completed semesters.',
  },
  {
    question: 'How do I add semester GPA to cumulative GPA?',
    answer: 'Use the GPA to CGPA calculator with prior CGPA, credits, and this semester GPA.',
  },
  {
    question: 'Monash fail grade value?',
    answer: 'Fail (N) = 0.3 on the official Monash 4.0 GPA scale, not 0.0.',
  },
  {
    question: 'Semester GPA vs semester WAM?',
    answer:
      'GPA uses letter-grade points. WAM uses percentage marks. Use the semester WAM calculator for mark-based semester averages.',
  },
  {
    question: 'Official transcript?',
    answer: 'Confirm semester and cumulative GPA on WES — this tool is for planning.',
  },
];

export default function SemesterGpa() {
  return (
    <>
      <Seo
        title="Semester GPA Calculator - Monash 4.0 Scale (2026)"
        description="Free semester GPA calculator for Monash students. Compute SGPA from one semester's unit grades and credit points on the official 4.0 scale."
        canonicalPath="/semester-gpa-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-amber-700 to-amber-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Semester GPA Calculator</h1>
        <p className="text-amber-100 max-w-xl mx-auto">
          Calculate semester GPA (SGPA) for one teaching period — Monash official 4.0 grade values and credit weighting.
        </p>
        <p className="text-amber-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Cumulative update:{' '}
          <a href={absoluteUrl(sgCgpa.path)} className={HERO_INLINE_LINK_CLASS}>{sgCgpa.keyword}</a>
          . Mark-based semester:{' '}
          <a href={absoluteUrl(sgWam.path)} className={HERO_INLINE_LINK_CLASS}>{sgWam.keyword}</a>.
        </p>
      </section>
      <section className="max-w-2xl mx-auto px-4 py-8">
        <MonashGpaToolCore />
      </section>
      <CalculatorPageGuide path="/semester-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
