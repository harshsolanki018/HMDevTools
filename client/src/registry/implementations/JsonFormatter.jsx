import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonFormatter = ({ tool }) => {
  const [input, setInput] = useState('{"name":"HMDevTools","active":true,"version":1}');
  const [indent, setIndent] = useState(2);
  const [error, setError] = useState('');

  const formatJson = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setInput(JSON.stringify(parsed, null, Number(indent)));
      setError('');
    } catch (err) {
      setError(`JSON Syntax Error: ${err.message}`);
    }
  };

  const handleSample = () => {
    setInput('{\n  "service": "HMDevTools",\n  "privacy": "local-first",\n  "features": ["json", "base64", "uuid", "regex"]\n}');
    setError('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Indentation:
          <select
            value={indent}
            onChange={(e) => setIndent(Number(e.target.value))}
            style={{ marginLeft: '0.5rem', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)' }}
          >
            <option value={2}>2 Spaces</option>
            <option value={4}>4 Spaces</option>
            <option value={1}>Tab</option>
          </select>
        </label>
        <button
          onClick={formatJson}
          style={{ padding: '0.4rem 1rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: '6px', fontWeight: 500 }}
        >
          Format JSON
        </button>
      </div>

      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <CodeEditorPanel
        title="JSON Input & Formatted Output"
        value={input}
        onChange={setInput}
        onLoadSample={handleSample}
      />
    </div>
  );
};

export default JsonFormatter;
