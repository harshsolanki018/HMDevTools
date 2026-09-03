import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const TextDiff = () => {
  const [original, setOriginal] = useState('HMDevTools is fast.\nIt provides developer tools.\nLocal browser processing.');
  const [modified, setModified] = useState('HMDevTools is extremely fast.\nIt provides developer tools.\nLocal browser processing and privacy.');
  const [diffLines, setDiffLines] = useState([]);

  React.useEffect(() => {
    const origLines = original.split('\n');
    const modLines = modified.split('\n');
    const max = Math.max(origLines.length, modLines.length);
    const result = [];

    for (let i = 0; i < max; i++) {
      const o = origLines[i];
      const m = modLines[i];
      if (o === m) {
        result.push({ status: 'same', text: o });
      } else {
        if (o !== undefined) result.push({ status: 'removed', text: o });
        if (m !== undefined) result.push({ status: 'added', text: m });
      }
    }

    setDiffLines(result);
  }, [original, modified]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Original Text (Left)"
          value={original}
          onChange={setOriginal}
        />
        <CodeEditorPanel
          title="Modified Text (Right)"
          value={modified}
          onChange={setModified}
        />
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', overflow: 'auto', maxHeight: '300px', fontFamily: 'var(--font-mono)' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Line-by-Line Diff View</div>
        {diffLines.map((line, idx) => (
          <div
            key={idx}
            style={{
              padding: '0.2rem 0.5rem',
              fontSize: '0.875rem',
              background: line.status === 'added' ? 'var(--status-success-bg)' : line.status === 'removed' ? 'var(--status-danger-bg)' : 'transparent',
              color: line.status === 'added' ? 'var(--status-success)' : line.status === 'removed' ? 'var(--status-danger)' : 'var(--text-main)',
              borderLeft: `3px solid ${line.status === 'added' ? 'var(--status-success)' : line.status === 'removed' ? 'var(--status-danger)' : 'transparent'}`
            }}
          >
            {line.status === 'added' ? '+ ' : line.status === 'removed' ? '- ' : '  '}
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextDiff;
