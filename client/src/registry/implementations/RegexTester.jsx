import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const RegexTester = () => {
  const [pattern, setPattern] = useState('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}');
  const [flags, setFlags] = useState('gi');
  const [testString, setTestString] = useState('Contact support at dev@hmdevtools.com or hello@example.org for assistance.');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!pattern.trim() || !testString) {
      setMatches([]);
      setError('');
      return;
    }

    // Safety guard against massive inputs causing freeze
    if (testString.length > 500000) {
      setError('Test string exceeds maximum length of 500,000 characters for safety.');
      setMatches([]);
      return;
    }

    try {
      const regex = new RegExp(pattern, flags);
      const matchedList = [];
      let match;
      let count = 0;
      const maxMatches = 500; // Prevent catastrophic infinite loops
      
      if (flags.includes('g')) {
        while ((match = regex.exec(testString)) !== null && count < maxMatches) {
          matchedList.push({ index: match.index, value: match[0] });
          if (match.index === regex.lastIndex) regex.lastIndex++;
          count++;
        }
      } else {
        match = regex.exec(testString);
        if (match) matchedList.push({ index: match.index, value: match[0] });
      }

      setMatches(matchedList);
      setError('');
    } catch (err) {
      setError(`Regex Syntax Error: ${err.message}`);
      setMatches([]);
    }
  }, [pattern, flags, testString]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontWeight: 600 }}>/</span>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            placeholder="Regex pattern..."
            style={{ width: '100%', padding: '0.4rem 0.5rem', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'var(--bg-main)', fontFamily: 'var(--font-mono)' }}
          />
          <span style={{ fontWeight: 600 }}>/</span>
          <input
            type="text"
            value={flags}
            onChange={(e) => setFlags(e.target.value)}
            placeholder="flags"
            style={{ width: '60px', padding: '0.4rem 0.5rem', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'var(--bg-main)', fontFamily: 'var(--font-mono)' }}
          />
        </div>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-primary)' }}>
          {matches.length} Match(es) Found
        </div>
      </div>

      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Test Text String"
          value={testString}
          onChange={setTestString}
        />
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem', overflow: 'auto', maxHeight: '300px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Matched Results Details</div>
          {matches.length > 0 ? (
            matches.map((m, i) => (
              <div key={i} style={{ padding: '0.4rem', borderBottom: '1px solid var(--border-color)', fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'var(--text-muted)' }}>#{i + 1} (Index {m.index}): </span>
                <span style={{ background: 'var(--accent-subtle)', color: 'var(--accent-primary)', fontWeight: 600, padding: '0.1rem 0.3rem', borderRadius: '4px' }}>{m.value}</span>
              </div>
            ))
          ) : (
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>No matches found for pattern.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegexTester;
