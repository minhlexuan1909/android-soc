/* eslint-disable no-undef */
import axios from 'axios';
export const STATUS_CODE = {
  AUTHENTICATE: 401,
  NOT_FOUND: 404,
};

const defaults = {
  headers: {
    'Content-Type': 'application/json',
  },
  error: {
    code: 'INTERNAL_ERROR',
    message:
      'Something went wrong. Please check your internet connection or contact our support.',
    status: 503,
    data: {},
  },
};

const DEFAULT_TIME_OUT = 10 * 1000;

const api = (method: any, url: any, variables: any) => {
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      method,
      headers: {...defaults.headers},
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
      timeout: DEFAULT_TIME_OUT,
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        if (error.response) {
          reject(error.response.data);
        } else {
          reject(defaults.error);
        }
      });
  });
};

export const init = (token: any) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // axios.defaults.baseURL = baseUrl;
};

export const Api = {
  get: (url: any, variables: any): Promise<any> => api('get', url, variables),
  post: (url: any, variables?: any): Promise<any> =>
    api('post', url, variables),
  put: (url: any, variables: any): Promise<any> => api('put', url, variables),
  patch: (url: any, variables: any): Promise<any> =>
    api('patch', url, variables),
  delete: (url: any, variables: any): Promise<any> =>
    api('delete', url, variables),
};
