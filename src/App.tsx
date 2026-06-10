import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WAMtoGPA from './pages/WAMtoGPA';
import GPAtoWAM from './pages/GPAtoWAM';
import FinalGrade from './pages/FinalGrade';
import MarkToGrade from './pages/MarkToGrade';
import WamTarget from './pages/WamTarget';
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

function getPage(path: string) {
  if (path === '/') return <Home />;
  if (path === '/wam-to-gpa-calculator') return <WAMtoGPA />;
  if (path === '/gpa-to-wam-calculator') return <GPAtoWAM />;
  if (path === '/final-grade-calculator') return <FinalGrade />;
  if (path === '/mark-to-grade-calculator') return <MarkToGrade />;
  if (path === '/wam-target-calculator') return <WamTarget />;
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
