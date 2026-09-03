import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const CsvToJson = () => {
  const [input, setInput] = useState('id,name,role\n1,Alice,Developer\n2,Bob,Designer');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setJsonOutput('');
      setError('');
      return;
    }

    try {
      const lines = input.trim().split('\n').map(l => l.trim()).filter(l => l);
      if (lines.length < 2) {
        setError('CSV must contain at least a header row and one data row.');
        setJsonOutput('');
        return;
      }

      const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
      const result = lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
        const obj = {};
        headers.forEach((h, idx) => {
          obj[h] = values[idx] !== undefined ? values[idx] : '';
        });
        return obj;
      });

      setJsonOutput(JSON.stringify(result, null, 2));
      setError('');
    } catch (err) {
      setError(`CSV Parsing Error: ${err.message}`);
      setJsonOutput('');
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
          title="CSV Raw Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="Parsed JSON Array Output"
          value={jsonOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default CsvToJson;
