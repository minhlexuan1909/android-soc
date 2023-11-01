import {ACTION_TYPES} from './actionTypes';

export const createZlpOrderInfo = (params: any) => {
  return {
    type: ACTION_TYPES.CREATE_ZLP_ORDER_INFO,
    params,
  };
};

export const createZlpOrderInfoSuccess = (response: any) => {
  return {
    type: ACTION_TYPES.CREATE_ZLP_ORDER_INFO_SUCCESS,
    response,
  };
};

export const createZlpOrderInfoError = (error: any) => {
  return {
    type: ACTION_TYPES.CREATE_ZLP_ORDER_INFO_ERROR,
    error,
  };
};

export const setIsRefreshCart = (isRefreshCart: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_REFRESH_CART,
    response: isRefreshCart,
  };
};

export const getCart = () => {
  return {
    type: ACTION_TYPES.GET_CART,
  };
};
