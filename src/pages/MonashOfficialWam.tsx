import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import OfficialWamCompareToolCore from '../components/OfficialWamCompareToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [owHome, owArticle] = PAGE_KEYWORD_LINKS['/monash-official-wam-calculator'];

const faqs = [
  {
    question: 'Why is official Monash WAM different from a simple average?',
    answer:
      'Official WAM applies year-level weighting: Year 1 units count at 0.5 and Year 2+ at 1.0. A simple credit-weighted average treats every year equally.',
  },
  {
    question: 'Which WAM appears on my transcript?',
    answer:
      'Your Monash transcript shows official WAM with year-level weighting. Use this calculator to compare it with a simple planning average.',
  },
  {
    question: 'How is year level determined?',
    answer:
      'The first digit of the unit number usually indicates year level (e.g. FIT1045 → Year 1). You can override the year dropdown if your handbook differs.',
  },
  {
    question: 'Does Year 1 half-weighting help or hurt WAM?',
    answer:
      'Strong Year 1 marks pull official WAM up less than the same marks in later years. Weak Year 1 marks hurt official WAM less than a simple average suggests.',
  },
  {
    question: 'Where can I read the full formula?',
    answer:
      'See our how to calculate WAM article and the main Monash WAM calculator for the complete official formula and examples.',
  },
];

export default function MonashOfficialWam() {
  return (
    <>
      <Seo
        title="Monash Official WAM Calculator — Year 1 Half Weight (2026)"
        description="Compare planning WAM vs official Monash WAM with Year 1 half-weighting. Free calculator shows how year-level rules change your weighted average."
        canonicalPath="/monash-official-wam-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Official WAM Calculator</h1>
        <p className="text-primary-100 max-w-xl mx-auto">
          See planning WAM vs official Monash WAM side by side — Year 1 units weighted at 0.5, Year 2+ at 1.0.
        </p>
        <p className="text-primary-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Full unit calculator:{' '}
          <a href={absoluteUrl(owHome.path)} className={HERO_INLINE_LINK_CLASS}>{owHome.keyword}</a>
          . Step-by-step guide:{' '}
          <a href={absoluteUrl(owArticle.path)} className={HERO_INLINE_LINK_CLASS}>{owArticle.keyword}</a>.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-8">
        <OfficialWamCompareToolCore />
      </section>
      <CalculatorPageGuide path="/monash-official-wam-calculator" />
      <RelatedCalculators
        hrefs={['/', '/semester-wam-calculator', '/wam-target-calculator', '/wam-projection-calculator']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
