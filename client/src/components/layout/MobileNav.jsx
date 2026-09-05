import React from 'react';
import { NavLink } from 'react-router-dom';
import { X, Home, Wrench, FolderTree, BookOpen, Terminal, PhoneCall, HelpCircle, FileText } from 'lucide-react';
import Logo from '../brand/Logo';
import './MobileNav.css';

export const MobileNav = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const links = [
    { to: '/', label: 'Home', icon: Home, end: true },
    { to: '/tools', label: 'Tools', icon: Wrench },
    { to: '/categories', label: 'Categories', icon: FolderTree },
    { to: '/resources', label: 'Resources', icon: BookOpen },
    { to: '/api', label: 'Developer API', icon: Terminal },
    { to: '/faq', label: 'FAQ', icon: HelpCircle },
    { to: '/contact', label: 'Contact', icon: PhoneCall },
    { to: '/about', label: 'About', icon: FileText }
  ];

  return (
    <div className="mobile-drawer" onClick={onClose}>
      <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
        <div className="mobile-drawer-header">
          <Logo size="small" showWordmark={true} />
          <button className="theme-toggle-btn" onClick={onClose} aria-label="Close menu">
            <X size={18} />
          </button>
        </div>

        <nav>
          <ul className="mobile-nav-list">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.end}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={onClose}
                  >
                    <Icon size={18} />
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
