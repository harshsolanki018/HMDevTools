import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const UuidGenerator = () => {
  const [count, setCount] = useState(5);
  const [uppercase, setUppercase] = useState(false);
  const [hyphens, setHyphens] = useState(true);
  const [uuids, setUuids] = useState('');

  const generateUUIDs = () => {
    const list = [];
    for (let i = 0; i < count; i++) {
      let u = '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
      if (!hyphens) u = u.replace(/-/g, '');
      if (uppercase) u = u.toUpperCase();
      list.push(u);
    }
    setUuids(list.join('\n'));
  };

  React.useEffect(() => {
    generateUUIDs();
  }, [count, uppercase, hyphens]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
        <label style={{ fontSize: '0.9rem' }}>
          Quantity:
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
            style={{ marginLeft: '0.5rem', width: '70px', padding: '0.25rem 0.5rem', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'var(--bg-main)' }}
          />
        </label>
        <label style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
          Uppercase
        </label>
        <label style={{ fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <input type="checkbox" checked={hyphens} onChange={(e) => setHyphens(e.target.checked)} />
          Include Hyphens
        </label>
        <button
          onClick={generateUUIDs}
          style={{ padding: '0.4rem 1rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: '6px', fontWeight: 500 }}
        >
          Regenerate
        </button>
      </div>

      <CodeEditorPanel
        title={`Generated ${count} UUID v4 Result(s)`}
        value={uuids}
        readOnly
      />
    </div>
  );
};

export default UuidGenerator;
