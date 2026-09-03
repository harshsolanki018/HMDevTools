import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const HtmlEncoder = () => {
  const [textInput, setTextInput] = useState('<div class="header">Hello & Welcome to "HMDevTools" \'2026\'</div>');
  const [encodedOutput, setEncodedOutput] = useState('');

  useEffect(() => {
    if (!textInput) {
      setEncodedOutput('');
      return;
    }

    const encodeHtml = (str) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    };

    setEncodedOutput(encodeHtml(textInput));
  }, [textInput]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Plain Text / HTML Input"
        value={textInput}
        onChange={setTextInput}
        placeholder="Type or paste HTML markup to escape..."
      />
      <CodeEditorPanel
        title="HTML Entity Encoded Output"
        value={encodedOutput}
        readOnly
      />
    </div>
  );
};

export default HtmlEncoder;
