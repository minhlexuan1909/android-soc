import {
  Api,
  CART_SERVICES_BASE_URL,
  REACT_APP_ZALOPAY_BASE_URL,
} from '../../base';

export const apiCreateZlpOrderInfo = (params: any) => {
  return Api.post(`${REACT_APP_ZALOPAY_BASE_URL}/create/`, params);
};

export const apiGetCart = () => {
  return Api.get(`${CART_SERVICES_BASE_URL}/api/cart/`, {});
};
