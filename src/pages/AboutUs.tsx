import { Instagram, Linkedin, Mail, BookOpen, Calculator, ShieldCheck } from 'lucide-react';
import AuthorAvatar from '../components/AuthorAvatar';
import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';
import { articles } from '../data/articles';
import { CALCULATOR_COUNT } from '../data/calculatorCatalog';

const [aboutArticles, aboutContact] = PAGE_KEYWORD_LINKS['/about-us'];
const [aboutHomeCalc] = PAGE_KEYWORD_LINKS['/'];

const ARTICLE_COUNT = articles.length;

const aboutFaqs = [
  {
    question: 'Who should use Monash WAM Calculator?',
    answer:
      'Monash University students and Australian undergraduates who need fast, accurate estimates for WAM, GPA, semester averages, exam targets, honours planning, and scholarship benchmarks.',
  },
  {
    question: 'Who writes and maintains the site?',
    answer:
      `${ARTICLE_AUTHOR.name} produces editorial guides and calculator documentation. Content is written for clarity and checked against Monash grading references — not auto-generated filler.`,
  },
  {
    question: 'Is Monash WAM Calculator affiliated with Monash University?',
    answer:
      'No. This is an independent student resource. We are not endorsed by Monash University, any faculty, or admissions office. Always verify official outcomes on WES and your transcript.',
  },
  {
    question: 'Is the site free?',
    answer:
      'Yes. All calculators and articles are free. The site may show advertising to help cover hosting and maintenance.',
  },
  {
    question: 'How accurate are the calculators?',
    answer:
      'With correct marks, credit points, and year levels, WAM and GPA results follow Monash published formulas. Calculator maths is tested with automated scripts. Special grade codes or policy exclusions may still differ from WES — use official records for formal decisions.',
  },
  {
    question: 'How many tools and guides are available?',
    answer: `${CALCULATOR_COUNT} free calculators and ${ARTICLE_COUNT} long-form student guides, updated as Monash student questions evolve.`,
  },
];

const popularLinks = [
  { label: 'Monash WAM Calculator', href: '/' },
  { label: 'WAM to GPA', href: '/wam-to-gpa-calculator' },
  { label: 'Semester WAM', href: '/semester-wam-calculator' },
  { label: 'WAM Target', href: '/wam-target-calculator' },
  { label: 'Final Grade', href: '/final-grade-calculator' },
  { label: 'All calculators', href: '/calculators' },
  { label: 'Student articles', href: '/articles' },
];

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About Us | Monash WAM Calculator — Who We Are"
        description={`Independent Monash WAM calculator site by ${ARTICLE_AUTHOR.name}: ${CALCULATOR_COUNT} free tools, ${ARTICLE_COUNT} student guides, Monash-specific formulas, and honest planning disclaimers.`}
        canonicalPath="/about-us"
        faqItems={aboutFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">About Monash WAM Calculator</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Independent student resource · Not affiliated with Monash University · Updated July 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p className="text-base">
            MonashWAMCalculator.com helps Monash students calculate Weighted Average Mark (WAM), plan semester targets,
            and understand how grades affect honours, scholarships, and applications — with{' '}
            <strong className="text-gray-900 dark:text-white">{CALCULATOR_COUNT} free calculators</strong> and{' '}
            <strong className="text-gray-900 dark:text-white">{ARTICLE_COUNT} in-depth guides</strong>. We combine fast
            tools with readable explanations so you can move from a number to a real plan. Start with the{' '}
            <a href={absoluteUrl(aboutHomeCalc.path)} className={INLINE_LINK_CLASS}>
              {aboutHomeCalc.keyword}
            </a>
            , browse{' '}
            <a href={absoluteUrl(aboutArticles.path)} className={INLINE_LINK_CLASS}>
              {aboutArticles.keyword}
            </a>
            , or{' '}
            <a href={absoluteUrl(aboutContact.path)} className={INLINE_LINK_CLASS}>
              {aboutContact.keyword}
            </a>
            .
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { value: String(CALCULATOR_COUNT), label: 'Free calculators' },
              { value: String(ARTICLE_COUNT), label: 'Student guides' },
              { value: '100%', label: 'Free to use' },
            ].map(stat => (
              <div
                key={stat.label}
                className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 px-4 py-3 text-center"
              >
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <BookOpen size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              Who We Are
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <AuthorAvatar size="lg" priority />
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">{ARTICLE_AUTHOR.name}</p>
                <p className="mt-2">{ARTICLE_AUTHOR.bio}</p>
                <ul className="mt-3 flex flex-wrap gap-3">
                  <li>
                    <a
                      href={ARTICLE_AUTHOR.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <Linkedin size={16} aria-hidden />
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={ARTICLE_AUTHOR.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <Instagram size={16} aria-hidden />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${ARTICLE_AUTHOR.email}`}
                      className="inline-flex items-center gap-1.5 font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      <Mail size={16} aria-hidden />
                      {ARTICLE_AUTHOR.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We do not represent Monash University. For official academic decisions, use WES, your transcript, and
              faculty handbooks.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
              <Calculator size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              What We Provide
            </h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Official-style Monash WAM with Year 1 (0.5) weighting plus planning WAM comparison</li>
              <li>Semester WAM, WAM target, WAM projection, and WAM milestones tools</li>
              <li>WAM ↔ GPA conversion, Monash GPA, CGPA, target GPA, and grade converters</li>
              <li>Final grade, unit mark, pass mark, and assessment target calculators</li>
              <li>Honours, scholarship, distinction average, dean&apos;s list, fail recovery, and exchange planners</li>
              <li>Long-form guides on transcripts, credit points, supplementary exams, repeats, and withdrawn fail (WN)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Popular Starting Points</h2>
            <ul className="flex flex-wrap gap-2">
              {popularLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={absoluteUrl(link.href)}
                    className="inline-block rounded-full border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <ShieldCheck size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
              Editorial Standards
            </h2>
            <p>
              Every calculator page explains the Monash formula, when to use the tool, and how results relate to WES.
              Articles include worked examples and links to related tools — not thin widget-only pages. We test calculator
              maths with automated scripts and update copy when grading guidance or common student questions change.
            </p>
            <p className="mt-2">
              We do not guarantee outcomes, sell placement in guides, or publish misleading &quot;official&quot; claims.
              When faculty rules vary by year, we say so and point to Monash sources.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Disclaimer</h2>
            <p>
              Calculator results are planning estimates only. Official WAM, GPA, grades, and progression rules appear on
              your Monash transcript and WES. Verify honours entry, scholarship deadlines, and supp eligibility with
              Monash directly. See our{' '}
              <a href={absoluteUrl('/disclaimer')} className={INLINE_LINK_CLASS}>
                disclaimer
              </a>{' '}
              and{' '}
              <a href={absoluteUrl('/privacy-policy')} className={INLINE_LINK_CLASS}>
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <PageFaq title="About Us FAQs" items={aboutFaqs} />
    </>
  );
}
