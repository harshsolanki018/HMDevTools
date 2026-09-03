import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Terms = () => {
  return (
    <>
      <SEOHead
        title="Terms of Service — HMDevTools"
        description="Terms of service and usage guidelines for HMDevTools utilities."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />

        <h1 className="section-title">Terms of Service</h1>
        <p className="section-desc" style={{ marginBottom: '2rem' }}>Last updated: September 2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>1. Acceptance of Terms</h2>
            <p>By accessing and using HMDevTools, you agree to comply with these terms of service.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>2. Use of Utilities</h2>
            <p>Our tools are provided "as is" for software development, debugging, and data processing. Commercial and non-commercial use is permitted.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Terms;
