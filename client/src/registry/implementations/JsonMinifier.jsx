import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonMinifier = () => {
  const [input, setInput] = useState('{\n  "service": "HMDevTools",\n  "status": "active",\n  "count": 50\n}');
  const [minified, setMinified] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setMinified('');
      setError('');
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setMinified(JSON.stringify(parsed));
      setError('');
    } catch (err) {
      setError(`JSON Error: ${err.message}`);
      setMinified('');
    }
  }, [input]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Formatted JSON Input"
          value={input}
          onChange={setInput}
          onLoadSample={() => setInput('{\n  "user": {\n    "id": 1,\n    "role": "developer"\n  }\n}')}
        />
        <CodeEditorPanel
          title="Minified Single-Line JSON Output"
          value={minified}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonMinifier;
