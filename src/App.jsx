import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Patterns from './pages/Patterns';
import DSProblems from './pages/DSProblems';
import Solve from './pages/Solve';
import AITutor from './pages/AITutor';
import Schedule from './pages/Schedule';
import Visualizer from './pages/Visualizer';
import CheatSheet from './pages/CheatSheet';
import Roadmap from './pages/Roadmap';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

function PageWrapper({ children, noFooter = false }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
      {!noFooter && <Footer />}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  const noFooterRoutes = ['/ai-tutor', '/solve'];
  const showFooter = !noFooterRoutes.some(r => location.pathname.startsWith(r));

  return (
    <div className="min-h-screen text-gray-100 transition-colors duration-300 relative">
      {/* Dark overlay to ensure readability over the fixed background image */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(5,5,10,0.60) 0%, rgba(8,6,16,0.55) 60%, rgba(5,5,10,0.65) 100%)' }}
      />
      <div className="relative z-10">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Landing /></PageWrapper>} />
            <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
            <Route path="/learn" element={<PageWrapper><Learn /></PageWrapper>} />
            <Route path="/patterns" element={<PageWrapper><Patterns /></PageWrapper>} />
            <Route path="/ds-problems" element={<PageWrapper><DSProblems /></PageWrapper>} />
            <Route path="/solve/:problemId" element={<PageWrapper noFooter><Solve /></PageWrapper>} />
            <Route path="/ai-tutor" element={<PageWrapper noFooter><AITutor /></PageWrapper>} />
            <Route path="/schedule" element={<PageWrapper><Schedule /></PageWrapper>} />
            <Route path="/visualizer" element={<PageWrapper><Visualizer /></PageWrapper>} />
            <Route path="/cheatsheet" element={<PageWrapper><CheatSheet /></PageWrapper>} />
            <Route path="/roadmap" element={<PageWrapper><Roadmap /></PageWrapper>} />
            <Route path="*" element={
              <PageWrapper>
                <div className="min-h-screen flex items-center justify-center pt-16">
                  <div className="text-center">
                    <p className="text-6xl mb-4">404</p>
                    <p className="text-gray-400 mb-4">Page not found</p>
                    <a href="/" className="btn-primary inline-block">Go Home</a>
                  </div>
                </div>
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
