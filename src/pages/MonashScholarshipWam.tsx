import Seo from '../components/Seo';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashScholarshipWamToolCore from '../components/MonashScholarshipWamToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [schHome, schArticle] = PAGE_KEYWORD_LINKS['/monash-scholarship-wam-calculator'];

const faqs = [
  {
    question: 'What WAM do I need for a Monash scholarship?',
    answer:
      'It varies by award. Merit scholarships often target distinction-level WAM (70+) or higher. This calculator shows planning bands from 65 to 85.',
  },
  {
    question: 'How is required average calculated?',
    answer:
      'The tool uses credit-weighted maths: what average on your remaining credit points would lift your overall WAM to each target tier.',
  },
  {
    question: 'Does this guarantee scholarship eligibility?',
    answer:
      'No. Scholarships may use equity criteria, applications, faculty rules, or renewal conditions beyond WAM alone.',
  },
  {
    question: 'Should I use WAM or GPA for scholarships?',
    answer:
      'Check each scholarship page. Monash merit awards often reference WAM or distinction average (WAM 70+ / GPA 3.0+).',
  },
  {
    question: 'What if a tier shows not achievable?',
    answer:
      'That target would require above 100% on all remaining units. Consider a lower tier or focus on high-credit units you can still improve.',
  },
];

export default function MonashScholarshipWam() {
  return (
    <>
      <Seo
        title="Monash Scholarship WAM Calculator — Merit Tier Targets (2026)"
        description="Free Monash scholarship WAM calculator: see the average needed on remaining units to reach merit bands from 65 to 85 WAM."
        canonicalPath="/monash-scholarship-wam-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-violet-700 to-violet-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Scholarship WAM Calculator</h1>
        <p className="text-violet-100 max-w-xl mx-auto">
          Plan merit scholarship WAM targets — see what average you need on remaining units for each band.
        </p>
        <p className="text-violet-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Start from your{' '}
          <a href={absoluteUrl(schHome.path)} className={HERO_INLINE_LINK_CLASS}>{schHome.keyword}</a>
          . Read our{' '}
          <a href={absoluteUrl(schArticle.path)} className={HERO_INLINE_LINK_CLASS}>{schArticle.keyword}</a>{' '}
          guide for award-specific rules.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-8">
        <MonashScholarshipWamToolCore />
      </section>
      <RelatedCalculators
        hrefs={['/monash-distinction-average-calculator', '/wam-target-calculator', '/monash-deans-honours-calculator', '/']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
