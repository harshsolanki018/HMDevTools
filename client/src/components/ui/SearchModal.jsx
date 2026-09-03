import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { toolsRegistry } from '../../registry/tools';
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

  const filteredTools = toolsRegistry.filter(tool => {
    if (!query.trim()) return true;
    const q = query.toLowerCase().trim();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.keywords.some(k => k.toLowerCase().includes(q))
    );
  }).slice(0, 10);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredTools.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : filteredTools.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredTools[selectedIndex]) {
        navigate(`/tools/${filteredTools[selectedIndex].slug}`);
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
            placeholder="Search all tools (e.g. json, jwt, base64)..."
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
          {filteredTools.length > 0 ? (
            filteredTools.map((tool, idx) => (
              <li key={tool.id}>
                <a
                  href={`/tools/${tool.slug}`}
                  className={`search-result-item ${idx === selectedIndex ? 'selected' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/tools/${tool.slug}`);
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="result-info">
                    <span className="result-title">{tool.name}</span>
                    <span className="result-desc">{tool.description}</span>
                  </div>
                  <ArrowRight size={16} className="search-icon" />
                </a>
              </li>
            ))
          ) : (
            <div className="empty-search">
              No matching tools found for "{query}".
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
