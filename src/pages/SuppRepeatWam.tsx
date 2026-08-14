import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import SuppRepeatToolCore from '../components/SuppRepeatToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';
import { uniSupplementaryPassMark } from '../utils/uniGrades';

const [srHome, srFailed] = PAGE_KEYWORD_LINKS['/supp-repeat-wam-calculator'];

const suppRepeatFaqs = [
  {
    question: 'What mark do you get if you pass a Uni supplementary?',
    answer: `If you pass a supplementary assessment, your final unit result is capped at ${uniSupplementaryPassMark}% (P). You cannot score higher through supplementary.`,
  },
  {
    question: 'Does a failed supplementary change WAM?',
    answer:
      'If you fail or do not complete the supplementary, your original fail mark (N or NH) usually remains and WAM stays as-is for that unit.',
  },
  {
    question: 'How does repeating a unit affect WAM?',
    answer:
      'Uni includes both failed and repeated unit attempts in WAM. A repeat adds another weighted entry — it does not automatically remove the first fail from your average.',
  },
  {
    question: 'Is repeat or supplementary better for WAM?',
    answer:
      'It depends on your fail mark, unit credit points, and what you could realistically score on a repeat. Use this calculator to compare supplementary pass (50%) against your planned repeat mark.',
  },
  {
    question: 'Where do I get my current WAM and credit points?',
    answer:
      'Check WES or your academic transcript for cumulative WAM, unit marks, and credit points. Include the failed unit when entering current WAM.',
  },
  {
    question: 'Is this official Uni advice?',
    answer:
      'No. This is an independent planning calculator. Always confirm supplementary eligibility, repeat enrolment rules, and official WAM with Uni student services.',
  },
];

export default function SuppRepeatWam() {
  return (
    <>
      <Seo
        title="Supplementary vs Repeat WAM Calculator - Uni Fail Recovery (2026)"
        description="Compare Uni supplementary pass (50% cap) vs repeating a failed unit. Free calculator shows WAM impact for fail recovery planning."
        canonicalPath="/supp-repeat-wam-calculator"
        faqItems={suppRepeatFaqs}
      />

      <section className="bg-gradient-to-br from-rose-700 to-rose-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Supplementary vs Repeat WAM Calculator</h1>
        <p className="text-rose-100 max-w-2xl mx-auto">
          Failed a unit? Compare how a Uni supplementary pass (capped at {uniSupplementaryPassMark}%) stacks up
          against retaking the unit — both affect your WAM differently.
        </p>
        <p className="text-rose-100/95 max-w-2xl mx-auto text-sm mt-4 leading-relaxed">
          Verify current WAM with the{' '}
          <a href={absoluteUrl(srHome.path)} className={HERO_INLINE_LINK_CLASS}>{srHome.keyword}</a>
          . Read recovery context in our{' '}
          <a href={absoluteUrl(srFailed.path)} className={HERO_INLINE_LINK_CLASS}>{srFailed.keyword}</a>{' '}
          guide.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/supp-repeat-wam-calculator">
        <SuppRepeatToolCore />

        <div className="mt-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 space-y-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">How Uni Treats Each Path</h2>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3 leading-relaxed">
            <p>
              <strong className="text-gray-800 dark:text-gray-200">Supplementary:</strong> eligible fails (often 45–49%
              with NS) get one last chance. Pass → unit becomes {uniSupplementaryPassMark}% (P). Fail → original mark
              stays.
            </p>
            <p>
              <strong className="text-gray-800 dark:text-gray-200">Repeat:</strong> you enrol again and can earn any
              mark, but WAM counts <em>both</em> the failed attempt and the repeat in the credit-weighted
              average.
            </p>
            <p>
              Example: WAM 68.25 on 24 cp with a 48% fail in 6 cp → supplementary pass lifts WAM to about 68.75. A
              repeat at 75% gives about 69.60 because both attempts count.
            </p>
          </div>
        </div>
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/supp-repeat-wam-calculator" />
      <RelatedCalculators
        hrefs={['/', '/wam-target-calculator', '/final-grade-calculator', '/uni-gpa-calculator', '/wam-to-gpa-calculator', '/supp-repeat-wam-calculator']}
        title="Related Planning Tools"
      />
      <PageFaq items={suppRepeatFaqs} />
    </>
  );
}
