import {Dispatch, Store} from 'redux';
import {TActionRequest} from '../../base';
import MiddlewareRegistry from '../../base/redux/MiddlewareRegistry';
import {ACTION_TYPES} from './actionTypes';
import {apiSearch} from './services';
import {setIsSearching, setSearchProducts} from './actions';

export const middleware =
  ({dispatch, getState}: Store) =>
  (next: Function) =>
  async (action: TActionRequest<any>) => {
    next(action);
    switch (action.type) {
      case ACTION_TYPES.SEARCH_PRODUCTS: {
        return await handleSearchProducts(dispatch, action, getState);
      }
    }
  };

MiddlewareRegistry.register(middleware);

const handleSearchProducts = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    dispatch(setIsSearching(true));
    const response = await apiSearch(action.params);
    dispatch(setIsSearching(false));
    if (response.status === 200) {
      dispatch(setSearchProducts(response.data.results));
    }
  } catch (err) {
    dispatch(setIsSearching(false));
    console.log(err);
  }
};
