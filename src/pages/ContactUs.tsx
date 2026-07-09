import { Mail } from 'lucide-react';
import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { ARTICLE_AUTHOR } from '../constants/author';
import { absoluteUrl, INLINE_LINK_CLASS, SOCIAL_LINK_BUTTON_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [contactPrivacy, contactHomeCalc] = PAGE_KEYWORD_LINKS['/contact-us'];

const contactFaqs = [
  {
    question: 'How can I report a calculator issue?',
    answer:
      'Email us with the page URL, your input values, expected result, and actual output so the issue can be reproduced quickly.',
  },
  {
    question: 'Can I request a new calculator feature?',
    answer:
      'Yes. Share your use case, target audience, and preferred workflow. Clear feature requests help prioritize updates that provide real student value.',
  },
  {
    question: 'Do you provide official academic advice?',
    answer:
      'No. This site provides informational tools only. For official academic guidance, please consult Monash University or your faculty advisors.',
  },
  {
    question: 'How long does it take to get a response?',
    answer:
      'Response times can vary, but genuine feedback and bug reports are reviewed as quickly as possible during active maintenance periods.',
  },
];

export default function ContactUs() {
  return (
    <>
      <Seo
        title="Contact Us | Monash WAM Calculator"
        description="Contact Monash WAM Calculator by email for feedback, issue reports, and feature suggestions related to WAM and GPA tools."
        canonicalPath="/contact-us"
        faqItems={contactFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Have feedback, found an issue, or want to suggest improvements? Email us directly — we welcome constructive
          input that helps make these student tools more accurate and useful. Our{' '}
          <a href={absoluteUrl(contactPrivacy.path)} className={INLINE_LINK_CLASS}>
            {contactPrivacy.keyword}
          </a>{' '}
          explains how we handle information, and you can jump back to the{' '}
          <a href={absoluteUrl(contactHomeCalc.path)} className={INLINE_LINK_CLASS}>
            {contactHomeCalc.keyword}
          </a>{' '}
          anytime you want fresh estimates.
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Email</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Reach us by email — include the page URL and details so we can help quickly.
          </p>
          <a
            href={`mailto:${ARTICLE_AUTHOR.email}?subject=${encodeURIComponent('Monash WAM Calculator — Website enquiry')}`}
            className={SOCIAL_LINK_BUTTON_CLASS}
          >
            <Mail size={16} className="shrink-0" aria-hidden />
            Email
          </a>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">What to include in your email</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <li>A clear subject line (for example: bug report, feature request, or general feedback)</li>
            <li>The page URL where you saw the issue or used the calculator</li>
            <li>For calculator bugs: your inputs, expected result, and what you actually saw</li>
            <li>For feature ideas: who would use it and why it would help students</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Common reasons to contact us</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <li>Calculator result looks wrong or unclear</li>
            <li>Suggestion for a new tool or article topic</li>
            <li>Partnership or write-for-us enquiry</li>
            <li>Privacy or data question about the site</li>
          </ul>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            We are an independent student resource and not affiliated with Monash University. For official academic
            decisions, please use Monash&apos;s official channels.
          </p>
        </div>
      </section>

      <PageFaq title="Contact FAQs" items={contactFaqs} />
    </>
  );
}
