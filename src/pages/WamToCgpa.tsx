import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import WamToGpaToolCore from '../components/WamToGpaToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [wcWam, wcCgpa] = PAGE_KEYWORD_LINKS['/wam-to-cgpa-calculator'];

const faqs = [
  {
    question: 'How do I convert WAM to CGPA at Uni?',
    answer:
      'Uni CGPA uses the official 4.0 scale. Enter your WAM and this tool maps it to the equivalent 4.0 band value for planning.',
  },
  {
    question: 'Is CGPA the same as GPA?',
    answer:
      'CGPA is cumulative GPA across all completed units. This WAM-to-band conversion helps estimate the CGPA tier your WAM sits in.',
  },
  {
    question: 'Why does my official CGPA differ?',
    answer:
      'Official CGPA weights each unit by credit points and letter grade. WAM preserves finer percentage differences inside bands.',
  },
  {
    question: 'What WAM is CGPA 3.0?',
    answer: 'Roughly WAM 70–79 (Distinction band) maps to GPA/CGPA around 3.0 on the Uni 4.0 scale.',
  },
  {
    question: 'Should I use WAM or CGPA on applications?',
    answer:
      'Report what the form requests. Uni-native WAM is often preferred when allowed; many overseas forms ask for GPA/CGPA.',
  },
  {
    question: 'How do I calculate official CGPA?',
    answer: 'Use the Uni CGPA calculator with your unit grades and credit points for transcript-accurate cumulative GPA.',
  },
];

export default function WamToCgpa() {
  return (
    <>
      <Seo
        title="WAM to CGPA Calculator - Uni 4.0 Scale (2026)"
        description="Free WAM to CGPA calculator for Uni students. Estimate your cumulative GPA band from overall WAM on the official 4.0 scale."
        canonicalPath="/wam-to-cgpa-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">WAM to CGPA Calculator</h1>
        <p className="text-sky-100 max-w-xl mx-auto">
          Estimate Uni CGPA (4.0 cumulative GPA) from your overall WAM — useful for scholarships, postgrad, and overseas forms.
        </p>
        <p className="text-sky-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Official cumulative maths? Use the{' '}
          <a href={absoluteUrl(wcCgpa.path)} className={HERO_INLINE_LINK_CLASS}>{wcCgpa.keyword}</a>
          . Track WAM from units:{' '}
          <a href={absoluteUrl(wcWam.path)} className={HERO_INLINE_LINK_CLASS}>{wcWam.keyword}</a>.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/wam-to-cgpa-calculator">
        <WamToGpaToolCore
          emphasizeGpa4
          primaryGpaLabel="CGPA (4.0 Scale)"
          screenshotId="wam-to-cgpa"
        />
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/wam-to-cgpa-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
