import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getResourceBySlug } from '@/registry/resources';

export const ResourceDetail = () => {
  const { slug } = useParams();
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return (
      <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)' }}>Resource Not Found</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>The requested developer reference guide does not exist.</p>
        <Link to="/resources" style={{ color: 'var(--accent-primary)', fontWeight: 600, textDecoration: 'none' }}>← Return to All Resources</Link>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': resource.title,
    'description': resource.seoDescription,
    'url': `https://hmdevtools.com/resources/${resource.slug}`,
    'publisher': {
      '@type': 'Organization',
      'name': 'HMDevTools',
      'url': 'https://hmdevtools.com'
    }
  };

  return (
    <div className="section-container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Helmet>
        <title>{resource.seoTitle}</title>
        <meta name="description" content={resource.seoDescription} />
        <link rel="canonical" href={`https://hmdevtools.com/resources/${resource.slug}`} />
        <meta property="og:title" content={resource.seoTitle} />
        <meta property="og:description" content={resource.seoDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
        <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
        <span style={{ margin: '0 0.4rem' }}>/</span>
        <Link to="/resources" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Resources</Link>
        <span style={{ margin: '0 0.4rem' }}>/</span>
        <span style={{ color: 'var(--text-main)', fontWeight: 500 }}>{resource.title}</span>
      </div>

      <h1 style={{ fontSize: '2.15rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-main)', lineHeight: 1.25 }}>
        {resource.title}
      </h1>

      <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '850px' }}>
        {resource.intro}
      </p>

      {/* Quick Reference Table */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>
          Quick Reference Syntax
        </h2>
        <div style={{ overflowX: 'auto', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: 'var(--bg-surface-muted)', borderBottom: '1px solid var(--border-color)' }}>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Concept</th>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Syntax Example</th>
                <th style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Notes & Rules</th>
              </tr>
            </thead>
            <tbody>
              {resource.quickReference.map((item, idx) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.concept}</td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', fontSize: '0.85rem' }}>{item.syntax}</td>
                  <td style={{ padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Mistakes */}
      {resource.commonErrors && resource.commonErrors.length > 0 && (
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>
            Common Mistakes & Gotchas
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {resource.commonErrors.map((err, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--status-danger)', marginBottom: '0.5rem' }}>
                  ❌ {err.error}
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                  <div style={{ background: 'var(--status-danger-bg)', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--status-danger)' }}>
                    <strong>Wrong:</strong> {err.wrong}
                  </div>
                  <div style={{ background: 'var(--status-success-bg)', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--status-success)' }}>
                    <strong>Correct:</strong> {err.correct}
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{err.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Interactive Developer Tools */}
      <section style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>
          Related HMDevTools Utilities
        </h2>
        <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
          {resource.relatedTools.map(t => (
            <Link
              key={t.slug}
              to={`/tools/${t.slug}`}
              style={{
                padding: '0.4rem 0.85rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                color: 'var(--accent-primary)',
                fontSize: '0.875rem',
                fontWeight: 500
              }}
            >
              🛠️ {t.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResourceDetail;
