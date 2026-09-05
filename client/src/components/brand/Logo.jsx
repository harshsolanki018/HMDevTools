import React from 'react';
import hmDevLogo from '../../assets/HmDevLogo.png';

export const Logo = ({ size = 'medium', className = '', showWordmark = true, showTagline = false }) => {
  const iconSizes = {
    small: '28px',
    medium: '34px',
    large: '58px',
    hero: '70px'
  };

  const fontSizes = {
    small: '1.1rem',
    medium: '1.25rem',
    large: '1.6rem',
    hero: '1.8rem'
  };

  const iconSize = iconSizes[size] || iconSizes.medium;
  const fontSize = fontSizes[size] || fontSizes.medium;

  return (
    <div className={`logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      <img
        src={hmDevLogo}
        alt="HMDevTools Logo"
        style={{
          height: iconSize,
          width: iconSize,
          objectFit: 'contain',
          display: 'block',
          borderRadius: '6px',
          flexShrink: 0
        }}
      />
      {showWordmark && (
        <span style={{
          fontSize: fontSize,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text-main)',
          lineHeight: 1
        }}>
          HMDevTools
        </span>
      )}
      {showTagline && (
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, marginLeft: '0.25rem' }}>
          Developer tools that just work.
        </span>
      )}
    </div>
  );
};

export default Logo;
