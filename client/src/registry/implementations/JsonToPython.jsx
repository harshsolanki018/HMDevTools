import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonToPython = () => {
  const [input, setInput] = useState('{\n  "item_id": 42,\n  "title": "HMDevTools Guide",\n  "price": 0.0,\n  "in_stock": true\n}');
  const [pyOutput, setPyOutput] = useState('');
  const [error, setError] = useState('');

  const generatePythonDataclass = (obj, className = 'Item') => {
    let result = `from dataclasses import dataclass\nfrom typing import List, Any, Optional\n\n@dataclass\nclass ${className}:\n`;
    Object.entries(obj).forEach(([key, val]) => {
      let typeStr = 'Any';
      if (val === null) typeStr = 'Optional[Any]';
      else if (typeof val === 'boolean') typeStr = 'bool';
      else if (typeof val === 'number') typeStr = Number.isInteger(val) ? 'int' : 'float';
      else if (typeof val === 'string') typeStr = 'str';
      else if (Array.isArray(val)) typeStr = 'List[Any]';
      else if (typeof val === 'object') typeStr = 'dict';

      result += `    ${key}: ${typeStr}\n`;
    });
    return result;
  };

  React.useEffect(() => {
    if (!input.trim()) {
      setPyOutput('');
      setError('');
      return;
    }
    try {
      const parsed = JSON.parse(input);
      setPyOutput(generatePythonDataclass(parsed));
      setError('');
    } catch (err) {
      setError(`JSON Error: ${err.message}`);
      setPyOutput('');
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
          title="Python 3 Dataclass Output"
          value={pyOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonToPython;
