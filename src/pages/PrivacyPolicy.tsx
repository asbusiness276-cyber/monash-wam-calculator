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
      'Essential functions may use lightweight cookies or local storage. Advertising partners such as Google AdSense may also set cookies when ads are displayed. You can disable cookies, but some features may be reduced.',
  },
  {
    question: 'Does this site use Google AdSense?',
    answer:
      'We may display third-party advertisements through Google AdSense or similar programmes. These services use cookies to serve and measure ads. You can manage personalized advertising at Google Ad Settings.',
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

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Last updated: May 29, 2026</p>

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
              This website may use essential cookies, local storage, and basic analytics tools to understand site usage
              and improve performance. Third-party advertising services, including Google AdSense when enabled, may use
              cookies, web beacons, and similar technologies to deliver ads, limit ad frequency, and measure campaign
              effectiveness.
            </p>
            <p className="mt-2">
              When you first visit, a cookie consent banner lets you choose <strong>Essential only</strong> or{' '}
              <strong>Accept all</strong>. Essential-only mode keeps calculator tools working without loading Google
              Analytics or AdSense scripts. Accept all enables analytics and advertising cookies described in this
              policy.
            </p>
            <p className="mt-2">
              You can disable cookies in your browser settings, though some features may not function as intended. For
              personalized advertising from Google, visit{' '}
              <a
                href="https://www.google.com/settings/ads"
                className={INLINE_LINK_CLASS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ad Settings
              </a>
              . You can also learn how Google uses data from partner sites at{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                className={INLINE_LINK_CLASS}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google&apos;s partner sites policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Advertising (Google AdSense)</h2>
            <p>
              Monash WAM Calculator may display advertisements provided by Google AdSense or other advertising partners
              to help fund free calculator tools and editorial content. Ad partners may collect information such as your
              IP address, browser type, pages visited, and ad interactions to show relevant ads and report performance.
            </p>
            <p className="mt-2">
              We do not sell your personal academic data to advertisers. Calculator inputs are processed locally in your
              browser and are not transmitted to ad networks as part of normal calculator use. Advertising cookies are
              separate from calculator functionality.
            </p>
            <p className="mt-2">
              Non-personalized ads may still appear if you opt out of personalized advertising.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5. Third-Party Links</h2>
            <p>
              Some pages include external links to official university resources and other references. Third-party websites have their own privacy
              policies and we are not responsible for their content or practices.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">6. Data Security</h2>
            <p>
              We apply reasonable technical measures to protect site integrity, but no web platform can guarantee
              absolute security. Please avoid sharing confidential personal information through public forms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">7. Contact</h2>
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
