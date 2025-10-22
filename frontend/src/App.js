import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/shared/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';
import ProjectInfo from './components/projects/ProjectInfo';
import { ProjectsProvider } from './context/ProjectsContext'; // ✅ ajouté ici

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));

function App() {
    const location = useLocation();

    return (
        <ProjectsProvider>
  <AnimatePresence mode="wait">
    <div key={location.pathname}>
      <ScrollToTop />
      <ToastContainer position="top-center" autoClose={5000} />
      <Layout>
        <Suspense fallback={""}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/single-project" element={<ProjectSingle />} />
            <Route path="/projects/:slug" element={<ProjectInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
      <UseScrollToTop />
    </div>
  </AnimatePresence>
</ProjectsProvider>
    );
}

export default App;
