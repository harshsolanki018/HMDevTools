import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const HtmlFormatter = () => {
  const [input, setInput] = useState('<div class="card"><h1>HMDevTools</h1><p>Fast & Private</p></div>');
  const [formatted, setFormatted] = useState('');

  const formatHtml = (html) => {
    let tab = '  ';
    let result = '';
    let indent = '';

    html.split(/>\s*</).forEach((element) => {
      if (element.match(/^\/\w/)) {
        indent = indent.substring(tab.length);
      }

      result += indent + '<' + element + '>\n';

      if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith('input') && !element.startsWith('img') && !element.startsWith('br') && !element.startsWith('hr')) {
        indent += tab;
      }
    });

    return result.substring(1, result.length - 2);
  };

  React.useEffect(() => {
    if (!input.trim()) {
      setFormatted('');
      return;
    }
    try {
      setFormatted(formatHtml(input.trim()));
    } catch (err) {
      setFormatted(input);
    }
  }, [input]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Raw HTML Input"
        value={input}
        onChange={setInput}
      />
      <CodeEditorPanel
        title="Formatted HTML Output"
        value={formatted}
        readOnly
      />
    </div>
  );
};

export default HtmlFormatter;
