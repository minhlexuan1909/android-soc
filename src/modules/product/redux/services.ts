import {Api, PRODUCT_SERVICES_BASE_URL} from '../../base';

export const apiGetProductById = (id: number) => {
  return Api.get(`${PRODUCT_SERVICES_BASE_URL}/api/products/${id}/`, {});
};
