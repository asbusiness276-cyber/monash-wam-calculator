import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [disclaimerPrivacy, disclaimerTerms] = PAGE_KEYWORD_LINKS['/disclaimer'];

const disclaimerFaqs = [
  {
    question: 'Is this website affiliated with the university?',
    answer:
      'No. This platform is independent and educational. It is not an official the university service or representation.',
  },
  {
    question: 'Can I use calculator outputs for formal submissions?',
    answer:
      'Use results for planning, not as official proof. Always use transcript-backed values where formal verification is required.',
  },
  {
    question: 'Who is responsible for external website content?',
    answer:
      'External websites operate independently. Their policies, content, and practices are controlled by their own owners.',
  },
];

export default function Disclaimer() {
  return (
    <>
      <Seo
        title="Disclaimer | My Calculator Hub"
        description="Read the My Calculator Hub disclaimer regarding academic accuracy and non-affiliation with the university."
        canonicalPath="/disclaimer"
        faqItems={disclaimerFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Last updated: May 8, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            My Calculator Hub is an independent educational tool. It is not an official the university website
            and is not endorsed by the university. Governance pages on this site include our{' '}
            <a href={absoluteUrl(disclaimerPrivacy.path)} className={INLINE_LINK_CLASS}>{disclaimerPrivacy.keyword}</a>
            {' '}and{' '}
            <a href={absoluteUrl(disclaimerTerms.path)} className={INLINE_LINK_CLASS}>{disclaimerTerms.keyword}</a>.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Academic Accuracy</h2>
            <p>
              We aim to provide accurate formulas and examples, but calculator results may differ from official outcomes
              due to course rules, exclusions, or policy updates.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Academic Advice</h2>
            <p>
              Content on this website is general information only and does not constitute academic, legal, or
              professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">External Sites</h2>
            <p>
              We are not responsible for the content, policies, or availability of third-party websites linked from this
              platform.
            </p>
          </div>
        </div>
      </section>
      <PageFaq title="Disclaimer FAQs" items={disclaimerFaqs} />
    </>
  );
}
