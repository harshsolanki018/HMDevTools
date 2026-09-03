import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const CssFormatter = () => {
  const [input, setInput] = useState('body{margin:0;padding:0;background-color:#fff;}.card{border:1px solid #ccc;padding:1rem;}');
  const [formatted, setFormatted] = useState('');

  React.useEffect(() => {
    if (!input.trim()) {
      setFormatted('');
      return;
    }
    try {
      let res = input.replace(/\s*\{\s*/g, ' {\n  ').replace(/\s*;\s*/g, ';\n  ').replace(/\s*\}\s*/g, '\n}\n\n');
      setFormatted(res.trim());
    } catch (err) {
      setFormatted(input);
    }
  }, [input]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Unformatted CSS Input"
        value={input}
        onChange={setInput}
      />
      <CodeEditorPanel
        title="Formatted CSS Output"
        value={formatted}
        readOnly
      />
    </div>
  );
};

export default CssFormatter;
