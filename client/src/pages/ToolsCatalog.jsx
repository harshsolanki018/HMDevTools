import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { toolsRegistry } from '@/registry/tools';
import { categoriesRegistry } from '@/registry/categories';
import '@/pages/Home.css';

export const ToolsCatalog = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialFilter = searchParams.get('filter') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('popular');

  const filteredTools = useMemo(() => {
    return toolsRegistry.filter(tool => {
      const matchesSearch =
        !searchQuery.trim() ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || tool.category === selectedCategory;

      const matchesFilter =
        initialFilter === 'all' ||
        (initialFilter === 'popular' && tool.isPopular) ||
        (initialFilter === 'new' && tool.isNew);

      return matchesSearch && matchesCategory && matchesFilter;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'popular') return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      return 0;
    });
  }, [searchQuery, selectedCategory, sortBy, initialFilter]);

  return (
    <>
      <SEOHead
        title="All Developer Tools & Utilities — HMDevTools"
        description="Browse our complete catalog of developer tools: JSON formatters, Base64 encoders, UUID generators, regex testers, timestamp converters, and more."
      />

      <div className="section-container" style={{ padding: '1.25rem 1rem 3rem 1rem' }}>
        <Breadcrumbs items={[{ label: 'All Tools' }]} />

        <div style={{ marginBottom: '1.25rem' }}>
          <h1 className="section-title">All Developer Tools ({toolsRegistry.length})</h1>
          <p className="section-desc">Search and filter browser utilities.</p>
        </div>

        {/* Compact Filters & Controls Bar */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem', background: 'var(--bg-surface)', padding: '0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-surface-muted)', padding: '0.35rem 0.65rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
            <Search size={16} style={{ color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Filter tools by keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'none', width: '100%', fontSize: '0.85rem' }}
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{ padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', fontSize: '0.85rem' }}
          >
            <option value="all">All Categories</option>
            {categoriesRegistry.map(c => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{ padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', fontSize: '0.85rem' }}
          >
            <option value="popular">Sort by Popularity</option>
            <option value="name">Sort Alphabetically</option>
          </select>
        </div>

        {/* Scannable Grid */}
        {filteredTools.length > 0 ? (
          <div className="tools-grid">
            {filteredTools.map(tool => (
              <Link key={tool.id} to={`/tools/${tool.slug}`} className="tool-card">
                <div>
                  <div className="tool-card-header">
                    <span className="tool-badge">{tool.processingMode === 'client' ? 'Browser Local' : 'API'}</span>
                    {tool.status === 'coming-soon' && <span className="tool-badge" style={{ background: 'var(--status-warning-bg)', color: 'var(--status-warning)' }}>Coming Soon</span>}
                  </div>
                  <h2 className="tool-card-title" style={{ marginTop: '0.35rem', fontSize: '0.95rem' }}>{tool.name}</h2>
                  <p className="tool-card-desc" style={{ marginTop: '0.2rem' }}>{tool.shortDescription}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.775rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                  <span>Open tool</span>
                  <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
            <p className="section-desc">No tools found matching "{searchQuery}".</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ToolsCatalog;
