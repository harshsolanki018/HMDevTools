import React from 'react';
import demoLogo from '@/assets/hmdevtools-demo-logo.svg';

export const Logo = ({ size = 'medium', className = '', showTagline = false }) => {
  const heights = {
    small: '28px',
    medium: '36px',
    large: '48px'
  };

  const currentHeight = heights[size] || heights.medium;

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
      <img
        src={demoLogo}
        alt="HMDevTools — Developer tools that just work"
        style={{ height: currentHeight, width: 'auto', display: 'block' }}
      />
      {showTagline && (
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          Developer tools that just work.
        </span>
      )}
    </div>
  );
};

export default Logo;
