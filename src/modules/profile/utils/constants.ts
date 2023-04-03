import {
  faBorderAll,
  faCartShopping,
  faGear,
  faHouse,
  faInfo,
  faRibbon,
} from '@fortawesome/free-solid-svg-icons';

import {MenuItemType} from './types';

export const MENU_OPTIONS: MenuItemType[] = [
  {
    icon: faHouse,
    text: 'Home',
    linkTo: 'Login',
  },
  {
    icon: faBorderAll,
    text: 'Category',
    linkTo: 'Login',
  },
  {
    icon: faRibbon,
    text: 'Recommended',
    linkTo: 'Login',
  },
  {
    icon: faCartShopping,
    text: 'My Order',
    linkTo: 'Login',
  },
  {
    icon: faGear,
    text: 'Settings',
    linkTo: 'Login',
  },
  {
    icon: faInfo,
    text: 'About',
    linkTo: 'Login',
  },
];
