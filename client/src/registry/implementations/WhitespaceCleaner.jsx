import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const WhitespaceCleaner = () => {
  const [textInput, setTextInput] = useState('   Hello   world!  \n\n  This   is  a   test.   ');
  const [cleanedOutput, setCleanedOutput] = useState('');

  useEffect(() => {
    if (!textInput) {
      setCleanedOutput('');
      return;
    }

    const cleanWhitespace = (str) => {
      return str
        .split('\n')
        .map(line => line.trim().replace(/\s+/g, ' '))
        .filter(line => line.length > 0)
        .join('\n');
    };

    setCleanedOutput(cleanWhitespace(textInput));
  }, [textInput]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Messy Text Input"
        value={textInput}
        onChange={setTextInput}
        placeholder="Paste text to clean extra whitespace..."
      />
      <CodeEditorPanel
        title="Cleaned Text Output"
        value={cleanedOutput}
        readOnly
      />
    </div>
  );
};

export default WhitespaceCleaner;
