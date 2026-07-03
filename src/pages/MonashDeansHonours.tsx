import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashDeansHonoursToolCore from '../components/MonashDeansHonoursToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [deanHome, deanArticle] = PAGE_KEYWORD_LINKS['/monash-deans-honours-calculator'];

const faqs = [
  {
    question: "What WAM do you need for Monash Dean's Honours List?",
    answer:
      'It is faculty-specific and often percentile-based. Monash Business School cites top 2% by WAM — the exact mark floats each year.',
  },
  {
    question: "Is Dean's Honours List the same as honours degree H1?",
    answer:
      'No. Dean\'s list is a graduation excellence award. H1/H2A are honours degree course grades — use the honours calculator for those.',
  },
  {
    question: 'Does distinction average (WAM 70) guarantee dean\'s list?',
    answer:
      'No. Distinction average is a common planning floor. Dean\'s honours list often requires much higher percentile standing.',
  },
  {
    question: 'Do exchange units affect dean\'s list WAM?',
    answer:
      'SFR exchange credit does not add marks to WAM. Only Monash-graded units count in your weighted average.',
  },
  {
    question: 'When is WAM final for graduation awards?',
    answer:
      'When results are certified at degree completion. Recalculate after each results release in your final year.',
  },
];

export default function MonashDeansHonours() {
  return (
    <>
      <Seo
        title="Monash Dean's Honours List Calculator — WAM Planning Bands (2026)"
        description="Free Monash dean's honours list calculator: check distinction average status and faculty excellence planning bands from WAM 70 to 85+."
        canonicalPath="/monash-deans-honours-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-violet-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Dean&apos;s Honours List Calculator</h1>
        <p className="text-violet-100 max-w-xl mx-auto">
          Check your WAM against distinction average and faculty dean&apos;s list planning bands.
        </p>
        <p className="text-violet-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Calculate WAM with the{' '}
          <a href={absoluteUrl(deanHome.path)} className={HERO_INLINE_LINK_CLASS}>{deanHome.keyword}</a>
          . Read our{' '}
          <a href={absoluteUrl(deanArticle.path)} className={HERO_INLINE_LINK_CLASS}>{deanArticle.keyword}</a>{' '}
          guide.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-8">
        <MonashDeansHonoursToolCore />
      </section>
      <CalculatorPageGuide path="/monash-deans-honours-calculator" />
      <RelatedCalculators
        hrefs={['/monash-distinction-average-calculator', '/monash-scholarship-wam-calculator', '/monash-honours-calculator', '/wam-target-calculator']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
