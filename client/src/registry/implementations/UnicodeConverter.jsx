import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const UnicodeConverter = () => {
  const [textInput, setTextInput] = useState('Hello HMDevTools 🚀');
  const [unicodeOutput, setUnicodeOutput] = useState('');
  const [mode, setMode] = useState('encode'); // 'encode' or 'decode'

  useEffect(() => {
    if (!textInput) {
      setUnicodeOutput('');
      return;
    }

    try {
      if (mode === 'encode') {
        const unicodeEscaped = Array.from(textInput).map(char => {
          const code = char.codePointAt(0);
          if (code > 0xFFFF) {
            // Surrogate pair conversion
            const high = Math.floor((code - 0x10000) / 0x400) + 0xD800;
            const low = ((code - 0x10000) % 0x400) + 0xDC00;
            return `\\u${high.toString(16).padStart(4, '0')}\\u${low.toString(16).padStart(4, '0')}`;
          }
          if (code > 127) {
            return `\\u${code.toString(16).padStart(4, '0')}`;
          }
          return char;
        }).join('');
        setUnicodeOutput(unicodeEscaped);
      } else {
        const decoded = textInput.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => {
          return String.fromCharCode(parseInt(hex, 16));
        });
        setUnicodeOutput(decoded);
      }
    } catch (err) {
      setUnicodeOutput(`Error processing Unicode string: ${err.message}`);
    }
  }, [textInput, mode]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.65rem 1rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Mode:</span>
        <button
          onClick={() => setMode('encode')}
          style={{ padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: mode === 'encode' ? 'var(--accent-primary)' : 'var(--bg-surface)', color: mode === 'encode' ? '#fff' : 'var(--text-main)', fontSize: '0.8rem', fontWeight: 500 }}
        >
          Text → Unicode Escape (\uXXXX)
        </button>
        <button
          onClick={() => setMode('decode')}
          style={{ padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', background: mode === 'decode' ? 'var(--accent-primary)' : 'var(--bg-surface)', color: mode === 'decode' ? '#fff' : 'var(--text-main)', fontSize: '0.8rem', fontWeight: 500 }}
        >
          Unicode Escape (\uXXXX) → Text
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title={mode === 'encode' ? 'Input Text String' : 'Input Unicode Escape String'}
          value={textInput}
          onChange={setTextInput}
        />
        <CodeEditorPanel
          title={mode === 'encode' ? 'Unicode Escape Output' : 'Decoded Text Output'}
          value={unicodeOutput}
          readOnly
        />
      </div>
    </div>
  );
};

export default UnicodeConverter;
