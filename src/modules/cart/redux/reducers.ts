// @ts-ignore
import ReducerRegistry from '../../base/redux/ReducerRegistry';
import {TAction} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {TCartState} from '../utils/types';

const initState: TCartState = {
  zptranstoken: '',
  isCreateZlpOrderInfoSuccess: false,
};

ReducerRegistry.register('cart', (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE_ZLP_ORDER_INFO_SUCCESS: {
      console.log(action.response);
      return {
        ...state,
        zptranstoken: action.response.zp_trans_token,
        isCreateZlpOrderInfoSuccess: true,
      };
    }
    case ACTION_TYPES.CREATE_ZLP_ORDER_INFO_ERROR: {
      return {
        ...state,
        isCreateZlpOrderInfoSuccess: false,
      };
    }
    default:
      return state;
  }
});
