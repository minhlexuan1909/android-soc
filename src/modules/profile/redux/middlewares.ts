import {Store} from 'redux';

import {TActionRequest, TResponse} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {Dispatch} from 'redux';
import MiddlewareRegistry from '../../base/redux/MiddlewareRegistry';
import {apiGetMyInfo, apiUpdateMyInfo} from './services';
import {getMyInfoSuccess, updateMyInfo, updateMyInfoSuccess} from './actions';
import {TAccoutDetail, TMyInfo} from '../utils';

/* eslint-disable no-empty */
export const middleware =
  ({dispatch, getState}: Store) =>
  (next: Function) =>
  async (action: TActionRequest<any>) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_MY_INFO: {
        return await handleGetMyInfo(dispatch, action, getState);
      }
      case ACTION_TYPES.UPDATE_MY_INFO: {
        return await handleUpdateMyInfo(dispatch, action, getState);
      }
    }
  };

MiddlewareRegistry.register(middleware);

const handleGetMyInfo = async (
  dispatch: Dispatch,
  action: TActionRequest<any>,
  getState: any,
) => {
  try {
    const response = await apiGetMyInfo();
    if (response.status === 200) {
      dispatch(getMyInfoSuccess(response as TResponse<TMyInfo>));
    }
  } catch (error) {
    console.log(error);
  }
};

const handleUpdateMyInfo = async (
  dispatch: Dispatch,
  action: TActionRequest<TAccoutDetail>,
  getState: any,
) => {
  try {
    const response = await apiUpdateMyInfo(action.params!);
    if (response.status === 200) {
      dispatch(updateMyInfoSuccess(response as TResponse<TMyInfo>));
    }
  } catch (error) {
    console.log(error);
  }
};
