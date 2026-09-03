import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonViewer = () => {
  const [input, setInput] = useState('{\n  "appName": "HMDevTools",\n  "version": 1,\n  "settings": {\n    "theme": "dark",\n    "localProcessing": true\n  },\n  "tags": ["fast", "private", "useful"]\n}');
  const [parsed, setParsed] = useState(null);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setParsed(null);
      setError('');
      return;
    }
    try {
      setParsed(JSON.parse(input));
      setError('');
    } catch (err) {
      setError(`Invalid JSON: ${err.message}`);
      setParsed(null);
    }
  }, [input]);

  const renderTree = (data, name = 'root') => {
    if (data === null) return <span style={{ color: 'var(--text-subtle)' }}>null</span>;
    if (typeof data === 'boolean') return <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{data.toString()}</span>;
    if (typeof data === 'number') return <span style={{ color: 'var(--status-info)', fontWeight: 600 }}>{data}</span>;
    if (typeof data === 'string') return <span style={{ color: 'var(--status-success)' }}>"{data}"</span>;

    if (Array.isArray(data)) {
      return (
        <details open style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text-main)' }}>
            {name} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[{data.length}]</span>
          </summary>
          <div style={{ marginLeft: '0.75rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '0.5rem' }}>
            {data.map((item, idx) => (
              <div key={idx} style={{ margin: '0.2rem 0' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>[{idx}]: </span>
                {renderTree(item, idx)}
              </div>
            ))}
          </div>
        </details>
      );
    }

    if (typeof data === 'object') {
      const keys = Object.keys(data);
      return (
        <details open style={{ marginLeft: '1rem', marginTop: '0.25rem' }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text-main)' }}>
            {name} <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{`{${keys.length}}`}</span>
          </summary>
          <div style={{ marginLeft: '0.75rem', borderLeft: '2px solid var(--border-color)', paddingLeft: '0.5rem' }}>
            {keys.map((key) => (
              <div key={key} style={{ margin: '0.2rem 0' }}>
                <span style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>{key}: </span>
                {renderTree(data[key], key)}
              </div>
            ))}
          </div>
        </details>
      );
    }

    return String(data);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="JSON Raw Input"
          value={input}
          onChange={setInput}
        />
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', overflow: 'auto', maxHeight: '420px', fontFamily: 'var(--font-mono)' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Tree Structure Inspector</div>
          {parsed ? renderTree(parsed) : <span style={{ color: 'var(--text-muted)' }}>Enter valid JSON to view tree</span>}
        </div>
      </div>
    </div>
  );
};

export default JsonViewer;
