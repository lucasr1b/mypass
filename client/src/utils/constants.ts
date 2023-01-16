import { AxiosRequestConfig } from 'axios';

export const API_URL = 'http://localhost:5000/api';

export const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/JSON',
  },
  withCredentials: true,
};