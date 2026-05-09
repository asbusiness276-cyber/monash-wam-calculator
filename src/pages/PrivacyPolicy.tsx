import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [privacyTerms, privacyDisclaimer] = PAGE_KEYWORD_LINKS['/privacy-policy'];

const privacyFaqs = [
  {
    question: 'Do you store my calculator marks permanently?',
    answer:
      'Core calculator usage is designed to work client-side. Any analytics collection is limited and focused on improving site quality, not building personal academic profiles.',
  },
  {
    question: 'Do you sell personal data?',
    answer:
      'No, this website does not sell personal information. Data practices are limited to service improvement, security, and operational functionality.',
  },
  {
    question: 'Are cookies required?',
    answer:
      'Essential functions may use lightweight cookies or local storage. You can disable cookies, but some usability features may be reduced.',
  },
  {
    question: 'How should I share sensitive information?',
    answer:
      'Avoid submitting sensitive academic or identity documents through general web forms unless explicitly requested through a secure official channel.',
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Monash WAM Calculator"
        description="Read how Monash WAM Calculator collects, uses, and protects your data while using our WAM and GPA conversion tools."
        canonicalPath="/privacy-policy"
        faqItems={privacyFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Last updated: May 8, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Monash WAM Calculator is designed to be privacy-friendly. The calculator works directly in your browser, and
            we do not require account sign-up to access core features. Please read this policy alongside our{' '}
            <a href={absoluteUrl(privacyTerms.path)} className={INLINE_LINK_CLASS}>{privacyTerms.keyword}</a>
            {' '}and{' '}
            <a href={absoluteUrl(privacyDisclaimer.path)} className={INLINE_LINK_CLASS}>{privacyDisclaimer.keyword}</a>.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Information We Collect</h2>
            <p>
              We may collect limited technical data such as browser type, device type, referrer, and anonymized usage
              events to improve performance and content quality. We do not intentionally collect sensitive academic
              records unless you manually submit them through a support channel.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. How We Use Information</h2>
            <p>
              Collected information is used to improve calculator accuracy, page speed, content relevance, and security.
              We do not sell personal information to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Cookies and Tracking</h2>
            <p>
              This website may use essential cookies and basic analytics tools to understand site usage. You can disable
              cookies in your browser settings, though some features may not function as intended.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Third-Party Links</h2>
            <p>
              Some pages include external links, including affiliate links. Third-party websites have their own privacy
              policies and we are not responsible for their content or practices.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5. Data Security</h2>
            <p>
              We apply reasonable technical measures to protect site integrity, but no web platform can guarantee
              absolute security. Please avoid sharing confidential personal information through public forms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">6. Contact</h2>
            <p>
              If you have questions about this policy, please contact us through the official contact details listed on
              the site.
            </p>
          </div>
        </div>
      </section>
      <PageFaq title="Privacy Policy FAQs" items={privacyFaqs} />
    </>
  );
}
