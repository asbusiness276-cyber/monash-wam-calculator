import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import AtarConverterToolCore from '../components/AtarConverterToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [atarWam, atarGpa] = PAGE_KEYWORD_LINKS['/atar-to-gpa-wam-calculator'];

const faqs = [
  {
    question: 'How do I convert ATAR to GPA?',
    answer:
      'ATAR is not officially equivalent to university GPA. This tool gives indicative WAM/GPA bands for planning based on common Australian entry benchmarks.',
  },
  {
    question: 'What ATAR is 85 WAM equivalent to?',
    answer:
      'Roughly ATAR 90–95 territory maps to WAM 80+ in indicative tables — enter your WAM for a range estimate.',
  },
  {
    question: 'Is ATAR the same as GPA?',
    answer: 'No. ATAR ranks school leavers for entry. GPA measures university unit performance on a grade-point scale.',
  },
  {
    question: 'UAC official conversion?',
    answer: 'UAC does not publish a single ATAR↔WAM formula. Treat results as directional planning only.',
  },
  {
    question: 'WAM to ATAR?',
    answer: 'Toggle to WAM → ATAR mode for reverse indicative ranges.',
  },
  {
    question: 'Uni entry?',
    answer: 'Course cut-offs vary by year and faculty — check Uni published ATAR requirements separately.',
  },
];

export default function AtarConverter() {
  return (
    <>
      <Seo
        title="ATAR to GPA & WAM Calculator - Australia Planning (2026)"
        description="Free ATAR to GPA and WAM converter for Australian students. Indicative ATAR ↔ WAM ↔ 4.0 GPA bands for university planning."
        canonicalPath="/atar-to-gpa-wam-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-fuchsia-700 to-fuchsia-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">ATAR to GPA & WAM Calculator</h1>
        <p className="text-fuchsia-100 max-w-xl mx-auto">
          Convert ATAR to indicative WAM and GPA bands — or estimate ATAR from your university WAM for planning.
        </p>
        <p className="text-fuchsia-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          WAM:{' '}
          <a href={absoluteUrl(atarWam.path)} className={HERO_INLINE_LINK_CLASS}>{atarWam.keyword}</a>
          . WAM to GPA:{' '}
          <a href={absoluteUrl(atarGpa.path)} className={HERO_INLINE_LINK_CLASS}>{atarGpa.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/atar-to-gpa-wam-calculator">
        <AtarConverterToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/atar-to-gpa-wam-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
