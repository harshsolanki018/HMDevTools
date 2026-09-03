import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Zap, Lock, Code, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import JsonLd from '@/components/seo/JsonLd';
import Logo from '@/components/brand/Logo';
import { getPopularTools } from '@/registry/tools';
import { categoriesRegistry } from '@/registry/categories';
import './Home.css';

export const Home = ({ onOpenSearch }) => {
  const popularTools = getPopularTools().slice(0, 8);
  const featuredCategories = categoriesRegistry.slice(0, 8);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HMDevTools',
    url: typeof window !== 'undefined' ? window.location.origin : 'https://hmdevtools.com',
    description: 'Fast, practical, privacy-focused online developer utilities.'
  };

  return (
    <>
      <SEOHead
        title="HMDevTools — Developer tools that just work."
        description="Fast, private, practical online developer utilities. Format JSON, convert timestamps, generate UUIDs, encode Base64, debug regex, and more."
      />
      <JsonLd data={websiteSchema} />

      {/* Substantial, Clean Hero Section */}
      <section className="hero-section">
        <Logo size="large" />
        <h1 className="hero-title">Developer tools that just work.</h1>
        <p className="hero-subtitle">
          Fast, practical, and privacy-conscious online utilities for web developers, software engineers, and DevOps.
        </p>

        <div className="hero-search-box" onClick={onOpenSearch}>
          <Search size={20} style={{ color: 'var(--text-muted)' }} />
          <span className="hero-search-input">Search developer tools (Press Ctrl + K)...</span>
          <kbd className="shortcut-kbd">Ctrl K</kbd>
        </div>

        <div className="example-tags">
          <span>Popular shortcuts:</span>
          {['JSON Formatter', 'Base64 Encoder', 'JWT Decoder', 'UUID Generator', 'Unix Timestamp', 'Regex Tester'].map(tag => (
            <button key={tag} className="example-tag-btn" onClick={onOpenSearch}>
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Utilities Section */}
      <section className="section-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Popular Utilities</h2>
            <p className="section-desc">Frequently used tools by developers.</p>
          </div>
          <Link to="/tools" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
            <span>All Tools</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="tools-grid">
          {popularTools.map(tool => (
            <Link key={tool.id} to={`/tools/${tool.slug}`} className="tool-card">
              <div>
                <div className="tool-card-header">
                  <span className="tool-badge">{tool.processingMode === 'client' ? 'Browser Local' : 'API'}</span>
                </div>
                <h3 className="tool-card-title" style={{ marginTop: '0.4rem' }}>{tool.name}</h3>
                <p className="tool-card-desc" style={{ marginTop: '0.25rem' }}>{tool.shortDescription}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.775rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                <span>Open</span>
                <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Local Processing & Privacy Philosophy */}
      <section className="section-container" style={{ background: 'var(--bg-surface-muted)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Shield size={20} style={{ color: 'var(--accent-primary)' }} />
            <h2 className="section-title" style={{ fontSize: '1.2rem' }}>Local Browser Processing</h2>
          </div>
          <p className="section-desc" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            When technically practical, HMDevTools processes data entirely inside your browser memory. Your JSON payloads, passwords, and tokens are computed locally and are never transmitted over external networks.
          </p>
        </div>
      </section>

      {/* Tool Categories Grid */}
      <section className="section-container">
        <div className="section-header">
          <div>
            <h2 className="section-title">Explore by Category</h2>
            <p className="section-desc">Utilities organized by workflow.</p>
          </div>
          <Link to="/categories" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.85rem' }}>
            <span>Categories Index</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="tools-grid">
          {featuredCategories.map(cat => (
            <Link key={cat.id} to={`/categories#${cat.slug}`} className="tool-card">
              <div>
                <h3 className="tool-card-title">{cat.name}</h3>
                <p className="tool-card-desc" style={{ marginTop: '0.25rem' }}>{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container">
        <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>Product Benefits</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Zap size={18} /></div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Instant Execution</h3>
            <p className="section-desc">Fast in-memory processing without server latency.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Lock size={18} /></div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Privacy-First</h3>
            <p className="section-desc">Local client processing. Zero tracking of tool inputs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><CheckCircle2 size={18} /></div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>No Signup Required</h3>
            <p className="section-desc">Immediate access to all tools without accounts or paywalls.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Code size={18} /></div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600 }}>Clean UI</h3>
            <p className="section-desc">Monospace editors, keyboard shortcuts, and dark mode.</p>
          </div>
        </div>
      </section>

      {/* Simple Footer CTA */}
      <section className="section-container" style={{ borderTop: '1px solid var(--border-color)', padding: '2rem 1rem 1rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Need a custom utility or feature?</h3>
            <p className="section-desc">Submit your feedback directly to our engineering team.</p>
          </div>
          <Link to="/contact" className="tool-action-btn" style={{ padding: '0.4rem 0.85rem', background: 'var(--accent-primary)', color: '#fff', fontSize: '0.85rem' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
