import {Api, PRODUCT_SERVICES_BASE_URL} from '../../base';

export const apiGetProducts = () => {
  return Api.get(`${PRODUCT_SERVICES_BASE_URL}/api/products/`, {});
};

export const apiGetTags = () => {
  return Api.get(`${PRODUCT_SERVICES_BASE_URL}/api/tags/`, {});
};
