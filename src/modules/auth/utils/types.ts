export type TAuthState = {
  accessToken: string;
  refreshToken: string;
  loginErrorMessage: string;
  isLogin: boolean;
  isRegisterPhone: boolean;
  isRegisterPhoneSuccess: boolean;
  registerPhoneErrorMessage: string;
  isConfirmPhone: boolean;
  isConfirmPhoneSuccess: boolean;
  confirmPhoneErrorMessage: string;
};

export type TLoginRequest = {
  phone: string;
  password: string;
};

export type TRegisterPhoneRequest = {
  name: string;
  phone: string;
  password: string;
};

export type TGetPhoneOtpRequest = {
  phone: string;
};

export type TConfirmPhoneOtpRequest = {
  phone: string;
  otp: string;
};

export type TLoginResponse = {
  refresh: string;
  access: string;
};

export type TLoginError = {
  detail: string;
};
