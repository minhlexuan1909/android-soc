import {authRoutes} from '../auth';
import {baseRoutes} from '../base';
import {orderRoutes} from '../order';
import {productRoutes} from '../product';
import {profileRoutes} from '../profile';
import {homeBottomTabAndroidRoutes} from '../discovery';

console.log('androidRouté');
export const androidRoutes: {
  name: string;
  component: any;
  initialParams?: any;
}[] = [
  ...baseRoutes,
  ...authRoutes,
  ...profileRoutes,
  ...productRoutes,
  ...orderRoutes,
];
