import {Dispatch, Store} from 'redux';
import {TActionRequest} from '../../base';
import MiddlewareRegistry from '../../base/redux/MiddlewareRegistry';
import {ACTION_TYPES} from './actionTypes';
import {apiGetProducts, apiGetTags} from './services';
import {setIsRefreshTag, setProducts, setTags} from './actions';

export const middleware =
  ({dispatch, getState}: Store) =>
  (next: Function) =>
  async (action: TActionRequest<any>) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.GET_PRODUCTS: {
        return await handleGetProducts(dispatch, action, getState);
      }
      case ACTION_TYPES.GET_TAGS: {
        return await handleGetTags(dispatch, action, getState);
      }
    }
  };

MiddlewareRegistry.register(middleware);

const handleGetProducts = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    const response = await apiGetProducts();
    if (response.status === 200) {
      dispatch(setProducts(response));
    }
  } catch (err) {
    console.log(err);
  }
};

const handleGetTags = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    dispatch(setIsRefreshTag(true));
    const response = await apiGetTags();
    dispatch(setIsRefreshTag(false));
    if (response.status === 200) {
      dispatch(setTags(response.data.results));
    }
  } catch (err) {
    dispatch(setIsRefreshTag(false));
    console.log(err);
  }
};
