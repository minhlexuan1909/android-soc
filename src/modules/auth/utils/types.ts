export type TAuthState = {
  accessToken: string;
  refreshToken: string;
  loginErrorMessage: string;
  isLogin: boolean;
  loginErrorCode: number;
  isRegisterPhone: boolean;
  isRegisterPhoneSuccess: boolean;
  isRegisterGoogle: boolean;
  isRegisterGoogleSuccess: boolean;
  registerPhoneErrorMessage: string;
  isUpdatePhone: boolean;
  isUpdatePhoneSuccess: boolean;
  isConfirmPhone: boolean;
  isConfirmPhoneSuccess: boolean;
  confirmPhoneErrorMessage: string;
};

export type TLoginRequest = {
  email?: string;
  phone?: string;
  password?: string;
};

export type TRegisterPhoneRequest = {
  name: string;
  phone?: string;
  password?: string;
  email?: string;
};

export type TUpdatePhoneRequest = {
  phone: string;
  email: string;
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
