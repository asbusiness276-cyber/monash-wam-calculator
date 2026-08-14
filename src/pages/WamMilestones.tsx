import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamMilestonesToolCore from '../components/WamMilestonesToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [wmHome, wmArticle] = PAGE_KEYWORD_LINKS['/wam-milestones-calculator'];

const faqs = [
  {
    question: 'What WAM milestones does this calculator check?',
    answer:
      'It checks common planning bands: 50 pass/progression, 60 exchange planning floor, 70 distinction average, 80 high distinction territory, and 85+ top merit stretch.',
  },
  {
    question: 'Is 70 WAM distinction average at Uni?',
    answer:
      'For planning, WAM 70+ is commonly treated as distinction average. Always confirm exact award, scholarship, or faculty rules before applying.',
  },
  {
    question: 'Why is 60 WAM included?',
    answer:
      'Uni exchange and academic standing conversations often use 60 WAM as a planning floor. It is not a universal guarantee of eligibility.',
  },
  {
    question: 'Can this calculator tell me the average I need on remaining units?',
    answer:
      'Yes. Enter completed credit points and remaining credit points, and it estimates the average needed on remaining units for each milestone.',
  },
  {
    question: 'Is this different from the scholarship WAM calculator?',
    answer:
      'Yes. Scholarship WAM focuses on merit tiers and remaining averages. WAM Milestones is a quick all-purpose standing summary across common Uni planning bands.',
  },
];

export default function WamMilestones() {
  return (
    <>
      <Seo
        title="WAM Milestones Calculator — Uni Standing Checker (2026)"
        description="Check WAM milestones for pass, exchange, distinction average, HD territory, and merit planning. Estimate remaining average needed for each band."
        canonicalPath="/wam-milestones-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM Milestones Calculator</h1>
        <p className="text-primary-100 max-w-xl mx-auto">
          Enter your WAM to see which academic planning bands you already meet — and what average you need for the next
          one.
        </p>
        <p className="text-primary-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Calculate exact WAM with the{' '}
          <a href={absoluteUrl(wmHome.path)} className={HERO_INLINE_LINK_CLASS}>{wmHome.keyword}</a>
          . Read benchmark context:{' '}
          <a href={absoluteUrl(wmArticle.path)} className={HERO_INLINE_LINK_CLASS}>{wmArticle.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/wam-milestones-calculator">
        <WamMilestonesToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/wam-milestones-calculator" />
      <RelatedCalculators
        hrefs={[
          '/',
          '/wam-target-calculator',
          '/uni-distinction-average-calculator',
          '/uni-scholarship-wam-calculator',
        ]}
      />
      <PageFaq items={faqs} />
    </>
  );
}
