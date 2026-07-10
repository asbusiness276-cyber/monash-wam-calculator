import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashGpaToolCore from '../components/MonashGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gpaWam, gpaMonash] = PAGE_KEYWORD_LINKS['/gpa-calculator'];

const faqs = [
  {
    question: 'How do I calculate GPA in Australia?',
    answer:
      'Australian universities commonly use a 4.0 or 7.0 scale from letter grades. This calculator uses Monash official 4.0 values with credit weighting.',
  },
  {
    question: 'What is a good GPA in Australia?',
    answer:
      'GPA 3.0+ (Distinction band) is strong for scholarships and postgrad. GPA 4.0 / 7.0 maps to High Distinction.',
  },
  {
    question: 'GPA vs WAM?',
    answer:
      'GPA compresses marks into grade points. WAM keeps percentage detail. Monash reports both — use the right tool for each.',
  },
  {
    question: 'Is this only for Monash?',
    answer:
      'Grade values follow Monash policy. Other Australian unis may differ slightly — note your institution.',
  },
  {
    question: 'High school GPA?',
    answer: 'Use the high school GPA calculator for US-style weighted/unweighted school GPA.',
  },
  {
    question: 'Convert GPA to WAM?',
    answer: 'Use the GPA to WAM calculator for approximate Monash percentage ranges.',
  },
];

export default function GpaCalculator() {
  return (
    <>
      <Seo
        title="GPA Calculator Australia - Free 4.0 Scale (2026)"
        description="Free GPA calculator for Australian university students. Compute 4.0 GPA from grades and credit points — Monash official formula."
        canonicalPath="/gpa-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">GPA Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Free GPA calculator for Australian uni students — 4.0 scale, credit-weighted, Monash official grade values.
        </p>
        <p className="text-indigo-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Track WAM:{' '}
          <a href={absoluteUrl(gpaWam.path)} className={HERO_INLINE_LINK_CLASS}>{gpaWam.keyword}</a>
          . Monash-specific:{' '}
          <a href={absoluteUrl(gpaMonash.path)} className={HERO_INLINE_LINK_CLASS}>{gpaMonash.keyword}</a>.
        </p>
      </section>
      <section className="max-w-2xl mx-auto px-4 py-8">
        <MonashGpaToolCore />
      </section>
      <CalculatorPageGuide path="/gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
