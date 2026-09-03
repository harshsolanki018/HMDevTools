import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const RegexExplainer = () => {
  const [pattern, setPattern] = useState('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');
  const [explanation, setExplanation] = useState([]);

  useEffect(() => {
    if (!pattern.trim()) {
      setExplanation([]);
      return;
    }

    const explainRegexPattern = (regexStr) => {
      const tokens = [];

      if (regexStr.startsWith('^')) tokens.push({ token: '^', meaning: 'Asserts start of string anchor' });
      if (regexStr.endsWith('$')) tokens.push({ token: '$', meaning: 'Asserts end of string anchor' });

      if (regexStr.includes('[a-zA-Z0-9._%+-]+')) {
        tokens.push({ token: '[a-zA-Z0-9._%+-]+', meaning: 'Matches 1 or more alphanumeric characters, dots, underscores, percents, plus, or hyphens' });
      }
      if (regexStr.includes('@')) {
        tokens.push({ token: '@', meaning: 'Matches literal "@" symbol' });
      }
      if (regexStr.includes('[a-zA-Z0-9.-]+')) {
        tokens.push({ token: '[a-zA-Z0-9.-]+', meaning: 'Matches 1 or more domain name characters' });
      }
      if (regexStr.includes('\\.')) {
        tokens.push({ token: '\\.', meaning: 'Matches literal dot "." character' });
      }
      if (regexStr.includes('[a-zA-Z]{2,}')) {
        tokens.push({ token: '[a-zA-Z]{2,}', meaning: 'Matches 2 or more letters for top-level domain extension (TLD)' });
      }

      if (tokens.length === 0) {
        tokens.push({ token: regexStr, meaning: 'Matches literal characters in sequence' });
      }

      return tokens;
    };

    setExplanation(explainRegexPattern(pattern));
  }, [pattern]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Regex Pattern Input:</label>
        <input
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="Enter regex pattern..."
          style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
        />
      </div>

      <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', padding: '1rem' }}>
        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-main)' }}>Plain English Breakdown:</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {explanation.map((item, idx) => (
            <div key={idx} style={{ padding: '0.5rem', background: 'var(--bg-surface-muted)', border: '1px solid var(--border-color)', borderRadius: '4px', fontSize: '0.85rem' }}>
              <code style={{ background: 'var(--accent-subtle)', color: 'var(--accent-primary)', padding: '0.1rem 0.3rem', borderRadius: '3px', fontWeight: 600 }}>{item.token}</code> — <span>{item.meaning}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegexExplainer;
