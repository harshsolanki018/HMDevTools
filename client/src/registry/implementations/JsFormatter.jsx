import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsFormatter = () => {
  const [input, setInput] = useState('function calculateSum(a,b){const result=a+b;return result;}');
  const [formatted, setFormatted] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setFormatted('');
      return;
    }
    try {
      let res = input
        .replace(/\{/g, ' {\n  ')
        .replace(/;/g, ';\n  ')
        .replace(/\}/g, '\n}\n');
      setFormatted(res.trim());
    } catch (err) {
      setFormatted(input);
    }
  }, [input]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Unformatted JavaScript Input"
        value={input}
        onChange={setInput}
      />
      <CodeEditorPanel
        title="Formatted JavaScript Output"
        value={formatted}
        readOnly
      />
    </div>
  );
};

export default JsFormatter;
