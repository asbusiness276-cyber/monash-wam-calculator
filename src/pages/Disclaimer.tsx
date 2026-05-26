import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import { absoluteUrl, INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [disclaimerPrivacy, disclaimerTerms] = PAGE_KEYWORD_LINKS['/disclaimer'];

const disclaimerFaqs = [
  {
    question: 'Is this website affiliated with Monash University?',
    answer:
      'No. This platform is independent and educational. It is not an official Monash University service or representation.',
  },
  {
    question: 'Can I use calculator outputs for formal submissions?',
    answer:
      'Use results for planning, not as official proof. Always use transcript-backed values where formal verification is required.',
  },
  {
    question: 'Why are affiliate disclosures included?',
    answer:
      'Some pages include affiliate links to support maintenance costs. This does not add extra cost to users who choose to purchase through those links.',
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
        title="Disclaimer | Monash WAM Calculator"
        description="Read the Monash WAM Calculator disclaimer regarding academic accuracy, affiliate links, and non-affiliation with Monash University."
        canonicalPath="/disclaimer"
        faqItems={disclaimerFaqs}
      />

      <section className="max-w-3xl mx-auto px-4 pt-8 pb-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Disclaimer</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">Last updated: May 8, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Monash WAM Calculator is an independent educational tool. It is not an official Monash University website
            and is not endorsed by Monash University. Governance pages on this site include our{' '}
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
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Affiliate Disclosure</h2>
            <p>
              Some pages include affiliate links. If you purchase through these links, we may receive a commission at no
              additional cost to you.
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
