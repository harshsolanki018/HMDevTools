import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const RemoveDuplicateLines = () => {
  const [input, setInput] = useState('apple\nbanana\napple\ncherry\nbanana\ndate');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [output, setOutput] = useState('');

  React.useEffect(() => {
    if (!input) {
      setOutput('');
      return;
    }

    const lines = input.split('\n');
    const seen = new Set();
    const result = [];

    lines.forEach(line => {
      const key = caseSensitive ? line : line.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        result.push(line);
      }
    });

    setOutput(result.join('\n'));
  }, [input, caseSensitive]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.85rem 1rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <label style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <input type="checkbox" checked={caseSensitive} onChange={(e) => setCaseSensitive(e.target.checked)} />
          Case Sensitive Deduplication
        </label>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Raw Text Lines Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="Deduplicated Unique Lines Output"
          value={output}
          readOnly
        />
      </div>
    </div>
  );
};

export default RemoveDuplicateLines;
