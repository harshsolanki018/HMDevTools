import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const UrlEncoder = () => {
  const [input, setInput] = useState('https://hmdevtools.com/search?q=json formatter & mode=fast');
  const [encoded, setEncoded] = useState('');
  const [mode, setMode] = useState('component'); // component | full

  React.useEffect(() => {
    if (!input) {
      setEncoded('');
      return;
    }
    try {
      setEncoded(mode === 'component' ? encodeURIComponent(input) : encodeURI(input));
    } catch (err) {
      setEncoded(`Encoding error: ${err.message}`);
    }
  }, [input, mode]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <label style={{ fontSize: '0.875rem' }}>
          Mode:
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            style={{ marginLeft: '0.5rem', padding: '0.25rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)' }}
          >
            <option value="component">encodeURIComponent (Query Parameter)</option>
            <option value="full">encodeURI (Full URL)</option>
          </select>
        </label>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Plain URL Text Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="Percent-Encoded Output"
          value={encoded}
          readOnly
        />
      </div>
    </div>
  );
};

export default UrlEncoder;
