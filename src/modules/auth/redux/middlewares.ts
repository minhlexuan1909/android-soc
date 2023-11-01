// @ts-ignore
import {Store} from 'redux';

import {TActionRequest, TResponse, init} from '../../base';
import {ACTION_TYPES} from './actionTypes';
import {Dispatch} from 'redux';
import {
  apiConfirmPhoneOtp,
  apiGetPhoneOtp,
  apiLogin,
  apiRegisterPhone,
  apiUpdatePhone,
} from './services';
import {
  loginError,
  loginSuccess,
  setIsConfirmPhoneSuccess,
  setIsLogin,
  setIsRegisterGoogle,
  setIsRegisterGoogleSuccess,
  setIsRegisterPhone,
  setIsRegisterPhoneSuccess,
  setIsUpdatePhone,
  setIsUpdatePhoneSuccess,
  setLoginErrorCode,
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
      case ACTION_TYPES.REGISTER_GOOGLE: {
        return await handleRegisterGoogle(dispatch, action, getState);
      }
      case ACTION_TYPES.UPDATE_PHONE: {
        return await handleUpdatePhone(dispatch, action, getState);
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
      init(response.data.access);
      dispatch(loginSuccess(response as TResponse<TLoginResponse>));
    } else {
      dispatch(loginError(response as TResponse<TLoginError>));
    }
  } catch (err) {
    dispatch(setIsLogin(false));
    dispatch({
      type: ACTION_TYPES.LOGIN_ERROR,
      response: err,
    });
    // dispatch(setLoginErrorMessage(err.message));
    // dispatch(setLoginErrorCode(err.status));
    console.log('message', err.message);
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
    console.log(err);
    dispatch(setIsRegisterPhone(false));
    dispatch(setRegisterPhoneErrorMessage(JSON.stringify(err.data)));
  }
};

const handleRegisterGoogle = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    dispatch(setIsRegisterGoogle(true));
    const response = await apiRegisterPhone(action.params);
    dispatch(setIsRegisterGoogle(false));
    if (response.status === 201) {
      dispatch(setIsRegisterGoogleSuccess(true));
    }
  } catch (err) {
    console.log(err);
  }
};

const handleUpdatePhone = async (
  dispatch: Dispatch,
  action: any,
  getState: any,
) => {
  try {
    dispatch(setIsUpdatePhone(true));
    const response = await apiUpdatePhone(action.params);
    dispatch(setIsUpdatePhone(false));
    if (response.status === 200) {
      dispatch(setIsUpdatePhoneSuccess(true));
    } else {
    }
  } catch (err) {}
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
