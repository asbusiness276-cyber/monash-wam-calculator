import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import SleepCycleToolCore from '../components/SleepCycleToolCore';

const faqs = [
  {
    question: 'Why do I feel groggy even after sleeping 8 hours?',
    question_clean: 'Why do I feel groggy even after sleeping 8 hours',
    answer: 'Human sleep cycles last approximately 90 minutes. If you wake up in the middle of a deep sleep cycle (e.g. after exactly 8 hours), you will experience sleep inertia (grogginess). Waking up at the end of a cycle (e.g. 7.5 hours or 9 hours) leaves you feeling refreshed.',
  },
  {
    question: 'How many sleep cycles do I need?',
    question_clean: 'How many sleep cycles do I need',
    answer: 'Most healthy adults need 5 cycles (7.5 hours) or 6 cycles (9 hours) per night. 4 cycles (6 hours) can be used occasionally, but long-term use leads to sleep deprivation.',
  },
  {
    question: 'Does this calculator account for falling asleep?',
    question_clean: 'Does this calculator account for falling asleep',
    answer: 'Yes! We automatically subtract an extra 15 minutes to account for the average time it takes a human to fall asleep after their head hits the pillow.',
  }
];

export default function SleepCycleCalculator() {
  return (
    <>
      <Seo
        title="Sleep Cycle Calculator | 90-Minute REM Wake Times"
        description="Calculate the exact time you should go to bed to wake up feeling refreshed. Based on 90-minute REM sleep cycles to prevent grogginess."
        canonicalPath="/sleep-cycle-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Sleep Cycle Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Stop waking up groggy. Calculate exactly when to sleep to align with your natural 90-minute REM cycles.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/sleep-cycle-calculator">
        <SleepCycleToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/sleep-cycle-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
