import FAQSection from '../components/FAQSection';
import Seo from '../components/Seo';
import RelatedCalculators from '../components/RelatedCalculators';
import ArticlesSection from '../components/ArticlesSection';
import HomeHero from '../components/home/HomeHero';
import HomeTrustStrip from '../components/home/HomeTrustStrip';
import HomeCalculatorArea from '../components/home/HomeCalculatorArea';
import HomeHowItWorks from '../components/home/HomeHowItWorks';
import HomeWhyUse from '../components/home/HomeWhyUse';
import HomeTrustRow from '../components/home/HomeTrustRow';
import HomeGpaPromo from '../components/home/HomeGpaPromo';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import { HOME_FAQS } from '../data/homeFaqs';

const HOME_OG_IMAGE = '/article-images/featured-calculate-wam.webp';
const HOME_OG_ALT =
  'Monash university student using a laptop to calculate weighted average mark from unit marks and credit points';

export default function Home() {
  return (
    <>
      <Seo
        title="Monash WAM Calculator | Free WAM Calculator Monash University (2026)"
        description="Free Monash WAM calculator with official Year 1 (0.5) weighting. Enter marks & credit points — instant weighted average, HD/D bands & WAM to GPA. No signup."
        canonicalPath="/"
        faqItems={HOME_FAQS}
        ogImage={HOME_OG_IMAGE}
        ogImageAlt={HOME_OG_ALT}
      />

      <HomeHero />
      <HomeTrustStrip />
      <HomeCalculatorArea />
      <HomeHowItWorks />
      <HomeWhyUse />

      <RelatedCalculators
        variant="home"
        title="Featured Calculators"
        description="Popular free tools for WAM, GPA conversion, exam targets, and merit planning."
        hrefs={[
          '/wam-to-gpa-calculator',
          '/wam-target-calculator',
          '/final-grade-calculator',
          '/monash-distinction-average-calculator',
          '/semester-wam-calculator',
          '/monash-honours-calculator',
        ]}
        maxItems={6}
      />

      <HomeTrustRow />
      <HomeGpaPromo />
      <CalculatorPageGuide path="/" className="home-container max-w-4xl pb-2" />

      <ArticlesSection featured variant="home" />
      <FAQSection items={HOME_FAQS} title="Monash WAM Calculator — FAQs" variant="home" />
    </>
  );
}
