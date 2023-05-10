import {TActionRequest} from '../../base';
import {ACTION_TYPES} from './actionTypes';

export const setSearchCondition = (response: any) => {
  return {
    type: ACTION_TYPES.SET_SEARCH_CONDITION,
    response,
  };
};
