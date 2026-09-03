import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonToJava = () => {
  const [jsonInput, setJsonInput] = useState(
    '{\n  "id": 101,\n  "name": "HMDevTools",\n  "active": true,\n  "score": 98.5,\n  "tags": ["developer", "utility"]\n}'
  );
  const [className, setClassName] = useState('RootResponse');
  const [javaOutput, setJavaOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!jsonInput.trim()) {
      setJavaOutput('');
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      
      const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
      
      const getJavaType = (val, key) => {
        if (val === null || val === undefined) return 'Object';
        if (typeof val === 'boolean') return 'Boolean';
        if (typeof val === 'number') return Number.isInteger(val) ? 'Integer' : 'Double';
        if (typeof val === 'string') return 'String';
        if (Array.isArray(val)) {
          const itemType = val.length > 0 ? getJavaType(val[0], key) : 'Object';
          return `List<${itemType}>`;
        }
        if (typeof val === 'object') return capitalize(key);
        return 'Object';
      };

      const classesToGenerate = [];

      const generateClass = (obj, cName) => {
        const fields = [];
        const gettersSetters = [];

        Object.keys(obj).forEach(key => {
          const val = obj[key];
          const type = getJavaType(val, key);
          const fieldName = key.replace(/[^a-zA-Z0-9_$]/g, '_');

          fields.push(`    private ${type} ${fieldName};`);
          
          const capField = capitalize(fieldName);
          gettersSetters.push(
            `    public ${type} get${capField}() {\n        return ${fieldName};\n    }\n\n` +
            `    public void set${capField}(${type} ${fieldName}) {\n        this.${fieldName} = ${fieldName};\n    }`
          );

          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            generateClass(val, capitalize(key));
          } else if (Array.isArray(val) && val.length > 0 && typeof val[0] === 'object' && val[0] !== null) {
            generateClass(val[0], capitalize(key));
          }
        });

        const code = 
          `public class ${cName} {\n` +
          fields.join('\n') + '\n\n' +
          gettersSetters.join('\n\n') + '\n' +
          `}`;

        classesToGenerate.push(code);
      };

      const cleanClassName = className.trim().replace(/[^a-zA-Z0-9_$]/g, '') || 'RootResponse';
      generateClass(parsed, cleanClassName);

      const header = `import java.util.List;\n\n`;
      setJavaOutput(header + classesToGenerate.reverse().join('\n\n'));
      setError('');
    } catch (err) {
      setError(`Invalid JSON Syntax: ${err.message}`);
      setJavaOutput('');
    }
  }, [jsonInput, className]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.65rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Java Root Class Name:</label>
        <input
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder="RootResponse"
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
          title="Generated Java POJO Code"
          value={javaOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonToJava;
