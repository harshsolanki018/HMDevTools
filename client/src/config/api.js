// Centralized API Configuration
// Reads VITE_API_BASE_URL from environment variables (import.meta.env)
// Fallback default: '/api/v1'

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || '/api/v1';

export const API_BASE_URL = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
