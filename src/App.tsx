import { lazy, Suspense, type ReactElement } from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import PageLoader from './components/PageLoader';
import AmazonStickySidebars from './components/AmazonStickySidebars';
import Home from './pages/Home';

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
const HighSchoolGpa = lazy(() => import('./pages/HighSchoolGpa'));
const Gpa10ToWam = lazy(() => import('./pages/Gpa10ToWam'));

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
  if (path === '/high-school-gpa-calculator') return withSuspense(<HighSchoolGpa />);
  if (path === '/10-point-gpa-to-wam-calculator') return withSuspense(<Gpa10ToWam />);
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
      <AmazonStickySidebars path={path} />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {getPage(path)}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
