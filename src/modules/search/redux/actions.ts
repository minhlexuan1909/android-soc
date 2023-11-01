import {TActionRequest} from '../../base';
import {ACTION_TYPES} from './actionTypes';

export const setSearchCondition = (response: any) => {
  return {
    type: ACTION_TYPES.SET_SEARCH_CONDITION,
    response,
  };
};

export const searchProducts = (params: string) => {
  return {
    type: ACTION_TYPES.SEARCH_PRODUCTS,
    params,
  };
};

export const setSearchProducts = (response: any) => {
  return {
    type: ACTION_TYPES.SET_SEARCH_PRODUCTS,
    response,
  };
};

export const setIsSearching = (response: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_SEARCHING,
    response,
  };
};
