import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CopyButton = ({ text, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      className={`tool-action-btn ${className}`}
      onClick={handleCopy}
      disabled={!text}
      title="Copy to clipboard"
    >
      {copied ? <Check size={14} style={{ color: 'var(--status-success)' }} /> : <Copy size={14} />}
      <span>{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
};

export default CopyButton;
