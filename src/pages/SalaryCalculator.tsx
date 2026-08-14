import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import SalaryCalculatorToolCore from '../components/SalaryCalculatorToolCore';

export default function SalaryCalculator() {
  return (
    <>
      <Seo title="Salary Calculator | Annual to Hourly Wage" description="Convert your annual salary into hourly, daily, weekly, and monthly wages." canonicalPath="/salary-calculator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Salary Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Convert annual salaries to hourly wages instantly.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/salary-calculator">
        <SalaryCalculatorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/salary-calculator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
