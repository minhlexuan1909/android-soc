import {TResponse, TActionRequest} from '../../base';
import {
  TConfirmPhoneOtpRequest,
  TGetPhoneOtpRequest,
  TLoginError,
  TLoginRequest,
  TLoginResponse,
  TRegisterPhoneRequest,
  TUpdatePhoneRequest,
} from '../utils/types';
import {ACTION_TYPES} from './actionTypes';

export const login = (params: TLoginRequest): TActionRequest<TLoginRequest> => {
  return {
    type: ACTION_TYPES.LOGIN,
    params,
  };
};

export const loginSuccess = (response: TResponse<TLoginResponse>) => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    response,
  };
};

export const loginError = (error: TResponse<TLoginError>) => {
  return {
    type: ACTION_TYPES.LOGIN_ERROR,
    error,
  };
};

export const setIsLogin = (isLogin: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_LOGIN,
    response: isLogin,
  };
};

export const setLoginErrorMessage = (message: string) => {
  return {
    type: ACTION_TYPES.SET_LOGIN_ERROR_MESSAGE,
    response: message,
  };
};
export const setLoginErrorCode = (code: number) => {
  return {
    type: ACTION_TYPES.SET_LOGIN_ERROR_CODE,
    response: code,
  };
};

export const registerPhone = (
  params: TRegisterPhoneRequest,
): TActionRequest<TRegisterPhoneRequest> => {
  return {
    type: ACTION_TYPES.REGISTER_PHONE,
    params,
  };
};

export const registerGoogle = (
  params: TRegisterPhoneRequest,
): TActionRequest<TRegisterPhoneRequest> => {
  return {
    type: ACTION_TYPES.REGISTER_GOOGLE,
    params,
  };
};

export const setIsRegisterGoogle = (isRegisterGoogle: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_REGISTER_GOOGLE,
    response: isRegisterGoogle,
  };
};

export const setIsRegisterGoogleSuccess = (
  isRegisterGoogleSuccess: boolean,
) => {
  return {
    type: ACTION_TYPES.SET_IS_REGISTER_GOOGLE_SUCCESS,
    response: isRegisterGoogleSuccess,
  };
};

export const setIsRegisterPhone = (isRegisterPhone: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_REGISTER_PHONE,
    response: isRegisterPhone,
  };
};

export const setIsRegisterPhoneSuccess = (isRegisterPhoneSuccess: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_REGISTER_PHONE_SUCCESS,
    response: isRegisterPhoneSuccess,
  };
};

export const setRegisterPhoneErrorMessage = (message: string) => {
  return {
    type: ACTION_TYPES.SET_REGISTER_PHONE_ERROR_MESSAGE,
    response: message,
  };
};

export const updatePhone = (params: TUpdatePhoneRequest) => {
  return {
    type: ACTION_TYPES.UPDATE_PHONE,
    params,
  };
};

export const setIsUpdatePhone = (isUpdatePhone: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_UPDATE_PHONE,
    response: isUpdatePhone,
  };
};

export const setIsUpdatePhoneSuccess = (isUpdatePhoneSuccess: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_UPDATE_PHONE_SUCCESS,
    response: isUpdatePhoneSuccess,
  };
};

export const getPhoneOtp = (params: TGetPhoneOtpRequest) => {
  return {
    type: ACTION_TYPES.GET_PHONE_OTP,
    params,
  };
};

export const confirmPhoneOtp = (params: TConfirmPhoneOtpRequest) => {
  return {
    type: ACTION_TYPES.CONFIRM_PHONE_OTP,
    params,
  };
};

export const setIsConfirmPhone = (isConfirmPhone: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_CONFIRM_PHONE,
    response: isConfirmPhone,
  };
};

export const setIsConfirmPhoneSuccess = (isConfirmPhoneSuccess: boolean) => {
  return {
    type: ACTION_TYPES.SET_IS_CONFIRM_PHONE_SUCCESS,
    response: isConfirmPhoneSuccess,
  };
};

export const setConfirmPhoneErrorMessage = (message: string) => {
  return {
    type: ACTION_TYPES.SET_CONFIRM_PHONE_ERROR_MESSAGE,
    response: message,
  };
};
