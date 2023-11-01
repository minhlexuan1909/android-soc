import {Api, USER_SERVICES_BASE_URL} from '../../base';
import {
  TConfirmPhoneOtpRequest,
  TLoginRequest,
  TRegisterPhoneRequest,
} from '../utils/types';

export const apiLogin = (params: TLoginRequest) => {
  return Api.post(`${USER_SERVICES_BASE_URL}/api/token/`, params);
};

export const apiRegisterPhone = (params: TRegisterPhoneRequest) => {
  return Api.post(`${USER_SERVICES_BASE_URL}/api/create/`, params);
};

export const apiConfirmPhoneOtp = (params: TConfirmPhoneOtpRequest) => {
  return Api.post(`${USER_SERVICES_BASE_URL}/api/confirm-phone-otp/`, params);
};

export const apiGetPhoneOtp = (params: string) => {
  return Api.post(`${USER_SERVICES_BASE_URL}/api/phone-otp/`, params);
};

export const apiUpdatePhone = (params: string) => {
  return Api.patch(`${USER_SERVICES_BASE_URL}/api/phone/`, params);
};
