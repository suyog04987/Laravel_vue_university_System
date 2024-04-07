// authStore.js
import router from '@/router';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isAuthenticated: false,
    base_url: import.meta.env.VITE_API_URL,
  }),
  actions: {
    async login(data){
        try{
            await axios.post(`${this.base_url}login`,data).then((response)=>{
                this.token = response.data.token
                this.isAuthenticated = true
                router.push('/university');
            })
        }catch(error){
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
});
