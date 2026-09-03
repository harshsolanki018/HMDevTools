import React from 'react';
import { Trash2, FileText } from 'lucide-react';
import CopyButton from './CopyButton';
import './CodeEditorPanel.css';

export const CodeEditorPanel = ({
  title = 'Input',
  value,
  onChange,
  placeholder = 'Paste or type content here...',
  onLoadSample,
  readOnly = false,
  extraActions
}) => {
  return (
    <div className="tool-editor-container">
      <div className="tool-editor-header">
        <span>{title}</span>
        <div className="tool-editor-actions">
          {onLoadSample && (
            <button className="tool-action-btn" onClick={onLoadSample}>
              <FileText size={14} />
              <span>Sample</span>
            </button>
          )}
          {!readOnly && onChange && value && (
            <button className="tool-action-btn" onClick={() => onChange('')}>
              <Trash2 size={14} />
              <span>Clear</span>
            </button>
          )}
          <CopyButton text={value} />
          {extraActions}
        </div>
      </div>
      <textarea
        className="tool-textarea"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditorPanel;
