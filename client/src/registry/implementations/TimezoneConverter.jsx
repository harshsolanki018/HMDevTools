import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const TimezoneConverter = () => {
  const [dateInput, setDateInput] = useState(new Date().toISOString().slice(0, 16));
  const [selectedTz, setSelectedTz] = useState('UTC');
  const [result, setResult] = useState('');

  const timezones = [
    'UTC',
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Asia/Tokyo',
    'Asia/Kolkata',
    'Asia/Singapore',
    'Australia/Sydney'
  ];

  useEffect(() => {
    if (!dateInput) {
      setResult('');
      return;
    }

    try {
      const d = new Date(dateInput);
      if (isNaN(d.getTime())) {
        setResult('Invalid Date Input');
        return;
      }

      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: selectedTz,
        dateStyle: 'full',
        timeStyle: 'medium'
      }).format(d);

      setResult(`${formatted} (${selectedTz})`);
    } catch (err) {
      setResult(`Error: ${err.message}`);
    }
  }, [dateInput, selectedTz]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Select Date & Time:</label>
          <input
            type="datetime-local"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            style={{ padding: '0.35rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', fontSize: '0.85rem' }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Target Timezone:</label>
          <select
            value={selectedTz}
            onChange={(e) => setSelectedTz(e.target.value)}
            style={{ padding: '0.35rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', fontSize: '0.85rem' }}
          >
            {timezones.map(tz => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </select>
        </div>
      </div>

      <CodeEditorPanel
        title="Converted Timezone Result"
        value={result}
        readOnly
      />
    </div>
  );
};

export default TimezoneConverter;
