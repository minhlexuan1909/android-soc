import {TAction, TResponse} from '../../base';
import ReducerRegistry from '../../base/redux/ReducerRegistry';
import {TMyInfo, TProfileState} from '../utils';
import {ACTION_TYPES} from './actionTypes';

const initState: TProfileState = {
  me: {
    email: '',
    name: '',
    address: '',
    address_1: '',
    address_2: '',
    address_3: '',
    phone: '',
  },
  isUpdateMyInfo: false,
};

ReducerRegistry.register('profile', (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.GET_MY_INFO_SUCCESS: {
      const response: TResponse<TMyInfo> = action.response;
      return {
        ...state,
        me: response.data,
      };
    }
    case ACTION_TYPES.UPDATE_MY_INFO: {
      return {
        ...state,
        isUpdateMyInfo: true,
      };
    }
    case ACTION_TYPES.UPDATE_MY_INFO_SUCCESS: {
      const response: TResponse<TMyInfo> = action.response;
      return {
        ...state,
        me: response.data,
        isUpdateMyInfo: false,
      };
    }
    default:
      return state;
  }
});
