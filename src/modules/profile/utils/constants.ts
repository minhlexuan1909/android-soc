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
    linkTo: 'Home',
  },
  {
    icon: faBorderAll,
    text: 'Category',
    linkTo: 'Category',
  },
  {
    icon: faRibbon,
    text: 'Recommended',
    linkTo: 'Login',
  },
  {
    icon: faCartShopping,
    text: 'My Order',
    linkTo: 'Order',
  },
  {
    icon: faGear,
    text: 'Settings',
    linkTo: 'SettingStack',
  },
  {
    icon: faInfo,
    text: 'About',
    linkTo: 'Login',
  },
];

export const SETTING_SECTION = [
  {
    sectionTitle: 'Account',
    sectionOptions: [
      {
        text: 'Account & Privacy',
        linkTo: 'Account',
      },
      {
        text: 'Address',
        linkTo: 'MapPicker',
      },
    ],
  },
];
