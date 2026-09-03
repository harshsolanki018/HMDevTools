import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const SqlFormatter = () => {
  const [input, setInput] = useState('select u.id,u.name,u.email from users u where u.status="active" order by u.id desc;');
  const [formatted, setFormatted] = useState('');

  const keywords = ['SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 'HAVING', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'LIMIT', 'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE FROM'];

  React.useEffect(() => {
    if (!input.trim()) {
      setFormatted('');
      return;
    }

    try {
      let res = input;
      keywords.forEach(kw => {
        const regex = new RegExp(`\\b${kw}\\b`, 'gi');
        res = res.replace(regex, `\n${kw}`);
      });
      setFormatted(res.trim());
    } catch (err) {
      setFormatted(input);
    }
  }, [input]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Raw Unformatted SQL"
        value={input}
        onChange={setInput}
      />
      <CodeEditorPanel
        title="Formatted SQL Query Result"
        value={formatted}
        readOnly
      />
    </div>
  );
};

export default SqlFormatter;
