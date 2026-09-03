import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const YamlToJson = () => {
  const [input, setInput] = useState('version: "3.8"\nname: HMDevTools\nactive: true');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setJsonOutput('');
      setError('');
      return;
    }

    try {
      const lines = input.split('\n');
      const obj = {};
      lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const colonIdx = trimmed.indexOf(':');
        if (colonIdx > 0) {
          const key = trimmed.slice(0, colonIdx).trim();
          let val = trimmed.slice(colonIdx + 1).trim();
          if (val === 'true') val = true;
          else if (val === 'false') val = false;
          else if (!isNaN(Number(val)) && val !== '') val = Number(val);
          else val = val.replace(/^"|"$/g, '').replace(/^'|'$/g, '');
          obj[key] = val;
        }
      });

      setJsonOutput(JSON.stringify(obj, null, 2));
      setError('');
    } catch (err) {
      setError(`YAML Parse Error: ${err.message}`);
      setJsonOutput('');
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
          title="YAML Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="JSON Output Result"
          value={jsonOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default YamlToJson;
