import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Logo from '@/components/brand/Logo';
import '@/pages/Home.css';

export const About = () => {
  return (
    <>
      <SEOHead
        title="About HMDevTools — Product Philosophy & Principles"
        description="Learn about HMDevTools, our privacy-first philosophy, local browser execution, and engineering principles."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'About' }]} />

        <Logo size="large" showWordmark={true} />
        <h1 className="section-title" style={{ marginTop: '1rem' }}>About HMDevTools</h1>
        <p className="section-desc" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          HMDevTools is a developer utility platform focused on delivering fast, practical, and privacy-conscious web tools.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Our Mission</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Developers spend significant time formatting JSON, converting timestamps, debugging regular expressions, and encoding strings. HMDevTools provides an intuitive, reliable set of utilities that load instantly and perform computations locally whenever technically practical.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Core Product Principles</h2>
            <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)' }}>
              <li><strong>Fast & Light:</strong> Minimal bundles, zero heavy decorative scripts.</li>
              <li><strong>Private:</strong> Client-side local execution means your sensitive tokens and code snippets remain in your browser memory.</li>
              <li><strong>No Distractions:</strong> No mandatory signups, no intrusive popups, no fake timers.</li>
              <li><strong>Extensible:</strong> Built on a data-driven tool registry architecture designed for continuous growth.</li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
