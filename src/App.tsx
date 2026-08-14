import { lazy, Suspense, type ReactElement } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import AmazonStickySidebars from './components/AmazonStickySidebars';
const WAMtoGPA = lazy(() => import('./pages/WAMtoGPA'));
const GPAtoWAM = lazy(() => import('./pages/GPAtoWAM'));
const FinalGrade = lazy(() => import('./pages/FinalGrade'));
const MarkToGrade = lazy(() => import('./pages/MarkToGrade'));
const WamTarget = lazy(() => import('./pages/WamTarget'));
const SuppRepeatWam = lazy(() => import('./pages/SuppRepeatWam'));
const SemesterWam = lazy(() => import('./pages/SemesterWam'));
const UnitMark = lazy(() => import('./pages/UnitMark'));
const WamProjection = lazy(() => import('./pages/WamProjection'));
const UnitTarget = lazy(() => import('./pages/UnitTarget'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const Disclaimer = lazy(() => import('./pages/Disclaimer'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Author = lazy(() => import('./pages/Author'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Articles = lazy(() => import('./pages/Articles'));
const ArticlePost = lazy(() => import('./pages/ArticlePost'));
const ArticleCategory = lazy(() => import('./pages/ArticleCategory'));
const EmbedWamToGpa = lazy(() => import('./pages/EmbedWamToGpa'));
const EmbedMonashWam = lazy(() => import('./pages/EmbedMonashWam'));
const WriteForUs = lazy(() => import('./pages/WriteForUs'));
const MonashGpa = lazy(() => import('./pages/MonashGpa'));
const MonashCgpa = lazy(() => import('./pages/MonashCgpa'));
const MonashTargetGpa = lazy(() => import('./pages/MonashTargetGpa'));
const MonashHonours = lazy(() => import('./pages/MonashHonours'));
const MonashGradeConverter = lazy(() => import('./pages/MonashGradeConverter'));
const MonashDistinctionAverage = lazy(() => import('./pages/MonashDistinctionAverage'));
const MonashScholarshipWam = lazy(() => import('./pages/MonashScholarshipWam'));
const FailedUnitWam = lazy(() => import('./pages/FailedUnitWam'));
const MonashDeansHonours = lazy(() => import('./pages/MonashDeansHonours'));
const MonashExchangeWam = lazy(() => import('./pages/MonashExchangeWam'));
const Calculators = lazy(() => import('./pages/Calculators'));
const MonashOfficialWam = lazy(() => import('./pages/MonashOfficialWam'));
const PassMark = lazy(() => import('./pages/PassMark'));
const DegreeProgress = lazy(() => import('./pages/DegreeProgress'));
const WamMilestones = lazy(() => import('./pages/WamMilestones'));
const WithdrawnFailImpact = lazy(() => import('./pages/WithdrawnFailImpact'));
const WeightedAverage = lazy(() => import('./pages/WeightedAverage'));
const GradeAverage = lazy(() => import('./pages/GradeAverage'));
const PercentageToGpa = lazy(() => import('./pages/PercentageToGpa'));
const Gpa7Scale = lazy(() => import('./pages/Gpa7Scale'));
const WamTo40Gpa = lazy(() => import('./pages/WamTo40Gpa'));
const WamTo70Gpa = lazy(() => import('./pages/WamTo70Gpa'));
const WamToCgpa = lazy(() => import('./pages/WamToCgpa'));
const Gpa40ToWam = lazy(() => import('./pages/Gpa40ToWam'));
const Gpa70ToWam = lazy(() => import('./pages/Gpa70ToWam'));
const CgpaToWam = lazy(() => import('./pages/CgpaToWam'));
const GpaToPercentage = lazy(() => import('./pages/GpaToPercentage'));
const Gpa40To70 = lazy(() => import('./pages/Gpa40To70'));
const Gpa70To40 = lazy(() => import('./pages/Gpa70To40'));
const SemesterGpa = lazy(() => import('./pages/SemesterGpa'));
const GpaToCgpa = lazy(() => import('./pages/GpaToCgpa'));
const CgpaToGpa = lazy(() => import('./pages/CgpaToGpa'));
const Gpa40Calculator = lazy(() => import('./pages/Gpa40Calculator'));
const GpaCalculator = lazy(() => import('./pages/GpaCalculator'));
const AtarConverter = lazy(() => import('./pages/AtarConverter'));
const AtarCourseChecker = lazy(() => import('./pages/AtarCourseChecker'));
const HighSchoolGpa = lazy(() => import('./pages/HighSchoolGpa'));
const Gpa10ToWam = lazy(() => import('./pages/Gpa10ToWam'));
const HecsHelpDebtCalculator = lazy(() => import('./pages/HecsHelpDebtCalculator'));
const LatePenaltyCalculator = lazy(() => import('./pages/LatePenaltyCalculator'));
const AcademicStandingCalculator = lazy(() => import('./pages/AcademicStandingCalculator'));
const CourseTransferWamChecker = lazy(() => import('./pages/CourseTransferWamChecker'));
const VisaLoadCalculator = lazy(() => import('./pages/VisaLoadCalculator'));
const StudentBudgetCalculator = lazy(() => import('./pages/StudentBudgetCalculator'));
const StudyTimeCalculator = lazy(() => import('./pages/StudyTimeCalculator'));
const AttendanceCalculator = lazy(() => import('./pages/AttendanceCalculator'));
const EssayWordCountAllocator = lazy(() => import('./pages/EssayWordCountAllocator'));
const ReadingTimeCalculator = lazy(() => import('./pages/ReadingTimeCalculator'));
const PomodoroTimer = lazy(() => import('./pages/PomodoroTimer'));
const TypingTimeEstimator = lazy(() => import('./pages/TypingTimeEstimator'));
const WordsToPagesConverter = lazy(() => import('./pages/WordsToPagesConverter'));
const HecsRepaymentTimeCalculator = lazy(() => import('./pages/HecsRepaymentTimeCalculator'));
const SharehouseRentSplitter = lazy(() => import('./pages/SharehouseRentSplitter'));
const PeerReviewMarkCalculator = lazy(() => import('./pages/PeerReviewMarkCalculator'));
const CaffeineCrashCalculator = lazy(() => import('./pages/CaffeineCrashCalculator'));
const StudentTaxCalculator = lazy(() => import('./pages/StudentTaxCalculator'));
const YouthAllowanceEstimator = lazy(() => import('./pages/YouthAllowanceEstimator'));
const CommuteVsRentCalculator = lazy(() => import('./pages/CommuteVsRentCalculator'));
const StandardDrinksCalculator = lazy(() => import('./pages/StandardDrinksCalculator'));
const DetailedTextAnalyzer = lazy(() => import('./pages/DetailedTextAnalyzer'));
const LectureSpeedCalculator = lazy(() => import('./pages/LectureSpeedCalculator'));
const SleepCycleCalculator = lazy(() => import('./pages/SleepCycleCalculator'));
const TextbookReadingTimeCalculator = lazy(() => import('./pages/TextbookReadingTimeCalculator'));
const TextCaseConverter = lazy(() => import('./pages/TextCaseConverter'));
const CoffeeCostCalculator = lazy(() => import('./pages/CoffeeCostCalculator'));
const HecsIndexationCalculator = lazy(() => import('./pages/HecsIndexationCalculator'));
const Alphabetizer = lazy(() => import('./pages/Alphabetizer'));
const DaysBetweenDatesCalculator = lazy(() => import('./pages/DaysBetweenDatesCalculator'));
const PercentageCalculator = lazy(() => import('./pages/PercentageCalculator'));
const BinaryTextConverter = lazy(() => import('./pages/BinaryTextConverter'));
const AgeCalculator = lazy(() => import('./pages/AgeCalculator'));
const RandomNumberGenerator = lazy(() => import('./pages/RandomNumberGenerator'));
const NumberToWordsConverter = lazy(() => import('./pages/NumberToWordsConverter'));
const StudyBreakCalculator = lazy(() => import('./pages/StudyBreakCalculator'));
const HexToDecimalConverter = lazy(() => import('./pages/HexToDecimalConverter'));
const BmiCalculator = lazy(() => import('./pages/BmiCalculator'));
const TipCalculator = lazy(() => import('./pages/TipCalculator'));
const SalaryCalculator = lazy(() => import('./pages/SalaryCalculator'));
const DiscountCalculator = lazy(() => import('./pages/DiscountCalculator'));
const LoanCalculator = lazy(() => import('./pages/LoanCalculator'));
const CompoundInterestCalculator = lazy(() => import('./pages/CompoundInterestCalculator'));
const MarginCalculator = lazy(() => import('./pages/MarginCalculator'));
const WordCounterTool = lazy(() => import('./pages/WordCounterTool'));
const RomanNumeralConverter = lazy(() => import('./pages/RomanNumeralConverter'));
const PasswordGenerator = lazy(() => import('./pages/PasswordGenerator'));
const PercentageChangeCalculator = lazy(() => import('./pages/PercentageChangeCalculator'));
const FuelCostCalculator = lazy(() => import('./pages/FuelCostCalculator'));
const DateCalculator = lazy(() => import('./pages/DateCalculator'));
const TimeDurationCalculator = lazy(() => import('./pages/TimeDurationCalculator'));
const RandomNamePicker = lazy(() => import('./pages/RandomNamePicker'));

function withSuspense(element: ReactElement) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

function getPage(path: string) {
  if (path === '/') return <Home />;
  if (path === '/wam-to-gpa-calculator') return withSuspense(<WAMtoGPA />);
  if (path === '/gpa-to-wam-calculator') return withSuspense(<GPAtoWAM />);
  if (path === '/final-grade-calculator') return withSuspense(<FinalGrade />);
  if (path === '/mark-to-grade-calculator') return withSuspense(<MarkToGrade />);
  if (path === '/wam-target-calculator') return withSuspense(<WamTarget />);
  if (path === '/supp-repeat-wam-calculator') return withSuspense(<SuppRepeatWam />);
  if (path === '/semester-wam-calculator') return withSuspense(<SemesterWam />);
  if (path === '/unit-mark-calculator') return withSuspense(<UnitMark />);
  if (path === '/wam-projection-calculator') return withSuspense(<WamProjection />);
  if (path === '/unit-target-calculator') return withSuspense(<UnitTarget />);
  if (path === '/monash-gpa-calculator') return withSuspense(<MonashGpa />);
  if (path === '/monash-cgpa-calculator') return withSuspense(<MonashCgpa />);
  if (path === '/monash-target-gpa-calculator') return withSuspense(<MonashTargetGpa />);
  if (path === '/monash-honours-calculator') return withSuspense(<MonashHonours />);
  if (path === '/monash-grade-converter') return withSuspense(<MonashGradeConverter />);
  if (path === '/monash-distinction-average-calculator') return withSuspense(<MonashDistinctionAverage />);
  if (path === '/monash-scholarship-wam-calculator') return withSuspense(<MonashScholarshipWam />);
  if (path === '/failed-unit-wam-calculator') return withSuspense(<FailedUnitWam />);
  if (path === '/monash-deans-honours-calculator') return withSuspense(<MonashDeansHonours />);
  if (path === '/monash-exchange-wam-calculator') return withSuspense(<MonashExchangeWam />);
  if (path === '/calculators') return withSuspense(<Calculators />);
  if (path === '/monash-official-wam-calculator') return withSuspense(<MonashOfficialWam />);
  if (path === '/pass-mark-calculator') return withSuspense(<PassMark />);
  if (path === '/degree-progress-calculator') return withSuspense(<DegreeProgress />);
  if (path === '/wam-milestones-calculator') return withSuspense(<WamMilestones />);
  if (path === '/withdrawn-fail-impact-calculator') return withSuspense(<WithdrawnFailImpact />);
  if (path === '/weighted-average-calculator') return withSuspense(<WeightedAverage />);
  if (path === '/grade-average-calculator') return withSuspense(<GradeAverage />);
  if (path === '/percentage-to-gpa-calculator') return withSuspense(<PercentageToGpa />);
  if (path === '/7-0-scale-gpa-calculator') return withSuspense(<Gpa7Scale />);
  if (path === '/wam-to-4-0-gpa-calculator') return withSuspense(<WamTo40Gpa />);
  if (path === '/wam-to-7-0-gpa-calculator') return withSuspense(<WamTo70Gpa />);
  if (path === '/wam-to-cgpa-calculator') return withSuspense(<WamToCgpa />);
  if (path === '/4-0-gpa-to-wam-calculator') return withSuspense(<Gpa40ToWam />);
  if (path === '/7-0-gpa-to-wam-calculator') return withSuspense(<Gpa70ToWam />);
  if (path === '/cgpa-to-wam-calculator') return withSuspense(<CgpaToWam />);
  if (path === '/gpa-to-percentage-calculator') return withSuspense(<GpaToPercentage />);
  if (path === '/4-0-to-7-0-gpa-calculator') return withSuspense(<Gpa40To70 />);
  if (path === '/7-0-to-4-0-gpa-calculator') return withSuspense(<Gpa70To40 />);
  if (path === '/semester-gpa-calculator') return withSuspense(<SemesterGpa />);
  if (path === '/gpa-to-cgpa-calculator') return withSuspense(<GpaToCgpa />);
  if (path === '/cgpa-to-gpa-calculator') return withSuspense(<CgpaToGpa />);
  if (path === '/4-0-gpa-calculator') return withSuspense(<Gpa40Calculator />);
  if (path === '/gpa-calculator') return withSuspense(<GpaCalculator />);
  if (path === '/atar-to-gpa-wam-calculator') return withSuspense(<AtarConverter />);
  if (path === '/monash-atar-course-checker') return withSuspense(<AtarCourseChecker />);
  if (path === '/high-school-gpa-calculator') return withSuspense(<HighSchoolGpa />);
  if (path === '/10-point-gpa-to-wam-calculator') return withSuspense(<Gpa10ToWam />);
  if (path === '/hecs-debt-calculator') return withSuspense(<HecsHelpDebtCalculator />);
  if (path === '/late-penalty-calculator') return withSuspense(<LatePenaltyCalculator />);
  if (path === '/academic-standing-calculator') return withSuspense(<AcademicStandingCalculator />);
  if (path === '/course-transfer-wam-checker') return withSuspense(<CourseTransferWamChecker />);
  if (path === '/visa-load-calculator') return withSuspense(<VisaLoadCalculator />);
  if (path === '/student-budget-calculator') return withSuspense(<StudentBudgetCalculator />);
  if (path === '/study-time-calculator') return withSuspense(<StudyTimeCalculator />);
  if (path === '/attendance-calculator') return withSuspense(<AttendanceCalculator />);
  if (path === '/essay-word-count-allocator') return withSuspense(<EssayWordCountAllocator />);
  if (path === '/reading-time-calculator') return withSuspense(<ReadingTimeCalculator />);
  if (path === '/pomodoro-study-timer') return withSuspense(<PomodoroTimer />);
  if (path === '/typing-time-estimator') return withSuspense(<TypingTimeEstimator />);
  if (path === '/words-to-pages-converter') return withSuspense(<WordsToPagesConverter />);
  if (path === '/hecs-repayment-time-calculator') return withSuspense(<HecsRepaymentTimeCalculator />);
  if (path === '/sharehouse-rent-splitter') return withSuspense(<SharehouseRentSplitter />);
  if (path === '/peer-review-mark-calculator') return withSuspense(<PeerReviewMarkCalculator />);
  if (path === '/caffeine-crash-calculator') return withSuspense(<CaffeineCrashCalculator />);
  if (path === '/student-tax-calculator') return withSuspense(<StudentTaxCalculator />);
  if (path === '/youth-allowance-estimator') return withSuspense(<YouthAllowanceEstimator />);
  if (path === '/commute-vs-rent-calculator') return withSuspense(<CommuteVsRentCalculator />);
  if (path === '/standard-drinks-calculator') return withSuspense(<StandardDrinksCalculator />);
  if (path === '/detailed-text-analyzer') return withSuspense(<DetailedTextAnalyzer />);
  if (path === '/lecture-speed-calculator') return withSuspense(<LectureSpeedCalculator />);
  if (path === '/sleep-cycle-calculator') return withSuspense(<SleepCycleCalculator />);
  if (path === '/textbook-reading-time-calculator') return withSuspense(<TextbookReadingTimeCalculator />);
  if (path === '/text-case-converter') return withSuspense(<TextCaseConverter />);
  if (path === '/daily-coffee-cost-calculator') return withSuspense(<CoffeeCostCalculator />);
  if (path === '/hecs-indexation-calculator') return withSuspense(<HecsIndexationCalculator />);
  if (path === '/alphabetizer') return withSuspense(<Alphabetizer />);
  if (path === '/days-between-dates-calculator') return withSuspense(<DaysBetweenDatesCalculator />);
  if (path === '/percentage-calculator') return withSuspense(<PercentageCalculator />);
  if (path === '/binary-to-text-converter') return withSuspense(<BinaryTextConverter />);
  if (path === '/age-calculator') return withSuspense(<AgeCalculator />);
  if (path === '/random-number-generator') return withSuspense(<RandomNumberGenerator />);
  if (path === '/number-to-words-converter') return withSuspense(<NumberToWordsConverter />);
  if (path === '/study-break-calculator') return withSuspense(<StudyBreakCalculator />);
  if (path === '/hex-to-decimal-converter') return withSuspense(<HexToDecimalConverter />);
  if (path === '/bmi-calculator') return withSuspense(<BmiCalculator />);
  if (path === '/tip-calculator') return withSuspense(<TipCalculator />);
  if (path === '/salary-calculator') return withSuspense(<SalaryCalculator />);
  if (path === '/discount-calculator') return withSuspense(<DiscountCalculator />);
  if (path === '/loan-calculator') return withSuspense(<LoanCalculator />);
  if (path === '/compound-interest-calculator') return withSuspense(<CompoundInterestCalculator />);
  if (path === '/margin-calculator') return withSuspense(<MarginCalculator />);
  if (path === '/word-counter-tool') return withSuspense(<WordCounterTool />);
  if (path === '/roman-numeral-converter') return withSuspense(<RomanNumeralConverter />);
  if (path === '/password-generator') return withSuspense(<PasswordGenerator />);
  if (path === '/percentage-change-calculator') return withSuspense(<PercentageChangeCalculator />);
  if (path === '/fuel-cost-calculator') return withSuspense(<FuelCostCalculator />);
  if (path === '/date-calculator') return withSuspense(<DateCalculator />);
  if (path === '/time-duration-calculator') return withSuspense(<TimeDurationCalculator />);
  if (path === '/random-name-picker') return withSuspense(<RandomNamePicker />);
  if (path === '/articles') return withSuspense(<Articles />);
  if (path.startsWith('/articles/category/')) {
    const categoryId = path.replace('/articles/category/', '');
    return withSuspense(<ArticleCategory categoryId={categoryId} />);
  }
  if (path.startsWith('/articles/')) {
    const slug = path.replace('/articles/', '');
    return withSuspense(<ArticlePost slug={slug} />);
  }
  if (path === '/privacy-policy') return withSuspense(<PrivacyPolicy />);
  if (path === '/terms-and-conditions') return withSuspense(<TermsAndConditions />);
  if (path === '/disclaimer') return withSuspense(<Disclaimer />);
  if (path === '/about-us') return withSuspense(<AboutUs />);
  if (path === '/about-author') return withSuspense(<Author />);
  if (path === '/contact-us') return withSuspense(<ContactUs />);
  if (path === '/write-for-us') return withSuspense(<WriteForUs />);
  return withSuspense(<NotFound />);
}

export default function App() {
  const { dark, toggle } = useDarkMode();
  const path = window.location.pathname;

  if (path === '/embed/wam-to-gpa' || path === '/embed/monash-wam') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {withSuspense(path === '/embed/wam-to-gpa' ? <EmbedWamToGpa /> : <EmbedMonashWam />)}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-gray-50 dark:bg-gray-900 transition-colors">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar dark={dark} toggleDark={toggle} />
      <AmazonStickySidebars />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {getPage(path)}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
