import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import RandomNamePickerToolCore from '../components/RandomNamePickerToolCore';

export default function RandomNamePicker() {
  return (
    <>
      <Seo title="Random Name Picker | Spin The Wheel" description="Randomly select a name or item from a list. Perfect for giveaways, teachers, and raffles." canonicalPath="/random-name-picker" />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Random Name Picker</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">Paste a list of names and instantly pick a random winner.</p>
      </section>
      <CalculatorSectionWithInlineAds path="/random-name-picker">
        <RandomNamePickerToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/random-name-picker" />
      <RelatedCalculators maxItems={6} />
    </>
  );
}
