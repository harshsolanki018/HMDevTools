import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const UrlDecoder = () => {
  const [input, setInput] = useState('https%3A%2F%2Fhmdevtools.com%2Fsearch%3Fq%3Djson%2520formatter%2520%26%2520mode%3Dfast');
  const [decoded, setDecoded] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setDecoded('');
      setError('');
      return;
    }
    try {
      setDecoded(decodeURIComponent(input.trim()));
      setError('');
    } catch (err) {
      setError(`Decoding Error: ${err.message}`);
      setDecoded('');
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
          title="Percent-Encoded URL Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="Decoded Plain Text Output"
          value={decoded}
          readOnly
        />
      </div>
    </div>
  );
};

export default UrlDecoder;
