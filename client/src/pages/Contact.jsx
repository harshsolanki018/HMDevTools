import React, { useState } from 'react';
import SEOHead from '@/components/seo/SEOHead';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import '@/pages/Home.css';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: data.message, error: null });
        setFormData({ name: '', email: '', topic: 'General', message: '' });
      } else {
        setStatus({ loading: false, success: null, error: data.message || 'Submission failed.' });
      }
    } catch (err) {
      setStatus({ loading: false, success: null, error: 'Network error submitting contact request.' });
    }
  };

  return (
    <>
      <SEOHead
        title="Contact & Feedback — HMDevTools"
        description="Contact the HMDevTools team for bug reports, tool feature requests, API inquiries, or feedback."
      />

      <div className="section-container">
        <Breadcrumbs items={[{ label: 'Contact' }]} />

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h1 className="section-title">Contact & Feedback</h1>
          <p className="section-desc" style={{ marginBottom: '2rem' }}>
            Have a tool suggestion, bug report, or API inquiry? Get in touch with our team.
          </p>

          {status.success && (
            <div style={{ padding: '1rem', background: 'var(--status-success-bg)', color: 'var(--status-success)', border: '1px solid var(--status-success)', borderRadius: '6px', marginBottom: '1.5rem' }}>
              ✓ {status.success}
            </div>
          )}

          {status.error && (
            <div style={{ padding: '1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', border: '1px solid var(--status-danger)', borderRadius: '6px', marginBottom: '1.5rem' }}>
              ⚠ {status.error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'var(--bg-surface)', padding: '1.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.35rem' }}>Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)' }}
                placeholder="Jane Developer"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.35rem' }}>Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)' }}
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.35rem' }}>Topic</label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)' }}
              >
                <option value="General">General Inquiry</option>
                <option value="Bug report">Bug Report</option>
                <option value="Tool request">New Tool Request</option>
                <option value="Feedback">Feedback</option>
                <option value="Business/API">Business / API Inquiry</option>
                <option value="Privacy">Privacy Question</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.35rem' }}>Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-main)', fontFamily: 'inherit' }}
                placeholder="Describe your suggestion or feedback..."
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              style={{ padding: '0.6rem 1.25rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: 'var(--radius-md)', fontWeight: 500 }}
            >
              {status.loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
