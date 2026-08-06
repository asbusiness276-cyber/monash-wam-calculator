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
import HomeWamEducation from '../components/home/HomeWamEducation';
import AmazonStudentDeals from '../components/AmazonStudentDeals';
import ContextualAmazonAffiliateCard from '../components/ContextualAmazonAffiliateCard';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContextualAmazonAffiliateCard path="/" variant="inline" />
      </div>
      <HomeHowItWorks />
      <HomeWhyUse />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AmazonStudentDeals />
      </div>

      <RelatedCalculators
        variant="home"
        title="Featured Calculators"
        description="Popular free tools for WAM, GPA conversion, exam targets, and merit planning."
        hrefs={[
          '/wam-to-gpa-calculator',
          '/gpa-to-wam-calculator',
          '/wam-target-calculator',
          '/final-grade-calculator',
          '/monash-gpa-calculator',
          '/monash-honours-calculator',
        ]}
        maxItems={6}
      />

      <HomeTrustRow />
      <HomeGpaPromo />
      <HomeWamEducation />

      <ArticlesSection featured variant="home" />
      <FAQSection items={HOME_FAQS} title="Monash WAM Calculator — FAQs" variant="home" />
    </>
  );
}
