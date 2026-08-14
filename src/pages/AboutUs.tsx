import type { ReactNode } from 'react';
import { BookOpen, Calculator, ShieldCheck, Target, Users } from 'lucide-react';
import AuthorAvatar from '../components/AuthorAvatar';
import AuthorSocialLinks from '../components/AuthorSocialLinks';
import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { ARTICLE_AUTHOR, AUTHOR_PAGE_PATH } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';
import { articles } from '../data/articles';
import { CALCULATOR_COUNT } from '../data/calculatorCatalog';

const [aboutArticles, aboutContact] = PAGE_KEYWORD_LINKS['/about-us'];
const [aboutHomeCalc] = PAGE_KEYWORD_LINKS['/'];

const ARTICLE_COUNT = articles.length;

const aboutFaqs = [
  {
    question: 'Who should use My Calculator Hub?',
    answer:
      'the university coursework students who need WAM, GPA, semester averages, exam targets, honours cutoffs, scholarship planning bands, or fail-recovery modelling. The tools are built around Uni grading rules — Year 1 half-weighting, credit-point weighting, and official 4.0 GPA bands.',
  },
  {
    question: 'Who writes and maintains the site?',
    answer: `${ARTICLE_AUTHOR.name} produces editorial guides and calculator documentation. Content is written for clarity, checked against Uni grading references, and updated when student questions or policy wording changes — not auto-generated filler.`,
  },
  {
    question: 'Is My Calculator Hub affiliated with the university?',
    answer:
      'No. This is an independent student resource. We are not endorsed by the university, any faculty, or admissions office. Always verify official outcomes on WES and your transcript.',
  },
  {
    question: 'Is the site free?',
    answer:
      'Yes. All calculators and articles are free. The site may show advertising to help cover hosting and maintenance.',
  },
  {
    question: 'How accurate are the calculators?',
    answer:
      'With correct marks, credit points, and year levels, WAM and GPA results follow Uni published formulas. Calculator maths is tested with automated scripts. Special grade codes, repeats, withdrawn fail (WN), or faculty-specific exclusions may still differ from WES — use official records for formal decisions.',
  },
  {
    question: 'Do you store my marks when I use a calculator?',
    answer:
      'No. Calculations run in your browser. We do not ask you to create an account or upload a transcript to use the tools. See our privacy policy for analytics and cookie details.',
  },
  {
    question: 'How many tools and guides are available?',
    answer: `${CALCULATOR_COUNT} free calculators and ${ARTICLE_COUNT} long-form student guides, updated as Uni student questions evolve.`,
  },
  {
    question: 'Can I suggest a new calculator or article?',
    answer:
      'Yes. Use the contact page and describe your use case — for example honours planning, a faculty-specific workflow, or a WES field students struggle to interpret. Clear requests help us prioritise useful additions.',
  },
];

const popularLinks = [
  { label: 'My Calculator Hub', href: '/' },
  { label: 'WAM to GPA', href: '/wam-to-gpa-calculator' },
  { label: 'Semester WAM', href: '/semester-wam-calculator' },
  { label: 'WAM Target', href: '/wam-target-calculator' },
  { label: 'Final Grade', href: '/final-grade-calculator' },
  { label: 'All calculators', href: '/calculators' },
  { label: 'Student articles', href: '/articles' },
];

const missionPoints = [
  'Turn WES numbers into actionable semester plans — not anxiety without next steps.',
  'Explain Uni-specific rules (Year 1 weighting, credit points, supp caps) in plain language.',
  'Pair every major calculator with worked examples, mistakes to avoid, and links to related tools.',
  'Stay honest about limits: planning estimates are not official faculty decisions.',
];

const audienceRows = [
  ['First-year coursework students', 'Learning how WAM differs from high school averages', 'Semester WAM, Year 1 weighting guide'],
  ['Mid-degree planners', 'Modelling targets for distinction average or honours entry', 'WAM target, distinction average, honours calculators'],
  ['Scholarship applicants', 'Checking merit bands on remaining credit points', 'Scholarship WAM, WAM to GPA'],
  ['Recovery after a fail', 'Comparing supp pass vs repeat impact on WAM', 'Failed unit, supp/repeat, withdrawn fail tools'],
  ['Exchange & transfer students', 'Understanding SFR credit and GPA reporting', 'Exchange WAM, GPA conversion guides'],
];

function ContentCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof BookOpen;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
        <Icon size={20} className="text-primary-600 dark:text-primary-400 shrink-0" />
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About Us | My Calculator Hub — Who We Are"
        description={`Independent WAM calculator site by ${ARTICLE_AUTHOR.name}: ${CALCULATOR_COUNT} free tools, ${ARTICLE_COUNT} student guides, Uni-specific formulas, editorial standards, and honest planning disclaimers.`}
        canonicalPath="/about-us"
        faqItems={aboutFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">About My Calculator Hub</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Independent student resource · Not affiliated with the university · Updated July 2026
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p className="text-base">
            MyCalculatorHub.com helps Uni students calculate Weighted Average Mark (WAM), plan semester targets,
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

          <ContentCard title="Our Mission" icon={Target}>
            <p>
              Uni publishes WAM on WES, but students still ask practical questions every results period: How much
              did that 12-credit unit move my average? Can I still reach distinction average? What mark do I need on
              remaining units for a scholarship band? This site exists to answer those questions with Uni-accurate
              maths and step-by-step guides — not generic GPA blog posts written for US colleges.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-1.5">
              {missionPoints.map(point => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </ContentCard>

          <ContentCard title="Who We Are" icon={BookOpen}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <AuthorAvatar size="lg" priority />
              <div className="min-w-0">
                <p className="font-semibold text-gray-900 dark:text-white">
                  <a href={absoluteUrl(AUTHOR_PAGE_PATH)} className={INLINE_LINK_CLASS}>
                    {ARTICLE_AUTHOR.name}
                  </a>
                  <span className="font-normal text-gray-500 dark:text-gray-400"> — {ARTICLE_AUTHOR.role}</span>
                </p>
                <p className="mt-2">{ARTICLE_AUTHOR.longBio}</p>
                <AuthorSocialLinks className="mt-3" />
              </div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We do not represent the university. For official academic decisions, use WES, your transcript, Uni
              Connect, and faculty handbooks.
            </p>
          </ContentCard>

          <ContentCard title="Who This Site Is For" icon={Users}>
            <p className="mb-4">
              Tools are designed for Uni coursework students first. Other Australian undergraduates may find GPA
              conversion pages useful, but WAM weighting and grade bands follow Uni rules unless a page states
              otherwise.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-900/60">
                    <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">Student situation</th>
                    <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">Typical question</th>
                    <th className="px-3 py-2 font-semibold text-gray-600 dark:text-gray-300">Start here</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {audienceRows.map(row => (
                    <tr key={row[0]}>
                      <td className="px-3 py-2 font-medium text-gray-800 dark:text-gray-200">{row[0]}</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{row[1]}</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentCard>

          <ContentCard title="What We Provide" icon={Calculator}>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Official-style WAM with Year 1 (0.5) weighting plus planning WAM comparison</li>
              <li>Semester WAM, WAM target, WAM projection, and WAM milestones tools</li>
              <li>WAM ↔ GPA conversion, Uni GPA, CGPA, target GPA, and grade converters</li>
              <li>Final grade, unit mark, pass mark, and assessment target calculators</li>
              <li>Honours, scholarship, distinction average, dean&apos;s list, fail recovery, and exchange planners</li>
              <li>
                Long-form guides on transcripts, credit points, supplementary exams, repeats, and withdrawn fail (WN)
              </li>
            </ul>
            <p className="mt-4">
              Browse the full directory on our{' '}
              <a href={absoluteUrl('/calculators')} className={INLINE_LINK_CLASS}>
                calculators hub
              </a>{' '}
              or read category guides on the{' '}
              <a href={absoluteUrl('/articles')} className={INLINE_LINK_CLASS}>
                articles page
              </a>
              .
            </p>
          </ContentCard>

          <div className="rounded-2xl border border-primary-200 dark:border-primary-900/40 bg-primary-50/70 dark:bg-primary-950/20 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">How We Build & Test Calculators</h2>
            <p>
              Each calculator implements Uni formulas from published grading guidance — credit-weighted WAM, Year 1
              half-weight, 4.0 GPA band mapping, and assessment-weight algebra for final exam targets. We run automated
              calculator tests in CI so regression bugs are caught before deploy.
            </p>
            <p className="mt-3">
              Calculator pages include educational sections: what the tool does, step-by-step usage, worked examples,
              common mistakes, and when to use a different tool. That structure helps you interpret results, not just
              copy a number into a form.
            </p>
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

          <ContentCard title="Editorial Standards" icon={ShieldCheck}>
            <p>
              Every calculator page explains the Uni formula, when to use the tool, and how results relate to WES.
              Articles include worked examples, tables, and internal links to related tools — not thin widget-only
              pages. We test calculator maths with automated scripts and update copy when grading guidance or common
              student questions change.
            </p>
            <ul className="mt-4 list-disc list-inside space-y-1.5 text-gray-600 dark:text-gray-400">
              <li>No paid placement in guides and no guarantee of scholarship or honours outcomes</li>
              <li>Clear disclaimers when faculty rules vary by course or intake year</li>
              <li>Guest content only through our write-for-us editorial review — no spam niches</li>
              <li>Privacy-first calculator design — marks stay in your browser</li>
            </ul>
            <p className="mt-4">
              Interested in contributing? Read{' '}
              <a href={absoluteUrl('/write-for-us')} className={INLINE_LINK_CLASS}>
                write for us
              </a>{' '}
              guidelines before pitching.
            </p>
          </ContentCard>

          <div className="rounded-2xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/60 dark:bg-amber-950/20 p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Disclaimer</h2>
            <p>
              Calculator results are planning estimates only. Official WAM, GPA, grades, and progression rules appear on
              your Uni transcript and WES. Verify honours entry, scholarship deadlines, and supp eligibility with
              Uni directly. See our{' '}
              <a href={absoluteUrl('/disclaimer')} className={INLINE_LINK_CLASS}>
                disclaimer
              </a>
              ,{' '}
              <a href={absoluteUrl('/privacy-policy')} className={INLINE_LINK_CLASS}>
                privacy policy
              </a>
              , and{' '}
              <a href={absoluteUrl('/terms-and-conditions')} className={INLINE_LINK_CLASS}>
                terms
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
