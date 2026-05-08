import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WAMtoGPA from './pages/WAMtoGPA';
import GPAtoWAM from './pages/GPAtoWAM';
import FinalGrade from './pages/FinalGrade';

function getPage(path: string) {
  if (path === '/wam-to-gpa-calculator') return <WAMtoGPA />;
  if (path === '/gpa-to-wam-calculator') return <GPAtoWAM />;
  if (path === '/final-grade-calculator') return <FinalGrade />;
  return <Home />;
}

export default function App() {
  const { dark, toggle } = useDarkMode();
  const path = window.location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      <Navbar dark={dark} toggleDark={toggle} />
      <main className="flex-1">
        {getPage(path)}
      </main>
      <Footer />
    </div>
  );
}
