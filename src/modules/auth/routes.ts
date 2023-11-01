import {LoginPage} from './pages';
import PhoneOtpPage from './pages/PhoneOtpPage.native';
import RegisterPage from './pages/RegisterPage.native';
import UpdatePhonePage from './pages/UpdatePhonePage.native';

export const authRoutes = [
  {name: 'Login', component: LoginPage},
  {name: 'Register', component: RegisterPage},
  {name: 'PhoneOtp', component: PhoneOtpPage},
  {name: 'UpdatePhone', component: UpdatePhonePage},
];
