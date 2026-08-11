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
      
      <CalculatorSectionWithInlineAds
        title="Monash ATAR Course Checker"
        description="Enter your expected or final ATAR to instantly see which Monash undergraduate degrees you are eligible for. Includes adjustments for SEAS and the Monash Guarantee."
      >
        <AtarCourseCheckerToolCore />
      </CalculatorSectionWithInlineAds>

      <CalculatorPageGuide title="How to use the ATAR Course Checker">
        <p>
          This tool helps Victorian high school students map their expected or final ATAR to Monash University undergraduate degrees. 
          Simply enter your ATAR and the tool will highlight courses where you meet or exceed the published ATAR cut-off.
        </p>

        <h3>SEAS and The Monash Guarantee</h3>
        <p>
          If you are eligible for the Special Entry Access Scheme (SEAS) through VTAC—due to financial disadvantage, attending an under-represented school, or living in a regional area—you may qualify for the <strong>Monash Guarantee</strong>. 
          Check the SEAS box in the calculator to see the lowered ATAR requirements for eligible students.
        </p>

        <h3>Important Limitations</h3>
        <ul>
          <li><strong>Prerequisites:</strong> This tool only checks ATAR scores. You must still achieve the required study scores in prerequisite subjects (e.g., VCE English, Methods, or Chemistry).</li>
          <li><strong>Extra Requirements:</strong> Degrees like Medicine or Architecture require additional testing (UCAT), interviews, or folios. The ATAR is only one component of selection.</li>
          <li><strong>Indicative Only:</strong> The ATAR cut-offs used are based on recent VTAC published data. Actual cut-offs can fluctuate year to year based on demand.</li>
        </ul>
      </CalculatorPageGuide>
    </>
  );
}
