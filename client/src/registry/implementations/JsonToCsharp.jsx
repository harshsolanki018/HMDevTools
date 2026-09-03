import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonToCsharp = () => {
  const [jsonInput, setJsonInput] = useState(
    '{\n  "id": 101,\n  "name": "HMDevTools",\n  "active": true,\n  "price": 19.99,\n  "tags": ["csharp", "dotnet"]\n}'
  );
  const [className, setClassName] = useState('RootObject');
  const [csharpOutput, setCsharpOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!jsonInput.trim()) {
      setCsharpOutput('');
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      
      const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
      
      const getCsharpType = (val, key) => {
        if (val === null || val === undefined) return 'object';
        if (typeof val === 'boolean') return 'bool';
        if (typeof val === 'number') return Number.isInteger(val) ? 'int' : 'double';
        if (typeof val === 'string') return 'string';
        if (Array.isArray(val)) {
          const itemType = val.length > 0 ? getCsharpType(val[0], key) : 'object';
          return `List<${itemType}>`;
        }
        if (typeof val === 'object') return capitalize(key);
        return 'object';
      };

      const classesToGenerate = [];

      const generateClass = (obj, cName) => {
        const props = [];

        Object.keys(obj).forEach(key => {
          const val = obj[key];
          const type = getCsharpType(val, key);
          const propName = capitalize(key.replace(/[^a-zA-Z0-9_$]/g, '_'));

          props.push(`    [JsonPropertyName("${key}")]\n    public ${type} ${propName} { get; set; }`);

          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            generateClass(val, capitalize(key));
          } else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'object' && val[0] !== null) {
            generateClass(val[0], capitalize(key));
          }
        });

        const code = 
          `public class ${cName}\n{\n` +
          props.join('\n\n') + '\n' +
          `}`;

        classesToGenerate.push(code);
      };

      const cleanClassName = className.trim().replace(/[^a-zA-Z0-9_$]/g, '') || 'RootObject';
      generateClass(parsed, cleanClassName);

      const header = `using System;\nusing System.Collections.Generic;\nusing System.Text.Json.Serialization;\n\n`;
      setCsharpOutput(header + classesToGenerate.reverse().join('\n\n'));
      setError('');
    } catch (err) {
      setError(`Invalid JSON Syntax: ${err.message}`);
      setCsharpOutput('');
    }
  }, [jsonInput, className]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.65rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>C# Root Class Name:</label>
        <input
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder="RootObject"
          style={{ padding: '0.3rem 0.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-main)', fontSize: '0.85rem' }}
        />
      </div>

      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="JSON Input"
          value={jsonInput}
          onChange={setJsonInput}
          placeholder="Paste JSON object..."
        />
        <CodeEditorPanel
          title="Generated C# POCO Code"
          value={csharpOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonToCsharp;
