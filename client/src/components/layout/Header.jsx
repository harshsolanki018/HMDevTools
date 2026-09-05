import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, Search, Menu } from 'lucide-react';
import Logo from '../brand/Logo';
import { useTheme } from '../../hooks/useTheme';
import MobileNav from './MobileNav';
import './Header.css';

export const Header = ({ onOpenSearch }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <header className="header">
        <div className="header-inner">
          <div className="header-left">
            <Link to="/" aria-label="HMDevTools Home">
              <Logo size="small" showWordmark={true} />
            </Link>
          </div>

          <div className="header-center">
            <nav aria-label="Main Navigation">
              <ul className="nav-links">
                <li><NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink></li>
                <li><NavLink to="/tools" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Tools</NavLink></li>
                <li><NavLink to="/categories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Categories</NavLink></li>
                <li><NavLink to="/resources" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Resources</NavLink></li>
                <li><NavLink to="/api" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>API</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className="header-right">
            <button className="search-trigger-btn" onClick={onOpenSearch} aria-label="Search tools">
              <Search size={16} />
              <span className="search-text">Search tools...</span>
              <kbd className="shortcut-kbd">Ctrl K</kbd>
            </button>

            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button className="mobile-menu-btn" onClick={() => setMobileNavOpen(true)} aria-label="Open mobile menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
};

export default Header;
