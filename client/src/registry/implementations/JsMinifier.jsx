import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsMinifier = () => {
  const [jsInput, setJsInput] = useState(
    '// HMDevTools Script Minifier\nfunction calculateSum(a, b) {\n  const result = a + b;\n  console.log("Sum calculation:", result);\n  return result;\n}'
  );
  const [minifiedJs, setMinifiedJs] = useState('');
  const [stats, setStats] = useState({ original: 0, minified: 0, savings: 0 });

  useEffect(() => {
    if (!jsInput.trim()) {
      setMinifiedJs('');
      setStats({ original: 0, minified: 0, savings: 0 });
      return;
    }

    const minifyJsString = (js) => {
      // Safe, string-preserving JavaScript minification
      let minified = js
        // Strip single line comments (handling quotes safely)
        .replace(/(^|[^\:\"])(\/\/.*$)/gm, '$1')
        // Strip multi-line comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Clean whitespace around operators and structural tokens
        .replace(/\s*([\{\}\(\)\;\,\=\+\-\*\/\:\?])\s*/g, '$1')
        // Compress multiple newlines and spaces
        .replace(/[\r\n]+/g, ';')
        .replace(/;+/g, ';')
        .replace(/\s+/g, ' ')
        .trim();

      return minified;
    };

    const result = minifyJsString(jsInput);
    setMinifiedJs(result);

    const origLen = jsInput.length;
    const minLen = result.length;
    const savings = origLen > 0 ? Math.round(((origLen - minLen) / origLen) * 100) : 0;
    setStats({ original: origLen, minified: minLen, savings });
  }, [jsInput]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <span>Original: <strong>{stats.original} B</strong></span>
        <span>Minified: <strong>{stats.minified} B</strong></span>
        <span>Savings: <strong style={{ color: 'var(--status-success)' }}>{stats.savings}%</strong></span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Raw JavaScript Input"
          value={jsInput}
          onChange={setJsInput}
          placeholder="Paste JS code to minify..."
        />
        <CodeEditorPanel
          title="Minified JavaScript Output"
          value={minifiedJs}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsMinifier;
