import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const HowItWorks = () => {
  return (
    <>
      <SEOHead
        title="How HMDevTools Works — Local vs Server Processing"
        description="Understand how HMDevTools processes data in your browser memory versus backend API routes."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'How It Works' }]} />

        <h1 className="section-title">How HMDevTools Works</h1>
        <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
          Understanding the workflow and processing execution model behind HMDevTools.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>1. Browser Local Execution (90%+ Tools)</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              When you use tools like the JSON Formatter, Base64 Encoder, JWT Decoder, or Regex Tester, your input is processed locally in your browser memory via Web Workers or synchronous client JavaScript. No data is sent over the network to any server.
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>2. Encrypted Server Endpoints (API & Contact)</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>
              For features requiring server integration (such as contact submissions, rate-limited public APIs, or future AI tools), requests are processed via encrypted HTTPS endpoints. Raw input data is never persisted unless explicitly required by the service contract.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
