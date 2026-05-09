import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [termsPrivacy, termsContact] = PAGE_KEYWORD_LINKS['/terms-and-conditions'];

const termsFaqs = [
  {
    question: 'Can I rely on calculator outputs as official records?',
    answer:
      'No. Outputs are informational estimates and should not replace official academic records or policy-confirmed outcomes.',
  },
  {
    question: 'Is automated scraping or abuse allowed?',
    answer:
      'No. Actions that degrade performance, violate security, or disrupt service availability are not allowed under these terms.',
  },
  {
    question: 'Can terms change over time?',
    answer:
      'Yes. Terms may be updated as the platform evolves. Continued use after updates indicates acceptance of revised terms.',
  },
  {
    question: 'Do these terms cover third-party links?',
    answer:
      'Third-party sites have separate terms and policies. You should review them directly before using those services.',
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Terms and Conditions | Monash WAM Calculator"
        description="Review the terms for using Monash WAM Calculator, including acceptable use, intellectual property, and limitation of liability."
        canonicalPath="/terms-and-conditions"
        faqItems={termsFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Terms and Conditions</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Last updated: May 8, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            By using Monash WAM Calculator, you agree to these terms. If you do not agree, please discontinue use of
            the website. For how we handle data, read our{' '}
            <a href={absoluteUrl(termsPrivacy.path)} className={INLINE_LINK_CLASS}>{termsPrivacy.keyword}</a>
            , and for enquiries you can use{' '}
            <a href={absoluteUrl(termsContact.path)} className={INLINE_LINK_CLASS}>{termsContact.keyword}</a>.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Informational Use</h2>
            <p>
              Calculators and articles are provided for educational and informational purposes. Results are estimates and
              should not be treated as official academic records.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">2. User Responsibility</h2>
            <p>
              You are responsible for verifying outputs against official university policies and transcripts before making
              academic decisions.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">3. Acceptable Use</h2>
            <p>
              You agree not to misuse the website, interfere with service availability, or attempt unauthorized access to
              systems or data.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Intellectual Property</h2>
            <p>
              Website content, branding, and custom tools are owned by the site operators unless otherwise stated.
              Reproduction or redistribution requires prior permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for any direct or indirect loss resulting from
              use of the site, including reliance on calculator outputs.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">6. Changes to Terms</h2>
            <p>
              We may update these terms periodically. Continued use of the website after updates indicates acceptance of
              the revised terms.
            </p>
          </div>
        </div>
      </section>
      <PageFaq title="Terms & Conditions FAQs" items={termsFaqs} />
    </>
  );
}
