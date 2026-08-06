import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import GpaToCgpaToolCore from '../components/GpaToCgpaToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [gtcSem, gtcCgpa] = PAGE_KEYWORD_LINKS['/gpa-to-cgpa-calculator'];

const faqs = [
  {
    question: 'How do I convert GPA to CGPA?',
    answer:
      'Combine prior CGPA and credits with this semester GPA and semester credits: CGPA = (prior points + semester points) ÷ total credits.',
  },
  {
    question: 'What is the difference between GPA and CGPA?',
    answer:
      'GPA often means one semester. CGPA is cumulative across all completed study on the 4.0 scale at Monash.',
  },
  {
    question: 'Can I use unit rows instead of semester GPA?',
    answer: 'Yes — the Monash CGPA calculator accepts each unit grade for more precise semester maths.',
  },
  {
    question: 'First semester CGPA?',
    answer: 'If you have no prior credits, your semester GPA equals your CGPA.',
  },
  {
    question: 'Monash scale?',
    answer: 'This uses Monash 4.0 official grade values. Fail = 0.3, WN = 0.0.',
  },
  {
    question: 'Reverse conversion?',
    answer: 'Use the CGPA to GPA calculator for scale conversion or reporting help.',
  },
];

export default function GpaToCgpa() {
  return (
    <>
      <Seo
        title="GPA to CGPA Calculator - Monash 4.0 Scale (2026)"
        description="Free GPA to CGPA calculator: add semester GPA to prior cumulative GPA using Monash credit-weighted 4.0 scale maths."
        canonicalPath="/gpa-to-cgpa-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">GPA to CGPA Calculator</h1>
        <p className="text-emerald-100 max-w-xl mx-auto">
          Add this semester&apos;s GPA to your prior CGPA — credit-weighted cumulative GPA on the Monash 4.0 scale.
        </p>
        <p className="text-emerald-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Unit-by-unit:{' '}
          <a href={absoluteUrl(gtcCgpa.path)} className={HERO_INLINE_LINK_CLASS}>{gtcCgpa.keyword}</a>
          . Semester GPA:{' '}
          <a href={absoluteUrl(gtcSem.path)} className={HERO_INLINE_LINK_CLASS}>{gtcSem.keyword}</a>.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/gpa-to-cgpa-calculator">
        <GpaToCgpaToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/gpa-to-cgpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
