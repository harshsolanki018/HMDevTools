import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const CaseConverter = () => {
  const [text, setText] = useState('hello world hmdevtools');
  const [mode, setMode] = useState('camel');
  const [converted, setConverted] = useState('');

  React.useEffect(() => {
    if (!text) {
      setConverted('');
      return;
    }

    const words = text.trim().split(/[\s_\-]+/);
    let res = '';

    switch (mode) {
      case 'upper':
        res = text.toUpperCase();
        break;
      case 'lower':
        res = text.toLowerCase();
        break;
      case 'camel':
        res = words.map((w, i) => i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
        break;
      case 'pascal':
        res = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
        break;
      case 'snake':
        res = words.map(w => w.toLowerCase()).join('_');
        break;
      case 'kebab':
        res = words.map(w => w.toLowerCase()).join('-');
        break;
      case 'title':
        res = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        break;
      default:
        res = text;
    }
    setConverted(res);
  }, [text, mode]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {[
          { id: 'camel', label: 'camelCase' },
          { id: 'pascal', label: 'PascalCase' },
          { id: 'snake', label: 'snake_case' },
          { id: 'kebab', label: 'kebab-case' },
          { id: 'upper', label: 'UPPERCASE' },
          { id: 'lower', label: 'lowercase' },
          { id: 'title', label: 'Title Case' }
        ].map(b => (
          <button
            key={b.id}
            onClick={() => setMode(b.id)}
            style={{
              padding: '0.35rem 0.75rem',
              borderRadius: '6px',
              border: '1px solid var(--border-color)',
              background: mode === b.id ? 'var(--accent-primary)' : 'var(--bg-surface)',
              color: mode === b.id ? '#fff' : 'var(--text-main)',
              fontSize: '0.85rem',
              fontWeight: 500
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Input Text"
          value={text}
          onChange={setText}
        />
        <CodeEditorPanel
          title={`Converted (${mode}) Result`}
          value={converted}
          readOnly
        />
      </div>
    </div>
  );
};

export default CaseConverter;
