import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const FAQ = () => {
  const faqs = [
    { q: 'What is HMDevTools?', a: 'HMDevTools is a fast, privacy-focused collection of online utilities for software engineers and web developers.' },
    { q: 'Are tools free to use?', a: 'Yes, all developer tools on HMDevTools are completely free.' },
    { q: 'Is my data uploaded to a server?', a: 'For browser-local tools (90%+ of our catalog), processing happens 100% locally inside your web browser. Your inputs are never transmitted over the internet.' },
    { q: 'Do I need an account?', a: 'No, all tools are accessible instantly without sign up or registration.' },
    { q: 'Is there an API available?', a: 'Yes, we provide REST endpoints under /api/v1 for health checks, tool metadata, and categories.' },
    { q: 'How can I report a bug or request a new tool?', a: 'You can submit feedback directly via our Contact page.' }
  ];

  return (
    <>
      <SEOHead
        title="Frequently Asked Questions — HMDevTools"
        description="Find answers to common questions about HMDevTools, privacy, client-side processing, and API availability."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'FAQ' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-desc">Common questions regarding privacy, performance, and features.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>{faq.q}</h2>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQ;
