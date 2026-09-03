import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const Base64Decoder = () => {
  const [input, setInput] = useState('SGVsbG8gV29ybGQg4oCUIEhNRGV2VG9vbHM=');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    try {
      if (!input.trim()) {
        setOutput('');
        setError('');
        return;
      }
      const decoded = decodeURIComponent(Array.prototype.map.call(atob(input.trim()), (c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      setOutput(decoded);
      setError('');
    } catch (err) {
      setError('Invalid Base64 string');
      setOutput('');
    }
  }, [input]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {error && (
        <div style={{ padding: '0.5rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.85rem' }}>
          {error}
        </div>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Base64 Input"
          value={input}
          onChange={setInput}
          onLoadSample={() => setInput('SE1EZXZUb29scyDigJQgRmFzdCAmIFByaXZhdGUgRGV2ZWxvcGVyIFRvb2xz')}
        />
        <CodeEditorPanel
          title="Decoded Plain Text Output"
          value={output}
          readOnly
        />
      </div>
    </div>
  );
};

export default Base64Decoder;
