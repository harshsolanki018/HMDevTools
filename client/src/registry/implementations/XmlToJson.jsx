import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const XmlToJson = () => {
  const [xmlInput, setXmlInput] = useState(
    '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n  <company>HMDevTools</company>\n  <employees>\n    <item>\n      <id>1</id>\n      <name>Alice</name>\n    </item>\n  </employees>\n</root>'
  );
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!xmlInput.trim()) {
      setJsonOutput('');
      setError('');
      return;
    }

    try {
      const parseXmlNode = (node) => {
        let obj = {};

        if (node.nodeType === 1) { // Element node
          // Handle element attributes
          if (node.attributes.length > 0) {
            obj["@attributes"] = {};
            for (let j = 0; j < node.attributes.length; j++) {
              const attribute = node.attributes.item(j);
              obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (node.nodeType === 3) { // Text node
          return node.nodeValue.trim();
        }

        if (node.hasChildNodes()) {
          for (let i = 0; i < node.childNodes.length; i++) {
            const item = node.childNodes.item(i);
            const nodeName = item.nodeName;

            if (item.nodeType === 3) { // Text content
              const txt = item.nodeValue.trim();
              if (txt) {
                if (Object.keys(obj).length === 0) return txt;
                obj["#text"] = txt;
              }
            } else if (item.nodeType === 1) { // Element node
              if (typeof obj[nodeName] === "undefined") {
                obj[nodeName] = parseXmlNode(item);
              } else {
                if (!Array.isArray(obj[nodeName])) {
                  const old = obj[nodeName];
                  obj[nodeName] = [old];
                }
                obj[nodeName].push(parseXmlNode(item));
              }
            }
          }
        }
        return obj;
      };

      if (typeof window !== 'undefined' && window.DOMParser) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlInput, "text/xml");
        const parserError = xmlDoc.getElementsByTagName("parsererror");
        
        if (parserError.length > 0) {
          setError(`XML Parsing Error: ${parserError[0].textContent.split('\n')[0]}`);
          setJsonOutput('');
          return;
        }

        const result = parseXmlNode(xmlDoc.documentElement);
        const wrapped = { [xmlDoc.documentElement.nodeName]: result };
        setJsonOutput(JSON.stringify(wrapped, null, 2));
        setError('');
      } else {
        setError('XML Parser is only available in browser DOM context.');
      }
    } catch (err) {
      setError(`XML Parsing Error: ${err.message}`);
      setJsonOutput('');
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
          title="XML Input"
          value={xmlInput}
          onChange={setXmlInput}
          placeholder="Paste XML document..."
        />
        <CodeEditorPanel
          title="JSON Output"
          value={jsonOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default XmlToJson;
