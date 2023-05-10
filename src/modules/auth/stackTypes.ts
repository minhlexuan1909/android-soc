export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  PhoneOtp: {
    phone: string;
    email: string;
  };
};
