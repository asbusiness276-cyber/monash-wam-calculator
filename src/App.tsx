import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WAMtoGPA from './pages/WAMtoGPA';
import GPAtoWAM from './pages/GPAtoWAM';
import FinalGrade from './pages/FinalGrade';
import MarkToGrade from './pages/MarkToGrade';
import WamTarget from './pages/WamTarget';
import SuppRepeatWam from './pages/SuppRepeatWam';
import SemesterWam from './pages/SemesterWam';
import UnitMark from './pages/UnitMark';
import WamProjection from './pages/WamProjection';
import UnitTarget from './pages/UnitTarget';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Disclaimer from './pages/Disclaimer';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import ContactUs from './pages/ContactUs';
import Articles from './pages/Articles';
import ArticlePost from './pages/ArticlePost';
import EmbedWamToGpa from './pages/EmbedWamToGpa';
import EmbedMonashWam from './pages/EmbedMonashWam';
import WriteForUs from './pages/WriteForUs';
import MonashGpa from './pages/MonashGpa';
import MonashCgpa from './pages/MonashCgpa';
import MonashTargetGpa from './pages/MonashTargetGpa';
import MonashHonours from './pages/MonashHonours';
import MonashGradeConverter from './pages/MonashGradeConverter';
import MonashDistinctionAverage from './pages/MonashDistinctionAverage';
import MonashScholarshipWam from './pages/MonashScholarshipWam';
import FailedUnitWam from './pages/FailedUnitWam';
import MonashDeansHonours from './pages/MonashDeansHonours';
import MonashExchangeWam from './pages/MonashExchangeWam';
import Calculators from './pages/Calculators';
import MonashOfficialWam from './pages/MonashOfficialWam';
import PassMark from './pages/PassMark';
import DegreeProgress from './pages/DegreeProgress';

function getPage(path: string) {
  if (path === '/') return <Home />;
  if (path === '/wam-to-gpa-calculator') return <WAMtoGPA />;
  if (path === '/gpa-to-wam-calculator') return <GPAtoWAM />;
  if (path === '/final-grade-calculator') return <FinalGrade />;
  if (path === '/mark-to-grade-calculator') return <MarkToGrade />;
  if (path === '/wam-target-calculator') return <WamTarget />;
  if (path === '/supp-repeat-wam-calculator') return <SuppRepeatWam />;
  if (path === '/semester-wam-calculator') return <SemesterWam />;
  if (path === '/unit-mark-calculator') return <UnitMark />;
  if (path === '/wam-projection-calculator') return <WamProjection />;
  if (path === '/unit-target-calculator') return <UnitTarget />;
  if (path === '/monash-gpa-calculator') return <MonashGpa />;
  if (path === '/monash-cgpa-calculator') return <MonashCgpa />;
  if (path === '/monash-target-gpa-calculator') return <MonashTargetGpa />;
  if (path === '/monash-honours-calculator') return <MonashHonours />;
  if (path === '/monash-grade-converter') return <MonashGradeConverter />;
  if (path === '/monash-distinction-average-calculator') return <MonashDistinctionAverage />;
  if (path === '/monash-scholarship-wam-calculator') return <MonashScholarshipWam />;
  if (path === '/failed-unit-wam-calculator') return <FailedUnitWam />;
  if (path === '/monash-deans-honours-calculator') return <MonashDeansHonours />;
  if (path === '/monash-exchange-wam-calculator') return <MonashExchangeWam />;
  if (path === '/calculators') return <Calculators />;
  if (path === '/monash-official-wam-calculator') return <MonashOfficialWam />;
  if (path === '/pass-mark-calculator') return <PassMark />;
  if (path === '/degree-progress-calculator') return <DegreeProgress />;
  if (path === '/articles') return <Articles />;
  if (path.startsWith('/articles/')) {
    const slug = path.replace('/articles/', '');
    return <ArticlePost slug={slug} />;
  }
  if (path === '/privacy-policy') return <PrivacyPolicy />;
  if (path === '/terms-and-conditions') return <TermsAndConditions />;
  if (path === '/disclaimer') return <Disclaimer />;
  if (path === '/about-us') return <AboutUs />;
  if (path === '/contact-us') return <ContactUs />;
  if (path === '/write-for-us') return <WriteForUs />;
  return <NotFound />;
}

export default function App() {
  const { dark, toggle } = useDarkMode();
  const path = window.location.pathname;

  if (path === '/embed/wam-to-gpa' || path === '/embed/monash-wam') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {path === '/embed/wam-to-gpa' ? <EmbedWamToGpa /> : <EmbedMonashWam />}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar dark={dark} toggleDark={toggle} />
      <main className="flex-1">
        {getPage(path)}
      </main>
      <Footer />
    </div>
  );
}
