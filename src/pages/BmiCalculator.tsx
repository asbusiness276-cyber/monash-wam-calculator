import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import BmiCalculatorToolCore from '../components/BmiCalculatorToolCore';

const faqs = [
  { question: 'What is a healthy BMI?', answer: 'A healthy BMI ranges between 18.5 and 24.9 according to the World Health Organization.' },
  { question: 'Is BMI accurate?', answer: 'BMI is a useful screening tool for the general population but doesn\'t account for muscle mass, bone density, or fat distribution.' }
];

export default function BmiCalculator() {
  return (
    <>
      <Seo title="BMI Calculator | Body Mass Index" description="Calculate your BMI to determine if you are a healthy weight." canonicalPath="/bmi-calculator" faqItems={faqs} />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">BMI Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Calculate your Body Mass Index.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/bmi-calculator">
        <BmiCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/bmi-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
