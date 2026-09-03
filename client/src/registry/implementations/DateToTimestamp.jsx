import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const DateToTimestamp = () => {
  const [dateStr, setDateStr] = useState(new Date().toISOString().slice(0, 16));
  const [result, setResult] = useState('');

  React.useEffect(() => {
    if (!dateStr) {
      setResult('');
      return;
    }
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) {
      setResult('Invalid Date Input');
      return;
    }
    const sec = Math.floor(d.getTime() / 1000);
    const ms = d.getTime();

    setResult(
      `Seconds (Unix Epoch): ${sec}\n` +
      `Milliseconds: ${ms}\n` +
      `ISO String: ${d.toISOString()}`
    );
  }, [dateStr]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '8px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <label style={{ fontWeight: 500 }}>Select Date & Time: </label>
        <input
          type="datetime-local"
          value={dateStr}
          onChange={(e) => setDateStr(e.target.value)}
          style={{ padding: '0.4rem 0.75rem', border: '1px solid var(--border-color)', borderRadius: '4px', background: 'var(--bg-main)' }}
        />
      </div>

      <CodeEditorPanel
        title="Unix Timestamp Calculation Result"
        value={result}
        readOnly
      />
    </div>
  );
};

export default DateToTimestamp;
