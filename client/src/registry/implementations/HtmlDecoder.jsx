import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const HtmlDecoder = () => {
  const [encodedInput, setEncodedInput] = useState('&lt;div class=&quot;header&quot;&gt;Hello &amp; Welcome to &quot;HMDevTools&quot; &#39;2026&#39;&lt;/div&gt;');
  const [decodedOutput, setDecodedOutput] = useState('');

  useEffect(() => {
    if (!encodedInput) {
      setDecodedOutput('');
      return;
    }

    const decodeHtml = (str) => {
      if (typeof window !== 'undefined' && window.DOMParser) {
        const parser = new DOMParser();
        const dom = parser.parseFromString(`<!innerHTML ${str}>`, 'text/html');
        return dom.body.textContent || str;
      }
      return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, '&');
    };

    setDecodedOutput(decodeHtml(encodedInput));
  }, [encodedInput]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="HTML Entity Encoded Input"
        value={encodedInput}
        onChange={setEncodedInput}
        placeholder="Paste HTML entities to decode..."
      />
      <CodeEditorPanel
        title="Decoded Plain Text Output"
        value={decodedOutput}
        readOnly
      />
    </div>
  );
};

export default HtmlDecoder;
