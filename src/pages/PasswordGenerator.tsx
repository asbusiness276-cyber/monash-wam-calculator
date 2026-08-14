import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import RelatedCalculators from '../components/RelatedCalculators';
import PasswordGeneratorToolCore from '../components/PasswordGeneratorToolCore';

export default function PasswordGenerator() {
  return (
    <>
      <Seo title="Secure Password Generator | Random Passwords" description="Generate strong, secure, and random passwords instantly right in your browser." canonicalPath="/password-generator" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Password Generator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Create highly secure, unpredictable passwords to keep your accounts safe.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/password-generator">
        <PasswordGeneratorToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/password-generator" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
