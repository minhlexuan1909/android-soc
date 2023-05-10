import {LoginPage} from './pages';
import PhoneOtpPage from './pages/PhoneOtpPage.native';
import RegisterPage from './pages/RegisterPage.native';

export const authRoutes = [
  {name: 'Login', component: LoginPage},
  {name: 'Register', component: RegisterPage},
  {name: 'PhoneOtp', component: PhoneOtpPage},
];
