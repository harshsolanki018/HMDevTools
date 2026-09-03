import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonToTypescript = () => {
  const [input, setInput] = useState('{\n  "id": 101,\n  "username": "dev_user",\n  "active": true,\n  "tags": ["web", "tools"]\n}');
  const [tsOutput, setTsOutput] = useState('');
  const [error, setError] = useState('');

  const generateTs = (obj, interfaceName = 'RootObject') => {
    let result = `export interface ${interfaceName} {\n`;
    Object.entries(obj).forEach(([key, val]) => {
      let typeStr = 'any';
      if (val === null) typeStr = 'any';
      else if (typeof val === 'boolean') typeStr = 'boolean';
      else if (typeof val === 'number') typeStr = 'number';
      else if (typeof val === 'string') typeStr = 'string';
      else if (Array.isArray(val)) {
        const elemType = val.length > 0 ? typeof val[0] : 'any';
        typeStr = `${elemType}[]`;
      } else if (typeof val === 'object') {
        typeStr = 'Record<string, any>';
      }
      result += `  ${key}: ${typeStr};\n`;
    });
    result += '}';
    return result;
  };

  React.useEffect(() => {
    if (!input.trim()) {
      setTsOutput('');
      setError('');
      return;
    }
    try {
      const parsed = JSON.parse(input);
      if (typeof parsed !== 'object' || parsed === null) {
        setError('Input must be a JSON Object');
        setTsOutput('');
        return;
      }
      setTsOutput(generateTs(parsed));
      setError('');
    } catch (err) {
      setError(`JSON Parse Error: ${err.message}`);
      setTsOutput('');
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
          title="JSON Object Sample Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="TypeScript Interface Output"
          value={tsOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonToTypescript;
