import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import HighSchoolGpaToolCore from '../components/HighSchoolGpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [hsGpa, hsUni] = PAGE_KEYWORD_LINKS['/high-school-gpa-calculator'];

const faqs = [
  {
    question: 'How do I calculate high school GPA?',
    answer:
      'GPA = sum(grade points × course credits) ÷ sum(credits). Enter each course letter grade and credit weight.',
  },
  {
    question: 'Weighted vs unweighted GPA?',
    answer:
      'Unweighted caps at 4.0. Weighted adds +1.0 for honors/AP-style courses (capped at 5.0) for US-style reporting.',
  },
  {
    question: 'Australian high school?',
    answer:
      'Australian schools typically use ATAR, not GPA. This tool suits US-style transcripts and international applications.',
  },
  {
    question: 'What is a good high school GPA?',
    answer: 'US context: 3.5+ is strong; 4.0 unweighted is excellent. Requirements vary by college.',
  },
  {
    question: 'University GPA?',
    answer: 'Use the GPA calculator or Monash GPA calculator for uni unit grades on the 4.0 scale.',
  },
  {
    question: 'Convert to WAM?',
    answer: 'University conversion uses different scales — use GPA to WAM after you start uni.',
  },
];

export default function HighSchoolGpa() {
  return (
    <>
      <Seo
        title="High School GPA Calculator - Weighted & Unweighted (2026)"
        description="Free high school GPA calculator: compute weighted or unweighted GPA from course grades and credits for US-style transcripts."
        canonicalPath="/high-school-gpa-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-slate-700 to-slate-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">High School GPA Calculator</h1>
        <p className="text-slate-200 max-w-xl mx-auto">
          Calculate weighted or unweighted high school GPA from course grades and credits — US-style 4.0 / 5.0 scales.
        </p>
        <p className="text-slate-300 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          University GPA:{' '}
          <a href={absoluteUrl(hsGpa.path)} className={HERO_INLINE_LINK_CLASS}>{hsGpa.keyword}</a>
          . Australia ATAR:{' '}
          <a href={absoluteUrl(hsUni.path)} className={HERO_INLINE_LINK_CLASS}>{hsUni.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/high-school-gpa-calculator">
        <HighSchoolGpaToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/high-school-gpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
