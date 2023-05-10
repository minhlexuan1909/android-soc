import {ProfilePage} from '../pages';
import AccountChangeDetailPage from '../pages/AccountChangeDetailPage';
import AccountSettingPage from '../pages/AccountSettingPage.native';
import SettingPage from '../pages/SettingPage.native';

export const profileStackRoutes = [
  {
    name: 'Profile',
    component: ProfilePage,
  },
];

export const settingStackRoutes = [
  {
    name: 'Setting',
    component: SettingPage,
  },
  {
    name: 'Account',
    component: AccountSettingPage,
  },
  {
    name: 'AccountChangeDetail',
    component: AccountChangeDetailPage,
  },
];
