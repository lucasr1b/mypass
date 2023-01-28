import { AxiosRequestConfig } from 'axios';
import { JdenticonConfig } from 'jdenticon';

export const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/JSON',
  },
  withCredentials: true,
};

export const jdenticon_config: JdenticonConfig = {
  hues: [260],
  lightness: {
    color: [0.35, 0.44],
    grayscale: [0.35, 0.45]
  },
  saturation: {
    color: 1.00,
    grayscale: 1.00
  },
  backColor: "#0000"
};