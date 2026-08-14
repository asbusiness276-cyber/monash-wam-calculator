import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import PercentageToGpaToolCore from '../components/PercentageToGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [ptgWam, ptgGpa] = PAGE_KEYWORD_LINKS['/percentage-to-gpa-calculator'];

const percentageToGpaFaqs = [
  {
    question: 'How do I convert percentage to GPA at Uni?',
    answer:
      'Map your percentage to the Uni grade band (HD, D, C, P, N), then read the GPA value. HD = 4.0 / 7.0, D = 3.0 / 6.0, and so on.',
  },
  {
    question: 'What is 75% in GPA?',
    answer:
      '75% is Distinction (D) at Uni — 3.0 on the 4.0 scale and 6.0 on the Australian 7.0 scale.',
  },
  {
    question: 'Can I enter marks instead of percentage?',
    answer:
      'Yes. Enter marks obtained and marks total — the calculator derives the percentage before converting to GPA.',
  },
  {
    question: 'Is this the same as WAM to GPA?',
    answer:
      'This converts a single percentage mark. WAM to GPA converts your overall weighted average across all units.',
  },
  {
    question: 'Does Uni use 4.0 or 7.0 GPA?',
    answer:
      'Uni transcripts commonly show 4.0 GPA. Australian applications may reference 7.0 — this tool shows both.',
  },
  {
    question: 'Will this match my official transcript?',
    answer:
      'It uses standard Uni coursework bands. Special grades or faculty rules may differ — confirm on WES.',
  },
];

export default function PercentageToGpa() {
  return (
    <>
      <Seo
        title="Percentage to GPA Calculator - Uni 4.0 & 7.0 Scale (2026)"
        description="Free percentage to GPA calculator for Uni students: convert any mark to 4.0 and 7.0 GPA using official Uni grade bands."
        canonicalPath="/percentage-to-gpa-calculator"
        faqItems={percentageToGpaFaqs}
      />

      <section className="bg-gradient-to-br from-violet-700 to-violet-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Percentage to GPA Calculator</h1>
        <p className="text-violet-100 max-w-xl mx-auto">
          Convert any percentage mark to Uni GPA on the 4.0 and Australian 7.0 scales — enter % directly or use
          marks obtained ÷ total.
        </p>
        <p className="text-violet-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Converting overall WAM? Use{' '}
          <a href={absoluteUrl(ptgWam.path)} className={HERO_INLINE_LINK_CLASS}>{ptgWam.keyword}</a>
          . Reverse direction? Try{' '}
          <a href={absoluteUrl(ptgGpa.path)} className={HERO_INLINE_LINK_CLASS}>{ptgGpa.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/percentage-to-gpa-calculator">
        <PercentageToGpaToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/percentage-to-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={percentageToGpaFaqs} />
    </>
  );
}
