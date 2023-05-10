import {TAction, TActionRequest, TResponse} from '../../base';
import {TAccoutDetail, TMyInfo} from '../utils';
import {ACTION_TYPES} from './actionTypes';

export const getMyInfo = (): TActionRequest<any> => {
  return {
    type: ACTION_TYPES.GET_MY_INFO,
  };
};

export const getMyInfoSuccess = (response: TResponse<TMyInfo>): TAction => {
  return {
    type: ACTION_TYPES.GET_MY_INFO_SUCCESS,
    response,
  };
};

export const getMyInfoError = (error: any) => {
  return {
    type: ACTION_TYPES.GET_MY_INFO_ERROR,
    error,
  };
};

export const updateMyInfo = (
  params: TAccoutDetail,
): TActionRequest<TAccoutDetail> => {
  return {
    type: ACTION_TYPES.UPDATE_MY_INFO,
    params,
  };
};

export const updateMyInfoSuccess = (response: TResponse<TMyInfo>): TAction => {
  return {
    type: ACTION_TYPES.UPDATE_MY_INFO_SUCCESS,
    response,
  };
};
