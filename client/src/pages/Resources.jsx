import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { resourcesRegistry } from '@/registry/resources';

export const Resources = () => {
  return (
    <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '4rem' }}>
      <Helmet>
        <title>Developer Guides & Reference Cheat Sheets | HMDevTools</title>
        <meta name="description" content="Explore comprehensive developer cheat sheets and technical references for JSON, HTTP status codes, Regex patterns, Cron schedules, Base64, and Web Development." />
        <link rel="canonical" href="https://hmdevtools.com/resources" />
        <meta property="og:title" content="Developer Guides & Reference Cheat Sheets | HMDevTools" />
        <meta property="og:description" content="Explore comprehensive developer cheat sheets and technical references for JSON, HTTP status codes, Regex patterns, Cron schedules, Base64, and Web Development." />
      </Helmet>

      <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--text-main)' }}>
          Developer Reference Guides & Cheat Sheets
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Practical, high-density technical references for everyday engineering workflows. Learn syntax rules, inspect common errors, and link directly to interactive developer tools.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
        {resourcesRegistry.map(res => (
          <Link
            key={res.slug}
            to={`/resources/${res.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              padding: '1.25rem',
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              transition: 'border-color 0.15s ease'
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--accent-primary)', letterSpacing: '0.05em' }}>
                {res.category.replace('-', ' ')}
              </span>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 600, margin: '0.4rem 0 0.6rem 0', color: 'var(--text-main)' }}>
                {res.title}
              </h2>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {res.shortDescription}
              </p>
            </div>
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              Read Cheat Sheet →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resources;
