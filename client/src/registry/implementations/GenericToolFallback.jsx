import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const GenericToolFallback = ({ tool }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleProcess = () => {
    setOutput(`Processing result for ${tool?.name || 'tool'}...\n\nInput received:\n${input}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title={`${tool?.name || 'Tool'} Input`}
          value={input}
          onChange={setInput}
          placeholder={`Enter data for ${tool?.name || 'this tool'}...`}
        />
        <CodeEditorPanel
          title="Output Result"
          value={output}
          readOnly
        />
      </div>
      <button
        onClick={handleProcess}
        style={{ width: 'fit-content', padding: '0.5rem 1.25rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: '6px', fontWeight: 500 }}
      >
        Run {tool?.name}
      </button>
    </div>
  );
};

export default GenericToolFallback;
