import React from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Privacy = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy — HMDevTools"
        description="Learn how HMDevTools prioritizes user privacy through client-side local browser execution."
      />

      <div className="section-container" style={{ maxWidth: '800px' }}>
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-desc" style={{ marginBottom: '2rem' }}>Last updated: September 2026</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>1. Local Browser Processing</h2>
            <p>
              HMDevTools is engineered to perform calculations locally in your web browser memory whenever technically practical. Inputs entered into browser-local tools (such as JSON formatting, Base64 encoding, JWT decoding, and regex testing) are processed strictly within JavaScript runtime on your client device and are never transmitted to or stored on our servers.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>2. Data Collection on Server Endpoints</h2>
            <p>
              When you submit a message via our Contact form, the information you provide (name, email address, topic, and message content) is securely sent to our backend and stored in our MongoDB database to enable response and support.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>3. Analytics & Usage Metrics</h2>
            <p>
              We do not track, capture, or log sensitive user inputs. Any analytics collected are strictly privacy-safe aggregate counts (e.g. total page views) without recording user content or tokens.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
