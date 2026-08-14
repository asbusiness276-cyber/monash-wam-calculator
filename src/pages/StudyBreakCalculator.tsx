import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import StudyBreakToolCore from '../components/StudyBreakToolCore';

const faqs = [
  {
    question: 'What is the Pomodoro Technique?',
    answer: 'The Pomodoro technique involves breaking your work into 25-minute sprints of pure focus, followed immediately by a 5-minute break. This prevents cognitive fatigue and keeps motivation high.',
  },
  {
    question: 'What is the 52/17 DeskTime rule?',
    answer: 'A study by DeskTime found that the most productive employees worked for 52 minutes straight, then stepped away entirely from their screens for 17 minutes.',
  }
];

export default function StudyBreakCalculator() {
  return (
    <>
      <Seo
        title="Study Break Calculator | Focus Schedule Generator"
        description="Optimize your study session. Enter your total time to generate a neuroscience-backed schedule of focus blocks and breaks."
        canonicalPath="/study-break-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Study Break Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Stop studying until you burn out. Use data-backed focus intervals to schedule your deep work and recovery breaks.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/study-break-calculator">
        <StudyBreakToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/study-break-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
