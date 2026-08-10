import { ArrowRight, Calculator } from 'lucide-react';
import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import {
  ALL_CALCULATOR_LINKS,
  CALCULATOR_CATEGORIES,
  CALCULATOR_COUNT,
} from '../data/calculatorCatalog';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [calcHome, calcArticles] = PAGE_KEYWORD_LINKS['/calculators'];

const faqs = [
  {
    question: 'How many free calculators does this site offer?',
    answer: `We publish ${CALCULATOR_COUNT} free Monash-focused calculators covering WAM, GPA, exam targets, scholarships, honours, failed units, and exchange planning — all without signup.`,
  },
  {
    question: 'Which calculator should I use first?',
    answer:
      'Start with the Monash WAM calculator for your cumulative weighted average. Add WAM target or projection tools when planning future semesters, or GPA calculators when applications ask for grade points.',
  },
  {
    question: 'Are these official Monash University tools?',
    answer:
      'No. This is an independent student resource using Monash published formulas for planning. Always verify results on WES and your official transcript.',
  },
  {
    question: 'Do calculators work on mobile?',
    answer:
      'Yes. Every tool runs in your browser, updates as you type, and works on phones and tablets without installing an app.',
  },
  {
    question: 'Where can I read longer guides?',
    answer:
      'Browse our student articles for honours, scholarships, credit points, supplementary exams, exchange grades, and recovery planning — each links to relevant calculators.',
  },
];

export default function Calculators() {
  return (
    <>
      <Seo
        title={`All Monash Calculators — ${CALCULATOR_COUNT} Free WAM & GPA Tools (2026)`}
        description={`Browse ${CALCULATOR_COUNT} free Monash calculators: WAM, GPA, CGPA, final grade, scholarship targets, honours, failed unit impact, exchange planning, and more.`}
        canonicalPath="/calculators"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-gray-900 text-white py-12 md:py-14 px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-primary-200 text-xs font-medium px-3 py-1.5 rounded-full mb-4">
          <Calculator size={14} aria-hidden />
          {CALCULATOR_COUNT} free tools
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">All Monash Calculators</h1>
        <p className="text-primary-100 max-w-2xl mx-auto leading-relaxed">
          Every WAM, GPA, exam, and merit planning tool in one place — built for Monash University students with
          formulas, guides, and FAQs on each page.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div className="max-w-3xl space-y-5">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Built for Monash Coursework Maths</h2>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Every tool on this page uses Monash-published grading bands and credit-weighted formulas — WAM with
              Year 1 half-weighting where applicable, official 4.0 grade points for GPA and CGPA, and standard HD/D/C/P
              cut-offs for conversions. Calculators update live in your browser; nothing is stored on a server and no
              account is required. Each page includes a full written guide with formulas, worked examples, and FAQs —
              not just an input form with two sentences of filler.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              This is an independent student resource. Results are for planning and orientation. Always verify final
              figures on WES and your official transcript before scholarship, honours, or employment submissions.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Pick Your Starting Point</h2>
            <ul className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
              <li><strong className="text-gray-800 dark:text-gray-200">New to Monash?</strong> Start with the homepage WAM calculator, then semester WAM for one teaching period.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Chasing a target?</strong> Use WAM target, projection, or unit target tools before exams.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Forms ask for GPA?</strong> Open WAM to GPA, percentage to GPA, or CGPA calculators in the GPA category.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Recovery semester?</strong> Model failed units, supps, repeats, and withdrawn fail impact.</li>
              <li><strong className="text-gray-800 dark:text-gray-200">Merit planning?</strong> Check distinction average, scholarship WAM, honours, and Dean&apos;s honours tools.</li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">How to Choose a Calculator</h2>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mb-4">
            Monash students track academic performance in several ways. <strong className="text-gray-800 dark:text-gray-200">WAM</strong>{' '}
            (Weighted Average Mark) uses percentage marks weighted by credit points — it is the primary metric on
            Australian transcripts. <strong className="text-gray-800 dark:text-gray-200">GPA</strong> converts letter grades to
            points on a 4.0 scale. Use the{' '}
            <a href={absoluteUrl(calcHome.path)} className={INLINE_LINK_CLASS}>{calcHome.keyword}</a>
            {' '}for cumulative WAM, then pick specialised tools below for semester tracking, exam targets, scholarship
            tiers, or honours classification.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Each calculator page includes a full guide — formula explanation, worked examples, and FAQs — not just an
            input form. For strategy articles, visit our{' '}
            <a href={absoluteUrl(calcArticles.path)} className={INLINE_LINK_CLASS}>{calcArticles.keyword}</a>.
          </p>
        </div>

        {CALCULATOR_CATEGORIES.map(category => (
          <div key={category.id}>
            <div className="mb-5">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-2xl">{category.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.links.map(link => (
                <a
                  key={link.href}
                  href={absoluteUrl(link.href)}
                  className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 shadow-sm hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {link.title}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-1">
                    {link.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400">
                    Open calculator
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden />
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-50 dark:bg-gray-900/40 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Quick Reference: All Tools</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {ALL_CALCULATOR_LINKS.map(link => (
              <li key={link.href}>
                <a href={absoluteUrl(link.href)} className={INLINE_LINK_CLASS}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        
      </section>

      <PageFaq items={faqs} />
    </>
  );
}
