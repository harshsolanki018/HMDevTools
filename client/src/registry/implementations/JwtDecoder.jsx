import React, { useState } from 'react';
import CodeEditorPanel from '@/components/tools/CodeEditorPanel';

export const JwtDecoder = () => {
  const [jwt, setJwt] = useState(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
  );
  const [header, setHeader] = useState('');
  const [payload, setPayload] = useState('');
  const [error, setError] = useState('');
  const [isExpired, setIsExpired] = useState(null);

  React.useEffect(() => {
    if (!jwt.trim()) {
      setHeader('');
      setPayload('');
      setError('');
      setIsExpired(null);
      return;
    }

    const parts = jwt.trim().split('.');
    if (parts.length !== 3) {
      setError('Invalid JWT structure. JWT tokens must contain exactly 3 parts separated by dots.');
      setHeader('');
      setPayload('');
      setIsExpired(null);
      return;
    }

    try {
      const decodePart = (str) => {
        const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
        const pad = base64.length % 4;
        const paddedBase64 = pad ? base64 + '='.repeat(4 - pad) : base64;
        const jsonPayload = decodeURIComponent(atob(paddedBase64).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
        return JSON.parse(jsonPayload);
      };

      const parsedHeader = decodePart(parts[0]);
      const parsedPayload = decodePart(parts[1]);

      setHeader(JSON.stringify(parsedHeader, null, 2));
      setPayload(JSON.stringify(parsedPayload, null, 2));
      setError('');

      if (parsedPayload && parsedPayload.exp) {
        const expTimeMs = parsedPayload.exp * 1000;
        setIsExpired(Date.now() > expTimeMs);
      } else {
        setIsExpired(null);
      }
    } catch (err) {
      setError('Failed to parse JWT payload: ' + err.message);
      setHeader('');
      setPayload('');
      setIsExpired(null);
    }
  }, [jwt]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {/* Prominent Verification Disclaimer */}
      <div style={{ padding: '0.75rem 1rem', background: 'var(--status-warning-bg)', color: 'var(--status-warning)', border: '1px solid var(--status-warning)', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 500 }}>
        ⚠️ <strong>Security Notice:</strong> Decoding displays claims locally. Decoded tokens are <em>NOT</em> cryptographically verified. Do not rely on unverified JWT payload claims for server authorization.
      </div>

      {isExpired !== null && (
        <div style={{ padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', fontWeight: 600, background: isExpired ? 'var(--status-danger-bg)' : 'var(--status-success-bg)', color: isExpired ? 'var(--status-danger)' : 'var(--status-success)' }}>
          {isExpired ? '⏰ Token Status: EXPIRED' : '✓ Token Status: ACTIVE (Not Expired)'}
        </div>
      )}

      <CodeEditorPanel
        title="JWT Token Input"
        value={jwt}
        onChange={setJwt}
        placeholder="Paste JWT token (header.payload.signature)..."
      />

      {error && (
        <div style={{ padding: '0.75rem 1rem', background: 'var(--status-danger-bg)', color: 'var(--status-danger)', borderRadius: '6px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <CodeEditorPanel
          title="Decoded Header"
          value={header}
          readOnly
        />
        <CodeEditorPanel
          title="Decoded Payload (Claims)"
          value={payload}
          readOnly
        />
      </div>
    </div>
  );
};

export default JwtDecoder;
