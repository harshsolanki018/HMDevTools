import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const HtmlToMarkdown = () => {
  const [htmlInput, setHtmlInput] = useState(
    '<h1>HMDevTools Features</h1>\n<p>Fast, <strong>privacy-focused</strong> developer tools.</p>\n<ul>\n  <li>JSON Formatter</li>\n  <li>Base64 Encoder</li>\n</ul>'
  );
  const [markdownOutput, setMarkdownOutput] = useState('');

  useEffect(() => {
    if (!htmlInput) {
      setMarkdownOutput('');
      return;
    }

    const convertToMarkdown = (html) => {
      let md = html
        .replace(/<h1>(.*?)<\/h1>/gi, '# $1\n\n')
        .replace(/<h2>(.*?)<\/h2>/gi, '## $1\n\n')
        .replace(/<h3>(.*?)<\/h3>/gi, '### $1\n\n')
        .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
        .replace(/<b>(.*?)<\/b>/gi, '**$1**')
        .replace(/<em>(.*?)<\/em>/gi, '*$1*')
        .replace(/<i>(.*?)<\/i>/gi, '*$1*')
        .replace(/<code>(.*?)<\/code>/gi, '`$1`')
        .replace(/<a\s+href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
        .replace(/<li>(.*?)<\/li>/gi, '- $1\n')
        .replace(/<ul>/gi, '')
        .replace(/<\/ul>/gi, '\n')
        .replace(/<p>(.*?)<\/p>/gi, '$1\n\n')
        .replace(/<br\s*\/?>/gi, '\n');

      return md.replace(/\n\s*\n\s*\n/g, '\n\n').trim();
    };

    setMarkdownOutput(convertToMarkdown(htmlInput));
  }, [htmlInput]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="HTML Markup Input"
        value={htmlInput}
        onChange={setHtmlInput}
        placeholder="Paste HTML markup to convert to Markdown..."
      />
      <CodeEditorPanel
        title="Markdown Output"
        value={markdownOutput}
        readOnly
      />
    </div>
  );
};

export default HtmlToMarkdown;
