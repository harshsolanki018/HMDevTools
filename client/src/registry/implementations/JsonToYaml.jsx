import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonToYaml = () => {
  const [input, setInput] = useState('{\n  "version": "3.8",\n  "services": {\n    "web": {\n      "image": "nginx:latest",\n      "ports": ["80:80"]\n    }\n  }\n}');
  const [yamlOutput, setYamlOutput] = useState('');
  const [error, setError] = useState('');

  // Simple recursive JSON to YAML formatter
  const jsonToYamlHelper = (obj, indentLevel = 0) => {
    const indent = '  '.repeat(indentLevel);
    if (obj === null) return 'null';
    if (typeof obj !== 'object') return JSON.stringify(obj);

    if (Array.isArray(obj)) {
      if (obj.length === 0) return '[]';
      return obj.map(item => `\n${indent}- ${jsonToYamlHelper(item, indentLevel + 1)}`).join('');
    }

    return Object.entries(obj).map(([key, val]) => {
      if (typeof val === 'object' && val !== null) {
        return `\n${indent}${key}:${jsonToYamlHelper(val, indentLevel + 1)}`;
      }
      return `\n${indent}${key}: ${val}`;
    }).join('').trim();
  };

  React.useEffect(() => {
    if (!input.trim()) {
      setYamlOutput('');
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(input);
      setYamlOutput(jsonToYamlHelper(parsed));
      setError('');
    } catch (err) {
      setError(`JSON Parse Error: ${err.message}`);
      setYamlOutput('');
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
          title="JSON Input"
          value={input}
          onChange={setInput}
        />
        <CodeEditorPanel
          title="YAML Output Result"
          value={yamlOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonToYaml;
