import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Resources = () => {
  const guides = [
    { title: 'JSON Data Format Reference & RFC 8259 Summary', link: '/tools/json-formatter', desc: 'Complete breakdown of JSON data types, escape characters, and RFC specifications.' },
    { title: 'Base64 Encoding & UTF-8 Character Mapping', link: '/tools/base64-encoder', desc: 'Understanding Base64 padding, standard vs URL-safe variants, and binary representations.' },
    { title: 'JWT Token Claims & Expiration Architecture', link: '/tools/jwt-decoder', desc: 'Structure of JWT headers, payloads, HMAC algorithms, and security practices.' },
    { title: 'Regex Cheatsheet & Common Expressions', link: '/tools/regex-tester', desc: 'Quick reference for regex flags, character classes, quantifiers, and lookaheads.' }
  ];

  return (
    <>
      <SEOHead
        title="Developer Resources & Reference Guides — HMDevTools"
        description="Engineering guides, format references, regex cheat sheets, and technical documentation."
      />

      <div className="section-container">
        <Breadcrumbs items={[{ label: 'Resources' }]} />

        <div style={{ marginBottom: '2rem' }}>
          <h1 className="section-title">Developer Resources & Guides</h1>
          <p className="section-desc">Technical cheat sheets and reference documentation.</p>
        </div>

        <div className="tools-grid">
          {guides.map((g, idx) => (
            <Link key={idx} to={g.link} className="tool-card">
              <div>
                <h2 className="tool-card-title">{g.title}</h2>
                <p className="tool-card-desc" style={{ marginTop: '0.5rem' }}>{g.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Resources;
