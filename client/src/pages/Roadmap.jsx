import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Roadmap = () => {
  const roadmapItems = [
    { stage: 'In Development', title: 'Expanded Code Converters', desc: 'JSON to Java, C#, and YAML to TypeScript type generators.' },
    { stage: 'Planned (Q4 2026)', title: 'Web Worker Heavy Hash Engine', desc: 'Multi-threaded client hash computations for large file checksums (SHA-256, SHA-512, MD5).' },
    { stage: 'Under Consideration', title: 'Optional AI Code Explainer', desc: 'Configurable AI error explainer and SQL query optimizer.' }
  ];

  return (
    <>
      <SEOHead
        title="Product Roadmap — HMDevTools"
        description="Explore planned features, upcoming tools, and architectural roadmap for HMDevTools."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'Roadmap' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">Product Roadmap</h1>
          <p className="section-desc">Upcoming utilities and planned architectural developments.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {roadmapItems.map((item, idx) => (
            <div key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
              <span className="tool-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{item.stage}</span>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roadmap;
