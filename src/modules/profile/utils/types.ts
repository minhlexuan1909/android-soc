import {IconProp} from '@fortawesome/fontawesome-svg-core';

type LinkToType =
  | 'Blank'
  | 'Login'
  | 'Home'
  | 'SettingStack'
  | 'Order'
  | 'Category';

export type MenuItemType = {
  icon: IconProp;
  text: string;
  linkTo?: LinkToType;
  onPress?: () => void;
};

export type TAccountDetailField = 'name' | 'email' | 'phone';

export type TAccoutDetail = {
  name: string;
  email: string;
  phone: string;
};

export type TMyInfo = {
  email: string;
  name: string;
  address: string;
  address_1: string;
  address_2: string;
  address_3: string;
  phone: string;
};

export type TProfileState = {
  me: TMyInfo;
  isUpdateMyInfo: boolean;
};
