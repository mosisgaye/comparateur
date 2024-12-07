import { env } from './env';

export const API_CONFIG = {
  BASE_URL: 'https://telecom.bemove.fr',
  ENDPOINTS: {
    MOBILE_OFFERS: '/demo-mobile/api/v1/flux-offres/mobile/compare/all',
    BOX_OFFERS: '/demo-box/compare/all', 
  },
  CACHE_TIME: 300,
  DEFAULT_PARTNER: 'ARIASE',
  REQUEST_TIMEOUT: 10000,
  API_KEY: env.apiKey, 
} as const;
