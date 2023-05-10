// @ts-ignore
import {ReducerRegistry} from 'lib-clevai-auth';
import {TAction} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {TSearchState} from '../utils';

const initState: TSearchState = {
  searchCondition: {
    order: 'asc',
  },
};

ReducerRegistry.register('search', (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_SEARCH_CONDITION: {
      return {
        ...state,
        searchCondition: action.response,
      };
    }
    default:
      return state;
  }
});
