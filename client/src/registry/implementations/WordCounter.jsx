import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const WordCounter = () => {
  const [text, setText] = useState('HMDevTools is a privacy-conscious developer utility platform designed for fast, modern web and software development.');

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const charactersWithSpaces = text.length;
  const charactersWithoutSpaces = text.replace(/\s+/g, '').length;
  const lines = text ? text.split('\n').length : 0;
  const readingTimeMinutes = Math.ceil(words / 200);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1rem' }}>
        <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{words}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Words</div>
        </div>
        <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{charactersWithSpaces}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Characters</div>
        </div>
        <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{charactersWithoutSpaces}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>No-Space Chars</div>
        </div>
        <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{lines}</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Lines</div>
        </div>
        <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>{readingTimeMinutes} min</div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Reading Time</div>
        </div>
      </div>

      <CodeEditorPanel
        title="Text Input"
        value={text}
        onChange={setText}
        onLoadSample={() => setText('HMDevTools provides real-time client-side developer utilities designed for web developers, backend engineers, and technical writers.')}
      />
    </div>
  );
};

export default WordCounter;
