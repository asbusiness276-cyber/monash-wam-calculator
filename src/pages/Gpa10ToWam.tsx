import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import Gpa10ToWamToolCore from '../components/Gpa10ToWamToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [g10Wam, g10Cgpa] = PAGE_KEYWORD_LINKS['/10-point-gpa-to-wam-calculator'];

const faqs = [
  {
    question: 'How do I convert 10-point GPA to WAM?',
    answer:
      'Multiply 10-point GPA by 10 for percentage equivalent (8.5 → 85%), then map to WAM grade bands.',
  },
  {
    question: 'Is 8.0 CGPA good for Uni?',
    answer: '8.0 on 10-point ≈ 80% — High Distinction band at Uni (WAM 80+).',
  },
  {
    question: 'Indian CGPA to WAM?',
    answer:
      'Use this indicative mapping, then confirm with Uni or credential evaluation for official credit.',
  },
  {
    question: '10-point to 4.0 GPA?',
    answer: 'Use the CGPA to GPA calculator: GPA (4.0) = CGPA ÷ 10 × 4.',
  },
  {
    question: 'Exact WAM?',
    answer: 'Enter actual unit marks in the WAM calculator once enrolled.',
  },
  {
    question: 'GPA 6.4 to WAM?',
    answer: '6.4 × 10 = 64% — Credit band (WAM 60–69) at Uni for planning.',
  },
];

export default function Gpa10ToWam() {
  return (
    <>
      <Seo
        title="10-Point GPA to WAM Calculator - Uni Converter (2026)"
        description="Free 10-point GPA to WAM calculator. Convert CGPA/GPA on a 10.0 scale to WAM grade bands for planning."
        canonicalPath="/10-point-gpa-to-wam-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-lime-700 to-lime-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">10-Point GPA to WAM Calculator</h1>
        <p className="text-lime-100 max-w-xl mx-auto">
          Convert 10-point GPA or CGPA to indicative WAM bands — common for international and Indian transcripts.
        </p>
        <p className="text-lime-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          4.0 GPA to WAM:{' '}
          <a href={absoluteUrl(g10Wam.path)} className={HERO_INLINE_LINK_CLASS}>{g10Wam.keyword}</a>
          . CGPA to GPA:{' '}
          <a href={absoluteUrl(g10Cgpa.path)} className={HERO_INLINE_LINK_CLASS}>{g10Cgpa.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/10-point-gpa-to-wam-calculator">
        <Gpa10ToWamToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/10-point-gpa-to-wam-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
