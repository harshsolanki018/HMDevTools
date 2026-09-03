import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const CronExpressionHelper = () => {
  const [cronExpr, setCronExpr] = useState('*/15 * * * *');
  const [explanation, setExplanation] = useState('');
  const [error, setError] = useState('');

  const presets = [
    { label: 'Every Minute', expr: '* * * * *' },
    { label: 'Every 5 Minutes', expr: '*/5 * * * *' },
    { label: 'Every 15 Minutes', expr: '*/15 * * * *' },
    { label: 'Every Hour', expr: '0 * * * *' },
    { label: 'Daily at Midnight', expr: '0 0 * * *' },
    { label: 'Weekly on Sunday', expr: '0 0 * * 0' },
    { label: 'Monthly on 1st', expr: '0 0 1 * *' },
    { label: 'Weekdays at 9 AM', expr: '0 9 * * 1-5' }
  ];

  useEffect(() => {
    if (!cronExpr.trim()) {
      setExplanation('');
      setError('');
      return;
    }

    const parts = cronExpr.trim().split(/\s+/);
    if (parts.length !== 5) {
      setError('Cron expression must contain exactly 5 fields separated by spaces (minute hour day-of-month month day-of-week).');
      setExplanation('');
      return;
    }

    const [min, hr, dom, mon, dow] = parts;

    const explainField = (val, name, unit) => {
      if (val === '*') return `every ${name}`;
      if (val.startsWith('*/')) return `every ${val.slice(2)} ${unit}s`;
      if (val.includes('-')) return `from ${name} ${val.split('-')[0]} through ${val.split('-')[1]}`;
      if (val.includes(',')) return `at ${name}s ${val.split(',').join(', ')}`;
      return `at ${name} ${val}`;
    };

    try {
      const minText = explainField(min, 'minute', 'minute');
      const hrText = explainField(hr, 'hour', 'hour');
      const domText = explainField(dom, 'day of month', 'day');
      const monText = explainField(mon, 'month', 'month');
      const dowText = explainField(dow, 'day of week', 'day');

      let desc = `Runs ${minText}, ${hrText}`;
      if (dom !== '*') desc += `, on ${domText}`;
      if (mon !== '*') desc += `, in ${monText}`;
      if (dow !== '*') desc += `, on ${dowText}`;

      setExplanation(desc + '.');
      setError('');
    } catch (err) {
      setError(`Invalid Cron Syntax: ${err.message}`);
      setExplanation('');
    }
  }, [cronExpr]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)' }}>
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Common Schedule Presets:</div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {presets.map(p => (
            <button
              key={p.label}
              onClick={() => setCronExpr(p.expr)}
              style={{ background: 'var(--bg-surface-muted)', border: '1px solid var(--border-color)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.775rem', color: 'var(--text-main)' }}
            >
              {p.label} ({p.expr})
            </button>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--bg-surface)', padding: '0.85rem', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>Standard 5-Field Cron Expression:</label>
        <input
          type="text"
          value={cronExpr}
          onChange={(e) => setCronExpr(e.target.value)}
          placeholder="* * * * *"
          style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)', background: 'var(--bg-main)', fontFamily: 'var(--font-mono)', fontSize: '1rem' }}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.25rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <div>Minute (0-59)</div>
          <div>Hour (0-23)</div>
          <div>Day of Month (1-31)</div>
          <div>Month (1-12)</div>
          <div>Day of Week (0-6)</div>
        </div>
      </div>

      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      {explanation && (
        <div style={{ padding: '1rem', background: 'var(--status-success-bg)', color: 'var(--status-success)', border: '1px solid var(--status-success)', borderRadius: 'var(--radius-sm)', fontSize: '0.95rem', fontWeight: 500 }}>
          💡 <strong>Natural Language Explanation:</strong> {explanation}
        </div>
      )}
    </div>
  );
};

export default CronExpressionHelper;
