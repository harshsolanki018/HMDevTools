import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const SqlMinifier = () => {
  const [sqlInput, setSqlInput] = useState(
    'SELECT users.id, users.name, orders.total\nFROM users\nINNER JOIN orders ON users.id = orders.user_id\nWHERE users.status = \'active\';'
  );
  const [minifiedSql, setMinifiedSql] = useState('');

  useEffect(() => {
    if (!sqlInput.trim()) {
      setMinifiedSql('');
      return;
    }

    const minifySqlString = (sql) => {
      return sql
        .replace(/--.*$/gm, '') // Strip inline comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Strip block comments
        .replace(/\s+/g, ' ') // Compress whitespace
        .trim();
    };

    setMinifiedSql(minifySqlString(sqlInput));
  }, [sqlInput]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Raw SQL Query Input"
        value={sqlInput}
        onChange={setSqlInput}
        placeholder="Paste SQL query..."
      />
      <CodeEditorPanel
        title="Minified Single-Line SQL Query"
        value={minifiedSql}
        readOnly
      />
    </div>
  );
};

export default SqlMinifier;
