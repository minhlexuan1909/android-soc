// @ts-ignore
import {MiddlewareRegistry} from 'lib-clevai-auth';
import {Store} from 'redux';

import {TActionRequest} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {Dispatch} from 'redux';
import {apiCreateZlpOrderInfo, apiGetCart} from './services';
import {createZlpOrderInfoSuccess, setIsRefreshCart} from './actions';

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
      case ACTION_TYPES.GET_CART: {
        return await handleGetCart(dispatch, action, getState);
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

const handleGetCart = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    dispatch(setIsRefreshCart(true));
    const response = await apiGetCart();
    dispatch(setIsRefreshCart(false));
  } catch (error) {
    dispatch(setIsRefreshCart(false));
    console.log(error);
  }
};
