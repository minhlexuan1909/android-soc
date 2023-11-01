import {ACTION_TYPES} from './actionTypes';
export const getProductById = (params: number) => {
  return {
    type: ACTION_TYPES.GET_PRODUCT_BY_ID,
    params,
  };
};

export const getProductByIdSuccess = (response: any) => {
  return {
    type: ACTION_TYPES.GET_PRODUCT_BY_ID_SUCCESS,
    response,
  };
};
