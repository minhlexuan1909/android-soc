import UpdatePhoneForm from './components/UpdatePhoneForm.native';
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  PhoneOtp: {
    phone: string;
    email: string;
  };
  UpdatePhone: {
    email: string;
  };
};
