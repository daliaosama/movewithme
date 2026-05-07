import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Videos from './pages/Videos';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import {
  ZumbaPage,
  ArmPage,
  BackPage,
  ChestPage,
  LegPage,
  YogaPage,
  CardioPage
} from './pages/WorkoutPages';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
function ScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return null
}
export default function App() {
  return (
    <BrowserRouter>
  
      <ScrollToTop />
      <ScrollToHash />  
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zumba" element={<ZumbaPage />} />
          <Route path="/arm" element={<ArmPage />} />
          <Route path="/back" element={<BackPage />} />
          <Route path="/chest" element={<ChestPage />} />
          <Route path="/leg" element={<LegPage />} />
          <Route path="/yoga" element={<YogaPage />} />
          <Route path="/cardio" element={<CardioPage />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* Catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
