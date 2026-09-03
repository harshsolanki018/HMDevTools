import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';
import '@/pages/Home.css';

export const ApiDocs = () => {
  const [healthData, setHealthData] = useState('Loading live /api/v1/health status...');

  useEffect(() => {
    fetch('/api/v1/health')
      .then(res => res.json())
      .then(data => setHealthData(JSON.stringify(data, null, 2)))
      .catch(err => setHealthData(JSON.stringify({ status: 'offline', message: err.message }, null, 2)));
  }, []);

  return (
    <>
      <SEOHead
        title="Interactive API Documentation — HMDevTools"
        description="Technical reference and live testing for HMDevTools REST API endpoints."
      />

      <div className="section-container" style={{ maxWidth: '900px' }}>
        <Breadcrumbs items={[{ label: 'API', to: '/api' }, { label: 'Documentation' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">API Documentation & Technical Reference</h1>
          <p className="section-desc">Interactive reference for version 1 REST API endpoints.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '0.75rem' }}>Live Endpoint Response: GET /api/v1/health</h2>
            <CodeEditorPanel
              title="Live Response Payload"
              value={healthData}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDocs;
