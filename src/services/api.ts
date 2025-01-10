import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { AppRoute } from '../const';
import { browserHistory } from '../browser-history';
import { getCookie } from './cookie';
import { store } from '../store';
import { showAlert } from '../store/alert/alert-slice';

const BASE_URL = 'https://13.design.htmlacademy.pro/six-cities';
const TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getCookie();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push(AppRoute.NotFound);
      }

      if (error.response && error.response?.status >= 500) {
        store.dispatch(showAlert(error.message));
      }

      throw error;
    }
  );

  return api;
};
