// @ts-ignore
import {MiddlewareRegistry} from 'lib-clevai-auth';
import {Store} from 'redux';

import {TActionRequest} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {Dispatch} from 'redux';
import {apiCreateZlpOrderInfo} from './services';
import {createZlpOrderInfoSuccess} from './actions';

/* eslint-disable no-empty */
export const middleware =
  ({dispatch, getState}: Store) =>
  (next: Function) =>
  async (action: TActionRequest<any>) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.CREATE_ZLP_ORDER_INFO: {
        return await handleGetZlpOrderInfo(dispatch, action, getState);
      }
    }
  };

MiddlewareRegistry.register(middleware);

const handleGetZlpOrderInfo = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    const response = await apiCreateZlpOrderInfo(action.params);
    console.log(response);
    if (response.return_code === 1) {
      dispatch(createZlpOrderInfoSuccess(response));
    }
  } catch (error) {
    console.log(error);
  }
};
