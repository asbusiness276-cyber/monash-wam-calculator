import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import MonashCgpaToolCore from '../components/MonashCgpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [cgpaGpa, cgpaHome] = PAGE_KEYWORD_LINKS['/monash-cgpa-calculator'];

const faqs = [
  {
    question: 'What is CGPA at Monash?',
    answer:
      'CGPA (cumulative GPA) is your overall GPA across all completed semesters, weighted by credit points. It updates each time new results are certified.',
  },
  {
    question: 'Where do I find my prior cumulative GPA?',
    answer:
      'Check WES, the Student Portal GPA/WAM widget, or your unofficial academic record. Enter that GPA and total credits earned before this semester.',
  },
  {
    question: 'How is semester GPA different from CGPA?',
    answer:
      'Semester GPA (SGPA) uses only the units you enter for the current teaching period. CGPA combines prior cumulative results with this semester.',
  },
  {
    question: 'Is CGPA the same as WAM?',
    answer:
      'No. CGPA uses letter-grade point values on a 4.0 scale. WAM uses percentage marks with Monash year-level weighting. Both appear on transcripts for many courses.',
  },
  {
    question: 'Can Malaysia students use this for resume CGPA?',
    answer:
      'This estimates CGPA using Monash grade values. For official resume letters, request documented CGPA from Monash Connect or Student Services Malaysia.',
  },
  {
    question: 'Does this include failed units?',
    answer:
      'Yes. Include failed grades (N = 0.3 GPA value) if they are part of your completed record — they affect both semester and cumulative GPA.',
  },
];

export default function MonashCgpa() {
  return (
    <>
      <Seo
        title="Monash CGPA Calculator — Cumulative GPA (2026)"
        description="Free Monash cumulative GPA calculator: combine prior GPA with current semester units to compute updated CGPA on the official 4.0 scale."
        canonicalPath="/monash-cgpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-teal-600 to-teal-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash CGPA Calculator</h1>
        <p className="text-teal-100 max-w-xl mx-auto">
          Compute semester GPA and updated cumulative GPA (CGPA) using Monash official 4.0 grade values.
        </p>
        <p className="text-teal-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          First time calculating GPA? Start with the{' '}
          <a href={absoluteUrl(cgpaGpa.path)} className={HERO_INLINE_LINK_CLASS}>{cgpaGpa.keyword}</a>
          . Compare with your{' '}
          <a href={absoluteUrl(cgpaHome.path)} className={HERO_INLINE_LINK_CLASS}>{cgpaHome.keyword}</a>.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-8">
        <MonashCgpaToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">How CGPA Updates</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            New CGPA = (prior GPA × prior credits + this semester grade points) ÷ (prior credits + semester credits).
            Enter prior figures from WES at the start of the semester, then add planned or actual grades for current units.
          </p>
        </div>
      </section>
      <PageFaq items={faqs} />
    </>
  );
}
