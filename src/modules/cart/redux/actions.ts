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
