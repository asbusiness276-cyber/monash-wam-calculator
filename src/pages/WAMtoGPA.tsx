import Seo from '../components/Seo';
import LongFormContent from '../components/LongFormContent';
import PageFaq from '../components/PageFaq';
import InternalLinks from '../components/InternalLinks';
import ProductShowcase from '../components/ProductShowcase';
import WamToGpaToolCore from '../components/WamToGpaToolCore';
import { getPageKeywordLinks } from '../data/pageKeywordLinks';

const wamToGpaFaqs = [
  {
    question: 'Is WAM to GPA conversion exact?',
    answer:
      'It is an estimate, not an official conversion. Institutions may apply different mappings, faculty rules, or rounding logic, so you should treat the result as directional guidance.',
  },
  {
    question: 'Which GPA scale should I report?',
    answer:
      'Use the scale requested by your target institution or application. This page shows 4.0 and 7.0 outputs so you can compare both common formats quickly.',
  },
  {
    question: 'Why does my official GPA differ from this result?',
    answer:
      'Official systems may include policy-specific adjustments such as repeated unit handling, special grading categories, or institution-specific conversion methods.',
  },
  {
    question: 'Can I use this for international applications?',
    answer:
      'Yes, as a planning reference. For final submission, verify required conversion standards directly with the university, scholarship body, or credential evaluation service.',
  },
  {
    question: 'Does this tool support postgraduate pathways?',
    answer:
      'Yes. Students commonly use WAM to GPA estimates for postgraduate planning, eligibility checks, and benchmarking against minimum entry requirements.',
  },
  {
    question: 'How often should I recalculate?',
    answer:
      'Recalculate after each result release or at major semester checkpoints. Frequent updates help you track trend direction and adjust preparation strategy.',
  },
];

export default function WAMtoGPA() {
  return (
    <>
      <Seo
        title="WAM to GPA Calculator | Monash WAM Calculator"
        description="Convert Monash WAM to GPA on 4.0 and 7.0 scales. Use this free calculator for quick academic planning and international comparison."
        canonicalPath="/wam-to-gpa-calculator"
        faqItems={wamToGpaFaqs}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM to GPA Calculator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Convert your Monash University WAM to GPA. Supports both 4.0 and 7.0 GPA scales used by Australian and
          international universities.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-12">
        <WamToGpaToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How to Use This WAM to GPA Converter</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Enter your overall Monash WAM from 0 to 100.</li>
            <li>Read your estimated GPA on both 4.0 and 7.0 scales.</li>
            <li>Use the conversion table to compare nearby grade bands.</li>
            <li>Verify official outcomes with your university transcript or policy pages.</li>
          </ul>
        </div>
      </section>

      <ProductShowcase startIndex={6} endIndex={11} />

      <LongFormContent topic="WAM to GPA conversion for domestic and international applications" />
      <PageFaq items={wamToGpaFaqs} />
      <InternalLinks links={getPageKeywordLinks('/wam-to-gpa-calculator')} />
    </>
  );
}
