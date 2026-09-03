import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft, BookOpen, Wrench, Folder } from 'lucide-react';
import { toolsRegistry } from '../../registry/tools';
import { resourcesRegistry } from '../../registry/resources';
import './SearchModal.css';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const categories = [
    { name: 'JSON & Data', slug: 'json-data', type: 'category', url: '/categories' },
    { name: 'Encodings & Decodings', slug: 'encoding', type: 'category', url: '/categories' },
    { name: 'Generators', slug: 'generators', type: 'category', url: '/categories' },
    { name: 'Web & Formatting', slug: 'web-dev', type: 'category', url: '/categories' },
    { name: 'Dates & Time', slug: 'dates-time', type: 'category', url: '/categories' },
    { name: 'Regular Expressions', slug: 'regex', type: 'category', url: '/categories' },
    { name: 'SQL & Databases', slug: 'sql-databases', type: 'category', url: '/categories' },
    { name: 'Text Utilities', slug: 'text-utilities', type: 'category', url: '/categories' },
    { name: 'Code Conversion', slug: 'code-conversion', type: 'category', url: '/categories' }
  ];

  const q = query.toLowerCase().trim();

  // 1. Tool matches
  const toolResults = toolsRegistry
    .filter(t => t.status === 'active')
    .filter(t => !q || t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.keywords.some(k => k.toLowerCase().includes(q)))
    .map(t => ({ title: t.name, desc: t.description, url: `/tools/${t.slug}`, type: 'tool', icon: Wrench }));

  // 2. Resource matches
  const resourceResults = resourcesRegistry
    .filter(r => !q || r.title.toLowerCase().includes(q) || r.shortDescription.toLowerCase().includes(q) || r.category.toLowerCase().includes(q))
    .map(r => ({ title: r.title, desc: r.shortDescription, url: `/resources/${r.slug}`, type: 'resource', icon: BookOpen }));

  // 3. Category matches
  const categoryResults = categories
    .filter(c => q && c.name.toLowerCase().includes(q))
    .map(c => ({ title: `${c.name} Category`, desc: `Browse all tools in ${c.name}`, url: c.url, type: 'category', icon: Folder }));

  const combinedResults = [...toolResults, ...resourceResults, ...categoryResults].slice(0, 10);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < combinedResults.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : combinedResults.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (combinedResults[selectedIndex]) {
        navigate(combinedResults[selectedIndex].url);
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <div className="search-input-wrapper">
          <Search size={20} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search tools, categories, cheat sheets & guides..."
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
          />
          <button className="theme-toggle-btn" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <ul className="search-results-list">
          {combinedResults.length > 0 ? (
            combinedResults.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <li key={idx}>
                  <a
                    href={item.url}
                    className={`search-result-item ${idx === selectedIndex ? 'selected' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.url);
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <div className="result-info">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <IconComp size={14} style={{ color: 'var(--accent-primary)' }} />
                        <span className="result-title">{item.title}</span>
                        <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.35rem', background: 'var(--bg-surface-muted)', border: '1px solid var(--border-color)', borderRadius: '3px', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                          {item.type}
                        </span>
                      </div>
                      <span className="result-desc">{item.desc}</span>
                    </div>
                    <ArrowRight size={16} className="search-icon" />
                  </a>
                </li>
              );
            })
          ) : (
            <div className="empty-search">
              No matching tools, categories, or resources found for "{query}".
            </div>
          )}
        </ul>

        <div className="search-footer">
          <span>Navigation: ↑ ↓ arrows</span>
          <span>Select: <CornerDownLeft size={12} style={{ display: 'inline' }} /> Enter</span>
          <span>Close: Esc</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
