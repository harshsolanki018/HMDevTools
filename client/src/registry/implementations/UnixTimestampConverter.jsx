import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const UnixTimestampConverter = () => {
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000).toString());
  const [dateResult, setDateResult] = useState('');

  React.useEffect(() => {
    if (!timestamp.trim()) {
      setDateResult('');
      return;
    }
    const val = Number(timestamp.trim());
    if (isNaN(val)) {
      setDateResult('Invalid timestamp integer');
      return;
    }
    // Determine if seconds or milliseconds
    const dateObj = new Date(val > 10000000000 ? val : val * 1000);
    if (isNaN(dateObj.getTime())) {
      setDateResult('Invalid date range');
      return;
    }

    setDateResult(
      `UTC: ${dateObj.toUTCString()}\n` +
      `ISO 8601: ${dateObj.toISOString()}\n` +
      `Local: ${dateObj.toString()}`
    );
  }, [timestamp]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={() => setTimestamp(Math.floor(Date.now() / 1000).toString())}
          style={{ padding: '0.4rem 1rem', background: 'var(--accent-primary)', color: '#fff', borderRadius: '6px', fontSize: '0.85rem' }}
        >
          Set to Current Time
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Unix Timestamp Input (Seconds or Ms)"
          value={timestamp}
          onChange={setTimestamp}
        />
        <CodeEditorPanel
          title="Human Date Conversion Result"
          value={dateResult}
          readOnly
        />
      </div>
    </div>
  );
};

export default UnixTimestampConverter;
