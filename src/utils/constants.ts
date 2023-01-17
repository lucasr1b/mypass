import { AxiosRequestConfig } from 'axios';

export const API_URL = process.env.API_URL;

export const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/JSON',
  },
  withCredentials: true,
};