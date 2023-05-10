import {cartBottomTabAndroidRoutes} from '../cart';
import {homeBottomTabAndroidRoutes} from '../discovery';
import {profileBottomTabAndroidRoutes} from '../profile';
import {searchBottomTabAndroidRoutes} from '../search';

export const androidBottomTabRoutes = [
  ...homeBottomTabAndroidRoutes,
  ...cartBottomTabAndroidRoutes,
  ...searchBottomTabAndroidRoutes,
  ...profileBottomTabAndroidRoutes,
];
