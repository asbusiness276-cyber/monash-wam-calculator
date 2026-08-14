import Seo from '../components/Seo';
import AtarCourseCheckerToolCore from '../components/AtarCourseCheckerToolCore';
import CalculatorSectionWithInlineAds from '../components/CalculatorSectionWithInlineAds';
import CalculatorPageGuide from '../components/CalculatorPageGuide';

const faqs = [
  {
    question: "What is the Monash Guarantee ATAR?",
    answer: "The Monash Guarantee is a lower ATAR requirement for students who have experienced financial or educational disadvantage, or live in a regional area. It guarantees you a place in the course if you meet the SEAS criteria and the Monash Guarantee ATAR."
  },
  {
    question: "Do I still need to meet prerequisite subjects?",
    answer: "Yes. Even if you meet the required ATAR or Monash Guarantee ATAR, you must still satisfy all subject prerequisites (like English, Maths, or Science) and any extra requirements (like interviews or folios) for the course."
  },
  {
    question: "Is the required ATAR guaranteed?",
    answer: "For most courses, if you achieve the published 'Guaranteed ATAR' and meet all prerequisites, you will receive an offer. However, some courses (like Medicine) have additional selection criteria like the UCAT and interviews."
  }
];

export default function AtarCourseChecker() {
  return (
    <>
      <Seo
        title="Monash ATAR Course Eligibility Checker (2025)"
        description="Enter your ATAR to instantly see which Monash University degrees you can get into. Checks guaranteed ATARs and SEAS (Monash Guarantee) requirements."
        canonicalPath="/monash-atar-course-checker"
        faqItems={faqs}
      />
      
      <CalculatorSectionWithInlineAds path="/atar-course-checker">
        <AtarCourseCheckerToolCore />
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide path="/atar-course-checker" />
    </>
  );
}
