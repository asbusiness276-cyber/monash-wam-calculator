import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import MonashExchangeWamToolCore from '../components/MonashExchangeWamToolCore';
import { absoluteUrl, HERO_INLINE_LINK_CLASS } from '../constants/site';
import { PAGE_KEYWORD_LINKS } from '../data/pageKeywordLinks';

const [exHome, exArticle] = PAGE_KEYWORD_LINKS['/monash-exchange-wam-calculator'];

const faqs = [
  {
    question: 'Do exchange grades count toward Monash WAM?',
    answer:
      'No. Successfully completed exchange units normally appear as SFR and do not include host marks in WAM calculations.',
  },
  {
    question: 'Will my WAM change after exchange?',
    answer:
      'Your WAM stays the same unless you also completed Monash-graded units during the exchange period.',
  },
  {
    question: 'What WAM do I need before exchange?',
    answer:
      'Monash guidance often references staying in good standing with WAM not pulled below 60% — confirm with your faculty.',
  },
  {
    question: 'Do exchange credit points count toward my degree?',
    answer:
      'Yes, when faculty credit is approved. SFR units add credit points without numeric marks on your transcript.',
  },
  {
    question: 'How do I check WAM after exchange?',
    answer:
      'Use WES or the Monash WAM calculator with only Monash-graded units — exclude SFR exchange rows.',
  },
];

export default function MonashExchangeWam() {
  return (
    <>
      <Seo
        title="Monash Exchange WAM Calculator — SFR & Study Abroad (2026)"
        description="Free Monash exchange WAM calculator: see that SFR study abroad credit does not change WAM and check degree credit progress."
        canonicalPath="/monash-exchange-wam-calculator"
        faqItems={faqs}
      />

      <section className="bg-gradient-to-br from-sky-700 to-sky-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Monash Exchange WAM Calculator</h1>
        <p className="text-sky-100 max-w-xl mx-auto">
          Plan study abroad: exchange SFR units earn credit but do not change your Monash WAM.
        </p>
        <p className="text-sky-100/95 max-w-xl mx-auto text-sm mt-4 leading-relaxed">
          Track Monash-graded WAM with the{' '}
          <a href={absoluteUrl(exHome.path)} className={HERO_INLINE_LINK_CLASS}>{exHome.keyword}</a>
          . Read our{' '}
          <a href={absoluteUrl(exArticle.path)} className={HERO_INLINE_LINK_CLASS}>{exArticle.keyword}</a>{' '}
          guide.
        </p>
      </section>

      <CalculatorSectionWithInlineAds path="/monash-exchange-wam-calculator">
        <MonashExchangeWamToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/monash-exchange-wam-calculator" />
      <RelatedCalculators
        hrefs={['/wam-target-calculator', '/monash-distinction-average-calculator', '/', '/wam-projection-calculator']}
      />
      <PageFaq items={faqs} />
    </>
  );
}
