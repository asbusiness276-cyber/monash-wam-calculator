import { useEffect, useState } from 'react';
import Seo from '../components/Seo';
import LongFormContent from '../components/LongFormContent';
import PageFaq from '../components/PageFaq';
import ProductShowcase from '../components/ProductShowcase';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [finalHome, finalWtg] = PAGE_KEYWORD_LINKS['/final-grade-calculator'];
import ProductPopup from '../components/ProductPopup';
import { Recommendation, evaluateRecommendationTrigger } from '../utils/recommendationEngine';

const finalGradeFaqs = [
  {
    question: 'How is required final exam mark calculated?',
    answer:
      'The tool uses your current weighted mark, target overall mark, and final exam weight. It computes the exact exam percentage needed to hit your target.',
  },
  {
    question: 'What if required mark is above 100%?',
    answer:
      'That means your target is not mathematically achievable with the current weights and marks. Consider adjusting expectations and discussing options with your coordinator.',
  },
  {
    question: 'What if required mark is negative?',
    answer:
      'A negative requirement means your target is already secured from coursework performance, so any non-zero exam outcome may still keep you above target.',
  },
  {
    question: 'Should coursework and exam weights sum to 100?',
    answer:
      'Yes, in most standard units they should add to 100%. If your unit has additional components, include all assessed weightings before interpreting results.',
  },
  {
    question: 'Can I use this for multiple what-if scenarios?',
    answer:
      'Yes. Test realistic, conservative, and stretch targets. Scenario planning helps you choose a preparation strategy based on available revision time.',
  },
  {
    question: 'How often should I update the numbers?',
    answer:
      'Update after every marked assessment release. Frequent recalculation gives clearer direction and reduces surprise before finals.',
  },
];

export default function FinalGrade() {
  const [currentMark, setCurrentMark] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [targetMark, setTargetMark] = useState('');
  const [examWeight, setExamWeight] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const calculate = () => {
    const cm = parseFloat(currentMark);
    const cw = parseFloat(currentWeight) / 100;
    const target = parseFloat(targetMark);
    const ew = parseFloat(examWeight) / 100;

    if (isNaN(cm) || isNaN(cw) || isNaN(target) || isNaN(ew)) return null;
    if (cw + ew > 1.001) return null;

    const needed = (target - cm * cw) / ew;
    return Math.round(needed * 100) / 100;
  };

  const needed = calculate();

  const getStatus = (n: number | null) => {
    if (n === null) return null;
    if (n > 100) return { text: 'Not achievable — would need above 100%', color: 'text-red-600 dark:text-red-400' };
    if (n < 0) return { text: 'Already achieved — any mark will do!', color: 'text-emerald-600 dark:text-emerald-400' };
    return { text: `You need ${n.toFixed(2)}% in your final exam`, color: 'text-primary-600 dark:text-primary-400' };
  };

  const status = getStatus(needed);

  useEffect(() => {
    const rec = evaluateRecommendationTrigger({
      route: '/final-grade-calculator',
      subjects: [{ code: 'ENG1005', mark: currentMark === '' ? null : parseFloat(currentMark) }],
    });
    if (rec) {
      setRecommendation(rec);
      setPopupOpen(true);
    }
  }, [currentMark, currentWeight, targetMark, examWeight]);

  return (
    <>
      <Seo
        title="Final Grade Calculator | Monash WAM Calculator"
        description="Calculate the final exam mark you need to reach your target subject grade. Fast and free final grade planning calculator."
        canonicalPath="/final-grade-calculator"
        faqItems={finalGradeFaqs}
      />

      <section className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Final Grade Calculator</h1>
        <p className="text-sky-100 max-w-xl mx-auto">
          Find out exactly what mark you need in your final exam to achieve your target grade.
        </p>
      </section>

      <section className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-6">Enter Your Details</h2>

          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Current Mark (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 68"
                  value={currentMark}
                  onChange={e => setCurrentMark(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Coursework Weight (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 60"
                  value={currentWeight}
                  onChange={e => setCurrentWeight(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Target Overall Mark (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 70"
                  value={targetMark}
                  onChange={e => setTargetMark(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Final Exam Weight (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="e.g. 40"
                  value={examWeight}
                  onChange={e => setExamWeight(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                />
              </div>
            </div>

            {status && (
              <div className={`rounded-xl border p-5 text-center ${needed !== null && needed > 100 ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800' : needed !== null && needed < 0 ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' : 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800'}`}>
                {needed !== null && needed >= 0 && needed <= 100 && (
                  <div className="text-4xl font-bold text-sky-700 dark:text-sky-300 mb-1">{needed.toFixed(2)}%</div>
                )}
                <div className={`text-sm font-semibold ${status.color}`}>{status.text}</div>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl text-xs text-gray-500 dark:text-gray-400">
            <strong>Formula:</strong> Required Exam Mark = (Target — Current Mark × Coursework Weight) ÷ Exam Weight
          </div>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
          <h3 className="text-sm font-bold text-gray-800 dark:text-white px-5 py-4 border-b border-gray-200 dark:border-gray-700">
            Common Target Grades at Monash
          </h3>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {[
                { target: '80+', grade: 'High Distinction (HD)' },
                { target: '70–79', grade: 'Distinction (D)' },
                { target: '60–69', grade: 'Credit (C)' },
                { target: '50–59', grade: 'Pass (P)' },
              ].map(r => (
                <tr key={r.target} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-4 py-3 font-semibold text-gray-800 dark:text-gray-200">{r.target}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{r.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">How to Plan Your Final Exam Target</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
            Semester-wide averages roll into your{' '}
            <a href={absoluteUrl(finalHome.path)} className={INLINE_LINK_CLASS}>{finalHome.keyword}</a>
            , while scholarship forms may still ask for GPA via the{' '}
            <a href={absoluteUrl(finalWtg.path)} className={INLINE_LINK_CLASS}>{finalWtg.keyword}</a>.
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Use your current weighted coursework score from official results.</li>
            <li>Enter exact percentage weights for coursework and final exam.</li>
            <li>Set a realistic target based on your past assessments and preparation time.</li>
            <li>If the required score is above 100, discuss alternatives with your unit coordinator.</li>
          </ul>
        </div>
      </section>

      <ProductShowcase startIndex={1} endIndex={6} />

      <LongFormContent topic="final exam target planning and grade strategy" />
      <PageFaq items={finalGradeFaqs} />
      <ProductPopup recommendation={recommendation} isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
