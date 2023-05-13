import axios from 'axios';
import storage from '../utils/storage';
import { toast } from "react-toastify"
import KEYS from '../contants/keys';

const baseConfig = {
  baseURL: 'https://fe-screening.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
  /* other custom settings */
  timeout: 10000,
};

const client = axios.create(baseConfig);

client.interceptors.request.use(async function (config) {
  const token = storage.getItem(KEYS.token);

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

client.interceptors.response.use(
  function (response) {
    return Promise.resolve(response);
  },
  function (error) {
    if (error.response.status === 401) {
      storage.removeItem(KEYS.token)
      window.location.href = "/login"
    }

    toast.error(`error occured: ${error?.response?.data?.error ?? ""} ${error?.response?.status}`)

    return Promise.reject(error);
  },
);

export default client;