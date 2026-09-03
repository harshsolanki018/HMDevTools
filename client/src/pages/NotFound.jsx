import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import '@/pages/Home.css';

export const NotFound = () => {
  return (
    <>
      <SEOHead title="404 — Page Not Found — HMDevTools" noindex={true} />

      <div className="section-container" style={{ textAlign: 'center', padding: '6rem 1.25rem' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>404</h1>
        <h2 className="section-title">Page Not Found</h2>
        <p className="section-desc" style={{ marginTop: '0.5rem', marginBottom: '2rem' }}>
          The tool or page you are looking for does not exist or has been moved.
        </p>

        <Link to="/tools" className="tool-action-btn" style={{ padding: '0.6rem 1.25rem', background: 'var(--accent-primary)', color: '#fff', fontSize: '1rem' }}>
          Browse All Tools
        </Link>
      </div>
    </>
  );
};

export default NotFound;
