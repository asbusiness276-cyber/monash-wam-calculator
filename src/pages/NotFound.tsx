import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [notFoundHome, notFoundWtg] = PAGE_KEYWORD_LINKS['/404'];

const notFoundFaqs = [
  {
    question: 'Why am I seeing a 404 page?',
    answer:
      'The URL may be incorrect, outdated, or removed. Use the main navigation to reach active calculator and policy pages.',
  },
  {
    question: 'How do I find the correct calculator page?',
    answer:
      'Open the calculators directory for all 26 tools, or use the homepage navigation for WAM, GPA, and final grade calculators.',
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
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
          The page you are looking for does not exist or may have been moved. Try the{' '}
          <a href={absoluteUrl(notFoundHome.path)} className={INLINE_LINK_CLASS}>{notFoundHome.keyword}</a>
          {' '}homepage, or continue with the{' '}
          <a href={absoluteUrl(notFoundWtg.path)} className={INLINE_LINK_CLASS}>{notFoundWtg.keyword}</a>
          {' '}if you were converting grades, or browse{' '}
          <a href={absoluteUrl('/calculators')} className={INLINE_LINK_CLASS}>all calculators</a>.
        </p>
      </section>
      <PageFaq title="404 Page FAQs" items={notFoundFaqs} />
    </>
  );
}
