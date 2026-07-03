import { useState } from 'react';
import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';
import { mapGpaToMonashBand, type GpaBandStep } from '../utils/monashGrades';

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

interface Scale {
  label: string;
  max: 4 | 7;
  steps: GpaBandStep[];
}

const scales: Scale[] = [
  {
    label: '4.0 Scale',
    max: 4,
    steps: [
      { gpa: 4.0, wamMin: 80, wamMax: 100, grade: 'HD', gradeLabel: 'High Distinction' },
      { gpa: 3.0, wamMin: 70, wamMax: 79, grade: 'D', gradeLabel: 'Distinction' },
      { gpa: 2.0, wamMin: 60, wamMax: 69, grade: 'C', gradeLabel: 'Credit' },
      { gpa: 1.0, wamMin: 50, wamMax: 59, grade: 'P', gradeLabel: 'Pass' },
      { gpa: 0.0, wamMin: 0, wamMax: 49, grade: 'N', gradeLabel: 'Fail' },
    ],
  },
  {
    label: '7.0 Scale',
    max: 7,
    steps: [
      { gpa: 7.0, wamMin: 80, wamMax: 100, grade: 'HD', gradeLabel: 'High Distinction' },
      { gpa: 6.0, wamMin: 70, wamMax: 79, grade: 'D', gradeLabel: 'Distinction' },
      { gpa: 5.0, wamMin: 60, wamMax: 69, grade: 'C', gradeLabel: 'Credit' },
      { gpa: 4.0, wamMin: 50, wamMax: 59, grade: 'P', gradeLabel: 'Pass' },
      { gpa: 0.0, wamMin: 0, wamMax: 49, grade: 'N', gradeLabel: 'Fail' },
    ],
  },
];

export default function GPAtoWAM() {
  const [gpa, setGpa] = useState('');
  const [scaleIdx, setScaleIdx] = useState(0);

  const scale = scales[scaleIdx];
  const gpaNum = parseFloat(gpa);
  const result = gpa !== '' && !isNaN(gpaNum) ? mapGpaToMonashBand(gpaNum, scale.max) : null;
  const markEquivalent = gpa === '' ? null : (parseFloat(gpa) / scale.max) * 100;

  return (
    <>
      <Seo
        title="GPA to WAM Calculator | Monash WAM Calculator"
        description="Convert GPA to an approximate Monash WAM range using 4.0 and 7.0 scales. Helpful for planning grade targets and applications."
        canonicalPath="/gpa-to-wam-calculator"
        faqItems={gpaToWamFaqs}
      />

      <section className="bg-gradient-to-br from-teal-700 to-teal-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">GPA to WAM Calculator</h1>
        <p className="text-teal-100 max-w-xl mx-auto">
          Convert your GPA back to an approximate Monash University WAM. Choose your GPA scale and enter your GPA below.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex gap-3 mb-5">
            {scales.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setScaleIdx(i)}
                className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${scaleIdx === i ? 'bg-teal-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Enter Your GPA (0 – {scale.max})
          </label>
          <input
            type="number"
            min="0"
            max={scale.max}
            step="0.1"
            placeholder={`e.g. ${scale.max === 4 ? '3.5' : '5.5'}`}
            value={gpa}
            onChange={e => setGpa(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xl font-bold mb-6"
          />

          {result && (
            <div className="space-y-4">
              <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-xl p-5 text-center">
                <div className="text-xs text-teal-600 dark:text-teal-400 font-semibold uppercase mb-1">Approximate WAM Range</div>
                <div className="text-4xl font-bold text-teal-700 dark:text-teal-300">{result.wamMin} – {result.wamMax}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{result.grade} — {result.gradeLabel}</div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                Note: This is an approximate conversion. Different universities may use slightly different scales.
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <h2 className="text-base font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            GPA to WAM Conversion Table ({scale.label})
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                <th className="text-left px-4 py-3 font-semibold">GPA</th>
                <th className="text-left px-4 py-3 font-semibold">Approx WAM</th>
                <th className="text-left px-4 py-3 font-semibold">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {scale.steps.map(row => (
                <tr key={row.gpa} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{row.gpa.toFixed(1)}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.wamMin}–{row.wamMax}</td>
                  <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.grade} ({row.gradeLabel})</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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
