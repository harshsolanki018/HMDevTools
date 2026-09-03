import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonToCsv = () => {
  const [input, setInput] = useState('[\n  {"id": 1, "name": "Alice", "role": "Developer"},\n  {"id": 2, "name": "Bob", "role": "Designer"}\n]');
  const [csvOutput, setCsvOutput] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setCsvOutput('');
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(input);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        setError('Input must be a non-empty array of JSON objects.');
        setCsvOutput('');
        return;
      }

      const headers = Array.from(new Set(parsed.flatMap(obj => Object.keys(obj))));
      const csvRows = [
        headers.join(','),
        ...parsed.map(row => 
          headers.map(header => {
            const val = row[header] !== undefined ? row[header] : '';
            const strVal = typeof val === 'object' ? JSON.stringify(val) : String(val);
            return strVal.includes(',') || strVal.includes('"') ? `"${strVal.replace(/"/g, '""')}"` : strVal;
          }).join(',')
        )
      ];

      setCsvOutput(csvRows.join('\n'));
      setError('');
    } catch (err) {
      setError(`JSON Parse Error: ${err.message}`);
      setCsvOutput('');
    }
  }, [input]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="JSON Objects Array Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="CSV Output Result"
          value={csvOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonToCsv;
