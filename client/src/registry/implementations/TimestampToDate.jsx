import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const TimestampToDate = () => {
  const [timestamp, setTimestamp] = useState('1700000000');
  const [result, setResult] = useState('');

  React.useEffect(() => {
    if (!timestamp.trim()) {
      setResult('');
      return;
    }
    const val = Number(timestamp.trim());
    if (isNaN(val)) {
      setResult('Invalid numeric timestamp');
      return;
    }
    const d = new Date(val > 10000000000 ? val : val * 1000);
    setResult(
      `UTC: ${d.toUTCString()}\n` +
      `ISO String: ${d.toISOString()}\n` +
      `Local System Time: ${d.toString()}`
    );
  }, [timestamp]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Unix Epoch Timestamp"
        value={timestamp}
        onChange={setTimestamp}
      />
      <CodeEditorPanel
        title="Calendar Date Output"
        value={result}
        readOnly
      />
    </div>
  );
};

export default TimestampToDate;
