import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../brand/Logo';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="HMDevTools Home">
              <Logo size="medium" showWordmark={true} />
            </Link>
            <p className="footer-desc">
              Fast, practical, and privacy-conscious developer utilities. Tools run locally in your browser wherever practical.
            </p>
          </div>

          <div>
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-links">
              <li><Link to="/tools" className="footer-link">All Tools</Link></li>
              <li><Link to="/categories" className="footer-link">Categories</Link></li>
              <li><Link to="/tools?filter=popular" className="footer-link">Popular Tools</Link></li>
              <li><Link to="/tools?filter=new" className="footer-link">New Tools</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><Link to="/resources" className="footer-link">Developer Resources</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/how-it-works" className="footer-link">How It Works</Link></li>
              <li><Link to="/changelog" className="footer-link">Changelog</Link></li>
              <li><Link to="/roadmap" className="footer-link">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><Link to="/about" className="footer-link">About HMDevTools</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/cookies" className="footer-link">Cookie Policy</Link></li>
              <li><Link to="/sitemap" className="footer-link">HTML Sitemap</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} HMDevTools. All rights reserved.</p>
          <p>Privacy-focused developer utilities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
