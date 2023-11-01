import {Api, PRODUCT_SERVICES_BASE_URL} from '../../base';

export const apiSearch = (params: string) => {
  return Api.get(
    `${PRODUCT_SERVICES_BASE_URL}/api/products?name=${params}`,
    {},
  );
};
