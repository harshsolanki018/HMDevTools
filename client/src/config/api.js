// Centralized API Configuration
// Reads VITE_API_BASE_URL from environment variables (import.meta.env)
// Automatically normalizes base URL so backend Express v1 endpoints (/api/v1) match 100%

let rawBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1';

if (rawBaseUrl.endsWith('/')) {
  rawBaseUrl = rawBaseUrl.slice(0, -1);
}

if (!rawBaseUrl.endsWith('/api/v1')) {
  rawBaseUrl = `${rawBaseUrl}/api/v1`;
}

export const API_BASE_URL = rawBaseUrl;
