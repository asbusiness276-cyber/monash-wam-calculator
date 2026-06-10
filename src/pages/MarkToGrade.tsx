import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import ProductShowcase from '../components/ProductShowcase';
import MarkToGradeToolCore from '../components/MarkToGradeToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [mtgHome, mtgFinal] = PAGE_KEYWORD_LINKS['/mark-to-grade-calculator'];

const markToGradeFaqs = [
  {
    question: 'What mark is HD at Monash?',
    answer: 'High Distinction (HD) is 80% to 100% on the standard Monash coursework grading scale.',
  },
  {
    question: 'What is distinction at Monash?',
    answer: 'Distinction (D) covers marks from 70% to 79%. Credit is 60–69%, Pass is 50–59%, and below 50% is a fail.',
  },
  {
    question: 'Is 79 HD or distinction?',
    answer: '79% is Distinction (D). HD starts at 80%. One mark can change the letter grade band.',
  },
  {
    question: 'Does this match my transcript?',
    answer:
      'This tool uses Monash standard percentage bands. Special grades or faculty rules may differ — confirm on your official record.',
  },
  {
    question: 'Can I use this for overall WAM?',
    answer:
      'This converts a single percentage mark to a grade band. For cumulative WAM, use the Monash WAM calculator on the homepage.',
  },
  {
    question: 'How is this different from WAM to GPA?',
    answer:
      'Mark to grade maps one percentage to HD/D/C/P. WAM to GPA converts your overall weighted average to GPA scales.',
  },
];

export default function MarkToGrade() {
  return (
    <>
      <Seo
        title="Monash Mark to Grade Calculator - HD, D, C, P Converter (2026)"
        description="Free Monash mark to grade calculator: convert any percentage to HD, D, C, P or N instantly. Monash grading scale with GPA bands."
        canonicalPath="/mark-to-grade-calculator"
        faqItems={markToGradeFaqs}
      />

      <section className="bg-gradient-to-br from-violet-700 to-violet-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Mark to Grade Calculator</h1>
        <p className="text-violet-100 max-w-xl mx-auto">
          Convert any unit mark (0–100%) to Monash letter grade — HD, D, C, P, or N — with GPA band reference.
        </p>
        <p className="text-violet-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Tracking overall performance? Use the{' '}
          <a href={absoluteUrl(mtgHome.path)} className={HERO_INLINE_LINK_CLASS}>{mtgHome.keyword}</a>
          . Need an exam target? Try the{' '}
          <a href={absoluteUrl(mtgFinal.path)} className={HERO_INLINE_LINK_CLASS}>{mtgFinal.keyword}</a>.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-8">
        <MarkToGradeToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How to Use</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Enter a unit mark from 0 to 100 (decimals allowed).</li>
            <li>Read the Monash grade letter and full label instantly.</li>
            <li>Check approximate GPA band values for planning.</li>
            <li>Use the table below for quick reference across all bands.</li>
          </ul>
        </div>
      </section>

      <ProductShowcase startIndex={13} endIndex={18} />
      <PageFaq items={markToGradeFaqs} />
    </>
  );
}
