import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Blog = () => {
  const posts = [
    {
      title: 'Building Fast, Privacy-First Developer Tools with Client-Side Processing',
      date: 'September 2026',
      summary: 'Why moving data computation to client browser memory improves tool execution speed and eliminates data privacy concerns.',
      readTime: '4 min read'
    },
    {
      title: 'Understanding JSON Schema Validation & Syntax Parsing',
      date: 'August 2026',
      summary: 'A deep dive into RFC 8259 compliance, strict quote requirements, and modern JSON parser performance.',
      readTime: '6 min read'
    }
  ];

  return (
    <>
      <SEOHead
        title="HMDevTools Engineering Blog"
        description="Curated engineering articles on developer tooling, web performance, and privacy-conscious web design."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">Engineering Blog</h1>
          <p className="section-desc">Technical articles on developer tooling, privacy, and web performance.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {posts.map((post, idx) => (
            <article key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                {post.date} • {post.readTime}
              </div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)' }}>{post.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', lineHeight: '1.6' }}>{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
