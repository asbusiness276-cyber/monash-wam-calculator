import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import CaffeineCrashToolCore from '../components/CaffeineCrashToolCore';

const faqs = [
  {
    question: 'What is the half-life of caffeine?',
    answer: 'The average half-life of caffeine in a healthy adult is about 5 hours. This means if you consume 100mg of caffeine, you will still have 50mg active in your bloodstream 5 hours later.',
  },
  {
    question: 'How much caffeine is in a coffee?',
    answer: 'A standard single shot of espresso contains about 60-70mg of caffeine. A large milk-based coffee (like a large latte or flat white) often contains 2 shots, totaling 120-140mg.',
  },
  {
    question: 'When should I stop drinking coffee to sleep well?',
    answer: 'Because of the 5-hour half-life, it is generally recommended to stop consuming caffeine at least 8 to 10 hours before your intended bedtime.',
  }
];

export default function CaffeineCrashCalculator() {
  return (
    <>
      <Seo
        title="Caffeine Crash & Half-Life Calculator for Students"
        description="Calculate the half-life of your coffee or energy drink. Find out when you will crash and when it is safe to go to sleep."
        canonicalPath="/caffeine-crash-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Caffeine Crash Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Pulling an all-nighter? Find out exactly when your caffeine will wear off and when you can safely sleep.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/caffeine-crash-calculator">
        <CaffeineCrashToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/caffeine-crash-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
