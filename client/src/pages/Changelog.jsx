import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Changelog = () => {
  const releases = [
    {
      version: 'v1.0.0',
      date: 'September 2026',
      changes: [
        'Initial release of HMDevTools platform.',
        'Implemented 26+ core developer utilities including JSON Formatter, Base64 Encoder, JWT Decoder, UUID Generator, Timestamp Converter, and Text Diff.',
        'Centralized data-driven tool registry architecture.',
        'Light, Dark, and System theme preferences with persistent local state.',
        'Instant client-side search with Ctrl + K keyboard modal.',
        'Versioned Express REST API under /api/v1.'
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Product Changelog — HMDevTools"
        description="Public product releases, feature updates, and improvements to HMDevTools."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'Changelog' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">Product Changelog</h1>
          <p className="section-desc">Transparent release history and feature additions.</p>
        </div>

        {releases.map((rel, idx) => (
          <div key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{rel.version}</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{rel.date}</span>
            </div>
            <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
              {rel.changes.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Changelog;
