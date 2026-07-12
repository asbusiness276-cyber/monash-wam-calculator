import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaToWamToolCore from '../components/GpaToWamToolCore';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaToWamHome, gpaToWamWtg] = PAGE_KEYWORD_LINKS['/gpa-to-wam-calculator'];

const gpaToWamFaqs = [
  {
    question: 'Can GPA be converted to an exact WAM?',
    answer:
      'No, the conversion is approximate because grading policies vary. This tool maps common grade bands to practical WAM ranges for planning and comparison.',
  },
  {
    question: 'Should I use 4.0 or 7.0 input scale?',
    answer:
      'Use the scale used by your source institution. This calculator supports both common scales so you can estimate a likely Monash-equivalent range.',
  },
  {
    question: 'Why do I get a WAM range instead of one number?',
    answer:
      'A range reflects uncertainty in cross-system mapping. It is more honest and useful than a false-precision single value when policies differ across institutions.',
  },
  {
    question: 'Is this useful before transferring universities?',
    answer:
      'Yes, many students use GPA to WAM estimates to assess competitiveness for transfer, exchange, or postgraduate pathways before collecting formal documents.',
  },
  {
    question: 'Can this help with scholarship planning?',
    answer:
      'Yes. Use converted ranges to benchmark likely competitiveness, then confirm final eligibility criteria using official scholarship policy details.',
  },
  {
    question: 'How can I improve conversion outcomes?',
    answer:
      'Focus on consistent high performance in future units and monitor trend direction. Strong recent results often improve your broader application profile.',
  },
];

export default function GPAtoWAM() {
  return (
    <>
      <Seo
        title="GPA to WAM Calculator — Monash Percentage Range Estimator (2026)"
        description="Convert 4.0 or 7.0 GPA to approximate Monash WAM percentage ranges using official HD/D/C/P bands — for transfer and application planning."
        canonicalPath="/gpa-to-wam-calculator"
        ogImage="/article-images/featured-convert-wam.webp"
        ogImageAlt="Student comparing GPA and WAM conversion scales on a laptop for Monash grade planning"
        faqItems={gpaToWamFaqs}
      />

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">GPA to WAM Calculator</h1>
        <p className="text-teal-100 max-w-xl mx-auto">
          Convert your GPA back to an approximate Monash University WAM. Choose your GPA scale and enter your GPA below.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-8">
        <GpaToWamToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Why GPA to WAM Conversion Is Approximate</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Universities map grades differently across faculties and countries. This tool provides practical ranges based
            on common Monash grading bands. Pair the estimate with your{' '}
            <a href={absoluteUrl(gpaToWamHome.path)} className={INLINE_LINK_CLASS}>{gpaToWamHome.keyword}</a>
            {' '}for semester-wide tracking, and use the{' '}
            <a href={absoluteUrl(gpaToWamWtg.path)} className={INLINE_LINK_CLASS}>{gpaToWamWtg.keyword}</a>
            {' '}when applications ask for GPA-style reporting.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            For scholarship, visa, or graduate application decisions, always confirm requirements using official
            documentation from the relevant institution.
          </p>
        </div>
      </section>

      <CalculatorPageGuide path="/gpa-to-wam-calculator" />
      <RelatedCalculators
        hrefs={['/wam-to-gpa-calculator', '/monash-gpa-calculator', '/', '/wam-target-calculator', '/monash-cgpa-calculator', '/monash-grade-converter']}
      />

      <PageFaq items={gpaToWamFaqs} />
    </>
  );
}
