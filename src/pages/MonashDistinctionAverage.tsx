import Seo from '../components/Seo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashDistinctionAverageToolCore from '../components/MonashDistinctionAverageToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [distHome, distScholarship] = PAGE_KEYWORD_LINKS['/monash-distinction-average-calculator'];

const faqs = [
  {
    question: 'What is distinction average at Monash?',
    answer:
      'Monash distinction average is typically WAM 70 or above, or GPA 3.0 or above on the official 4.0 GPA scale.',
  },
  {
    question: 'Is distinction average the same as a D grade?',
    answer:
      'Not exactly. A D on one unit is 70–79, but distinction average is your overall WAM or GPA across your course.',
  },
  {
    question: 'Do I need distinction average for scholarships?',
    answer:
      'Many merit scholarships use distinction-level WAM or GPA, but each award has its own criteria. Check the scholarship page.',
  },
  {
    question: 'Can GPA qualify me if my WAM is below 70?',
    answer:
      'Yes. Monash recognises distinction average through either WAM 70+ or GPA 3.0+ on the official scale.',
  },
  {
    question: 'How do I reach distinction average from 68 WAM?',
    answer:
      'Use the WAM target calculator with your completed and remaining credit points to find the average needed on future units.',
  },
];

export default function MonashDistinctionAverage() {
  return (
    <>
      <Seo
        title="Monash Distinction Average Calculator — WAM 70 / GPA 3.0 (2026)"
        description="Free Monash distinction average calculator: check if your WAM or GPA meets the 70 / 3.0 distinction threshold and see how many points you need."
        canonicalPath="/monash-distinction-average-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Distinction Average Calculator</h1>
        <p className="text-emerald-100 max-w-xl mx-auto">
          Check if you meet Monash distinction average — WAM 70+ or GPA 3.0+ — and see your gap to the threshold.
        </p>
        <p className="text-emerald-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Track WAM with the{' '}
          <a href={absoluteUrl(distHome.path)} className={HERO_INLINE_LINK_CLASS}>{distHome.keyword}</a>
          . Read{' '}
          <a href={absoluteUrl(distScholarship.path)} className={HERO_INLINE_LINK_CLASS}>{distScholarship.keyword}</a>{' '}
          for merit award planning.
        </p>
      </section>

      <section className="max-w-2xl mx-auto px-4 py-8">
        <MonashDistinctionAverageToolCore />
      </section>
      <CalculatorPageGuide path="/monash-distinction-average-calculator" />
      <RelatedCalculators
        hrefs={['/monash-scholarship-wam-calculator', '/monash-deans-honours-calculator', '/wam-target-calculator', '/monash-gpa-calculator', '/']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
