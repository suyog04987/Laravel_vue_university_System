// authStore.js
import { defineStore } from 'pinia';
import { useCookie } from '../services/useCookies';
import router from '@/router';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useCookie('accessToken'), // Ensure token is initialized as a ref object
    isAuthenticated: false,
    base_url: import.meta.env.VITE_API_URL,
  }),
  actions: {
    async login(data){
        try {
            const response = await axios.post(`${this.base_url}login`, data);
            this.token = response.data.token; 
            this.isAuthenticated = true;
            router.push('/university');
        } catch (error) {
            console.error('Error fetching Faculty Data:', error);
            throw error;
        }
    },
    logout() {
      this.token = null; 
      this.isAuthenticated = false;
      router.push('/login');
    },
  },

  persist:{
    enabled: true,
  }
});
