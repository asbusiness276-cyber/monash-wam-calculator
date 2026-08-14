import Seo from '../components/Seo';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';
import PageFaq from '../components/PageFaq';
import RelatedCalculators from '../components/RelatedCalculators';
import StudentBudgetToolCore from '../components/StudentBudgetToolCore';

const faqs = [
  {
    question: 'How do I create a student budget?',
    answer: 'List all your income sources (part-time job, allowances, scholarships) and all your expected expenses (rent, groceries, transport, textbooks). Subtract expenses from income to find your net balance.',
  },
  {
    question: 'How much should a student spend on groceries?',
    answer: 'In Australia, a single student typically spends between $80 to $150 per week on groceries, depending on dietary habits and where they shop.',
  },
  {
    question: 'How can I save money as a student?',
    answer: 'Take advantage of student discounts, buy second-hand textbooks, cook meals at home, and use public transport concession cards.',
  },
  {
    question: 'Is it better to budget weekly or monthly?',
    answer: 'Weekly budgeting is often easier for students as many rent and pay cycles in Australia are weekly or fortnightly.',
  },
];

export default function StudentBudgetCalculator() {
  return (
    <>
      <Seo
        title="Student Budget Calculator | Manage University Expenses"
        description="Free student budget calculator. Easily track your weekly or monthly income, rent, groceries, and see your net savings to manage your finances better."
        canonicalPath="/student-budget-calculator"
        faqItems={faqs}
      />
      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-12 text-center px-4">
        <h1 className="text-4xl font-bold mb-3">Student Budget Calculator</h1>
        <p className="text-indigo-100 max-w-xl mx-auto">
          Take control of your finances. Track your income, manage your university expenses, and maximize your savings.
        </p>
      </section>
      <CalculatorSectionWithInlineAds path="/student-budget-calculator">
        <StudentBudgetToolCore />
      </CalculatorSectionWithInlineAds>
      <CalculatorPageGuide path="/student-budget-calculator" />
      <RelatedCalculators maxItems={6} />
      <PageFaq items={faqs} />
    </>
  );
}
