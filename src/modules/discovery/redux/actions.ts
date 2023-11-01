import {TActionRequest} from '../../base';
import {ACTION_TYPES} from './actionTypes';

export const getProducts = () => {
  return {
    type: ACTION_TYPES.GET_PRODUCTS,
  };
};

export const setProducts = (response: any) => {
  return {
    type: ACTION_TYPES.SET_PRODUCTS,
    response,
  };
};

export const getTags = () => {
  return {
    type: ACTION_TYPES.GET_TAGS,
  };
};

export const setIsRefreshTag = (isRefreshTag: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_REFRESH_TAG,
    response: isRefreshTag,
  };
};

export const setTags = (response: any) => {
  return {
    type: ACTION_TYPES.SET_TAGS,
    response,
  };
};
