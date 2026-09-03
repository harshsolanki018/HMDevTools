import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SearchModal from './components/ui/SearchModal';

import Home from './pages/Home';
import ToolsCatalog from './pages/ToolsCatalog';
import ToolDetail from './pages/ToolDetail';
import Categories from './pages/Categories';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Resources from './pages/Resources';
import Blog from './pages/Blog';
import Changelog from './pages/Changelog';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import ApiOverview from './pages/ApiOverview';
import ApiDocs from './pages/ApiDocs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import SitemapPage from './pages/SitemapPage';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header onOpenSearch={() => setIsSearchOpen(true)} />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/tools" element={<ToolsCatalog />} />
          <Route path="/tools/:slug" element={<ToolDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/api" element={<ApiOverview />} />
          <Route path="/api/docs" element={<ApiDocs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

export default App;
