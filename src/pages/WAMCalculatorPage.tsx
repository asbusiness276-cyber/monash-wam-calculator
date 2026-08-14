import Seo from '../components/Seo';
import RelatedCalculators from '../components/RelatedCalculators';
import FAQSection from '../components/FAQSection';
import WAMCalculator from '../components/WAMCalculator';
import DonationBanner from '../components/DonationBanner';

const faqs = [
  {
    question: 'How is WAM calculated?',
    answer: 'Your WAM is calculated by multiplying the mark you received for each unit by its credit point value, and then dividing the sum of these by the total credit points you have enrolled in.',
  },
  {
    question: 'What is a good WAM?',
    answer: 'A WAM of 80+ is High Distinction (HD), 70-79 is Distinction (D), 60-69 is Credit (C), and 50-59 is Pass (P). A good WAM depends on your goals, but typically 70+ is considered strong.',
  },
  {
    question: 'Are first year units weighted differently?',
    answer: 'Some faculties weight first year (level 1) units at 0.5 (half weight) when calculating your official WAM. Our calculator automatically handles this when you select your subjects.',
  },
];

export default function WAMCalculatorPage() {
  return (
    <div className="calc-page-container">
      <Seo
        title="Uni WAM Calculator | Free Weighted Average Mark Calculator"
        description="Calculate your Weighted Average Mark (WAM) easily. Support for credit weighting and first-year half weighting. Free online WAM calculator."
        canonicalPath="/wam-calculator"
        faqItems={faqs}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Uni WAM Calculator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Calculate your official credit-weighted WAM, including first-year half weighting rules.
          </p>
        </div>

        <div className="mb-12">
          <WAMCalculator shellVariant="page" />
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <DonationBanner />
        </div>

        <div className="max-w-4xl mx-auto">
          <FAQSection items={faqs} title="Frequently Asked Questions" />
        </div>

        <div className="mt-16">
          <RelatedCalculators
            title="Related Calculators"
            description="Explore more tools to help you manage your academic progress."
            hrefs={[
              '/wam-to-gpa-calculator',
              '/gpa-to-wam-calculator',
              '/final-grade-calculator',
              '/wam-target-calculator',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
