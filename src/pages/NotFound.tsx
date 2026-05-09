import Seo from '../components/Seo';
import LongFormContent from '../components/LongFormContent';
import PageFaq from '../components/PageFaq';
import InternalLinks from '../components/InternalLinks';

const notFoundFaqs = [
  {
    question: 'Why am I seeing a 404 page?',
    answer:
      'The URL may be incorrect, outdated, or removed. Use the main navigation to reach active calculator and policy pages.',
  },
  {
    question: 'How do I find the correct calculator page?',
    answer:
      'Go to the homepage and use the navigation links for WAM Calculator, WAM to GPA, GPA to WAM, and Final Grade tools.',
  },
  {
    question: 'Can this affect SEO performance?',
    answer:
      'Handled correctly, 404 pages can still support SEO by guiding users to valid content and preventing dead-end experiences.',
  },
  {
    question: 'What should I do if a link is broken?',
    answer:
      'Return to the homepage and navigate from the top menu. If a recurring issue appears, report the broken route for correction.',
  },
];

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Monash WAM Calculator"
        description="The requested page could not be found. Explore Monash WAM Calculator tools including WAM, GPA conversion, and final grade calculators."
        canonicalPath="/404"
        faqItems={notFoundFaqs}
        noIndex
      />

      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">404 - Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-5 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-colors"
        >
          Back to Home
        </a>
      </section>
      <LongFormContent topic="navigation recovery, internal linking, and page discovery" />
      <PageFaq title="404 Page FAQs" items={notFoundFaqs} />
      <InternalLinks title="Go to Main Site Sections" />
    </>
  );
}
