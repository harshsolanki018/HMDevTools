import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JsonValidator = () => {
  const [input, setInput] = useState('{\n  "status": "ok",\n  "code": 200,\n  "data": {\n    "id": "dev_123"\n  }\n}');
  const [validationResult, setValidationResult] = useState({ valid: true, message: 'Valid RFC 8259 JSON' });

  const validate = (str) => {
    if (!str.trim()) {
      setValidationResult({ valid: false, message: 'Input is empty' });
      return;
    }
    try {
      JSON.parse(str);
      setValidationResult({ valid: true, message: '✓ Valid RFC 8259 JSON Syntax' });
    } catch (err) {
      setValidationResult({ valid: false, message: `✕ Syntax Error: ${err.message}` });
    }
  };

  const handleInputChange = (val) => {
    setInput(val);
    validate(val);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div
        style={{
          padding: '0.85rem 1.25rem',
          borderRadius: '6px',
          fontWeight: 600,
          fontSize: '0.95rem',
          background: validationResult.valid ? 'var(--status-success-bg)' : 'var(--status-danger-bg)',
          color: validationResult.valid ? 'var(--status-success)' : 'var(--status-danger)',
          border: `1px solid ${validationResult.valid ? 'var(--status-success)' : 'var(--status-danger)'}`
        }}
      >
        {validationResult.message}
      </div>

      <CodeEditorPanel
        title="JSON Input to Validate"
        value={input}
        onChange={handleInputChange}
        onLoadSample={() => handleInputChange('{\n  "name": "HMDevTools",\n  "version": 1.0\n}')}
      />
    </div>
  );
};

export default JsonValidator;
