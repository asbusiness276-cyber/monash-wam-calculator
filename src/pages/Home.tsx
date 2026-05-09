import { BookOpen, CheckCircle, ArrowDown } from 'lucide-react';
import WAMCalculator from '../components/WAMCalculator';
import FAQSection from '../components/FAQSection';
import Seo from '../components/Seo';
import ProductShowcase from '../components/ProductShowcase';
import ArticlesSection from '../components/ArticlesSection';
import InternalLinks from '../components/InternalLinks';
import { getPageKeywordLinks } from '../data/pageKeywordLinks';

const homeFaqs = [
  {
    question: 'Is this Monash WAM Calculator official?',
    answer:
      'No, this is an independent educational calculator. It is useful for planning, but official academic outcomes should always be confirmed through your Monash transcript and faculty policies.',
  },
  {
    question: 'How accurate is the WAM result?',
    answer:
      'Accuracy depends on your inputs. If marks and credit points are correct, the estimate is usually very close. Differences can occur due to exclusions, special grading rules, or rounding by official systems.',
  },
  {
    question: 'Can I include ongoing units?',
    answer:
      'Yes, you can add expected marks for ongoing units to model scenarios. Keep these clearly separated from confirmed marks so you can compare optimistic and conservative forecasts.',
  },
  {
    question: 'Why should I use WAM and GPA tools together?',
    answer:
      'WAM is common for local academic tracking, while GPA is often required for external applications. Using both tools helps you communicate your performance clearly across different systems.',
  },
  {
    question: 'Do failed units matter in WAM?',
    answer:
      'In many cases, yes. Failed units can affect weighted averages depending on policy. Always verify treatment of failed or repeated units in official Monash documentation.',
  },
  {
    question: 'What is the best way to improve WAM?',
    answer:
      'Focus on high-weight assessments, track progress weekly, and review mistakes systematically. Consistent improvement across the semester usually gives better outcomes than last-minute cramming.',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Monash WAM Calculator - Calculate Your Weighted Average Mark"
        description="Use our free Monash WAM Calculator to estimate your Weighted Average Mark instantly. Includes WAM to GPA, GPA to WAM, and final grade planning tools."
        canonicalPath="/"
        faqItems={homeFaqs}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.2),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-primary-200 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <CheckCircle size={14} />
            Free • Instant Results • Mobile Friendly • No Signup Required
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Monash WAM Calculator
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Calculate your Monash University Weighted Average Mark (WAM) instantly with our free and accurate WAM calculator. Add your subjects, marks, and credit points to get your real-time WAM score.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#calculator"
              className="flex items-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-lg"
            >
              <ArrowDown size={16} />
              Calculate WAM
            </a>
            <a
              href="#how-wam-calculated"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20"
            >
              Learn How WAM Works
            </a>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <WAMCalculator />

      <ProductShowcase startIndex={1} endIndex={6} />

      {/* What is WAM */}
      <section id="what-is-wam" className="scroll-mt-20 max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen size={22} className="text-primary-600 dark:text-primary-400" />
            What is WAM at Monash University?
          </h2>
          <div className="prose prose-gray dark:prose-invert max-w-none text-sm leading-relaxed space-y-3 text-gray-600 dark:text-gray-400">
            <p>
              WAM stands for <strong className="text-gray-800 dark:text-gray-200">Weighted Average Mark</strong>. It is a numerical average used by Monash University to measure a student's overall academic performance across all completed units.
            </p>
            <p>
              Unlike GPA, which converts grades into points, WAM uses your actual percentage marks and weighs them according to the credit points of each subject.
            </p>
            <p className="font-medium text-gray-700 dark:text-gray-300">Your WAM is commonly used for:</p>
            <ul className="space-y-1.5 ml-4">
              {[
                'Academic progress tracking',
                'Scholarship applications',
                'Graduate program applications',
                'Honours eligibility',
                'Internship and job opportunities',
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p>A higher WAM generally indicates stronger academic performance.</p>
          </div>
        </div>
      </section>

      {/* How WAM is Calculated */}
      <section id="how-wam-calculated" className="scroll-mt-20 max-w-3xl mx-auto px-4 pb-10">
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">How is Monash WAM Calculated?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
            Monash University calculates WAM using a weighted formula based on your marks and the credit points of each subject. Each subject mark is multiplied by its credit points. The total weighted marks are then divided by the total credit points attempted.
          </p>

          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-4 mb-6 text-center">
            <p className="text-sm text-primary-700 dark:text-primary-300 font-medium mb-1">WAM Formula</p>
            <p className="font-mono text-primary-800 dark:text-primary-200 text-base font-bold">
              WAM = &Sigma;(Mark &times; Credit Points) &divide; &Sigma;(Credit Points)
            </p>
          </div>

          <h3 className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-3">Example Calculation</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold rounded-tl-lg">Unit</th>
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold">Mark</th>
                  <th className="text-left px-4 py-2 text-gray-600 dark:text-gray-400 font-semibold rounded-tr-lg">Credits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {[
                  { unit: 'FIT1045', mark: 80, credits: 6 },
                  { unit: 'MAT1830', mark: 75, credits: 6 },
                  { unit: 'ENG1005', mark: 70, credits: 6 },
                ].map(row => (
                  <tr key={row.unit} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-200 font-medium">{row.unit}</td>
                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.mark}</td>
                    <td className="px-4 py-2 text-gray-600 dark:text-gray-400">{row.credits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            Using the above example, the calculated WAM would be <strong className="text-gray-800 dark:text-gray-200">75.00</strong>.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Articles */}
      <ArticlesSection />

      <InternalLinks links={getPageKeywordLinks('/')} />

    </>
  );
}
