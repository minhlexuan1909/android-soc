import {Dispatch, Store} from 'redux';
import {TActionRequest} from '../../base';
import MiddlewareRegistry from '../../base/redux/MiddlewareRegistry';
import {ACTION_TYPES} from './actionTypes';
import {apiGetProductById} from './services';
import {getProductByIdSuccess} from './actions';

export const middleware =
  ({dispatch, getState}: Store) =>
  (next: Function) =>
  async (action: TActionRequest<any>) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_PRODUCT_BY_ID: {
        return await handleGetProductById(dispatch, action, getState);
      }
    }
  };

MiddlewareRegistry.register(middleware);

const handleGetProductById = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    const response = await apiGetProductById(action.params);
    if (response.status === 200) {
      dispatch(getProductByIdSuccess(response));
    }
  } catch (err) {
    console.log(err);
  }
};
