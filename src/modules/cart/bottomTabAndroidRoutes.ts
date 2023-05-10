import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import CartStack from './stacks/CartStack';

export const cartBottomTabAndroidRoutes = [
  {
    icon: faCartShopping,
    name: 'Cart',
    component: CartStack,
  },
];
