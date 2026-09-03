import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileCode, HelpCircle, Shield, Sparkles } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getToolBySlug, getToolsByCategory, toolsRegistry } from '@/registry/tools';
import { getToolComponent } from '@/registry/componentMap';
import { getCategoryBySlug } from '@/registry/categories';
import NotFound from './NotFound';
import '@/pages/Home.css';

export const ToolDetail = () => {
  const { slug } = useParams();
  const tool = getToolBySlug(slug);

  if (!tool) {
    return <NotFound />;
  }

  const category = getCategoryBySlug(tool.category);
  const ToolComponent = getToolComponent(tool.component);

  // Derive related tools via specified IDs or category fallback
  const relatedTools = (tool.relatedTools || [])
    .map(rSlug => getToolBySlug(rSlug))
    .filter(Boolean)
    .slice(0, 6);

  const fallbackRelated = relatedTools.length > 0 ? relatedTools : getToolsByCategory(tool.category).filter(t => t.id !== tool.id).slice(0, 6);

  const canonicalUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/tools/${tool.slug}`
    : `https://hmdevtools.com/tools/${tool.slug}`;

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.seoDescription || tool.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: typeof window !== 'undefined' ? window.location.origin : 'https://hmdevtools.com' },
      { '@type': 'ListItem', position: 2, name: 'Tools', item: typeof window !== 'undefined' ? `${window.location.origin}/tools` : 'https://hmdevtools.com/tools' },
      { '@type': 'ListItem', position: 3, name: tool.name, item: canonicalUrl }
    ]
  };

  const faqSchema = (tool.faq && tool.faq.length > 0) ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  return (
    <>
      <SEOHead
        title={tool.seoTitle || `${tool.name} Online | HMDevTools`}
        description={tool.seoDescription || tool.description}
        canonicalUrl={canonicalUrl}
      />
      <JsonLd data={softwareSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="section-container" style={{ padding: '1.25rem 1rem 3rem 1rem' }}>
        <Breadcrumbs items={[
          { label: 'Tools', to: '/tools' },
          { label: category?.name || 'Category', to: `/tools?category=${tool.category}` },
          { label: tool.name }
        ]} />

        {/* ABOVE THE TOOL: H1, Short Description, Tool Interface IMMEDIATELY */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <h1 className="section-title" style={{ fontSize: '1.6rem' }}>{tool.name}</h1>
            <span className="tool-badge">
              {tool.processingMode === 'client' ? 'Browser Local' : 'API'}
            </span>
          </div>
          <p className="section-desc" style={{ fontSize: '0.925rem' }}>{tool.description}</p>
        </div>

        {/* Primary Interactive Utility Interface */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1rem', marginBottom: '1.25rem' }}>
          <ToolComponent tool={tool} />
        </div>

        {/* Local Security & Privacy Note */}
        <div style={{ padding: '0.65rem 0.85rem', background: 'var(--bg-surface-muted)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', marginBottom: '2.25rem', fontSize: '0.825rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Shield size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <span>
            <strong>Privacy Guarantee:</strong> {tool.processingMode === 'client' ? 'All computation occurs locally inside your browser JavaScript memory. Zero inputs are sent over the network.' : 'Processed via secure encrypted API.'}
          </span>
        </div>

        {/* BELOW THE TOOL: Structured, Tool-Specific Explanatory Content */}

        {/* What is & How it Works */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.25rem' }}>
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>What is {tool.name}?</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {tool.name} is a privacy-focused online utility designed for web developers, backend engineers, and DevOps. It helps you inspect, transform, and process raw data structures reliably in real-time.
            </p>
          </div>

          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>How to Use {tool.name}</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {tool.howItWorks || `Enter or paste your raw input into the input editor panel above. The tool automatically computes and outputs formatted results with instant copy options.`}
            </p>
          </div>
        </div>

        {/* Key Features & Use Cases */}
        {(tool.features || tool.useCases) && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.25rem' }}>
            {tool.features && (
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Key Features</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {tool.features.map((feat, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tool.useCases && (
              <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: 'var(--radius-sm)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Common Developer Use Cases</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {tool.useCases.map((uc, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <FileCode size={15} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Input / Output Code Examples */}
        {tool.examples && tool.examples.length > 0 && (
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Example Usage</h2>
            {tool.examples.map((ex, idx) => (
              <div key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>{ex.title}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {ex.input && (
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '0.2rem' }}>Input:</div>
                      <pre style={{ background: 'var(--editor-bg)', color: 'var(--editor-text)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', overflow: 'auto' }}>{ex.input}</pre>
                    </div>
                  )}
                  {ex.output && (
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginBottom: '0.2rem' }}>Output:</div>
                      <pre style={{ background: 'var(--editor-bg)', color: 'var(--editor-text)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem', overflow: 'auto' }}>{ex.output}</pre>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FAQ Section */}
        {tool.faq && tool.faq.length > 0 && (
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {tool.faq.map((item, idx) => (
                <div key={idx} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)' }}>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <HelpCircle size={15} style={{ color: 'var(--accent-primary)' }} />
                    {item.question}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem', lineHeight: '1.5', paddingLeft: '1.35rem' }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contextual Internal Linking: Related Tools */}
        {fallbackRelated.length > 0 && (
          <div>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.75rem' }}>Related Developer Tools</h2>
            <div className="tools-grid">
              {fallbackRelated.map(r => (
                <Link key={r.id} to={`/tools/${r.slug}`} className="tool-card">
                  <div>
                    <span className="tool-badge">{r.processingMode === 'client' ? 'Browser Local' : 'API'}</span>
                    <h3 className="tool-card-title" style={{ marginTop: '0.35rem' }}>{r.name}</h3>
                    <p className="tool-card-desc" style={{ marginTop: '0.2rem' }}>{r.shortDescription}</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.775rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                    <span>Use {r.name}</span>
                    <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ToolDetail;
