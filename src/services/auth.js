import { ofetch } from 'ofetch';
import { setCookie } from '../services/useCookies';
import router from '@/router';
import axios from 'axios';
const base_url = import.meta.env.VITE_API_URL;


// Define your login function
const login = async (data) => {
    try {
      const response = await axios.post(`${base_url}login`, data);
      const accessToken = response.data.token; // assuming the token is returned in the response
      setCookie('accessToken', accessToken);
      setCookie('isAuthenticated', true);
    } catch (error) {
      console.error(error);
      // Handle login error
    }
  }

export default login;