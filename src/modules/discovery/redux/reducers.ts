// @ts-ignore
import ReducerRegistry from '../../base/redux/ReducerRegistry';
import {TAction} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {TDiscoveryState} from '../utils';

const initState: TDiscoveryState = {
  products: [],
  isRefreshTag: false,
  tags: [],
};

ReducerRegistry.register('discovery', (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_PRODUCTS: {
      return {
        ...state,
        products: action.response.data.results,
      };
    }
    case ACTION_TYPES.SET_IS_REFRESH_TAG: {
      return {
        ...state,
        isRefreshTag: action.response,
      };
    }
    case ACTION_TYPES.SET_TAGS: {
      return {
        ...state,
        tags: action.response,
      };
    }
    default:
      return state;
  }
});
