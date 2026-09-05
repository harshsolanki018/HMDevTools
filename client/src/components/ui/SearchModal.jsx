import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft, BookOpen, Wrench, Folder } from 'lucide-react';
import { toolsRegistry } from '../../registry/tools';
import { resourcesRegistry } from '../../registry/resources';
import './SearchModal.css';

// Precomputed static search index with stable unique IDs
const CATEGORY_ITEMS = [
  { id: 'cat-json-data', title: 'JSON & Data Category', desc: 'Browse all tools in JSON & Data', url: '/categories', type: 'category', icon: Folder, searchString: 'json & data category browse all tools in json & data json-data' },
  { id: 'cat-encoding', title: 'Encoding & Decoding Category', desc: 'Browse all tools in Encodings & Decodings', url: '/categories', type: 'category', icon: Folder, searchString: 'encoding & decoding category browse all tools in encodings & decodings encoding' },
  { id: 'cat-generators', title: 'Generators Category', desc: 'Browse all tools in Generators', url: '/categories', type: 'category', icon: Folder, searchString: 'generators category browse all tools in generators generators' },
  { id: 'cat-web-formatting', title: 'Web & Formatting Category', desc: 'Browse all tools in Web & Formatting', url: '/categories', type: 'category', icon: Folder, searchString: 'web & formatting category browse all tools in web & formatting web-dev' },
  { id: 'cat-dates-time', title: 'Dates & Time Category', desc: 'Browse all tools in Dates & Time', url: '/categories', type: 'category', icon: Folder, searchString: 'dates & time category browse all tools in dates & time dates-time' },
  { id: 'cat-regular-expressions', title: 'Regular Expressions Category', desc: 'Browse all tools in Regular Expressions', url: '/categories', type: 'category', icon: Folder, searchString: 'regular expressions category browse all tools in regular expressions regex' },
  { id: 'cat-sql-databases', title: 'SQL & Databases Category', desc: 'Browse all tools in SQL & Databases', url: '/categories', type: 'category', icon: Folder, searchString: 'sql & databases category browse all tools in sql & databases sql-databases' },
  { id: 'cat-text-utilities', title: 'Text Utilities Category', desc: 'Browse all tools in Text Utilities', url: '/categories', type: 'category', icon: Folder, searchString: 'text utilities category browse all tools in text utilities text-utilities' },
  { id: 'cat-code-conversion', title: 'Code Conversion Category', desc: 'Browse all tools in Code Conversion', url: '/categories', type: 'category', icon: Folder, searchString: 'code conversion category browse all tools in code conversion code-conversion' }
];

const PRECOMPUTED_SEARCH_INDEX = [
  ...toolsRegistry
    .filter(t => t.status === 'active')
    .map(t => ({
      id: `tool-${t.id || t.slug}`,
      title: t.name,
      desc: t.description,
      url: `/tools/${t.slug}`,
      type: 'tool',
      icon: Wrench,
      searchString: `${t.name} ${t.description} ${(t.keywords || []).join(' ')} ${t.slug}`.toLowerCase()
    })),
  ...resourcesRegistry.map(r => ({
    id: `resource-${r.id || r.slug}`,
    title: r.title,
    desc: r.shortDescription,
    url: `/resources/${r.slug}`,
    type: 'resource',
    icon: BookOpen,
    searchString: `${r.title} ${r.shortDescription} ${r.category} ${r.slug}`.toLowerCase()
  })),
  ...CATEGORY_ITEMS
];

// Dedicated Memoized Search Result Item to prevent unnecessary re-renders on hover or typing
const SearchResultItem = React.memo(({ item, isSelected, onClick }) => {
  const IconComp = item.icon;
  return (
    <li>
      <a
        href={item.url}
        className={`search-result-item ${isSelected ? 'selected' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          onClick(item.url);
        }}
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
});

SearchResultItem.displayName = 'SearchResultItem';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Reset modal state immediately when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 30);
      setQuery('');
      setDebouncedQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Debounce Timer for Search Filtering
  // - Instant execution when query is empty/cleared
  // - 2000ms delay when user types non-empty input
  useEffect(() => {
    if (!query.trim()) {
      setDebouncedQuery('');
      setSelectedIndex(0);
      return;
    }

    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setSelectedIndex(0);
    }, 2000);

    return () => clearTimeout(timer);
  }, [query]);

  const q = useMemo(() => debouncedQuery.toLowerCase().trim(), [debouncedQuery]);

  // Memoized top 10 results computation
  const combinedResults = useMemo(() => {
    if (!q) {
      return PRECOMPUTED_SEARCH_INDEX.slice(0, 10);
    }
    const matches = [];
    for (let i = 0; i < PRECOMPUTED_SEARCH_INDEX.length; i++) {
      const item = PRECOMPUTED_SEARCH_INDEX[i];
      if (item.searchString.includes(q)) {
        matches.push(item);
        if (matches.length >= 10) break; // Early exit once top 10 matches are found
      }
    }
    return matches;
  }, [q]);

  const handleItemClick = useCallback((url) => {
    navigate(url);
    onClose();
  }, [navigate, onClose]);

  const handleKeyDown = useCallback((e) => {
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
  }, [combinedResults, selectedIndex, navigate, onClose]);

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
            }}
          />
          <button className="theme-toggle-btn" onClick={onClose} aria-label="Close search">
            <X size={18} />
          </button>
        </div>

        <ul className="search-results-list">
          {combinedResults.length > 0 ? (
            combinedResults.map((item, idx) => (
              <SearchResultItem
                key={item.id}
                item={item}
                isSelected={idx === selectedIndex}
                onClick={handleItemClick}
              />
            ))
          ) : (
            <div className="empty-search">
              No matching tools, categories, or resources found for "{debouncedQuery}".
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
