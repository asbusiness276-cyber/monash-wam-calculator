import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashGpaToolCore from '../components/MonashGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [g40Wtg, g40Monash] = PAGE_KEYWORD_LINKS['/4-0-gpa-calculator'];

const faqs = [
  {
    question: 'How do I calculate GPA out of 4.0?',
    answer:
      'Enter unit grades and credit points. GPA = sum(grade value × credits) ÷ sum(credits). Monash uses HD=4, D=3, C=2, P=1, N=0.3.',
  },
  {
    question: 'What is a good GPA out of 4?',
    answer: 'At Monash, GPA 3.0+ is distinction territory (roughly WAM 70+). GPA 4.0 is High Distinction band.',
  },
  {
    question: '4.0 vs 7.0 scale?',
    answer: 'Same bands, different numbers. Use the 4.0 to 7.0 GPA calculator for Australian 7-point conversion.',
  },
  {
    question: 'Monash specific?',
    answer: 'This uses Monash official grade values. For Monash-branded page, see the Monash GPA calculator.',
  },
  {
    question: 'WAM instead?',
    answer: 'Use the WAM to 4.0 GPA calculator to map overall WAM to a 4.0 band.',
  },
  {
    question: 'Cumulative GPA?',
    answer: 'Use the Monash CGPA calculator or GPA to CGPA tool for multi-semester cumulative maths.',
  },
];

export default function Gpa40Calculator() {
  return (
    <>
      <Seo
        title="4.0 GPA Calculator - Free Monash Scale (2026)"
        description="Free 4.0 GPA calculator: compute GPA out of 4.0 from unit grades and credit points using Monash official grade values."
        canonicalPath="/4-0-gpa-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">4.0 GPA Calculator</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Calculate GPA on the 4.0 scale from unit grades and credit points — Monash official grade values.
        </p>
        <p className="text-blue-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          WAM conversion:{' '}
          <a href={absoluteUrl(g40Wtg.path)} className={HERO_INLINE_LINK_CLASS}>{g40Wtg.keyword}</a>
          . Monash branded:{' '}
          <a href={absoluteUrl(g40Monash.path)} className={HERO_INLINE_LINK_CLASS}>{g40Monash.keyword}</a>.
        </p>
      </section>
      <section className="max-w-2xl mx-auto px-4 py-8">
        <MonashGpaToolCore />
      </section>
      <CalculatorPageGuide path="/4-0-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
