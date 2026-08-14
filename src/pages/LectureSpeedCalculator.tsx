import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import LectureSpeedToolCore from '../components/LectureSpeedToolCore';

const faqs = [
  {
    question: 'How long does a 2 hour video take at 1.5x speed?',
    answer: 'A 2-hour (120 minute) video watched at 1.5x speed will take exactly 1 hour and 20 minutes (80 minutes) to watch in real-time.',
  },
  {
    question: 'Is it effective to watch lectures at 2x speed?',
    answer: 'It depends on the density of the material. Studies suggest comprehension drops slightly at 2x speed for complex topics, but 1.25x to 1.5x is often the sweet spot for retaining information while saving time.',
  },
  {
    question: 'How is the time calculated?',
    answer: 'The formula is simply: Total Original Minutes / Playback Speed = Real Watch Time.',
  }
];

export default function LectureSpeedCalculator() {
  return (
    <>
      <Seo
        title="Lecture Speed Calculator | 1.5x and 2x Video Time"
        description="Calculate exactly how long it takes to watch a lecture or YouTube video at 1.25x, 1.5x, or 2x speed. See how much time you save."
        canonicalPath="/lecture-speed-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Lecture Speed Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Cramming a semester of lectures into one night? Calculate exactly how long it will take to watch them at 1.5x or 2x speed.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/lecture-speed-calculator">
        <LectureSpeedToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/lecture-speed-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
