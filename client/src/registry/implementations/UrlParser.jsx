import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const UrlParser = () => {
  const [urlInput, setUrlInput] = useState('https://user:pass@hmdevtools.com:8080/search/tools?q=json&sort=popular#section-1');
  const [parsed, setParsed] = useState(null);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!urlInput.trim()) {
      setParsed(null);
      setError('');
      return;
    }

    try {
      const u = new URL(urlInput.trim());
      const queryParams = {};
      u.searchParams.forEach((val, key) => {
        queryParams[key] = val;
      });

      setParsed({
        href: u.href,
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port || '(default)',
        pathname: u.pathname,
        search: u.search,
        hash: u.hash,
        origin: u.origin,
        queryParams
      });
      setError('');
    } catch (err) {
      setError(`URL Parsing Error: Please enter a valid absolute URL including protocol (e.g. https://...)`);
      setParsed(null);
    }
  }, [urlInput]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <CodeEditorPanel
        title="URL Input"
        value={urlInput}
        onChange={setUrlInput}
        placeholder="https://example.com/path?param=value#hash"
      />

      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      {parsed && (
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>Parsed URL Structure</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '0.5rem', fontSize: '0.9rem' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Protocol:</span> <code>{parsed.protocol}</code>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Hostname:</span> <code>{parsed.hostname}</code>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Port:</span> <code>{parsed.port}</code>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Pathname:</span> <code>{parsed.pathname}</code>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Search String:</span> <code>{parsed.search || '(none)'}</code>
            <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Hash Fragment:</span> <code>{parsed.hash || '(none)'}</code>
          </div>

          <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '0.75rem', color: 'var(--text-main)' }}>Query Parameters Table</h4>
          {Object.keys(parsed.queryParams).length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ background: 'var(--bg-surface-muted)', textAlign: 'left' }}>
                  <th style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--border-color)' }}>Key</th>
                  <th style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--border-color)' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(parsed.queryParams).map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)' }}>{k}</td>
                    <td style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--border-color)', fontFamily: 'var(--font-mono)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No query parameters present.</span>
          )}
        </div>
      )}
    </div>
  );
};

export default UrlParser;
