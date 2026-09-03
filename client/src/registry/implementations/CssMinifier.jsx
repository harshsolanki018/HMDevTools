import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const CssMinifier = () => {
  const [cssInput, setCssInput] = useState(
    '/* HMDevTools Stylesheet */\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #ffffff;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n}'
  );
  const [minifiedCss, setMinifiedCss] = useState('');
  const [stats, setStats] = useState({ original: 0, minified: 0, savings: 0 });

  useEffect(() => {
    if (!cssInput.trim()) {
      setMinifiedCss('');
      setStats({ original: 0, minified: 0, savings: 0 });
      return;
    }

    const minifyCssString = (css) => {
      let minified = css
        // Remove comments
        .replace(/\/\*[\s\S]*?\*\//g, '')
        // Remove whitespace around selectors and braces
        .replace(/\s*([\{\}\:\;\,])\s*/g, '$1')
        // Remove trailing semicolons before closing brace
        .replace(/;}/g, '}')
        // Compress multiple spaces into single space
        .replace(/\s+/g, ' ')
        .trim();

      return minified;
    };

    const result = minifyCssString(cssInput);
    setMinifiedCss(result);

    const origLen = cssInput.length;
    const minLen = result.length;
    const savings = origLen > 0 ? Math.round(((origLen - minLen) / origLen) * 100) : 0;
    setStats({ original: origLen, minified: minLen, savings });
  }, [cssInput]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.5rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <span>Original: <strong>{stats.original} B</strong></span>
        <span>Minified: <strong>{stats.minified} B</strong></span>
        <span>Savings: <strong style={{ color: 'var(--status-success)' }}>{stats.savings}%</strong></span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Raw CSS Input"
          value={cssInput}
          onChange={setCssInput}
          placeholder="Paste CSS rules to minify..."
        />
        <CodeEditorPanel
          title="Minified CSS Output"
          value={minifiedCss}
          readOnly
        />
      </div>
    </div>
  );
};

export default CssMinifier;
