import { API_CONFIG } from '@/app/lib/config/api';
import type { Root } from '@/app/lib/types/offers';
import type { RootBox } from '@/app/lib/types/box-internet';

/**
 * Utility function to get fetch options with headers
 * @returns {RequestInit} Fetch options
 */
function getFetchOptions(): RequestInit {
  return {
    headers: {
      'X-API-KEY': API_CONFIG.API_KEY,
      'Content-Type': 'application/json',
    },
  };
}

/**
 * Utility function to fetch with a timeout
 * @param url The URL to fetch
 * @param options The fetch options
 * @param timeout Timeout in milliseconds
 * @returns {Promise<Response>} The fetch response
 */
async function fetchWithTimeout(url: string, options: RequestInit, timeout = API_CONFIG.REQUEST_TIMEOUT): Promise<Response> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Request timed out')), timeout);
    
    fetch(url, options)
      .then(response => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch(error => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

/**
 * Fetch mobile offers
 * @returns {Promise<Root>} Mobile offers data
 */
export async function fetchMobileOffers(): Promise<Root> {
  try {
    const response = await fetchWithTimeout(`/api${API_CONFIG.ENDPOINTS.MOBILE_OFFERS}`, getFetchOptions());
    
    if (!response.ok) {
      throw new Error(`Failed to fetch mobile offers: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching mobile offers:', error);
    throw error;
  }
}

/**
 * Fetch box offers
 * @returns {Promise<RootBox>} Box offers data
 */
export async function fetchBoxOffers(): Promise<RootBox> {
  try {
    const response = await fetchWithTimeout(`/api${API_CONFIG.ENDPOINTS.BOX_OFFERS}`, getFetchOptions());
    
    if (!response.ok) {
      throw new Error(`Failed to fetch box offers: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching box offers:', error);
    throw error;
  }
}

/**
 * Fetch both mobile and box offers and combine the results
 * @returns {Promise<{ mobileOffers: Root; boxOffers: RootBox }>} Combined offers data
 */
export async function fetchAllOffers(): Promise<{ mobileOffers: Root; boxOffers: RootBox }> {
  try {
    const [mobileOffers, boxOffers] = await Promise.all([
      fetchMobileOffers(),
      fetchBoxOffers(),
    ]);

    return { mobileOffers, boxOffers };
  } catch (error) {
    console.error('Error fetching all offers:', error);
    throw error;
  }
}
