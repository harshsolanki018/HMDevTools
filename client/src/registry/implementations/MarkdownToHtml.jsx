import React, { useState, useEffect } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const MarkdownToHtml = () => {
  const [markdownInput, setMarkdownInput] = useState(
    '# HMDevTools Features\n\nFast, **privacy-focused** online developer tools.\n\n- JSON Formatter\n- Base64 Encoder\n- UUID Generator\n\nVisit [HMDevTools](https://hmdevtools.com) today!'
  );
  const [htmlOutput, setHtmlOutput] = useState('');

  useEffect(() => {
    if (!markdownInput) {
      setHtmlOutput('');
      return;
    }

    const parseMarkdown = (md) => {
      let html = md
        // Headings
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        // Bold & Italic
        .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/gim, '<em>$1</em>')
        // Links
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        // Inline Code
        .replace(/`(.*?)`/gim, '<code>$1</code>')
        // Lists
        .replace(/^\s*-\s+(.*$)/gim, '<li>$1</li>')
        .replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>');

      // Paragraphs
      html = html.split('\n\n').map(p => {
        if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<ol')) return p;
        return `<p>${p.trim()}</p>`;
      }).join('\n');

      // XSS Security Sanitization: Strip scripts and dangerous event handlers
      html = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+="[^"]*"/gi, '')
        .replace(/javascript:/gi, '');

      return html.trim();
    };

    setHtmlOutput(parseMarkdown(markdownInput));
  }, [markdownInput]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
      <CodeEditorPanel
        title="Markdown Input"
        value={markdownInput}
        onChange={setMarkdownInput}
        placeholder="Type or paste Markdown text..."
      />
      <CodeEditorPanel
        title="Sanitized HTML Output"
        value={htmlOutput}
        readOnly
      />
    </div>
  );
};

export default MarkdownToHtml;
