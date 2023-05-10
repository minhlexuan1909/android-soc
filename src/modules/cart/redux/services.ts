import {Api, REACT_APP_ZALOPAY_BASE_URL} from '../../base';

export const apiCreateZlpOrderInfo = (params: any) => {
  return Api.post(`${REACT_APP_ZALOPAY_BASE_URL}/create`, params);
};
