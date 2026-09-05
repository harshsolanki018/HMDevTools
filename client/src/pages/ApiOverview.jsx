import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const ApiOverview = () => {
  const apiBaseUrl = typeof window !== 'undefined' ? `${window.location.origin}/api/v1` : 'https://hmdevtools.com/api/v1';

  return (
    <>
      <SEOHead
        title="HMDevTools Developer API — Overview & Architecture"
        description="Integrate HMDevTools utilities into your workflows via lightweight, RESTful v1 JSON API endpoints."
      />

      <div className="section-container" style={{ maxWidth: '900px', padding: '1.25rem 1rem 3rem 1rem' }}>
        <Breadcrumbs items={[{ label: 'API' }]} />

        <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 className="section-title">HMDevTools Developer API</h1>
            <p className="section-desc">Versioned REST endpoints for tool discovery, category metadata, and system health.</p>
          </div>
          <Link
            to="/api/docs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1rem',
              background: 'var(--accent-primary)',
              color: '#ffffff',
              borderRadius: 'var(--radius-sm)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none'
            }}
          >
            Interactive Docs →
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>API Base URL</h2>
            <code style={{
              background: 'var(--bg-surface-muted)',
              padding: '0.5rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              display: 'block',
              maxWidth: '100%',
              overflowX: 'auto',
              wordBreak: 'break-all',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              border: '1px solid var(--border-color)'
            }}>
              {apiBaseUrl}
            </code>
          </div>

          <div>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>Available Endpoints</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>GET</span>
                  <code style={{ wordBreak: 'break-all' }}>/api/v1/health</code>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Returns API health status, database connectivity, and uptime metrics.</p>
              </div>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>GET</span>
                  <code style={{ wordBreak: 'break-all' }}>/api/v1/tools</code>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Retrieves tool catalog with category and search query filters.</p>
              </div>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ background: 'var(--accent-subtle)', color: 'var(--accent-primary)', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>POST</span>
                  <code style={{ wordBreak: 'break-all' }}>/api/v1/contact</code>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Submits contact messages with rate-limiting and validation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiOverview;
