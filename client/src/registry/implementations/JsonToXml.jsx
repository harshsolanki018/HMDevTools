import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonToXml = () => {
  const [jsonInput, setJsonInput] = useState(
    '{\n  "company": "HMDevTools",\n  "employees": [\n    { "id": 1, "name": "Alice", "role": "Developer" },\n    { "id": 2, "name": "Bob", "role": "Designer" }\n  ]\n}'
  );
  const [rootTag, setRootTag] = useState('root');
  const [xmlOutput, setXmlOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!jsonInput.trim()) {
      setXmlOutput('');
      setError('');
      return;
    }

    try {
      const parsed = JSON.parse(jsonInput);
      
      const escapeXml = (str) => {
        return String(str)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;');
      };

      const toXml = (obj, tag, indentLevel = 1) => {
        const indent = '  '.repeat(indentLevel);
        let xml = '';

        if (obj === null || obj === undefined) {
          return `${indent}<${tag}/>\n`;
        }

        if (Array.isArray(obj)) {
          obj.forEach(item => {
            const itemTag = tag.endsWith('s') && tag.length > 1 ? tag.slice(0, -1) : 'item';
            xml += toXml(item, itemTag, indentLevel);
          });
          return xml;
        }

        if (typeof obj === 'object') {
          xml += `${indent}<${tag}>\n`;
          Object.keys(obj).forEach(key => {
            const cleanKey = key.replace(/[^a-zA-Z0-9_-]/g, '_');
            xml += toXml(obj[key], cleanKey, indentLevel + 1);
          });
          xml += `${indent}</${tag}>\n`;
          return xml;
        }

        return `${indent}<${tag}>${escapeXml(obj)}</${tag}>\n`;
      };

      const cleanRoot = rootTag.trim().replace(/[^a-zA-Z0-9_-]/g, '_') || 'root';
      const generatedXml = `<?xml version="1.0" encoding="UTF-8"?>\n` + toXml(parsed, cleanRoot, 0).trim();
      setXmlOutput(generatedXml);
      setError('');
    } catch (err) {
      setError(`Invalid JSON Syntax: ${err.message}`);
      setXmlOutput('');
    }
  }, [jsonInput, rootTag]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.65rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Root Element Name:</label>
        <input
          type="text"
          value={rootTag}
          onChange={(e) => setRootTag(e.target.value)}
          placeholder="root"
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
          title="XML Output"
          value={xmlOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default JsonToXml;
