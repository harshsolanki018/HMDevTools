import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Cookies = () => {
  return (
    <>
      <SEOHead
        title="Cookie Policy — HMDevTools"
        description="Learn how HMDevTools uses essential browser localStorage for theme preferences."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />

        <h1 className="section-title">Cookie Policy</h1>
        <p className="section-desc" style={{ marginBottom: '2rem' }}>Last updated: September 2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>1. Local Storage Usage</h2>
            <p>HMDevTools does not use intrusive third-party tracking cookies. We utilize browser `localStorage` solely to remember your chosen theme preference (light, dark, or system mode) across sessions.</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Cookies;
