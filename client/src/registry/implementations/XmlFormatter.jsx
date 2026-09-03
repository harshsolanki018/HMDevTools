import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const XmlFormatter = () => {
  const [xmlInput, setXmlInput] = useState(
    '<note><to>Dev</to><from>HMDevTools</from><heading>Reminder</heading><body>Format XML cleanly!</body></note>'
  );
  const [formattedXml, setFormattedXml] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!xmlInput.trim()) {
      setFormattedXml('');
      setError('');
      return;
    }

    if (xmlInput.length > 500000) {
      setError('XML document size exceeds 500,000 characters limit for safety.');
      setFormattedXml('');
      return;
    }

    try {
      const formatXmlString = (xml) => {
        let formatted = '';
        let reg = /(>)(<)(\/*)/g;
        let xmlStr = xml.replace(reg, '$1\r\n$2$3');
        let pad = 0;
        
        xmlStr.split('\r\n').forEach(node => {
          let indent = 0;
          if (node.match(/.+<\/\w[^>]*>$/)) {
            indent = 0;
          } else if (node.match(/^<\/\w/)) {
            if (pad !== 0) pad -= 1;
          } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
            indent = 1;
          } else {
            indent = 0;
          }

          let padding = '';
          for (let i = 0; i < pad; i++) {
            padding += '  ';
          }

          formatted += padding + node + '\r\n';
          pad += indent;
        });

        return formatted.trim();
      };

      setFormattedXml(formatXmlString(xmlInput));
      setError('');
    } catch (err) {
      setError(`XML Formatting Error: ${err.message}`);
      setFormattedXml('');
    }
  }, [xmlInput]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Raw XML Input"
          value={xmlInput}
          onChange={setXmlInput}
          placeholder="Paste raw unindented XML..."
        />
        <CodeEditorPanel
          title="Formatted XML Output"
          value={formattedXml}
          readOnly
        />
      </div>
    </div>
  );
};

export default XmlFormatter;
