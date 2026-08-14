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
import DonationBanner from '../components/DonationBanner';
import { HOME_FAQS } from '../data/homeFaqs';

const HOME_OG_IMAGE = '/article-images/featured-calculate-wam.webp';
const HOME_OG_ALT =
  'the university student using a laptop to calculate weighted average mark from unit marks and credit points';

export default function Home() {
  return (
    <>
      <Seo
        title="My Calculator Hub | 100+ Free Online Calculators"
        description="My Calculator Hub is your go-to destination for everyday calculators. From finance and health to math and utilities, we have over 100+ free online calculators."
        canonicalPath="/"
        faqItems={HOME_FAQS}
        ogImage={HOME_OG_IMAGE}
        ogImageAlt={HOME_OG_ALT}
      />

      <HomeHero />
      <HomeTrustStrip />
      <HomeCalculatorArea />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <DonationBanner />
      </div>

      <HomeHowItWorks />
      <HomeWhyUse />


      <RelatedCalculators
        variant="home"
        title="Featured Calculators"
        description="Popular free tools for WAM, GPA conversion, exam targets, and merit planning."
        hrefs={[
          '/age-calculator',
          '/salary-calculator',
          '/bmi-calculator',
          '/password-generator',
          '/loan-calculator',
          '/percentage-calculator',
        ]}
        maxItems={6}
      />

      <HomeTrustRow />
            
      <ArticlesSection featured variant="home" />
      <FAQSection items={HOME_FAQS} title="Frequently Asked Questions" variant="home" />
    </>
  );
}
