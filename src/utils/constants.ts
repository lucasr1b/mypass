import { AxiosRequestConfig } from 'axios';

export const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/JSON',
  },
  withCredentials: true,
};