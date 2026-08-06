import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import PercentageToGpaToolCore from '../components/PercentageToGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [g7Wam, g7Pct] = PAGE_KEYWORD_LINKS['/7-0-scale-gpa-calculator'];

const gpa7ScaleFaqs = [
  {
    question: 'What is a 7.0 GPA scale?',
    answer:
      'Australian universities often use a 7-point scale: HD = 7, D = 6, CR = 5, P = 4, Fail = 0. Monash maps percentage bands to these values.',
  },
  {
    question: 'What percentage is a 7.0 GPA?',
    answer:
      '7.0 on the Australian scale corresponds to High Distinction — typically 80% and above at Monash.',
  },
  {
    question: 'Is 6.0 GPA good at Monash?',
    answer:
      '6.0 maps to Distinction (70–79% WAM band) — a strong result for honours and scholarship planning.',
  },
  {
    question: 'How is 7.0 GPA different from 4.0?',
    answer:
      'Same grade bands, different numeric scale. 4.0 HD = 7.0 HD. Use whichever scale your application form requests.',
  },
  {
    question: 'Can I convert WAM to 7.0 GPA?',
    answer:
      'For overall WAM conversion, use the WAM to GPA calculator. This tool converts a single percentage mark to 7.0 GPA.',
  },
  {
    question: 'Does Monash officially report 7.0 GPA?',
    answer:
      'Many Monash transcripts emphasise 4.0 GPA and WAM. The 7.0 scale is still widely used in Australian comparisons.',
  },
];

export default function Gpa7Scale() {
  return (
    <>
      <Seo
        title="7.0 Scale GPA Calculator - Australian Monash Grades (2026)"
        description="Free Australian 7.0 GPA calculator: convert Monash percentage marks to the 7-point HD/D/CR/P scale instantly."
        canonicalPath="/7-0-scale-gpa-calculator"
        faqItems={gpa7ScaleFaqs}
      />

      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">7.0 Scale GPA Calculator</h1>
        <p className="text-amber-100 max-w-xl mx-auto">
          Convert your Monash percentage mark to the Australian 7-point GPA scale — HD (7), D (6), CR (5), P (4).
        </p>
        <p className="text-amber-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Overall WAM conversion? Use{' '}
          <a href={absoluteUrl(g7Wam.path)} className={HERO_INLINE_LINK_CLASS}>{g7Wam.keyword}</a>
          . Need 4.0 and 7.0 together? See{' '}
          <a href={absoluteUrl(g7Pct.path)} className={HERO_INLINE_LINK_CLASS}>{g7Pct.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/7-0-scale-gpa-calculator">
        <PercentageToGpaToolCore emphasizeGpa7 />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/7-0-scale-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={gpa7ScaleFaqs} />
    </>
  );
}
