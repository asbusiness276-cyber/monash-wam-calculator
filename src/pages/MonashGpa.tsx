import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashGpaToolCore from '../components/MonashGpaToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaHome, gpaCgpa] = PAGE_KEYWORD_LINKS['/monash-gpa-calculator'];

const faqs = [
  {
    question: 'How is GPA calculated at Monash?',
    answer:
      'Monash GPA = sum of (grade value × credit points) ÷ sum of credit points, on a 4.0 scale. High Distinction = 4.0, Distinction = 3.0, Credit = 2.0, Pass = 1.0, Fail = 0.3. Result is to three decimal places.',
  },
  {
    question: 'Is fail 0.0 or 0.3 GPA at Monash?',
    answer:
      'On the official Monash 4.0 GPA scale, a fail (N) grade has a GPA value of 0.3 — not 0.0. Withdrawn fail (WN) is 0.0.',
  },
  {
    question: 'What is distinction average GPA at Monash?',
    answer:
      'Employers and Monash students often treat GPA 3.0 or above as distinction average — equivalent to roughly WAM 70+.',
  },
  {
    question: 'Is this the official Monash GPA calculator?',
    answer:
      'No. This uses Monash published grade values and formula for planning. Your official GPA appears on WES and your transcript.',
  },
  {
    question: 'Can I use marks instead of letter grades?',
    answer:
      'Yes. Enter each unit percentage and the calculator maps it to the standard Monash letter grade before computing GPA.',
  },
  {
    question: 'How is GPA different from WAM?',
    answer:
      'GPA converts letter grades to points. WAM uses actual percentage marks with year-level weighting. Use both tools when applications ask for different metrics.',
  },
];

export default function MonashGpa() {
  return (
    <>
      <Seo
        title="Monash GPA Calculator — Free 4.0 Scale (2026)"
        description="Free Monash University GPA calculator: enter unit grades or marks and credit points to compute your official-style 4.0 GPA instantly."
        canonicalPath="/monash-gpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-amber-600 to-amber-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash GPA Calculator</h1>
        <p className="text-amber-100 max-w-xl mx-auto">
          Calculate your Monash University GPA on the official 4.0 scale from unit grades and credit points.
        </p>
        <p className="text-amber-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Need cumulative GPA across semesters? Try the{' '}
          <a href={absoluteUrl(gpaCgpa.path)} className={HERO_INLINE_LINK_CLASS}>{gpaCgpa.keyword}</a>
          . Tracking marks? Use the{' '}
          <a href={absoluteUrl(gpaHome.path)} className={HERO_INLINE_LINK_CLASS}>{gpaHome.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/monash-gpa-calculator">
        <MonashGpaToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-3">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Official Monash GPA Formula</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-mono bg-gray-50 dark:bg-gray-900/40 p-3 rounded-lg">
            GPA = Σ (grade value × credit points) ÷ Σ (credit points)
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Example: HD (4.0) × 12 cp + D (3.0) × 6 cp = 48 + 18 = 66 grade points over 18 cp → GPA 3.667. Failed
            units count at 0.3 per credit point, which lowers GPA more slowly than a 0.0 fail on other scales.
          </p>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/monash-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
