import {IconProp} from '@fortawesome/fontawesome-svg-core';

type LinkToType = 'Blank' | 'Login';

export type MenuItemType = {
  icon: IconProp;
  text: string;
  linkTo?: LinkToType;
  onPress?: () => void;
};
