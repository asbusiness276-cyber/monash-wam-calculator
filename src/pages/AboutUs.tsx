import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [aboutArticles, aboutContact] = PAGE_KEYWORD_LINKS['/about-us'];

const aboutFaqs = [
  {
    question: 'Who should use this website?',
    answer:
      'Students planning WAM, GPA conversion, and final grade targets can use this platform for fast academic estimates and planning workflows.',
  },
  {
    question: 'What makes this tool useful?',
    answer:
      'It combines practical calculators, explanatory content, and strategy-focused guidance in one place to support better semester decisions.',
  },
  {
    question: 'Is this service free?',
    answer:
      'Yes, core calculators are freely accessible. Some pages may contain affiliate links that help maintain and improve the platform.',
  },
  {
    question: 'How can students use this for long-term planning?',
    answer:
      'Use periodic recalculation, trend tracking, and realistic target bands each semester to improve decisions around study time and applications.',
  },
];

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About Us | Monash WAM Calculator"
        description="Learn about Monash WAM Calculator, our mission, and how we help students estimate WAM, GPA, and final grade targets."
        canonicalPath="/about-us"
        faqItems={aboutFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Monash WAM Calculator was built to help students quickly understand their academic standing using clear,
            accessible tools. Our focus is speed, simplicity, and practical guidance. Browse{' '}
            <a href={absoluteUrl(aboutArticles.path)} className={INLINE_LINK_CLASS}>{aboutArticles.keyword}</a>
            {' '}for strategy guides, or reach out through{' '}
            <a href={absoluteUrl(aboutContact.path)} className={INLINE_LINK_CLASS}>{aboutContact.keyword}</a>.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">What We Provide</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Monash WAM calculator with weighted unit support</li>
              <li>WAM to GPA and GPA to WAM conversion tools</li>
              <li>Final grade target calculator for exam planning</li>
              <li>Mark to grade, WAM target, WAM projection, unit target, semester WAM, unit mark, and supplementary vs repeat calculators</li>
              <li>Student-friendly guides and reference information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Goal</h2>
            <p>
              We aim to provide reliable academic calculators that help students plan smarter semesters, set realistic
              targets, and make informed decisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Important Note</h2>
            <p>
              We are an independent website and not affiliated with Monash University. Always verify critical decisions
              with official university sources.
            </p>
          </div>
        </div>
      </section>
      <PageFaq title="About Us FAQs" items={aboutFaqs} />
    </>
  );
}
