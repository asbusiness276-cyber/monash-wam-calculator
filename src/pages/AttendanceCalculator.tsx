import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import AttendanceToolCore from '../components/AttendanceToolCore';

const faqs = [
  {
    question: 'How do I calculate my attendance percentage?',
    answer: 'Divide the number of classes you have attended by the total number of classes held, then multiply by 100. This calculator does the math for you based on classes missed.',
  },
  {
    question: 'What is the standard university attendance requirement?',
    answer: 'Many universities require 75% to 80% attendance to pass a unit, especially for tutorials, labs, and seminars. Lectures are often optional but highly recommended.',
  },
  {
    question: 'Can I fail a unit for low attendance?',
    answer: 'Yes, if a unit has a hurdle requirement for attendance (e.g., mandatory labs), dropping below the threshold will result in an automatic fail (NH) regardless of your assignment marks.',
  }
];

export default function AttendanceCalculator() {
  return (
    <>
      <Seo
        title="Attendance Calculator | Track Your Classes"
        description="Calculate how many classes you can skip while maintaining your target university attendance percentage (e.g., 75% or 80%)."
        canonicalPath="/attendance-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Attendance Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Track your classes, avoid hurdle fails, and find out exactly how many tutorials you can afford to skip.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/attendance-calculator">
        <AttendanceToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/attendance-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
