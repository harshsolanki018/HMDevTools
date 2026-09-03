import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';
import '@/pages/Home.css';

export const ApiOverview = () => {
  return (
    <>
      <SEOHead
        title="HMDevTools Developer API — Overview & Architecture"
        description="Integrate HMDevTools utilities into your workflows via lightweight, RESTful v1 JSON API endpoints."
      />

      <div className="section-container" style={{ maxWidth: '900px' }}>
        <Breadcrumbs items={[{ label: 'API' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">HMDevTools Developer API</h1>
          <p className="section-desc">Versioned REST endpoints for tool discovery, category metadata, and system health.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.5rem' }}>API Base URL</h2>
            <code style={{ background: 'var(--bg-surface-muted)', padding: '0.4rem 0.75rem', borderRadius: '4px', display: 'block', width: 'fit-content', color: 'var(--accent-primary)', fontWeight: 600 }}>
              http://localhost:5000/api/v1
            </code>
          </div>

          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem' }}>Available Endpoints</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>GET</span>
                  <code>/api/v1/health</code>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Returns API health status, database connectivity, and uptime metrics.</p>
              </div>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: 'var(--status-success-bg)', color: 'var(--status-success)', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>GET</span>
                  <code>/api/v1/tools</code>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Retrieves tool catalog with category and search query filters.</p>
              </div>

              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <span style={{ background: 'var(--accent-subtle)', color: 'var(--accent-primary)', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>POST</span>
                  <code>/api/v1/contact</code>
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
