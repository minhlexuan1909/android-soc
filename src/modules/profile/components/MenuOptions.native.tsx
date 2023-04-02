import {
  faHouse,
  faBorderAll,
  faRibbon,
  faCartShopping,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInfo,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {View, FlatList, Alert} from 'react-native';
import MenuItem from './MenuItem.native';
import {MenuItemType} from '../utils';
import {style} from '../assets/css/menuOptionsStyle';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../app/androidStackType';

const MENU_OPTIONS: MenuItemType[] = [
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

type NavProps = NativeStackScreenProps<RootStackParamList>;

const MenuOptions = () => {
  const navigation = useNavigation<NavProps['navigation']>();

  const handleLogoutBtn = () => {
    Alert.alert('', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => navigation.navigate('Login'),
      },
    ]);
  };

  return (
    <>
      <FlatList
        data={MENU_OPTIONS}
        renderItem={item => (
          <MenuItem
            icon={item.item.icon}
            text={item.item.text}
            linkTo={item.item.linkTo}
          />
        )}
      />
      <View style={style.logoutBtnWrapper}>
        <MenuItem
          icon={faArrowRightFromBracket}
          text="Logout"
          onPress={handleLogoutBtn}
        />
      </View>
    </>
  );
};

export default MenuOptions;
