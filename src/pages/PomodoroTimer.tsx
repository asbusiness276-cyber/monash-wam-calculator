import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import PomodoroTimerToolCore from '../components/PomodoroTimerToolCore';

const faqs = [
  {
    question: 'What is the Pomodoro technique?',
    answer: 'The Pomodoro Technique is a time management method that breaks work into intervals, traditionally 25 minutes in length, separated by short breaks (usually 5 minutes).',
  },
  {
    question: 'Why is it effective for studying?',
    answer: 'It instills a sense of urgency and prevents burnout. Taking regular, scheduled breaks helps maintain concentration and solidify memory retention over long study sessions.',
  },
  {
    question: 'How long should a long break be?',
    answer: 'After completing four "Pomodoros" (four 25-minute study sessions), it is recommended to take a longer break of 15 to 30 minutes.',
  }
];

export default function PomodoroTimer() {
  return (
    <>
      <Seo
        title="Pomodoro Study Timer | 25-Minute Focus Tool"
        description="Boost your productivity with our free Pomodoro study timer. Use the 25/5 minute technique to maintain focus and avoid university burnout."
        canonicalPath="/pomodoro-study-timer"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Pomodoro Study Timer</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Beat procrastination. Study for 25 minutes, break for 5. Maximize your focus.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/pomodoro-study-timer">
        <PomodoroTimerToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/pomodoro-study-timer" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
