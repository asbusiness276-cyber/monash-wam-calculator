import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import FailedUnitWamToolCore from '../components/FailedUnitWamToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [failArticle] = PAGE_KEYWORD_LINKS['/failed-unit-wam-calculator'];

const faqs = [
  {
    question: 'How much does a failed unit drop WAM?',
    answer:
      'It depends on your current WAM, total credit points, and the failed unit size. A 6-credit fail hurts less than a 12-credit fail.',
  },
  {
    question: 'Does a supplementary pass at 50 help WAM?',
    answer:
      'Yes. Replacing a fail with a 50 capped supplementary pass raises WAM compared to keeping the fail mark.',
  },
  {
    question: 'Should I include the fail in my current WAM input?',
    answer:
      'Yes. Enter your WAM as it appears on WES with the fail already counted, then compare recovery scenarios.',
  },
  {
    question: 'Is repeating better than a supplementary pass?',
    answer:
      'A repeat adds credit points and both attempts count in WAM. Use the supp vs repeat calculator for a full comparison.',
  },
  {
    question: 'Can I recover to distinction average after a fail?',
    answer:
      'Often yes, if enough high-credit units remain. Use the WAM target calculator with your remaining credit points.',
  },
];

export default function FailedUnitWam() {
  return (
    <>
      <Seo
        title="Failed Unit WAM Impact Calculator — Monash (2026)"
        description="Free failed unit WAM calculator for Monash: see how a fail, supplementary pass, or recovery marks change your weighted average."
        canonicalPath="/failed-unit-wam-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Failed Unit WAM Impact Calculator</h1>
        <p className="text-red-100 max-w-xl mx-auto">
          See how a failed unit affects your Monash WAM — and what changes if you pass via supp or recover the mark.
        </p>
        <p className="text-red-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Compare pathways with the{' '}
          <a href={absoluteUrl('/supp-repeat-wam-calculator')} className={HERO_INLINE_LINK_CLASS}>
            supp vs repeat calculator
          </a>
          . Read our{' '}
          <a href={absoluteUrl(failArticle.path)} className={HERO_INLINE_LINK_CLASS}>{failArticle.keyword}</a>{' '}
          guide.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-8">
        <FailedUnitWamToolCore />
      </section>
      <RelatedCalculators
        hrefs={['/supp-repeat-wam-calculator', '/wam-target-calculator', '/', '/wam-projection-calculator']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
