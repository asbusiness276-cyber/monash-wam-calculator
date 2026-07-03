import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamToGpaToolCore from '../components/WamToGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [wamToGpaHome, wamToGpaFinal] = PAGE_KEYWORD_LINKS['/wam-to-gpa-calculator'];

const wamToGpaFaqs = [
  {
    question: 'How does WAM to GPA conversion work at Monash?',
    answer:
      'Enter your Monash WAM and this WAM to GPA calculator maps it to Monash grade bands (HD, D, C, P) on 4.0 and 7.0 scales. Use it for planning; confirm official GPA on your transcript when available.',
  },
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
        title="WAM to GPA Calculator - Free Monash WAM to GPA Converter (2026)"
        description="WAM to GPA conversion in one click. Free WAM to GPA calculator for Monash - convert to 4.0 & 7.0 GPA for scholarships, postgrad & overseas apps. No signup."
        canonicalPath="/wam-to-gpa-calculator"
        faqItems={wamToGpaFaqs}
      />

      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM to GPA Calculator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Free WAM to GPA conversion for Monash University students. Convert WAM to 4.0 and 7.0 GPA scales instantly.
        </p>
        <p className="text-blue-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Need your overall WAM from units first? Use the{' '}
          <a href={absoluteUrl(wamToGpaHome.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaHome.keyword}</a>
          , then return here. Planning one subject&apos;s exam weighting? Open the{' '}
          <a href={absoluteUrl(wamToGpaFinal.path)} className={HERO_INLINE_LINK_CLASS}>{wamToGpaFinal.keyword}</a>.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-8">
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

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
            Monash WAM to GPA: example bands
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Monash reports WAM as a percentage (0–100). Many applications ask for GPA on a 4.0 or 7.0 scale instead.
            The table below shows typical planning ranges — use the calculator above for your exact WAM.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="text-left px-3 py-2 font-semibold text-gray-600 dark:text-gray-300 rounded-tl-lg">
                    Monash band
                  </th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">WAM range</th>
                  <th className="text-left px-3 py-2 font-semibold text-gray-600 dark:text-gray-300 rounded-tr-lg">
                    Typical use
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-gray-700 dark:text-gray-300">
                <tr>
                  <td className="px-3 py-2 font-medium">High distinction (HD)</td>
                  <td className="px-3 py-2">80–100</td>
                  <td className="px-3 py-2">Honours, competitive scholarships</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Distinction (D)</td>
                  <td className="px-3 py-2">70–79</td>
                  <td className="px-3 py-2">Strong postgraduate applications</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Credit (C)</td>
                  <td className="px-3 py-2">60–69</td>
                  <td className="px-3 py-2">Solid progression, many internships</td>
                </tr>
                <tr>
                  <td className="px-3 py-2 font-medium">Pass (P)</td>
                  <td className="px-3 py-2">50–59</td>
                  <td className="px-3 py-2">Minimum satisfactory progress</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">
            Example: a WAM of 75 often maps near distinction-level performance. Enter 75 in the converter to see
            estimated 4.0 and 7.0 GPA values for your application.
          </p>
        </div>
      </section>

      <CalculatorPageGuide path="/wam-to-gpa-calculator" />
      <RelatedCalculators
        hrefs={['/gpa-to-wam-calculator', '/monash-gpa-calculator', '/monash-cgpa-calculator', '/wam-target-calculator', '/final-grade-calculator', '/']}
      />

      <PageFaq items={wamToGpaFaqs} />
    </>
  );
}
