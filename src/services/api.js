import { ofetch } from 'ofetch';
import { useCookie } from '../services/useCookies';

export const $api = ofetch.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  async onRequest({ options }) {
    const accessToken = useCookie('accessToken').value;
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }
  },
});
