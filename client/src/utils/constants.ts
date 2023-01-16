import { AxiosRequestConfig } from 'axios';

export const API_URL = 'https://mypass-4aph.onrender.com/api';

export const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/JSON',
  },
  withCredentials: true,
};