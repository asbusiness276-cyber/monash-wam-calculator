import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [aboutArticles, aboutContact] = PAGE_KEYWORD_LINKS['/about-us'];

const aboutFaqs = [
  {
    question: 'Who should use this website?',
    answer:
      'Monash University students and other Australian undergraduates planning WAM, GPA conversion, semester targets, and exam marks can use this platform for fast academic estimates.',
  },
  {
    question: 'Who publishes the content?',
    answer:
      'Editorial guides and calculator documentation are produced by Saahil and reviewed for clarity, factual accuracy, and student usefulness before publication.',
  },
  {
    question: 'Is this service free?',
    answer:
      'Yes, core calculators and articles are freely accessible. The site may display advertising to help maintain the platform.',
  },
  {
    question: 'How can students use this for long-term planning?',
    answer:
      'Combine the main WAM calculator with target, projection, and final-grade tools each semester. Read strategy articles for honours, scholarships, and recovery planning.',
  },
];

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About Us | Monash WAM Calculator"
        description="Learn about Monash WAM Calculator — who we are, our editorial mission, and how we help students estimate WAM, GPA, and grade targets."
        canonicalPath="/about-us"
        faqItems={aboutFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Monash WAM Calculator is an independent education website built for students who need clear, fast answers
            about weighted averages, grade bands, and semester planning. We combine free calculators with long-form
            guides so you can move from a quick estimate to a realistic study plan. Browse{' '}
            <a href={absoluteUrl(aboutArticles.path)} className={INLINE_LINK_CLASS}>{aboutArticles.keyword}</a>
            {' '}for strategy content, or reach out through{' '}
            <a href={absoluteUrl(aboutContact.path)} className={INLINE_LINK_CLASS}>{aboutContact.keyword}</a>.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Who We Are</h2>
            <p>
              The site is maintained by {ARTICLE_AUTHOR.name}, who writes practical guides on WAM, GPA, and university
              planning for Australian students. {ARTICLE_AUTHOR.bio} We are not affiliated with Monash University and do
              not speak on behalf of any faculty or admissions office.
            </p>
            <p className="mt-2">
              Contact the editorial team at{' '}
              <a href={`mailto:${ARTICLE_AUTHOR.email}`} className={INLINE_LINK_CLASS}>{ARTICLE_AUTHOR.email}</a>
              {' '}for corrections, topic suggestions, or contributor enquiries.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What We Provide</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Official-style Monash WAM calculator with year-level weighting and planning WAM</li>
              <li>WAM to GPA and GPA to WAM conversion tools</li>
              <li>Final grade, unit mark, unit target, and mark-to-grade calculators</li>
              <li>WAM target, WAM projection, semester WAM, and supplementary vs repeat planners</li>
              <li>13+ student articles on honours, scholarships, credit points, transcripts, and recovery</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Editorial Standards</h2>
            <p>
              Every article and calculator page is written for real student decisions — not keyword filler. We explain
              Monash grading logic in plain language, show worked examples, and link related tools so readers can verify
              numbers themselves. When university policy can change by faculty or year, we say so and point you to official
              Monash sources for final confirmation.
            </p>
            <p className="mt-2">
              We do not publish guaranteed outcomes, paid link schemes disguised as advice, or thin pages with only a
              widget and no explanation. Calculator maths is tested with automated checks, and editorial content is
              updated when grading guidance or common student questions shift.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Goal</h2>
            <p>
              We aim to be the most useful free WAM planning hub for Monash students: accurate tools, readable guides,
              and honest disclaimers. Whether you are tracking honours eligibility, comparing WAM to GPA for postgraduate
              applications, or recovering after a failed unit, the site should give you a starting point you can trust.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Note</h2>
            <p>
              Results from any calculator on this site are estimates for planning only. Official WAM, grades, and
              progression rules appear on your Monash transcript, WES, and faculty handbooks. Always verify critical
              decisions — honours entry, scholarship deadlines, supp eligibility — with Monash directly.
            </p>
          </div>
        </div>
      </section>
      <PageFaq title="About Us FAQs" items={aboutFaqs} />
    </>
  );
}
