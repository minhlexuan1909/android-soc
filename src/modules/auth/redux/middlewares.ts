// @ts-ignore
import {Store} from 'redux';

import {TActionRequest, TResponse} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {Dispatch} from 'redux';
import {
  apiConfirmPhoneOtp,
  apiGetPhoneOtp,
  apiLogin,
  apiRegisterPhone,
} from './services';
import {
  loginError,
  loginSuccess,
  setIsConfirmPhoneSuccess,
  setIsLogin,
  setIsRegisterPhone,
  setIsRegisterPhoneSuccess,
  setLoginErrorMessage,
  setRegisterPhoneErrorMessage,
} from './actions';
import {TLoginError, TLoginResponse} from '../utils/types';
import MiddlewareRegistry from '../../base/redux/MiddlewareRegistry';
import {setIsConfirmPhone} from './actions';
import {setConfirmPhoneErrorMessage} from './actions';

/* eslint-disable no-empty */
export const middleware =
  ({dispatch, getState}: Store) =>
  (next: Function) =>
  async (action: TActionRequest<any>) => {
    console.log('mdw');
    next(action);
    switch (action.type) {
      case ACTION_TYPES.LOGIN: {
        return await handleLogin(dispatch, action, getState);
      }
      case ACTION_TYPES.REGISTER_PHONE: {
        return await handleRegisterPhone(dispatch, action, getState);
      }
      case ACTION_TYPES.GET_PHONE_OTP: {
        return await handleGetPhoneOtp(dispatch, action, getState);
      }
      case ACTION_TYPES.CONFIRM_PHONE_OTP: {
        return await handleConfirmPhoneOtp(dispatch, action, getState);
      }
    }
  };

MiddlewareRegistry.register(middleware);

const handleLogin = async (dispatch: Dispatch, action: any, getState: any) => {
  try {
    dispatch(setIsLogin(true));
    const response = await apiLogin(action.params);
    dispatch(setIsLogin(false));
    if (response.status === 200) {
      dispatch(loginSuccess(response as TResponse<TLoginResponse>));
    } else {
      dispatch(loginError(response as TResponse<TLoginError>));
    }
  } catch (err) {
    dispatch(setIsLogin(false));
    dispatch(setLoginErrorMessage(err.message));
    console.log(err);
  }
};

const handleRegisterPhone = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    dispatch(setIsRegisterPhone(true));
    const response = await apiRegisterPhone(action.params);
    dispatch(setIsRegisterPhone(false));
    if (response.status === 201) {
      dispatch(setIsRegisterPhoneSuccess(true));
    } else {
    }
  } catch (err) {
    dispatch(setIsRegisterPhone(false));
    dispatch(setRegisterPhoneErrorMessage(JSON.stringify(err.data)));
  }
};

const handleGetPhoneOtp = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    const response = await apiGetPhoneOtp(action.params);
  } catch (err) {}
};

const handleConfirmPhoneOtp = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    dispatch(setIsConfirmPhone(true));
    const response = await apiConfirmPhoneOtp(action.params);
    dispatch(setIsConfirmPhone(false));
    if (response.status === 200) {
      dispatch(setIsConfirmPhoneSuccess(true));
    } else {
    }
  } catch (err) {
    dispatch(setIsConfirmPhone(false));
    dispatch(setConfirmPhoneErrorMessage(JSON.stringify(err.data)));
  }
};
