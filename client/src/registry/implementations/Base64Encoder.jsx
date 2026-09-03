import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const Base64Encoder = () => {
  const [input, setInput] = useState('Hello World — HMDevTools');
  const [output, setOutput] = useState('');

  React.useEffect(() => {
    try {
      if (!input) {
        setOutput('');
        return;
      }
      // UTF-8 friendly base64 encoding
      const encoded = btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode(parseInt(p1, 16));
      }));
      setOutput(encoded);
    } catch (err) {
      setOutput(`Encoding error: ${err.message}`);
    }
  }, [input]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Plain Text Input"
        value={input}
        onChange={setInput}
        onLoadSample={() => setInput('HMDevTools — Fast & Private Developer Tools')}
      />
      <CodeEditorPanel
        title="Base64 Encoded Output"
        value={output}
        readOnly
      />
    </div>
  );
};

export default Base64Encoder;
