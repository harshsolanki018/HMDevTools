import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FolderTree } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { categoriesRegistry } from '@/registry/categories';
import { getToolsByCategory } from '@/registry/tools';
import '@/pages/Home.css';

export const Categories = () => {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Developer Tool Categories Index — HMDevTools',
    description: 'Explore developer utilities categorized by data formats, encodings, web formatters, dates, regex, SQL, and code generators.'
  };

  return (
    <>
      <SEOHead
        title="Developer Tool Categories Index | HMDevTools"
        description="Explore 10 developer tool categories: JSON & Data, Encodings, Web Formatting, Date/Time Converters, Generators, Regex, SQL, and Code Conversion."
      />
      <JsonLd data={collectionSchema} />

      <div className="section-container" style={{ padding: '1.25rem 1rem 3rem 1rem' }}>
        <Breadcrumbs items={[{ label: 'Categories' }]} />

        <div style={{ marginBottom: '1.5rem' }}>
          <h1 className="section-title">Developer Tool Categories</h1>
          <p className="section-desc">Browse utilities organized by developer workflow and data format.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {categoriesRegistry.map(cat => {
            const tools = getToolsByCategory(cat.slug);
            const activeTools = tools.filter(t => t.status === 'active');
            const comingSoonTools = tools.filter(t => t.status === 'coming-soon');

            return (
              <div key={cat.id} id={cat.slug} style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1.25rem' }}>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FolderTree size={18} style={{ color: 'var(--accent-primary)' }} />
                      {cat.name}
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{cat.description}</p>
                  </div>
                  <span className="tool-badge">{activeTools.length} Active Tools</span>
                </div>

                <div className="tools-grid">
                  {activeTools.map(tool => (
                    <Link key={tool.id} to={`/tools/${tool.slug}`} className="tool-card">
                      <div>
                        <span className="tool-badge">{tool.processingMode === 'client' ? 'Browser Local' : 'API'}</span>
                        <h3 className="tool-card-title" style={{ marginTop: '0.35rem' }}>{tool.name}</h3>
                        <p className="tool-card-desc" style={{ marginTop: '0.2rem' }}>{tool.shortDescription}</p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.775rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                        <span>Open tool</span>
                        <ArrowRight size={12} />
                      </div>
                    </Link>
                  ))}

                  {comingSoonTools.map(tool => (
                    <div key={tool.id} className="tool-card" style={{ opacity: 0.75 }}>
                      <div>
                        <span className="tool-badge" style={{ background: 'var(--status-warning-bg)', color: 'var(--status-warning)' }}>Coming Soon</span>
                        <h3 className="tool-card-title" style={{ marginTop: '0.35rem' }}>{tool.name}</h3>
                        <p className="tool-card-desc" style={{ marginTop: '0.2rem' }}>{tool.shortDescription}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
