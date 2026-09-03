import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { toolsRegistry } from '@/registry/tools';
import { categoriesRegistry } from '@/registry/categories';
import '@/pages/Home.css';

export const SitemapPage = () => {
  return (
    <>
      <SEOHead
        title="HTML Sitemap — HMDevTools"
        description="Complete site index of all HMDevTools pages, categories, and developer utilities."
      />

      <div className="section-container">
        <Breadcrumbs items={[{ label: 'Sitemap' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">HTML Sitemap</h1>
          <p className="section-desc">Complete index of all public pages and developer tools.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>Main Navigation</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/tools" className="footer-link">All Tools Catalog</Link></li>
              <li><Link to="/categories" className="footer-link">Categories Index</Link></li>
              <li><Link to="/resources" className="footer-link">Developer Resources</Link></li>
              <li><Link to="/blog" className="footer-link">Engineering Blog</Link></li>
              <li><Link to="/how-it-works" className="footer-link">How It Works</Link></li>
              <li><Link to="/changelog" className="footer-link">Changelog</Link></li>
              <li><Link to="/roadmap" className="footer-link">Roadmap</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/api" className="footer-link">API Overview</Link></li>
              <li><Link to="/api/docs" className="footer-link">API Docs</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/cookies" className="footer-link">Cookie Policy</Link></li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>Tool Catalog ({toolsRegistry.length})</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {toolsRegistry.map(t => (
                <li key={t.id}>
                  <Link to={`/tools/${t.slug}`} className="footer-link">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
