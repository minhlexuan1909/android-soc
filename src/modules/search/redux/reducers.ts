// @ts-ignore
import ReducerRegistry from '../../base/redux/ReducerRegistry';
import {TAction} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {TSearchState} from '../utils';

const initState: TSearchState = {
  searchCondition: {
    order: 'asc',
  },
  products: [],
  isSearching: false,
};

ReducerRegistry.register('search', (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SEARCH_CONDITION: {
      return {
        ...state,
        searchCondition: action.response,
      };
    }
    case ACTION_TYPES.SET_SEARCH_PRODUCTS: {
      return {
        ...state,
        products: action.response,
      };
    }
    case ACTION_TYPES.SET_IS_SEARCHING: {
      const response: boolean = action.response;
      return {
        ...state,
        isSearching: action.response,
      };
    }
    default:
      return state;
  }
});
