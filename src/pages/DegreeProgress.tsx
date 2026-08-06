import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import DegreeProgressToolCore from '../components/DegreeProgressToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [dpHome, dpArticle] = PAGE_KEYWORD_LINKS['/degree-progress-calculator'];

const faqs = [
  {
    question: 'How many credit points is a Monash bachelor degree?',
    answer:
      'Most Monash bachelor courses are 192 credit points. Some courses differ — check your faculty handbook for your exact total.',
  },
  {
    question: 'How do I find completed credit points?',
    answer:
      'Sum credit points from completed units on WES or your academic transcript. Do not include units still in progress unless results are final.',
  },
  {
    question: 'Does exchange SFR credit count toward progress?',
    answer:
      'Approved exchange credit points count toward degree completion even though they do not affect WAM. Include them in completed cp when faculty credit is granted.',
  },
  {
    question: 'How accurate is the semesters remaining estimate?',
    answer:
      'It divides remaining cp by your entered cp-per-semester load. Actual semesters depend on prerequisites, part-time study, and summer units.',
  },
  {
    question: 'How does this relate to WAM?',
    answer:
      'Credit progress tracks degree completion. WAM tracks academic average. Use the Monash WAM calculator separately for performance planning.',
  },
];

export default function DegreeProgress() {
  return (
    <>
      <Seo
        title="Degree Progress Calculator — Monash Credit Points Tracker (2026)"
        description="Free Monash degree progress calculator: track completed credit points, percent complete, and estimated semesters remaining toward your degree."
        canonicalPath="/degree-progress-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Degree Progress Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Track credit points completed toward your Monash degree — see percent done and how many cp remain.
        </p>
        <p className="text-indigo-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Track WAM separately with the{' '}
          <a href={absoluteUrl(dpHome.path)} className={HERO_INLINE_LINK_CLASS}>{dpHome.keyword}</a>
          . Read{' '}
          <a href={absoluteUrl(dpArticle.path)} className={HERO_INLINE_LINK_CLASS}>{dpArticle.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/degree-progress-calculator">
        <DegreeProgressToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/degree-progress-calculator" />
      <RelatedCalculators
        hrefs={['/', '/wam-target-calculator', '/wam-projection-calculator', '/monash-exchange-wam-calculator']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
