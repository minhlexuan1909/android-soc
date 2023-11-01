// @ts-ignore
import {TAction, TResponse} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {ACTION_TYPES as COMMON_ACTION_TYPES} from '../../base';
import {TAuthState, TLoginError, TLoginResponse} from '../utils/types';
import ReducerRegistry from '../../base/redux/ReducerRegistry';

const initState: TAuthState = {
  accessToken: '',
  refreshToken: '',
  isLogin: false,
  loginErrorCode: 0,
  loginErrorMessage: '',
  isRegisterPhone: false,
  isRegisterPhoneSuccess: false,
  isRegisterGoogle: false,
  isRegisterGoogleSuccess: false,
  registerPhoneErrorMessage: '',
  isUpdatePhone: false,
  isUpdatePhoneSuccess: false,
  isConfirmPhone: false,
  isConfirmPhoneSuccess: false,
  confirmPhoneErrorMessage: '',
};

ReducerRegistry.register('auth', (state = initState, action: TAction) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS: {
      const response: TResponse<TLoginResponse> = action.response;
      return {
        ...state,
        accessToken: response.data.access,
      };
    }
    case ACTION_TYPES.LOGIN_ERROR: {
      // const reponse: TResponse<TLoginError> = action.response;
      return {
        ...state,
        loginErrorCode: action.response.status,
        loginErrorMessage: action.response.message,
      };
    }
    case ACTION_TYPES.SET_IS_LOGIN: {
      const response: boolean = action.response;
      return {
        ...state,
        isLogin: response,
      };
    }
    case ACTION_TYPES.SET_LOGIN_ERROR_CODE: {
      const response: number = action.response;
      return {
        ...state,
        loginErrorCode: response,
      };
    }
    case ACTION_TYPES.SET_LOGIN_ERROR_MESSAGE: {
      const response: string = action.response;
      return {
        ...state,
        loginErrorMessage: response,
      };
    }
    case ACTION_TYPES.SET_IS_REGISTER_PHONE: {
      const response: boolean = action.response;
      return {
        ...state,
        isRegisterPhone: response,
      };
    }
    case ACTION_TYPES.SET_IS_REGISTER_PHONE_SUCCESS: {
      const response: boolean = action.response;
      return {
        ...state,
        isRegisterPhoneSuccess: response,
      };
    }
    case ACTION_TYPES.SET_REGISTER_PHONE_ERROR_MESSAGE: {
      const response: string = action.response;
      return {
        ...state,
        registerPhoneErrorMessage: response,
      };
    }
    case ACTION_TYPES.SET_IS_CONFIRM_PHONE: {
      const response: boolean = action.response;
      return {
        ...state,
        isConfirmPhone: response,
      };
    }
    case ACTION_TYPES.SET_IS_CONFIRM_PHONE_SUCCESS: {
      const response: boolean = action.response;
      return {
        ...state,
        isConfirmPhoneSuccess: response,
      };
    }
    case ACTION_TYPES.SET_CONFIRM_PHONE_ERROR_MESSAGE: {
      const response: string = action.response;
      return {
        ...state,
        confirmPhoneErrorMessage: response,
      };
    }
    case ACTION_TYPES.SET_IS_REGISTER_GOOGLE: {
      const response: boolean = action.response;
      return {
        ...state,
        isRegisterGoogle: response,
      };
    }
    case ACTION_TYPES.SET_IS_REGISTER_GOOGLE_SUCCESS: {
      const response: boolean = action.response;
      return {
        ...state,
        isRegisterGoogleSuccess: response,
      };
    }

    case ACTION_TYPES.SET_IS_UPDATE_PHONE: {
      const response: boolean = action.response;
      return {
        ...state,
        isUpdatePhone: response,
      };
    }
    case ACTION_TYPES.SET_IS_UPDATE_PHONE_SUCCESS: {
      const response: boolean = action.response;
      return {
        ...state,
        isUpdatePhoneSuccess: response,
      };
    }
    case COMMON_ACTION_TYPES.LOGOUT: {
      return {...initState};
    }

    default:
      return state;
  }
});
