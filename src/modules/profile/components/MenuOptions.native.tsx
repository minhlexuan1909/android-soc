import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, FlatList, View} from 'react-native';

import {RootStackParamList} from '../../app/androidStackType';
import {style} from '../assets/css/menuOptionsStyle';
import MenuItem from './MenuItem.native';
import {MENU_OPTIONS} from '../utils/constants';
import {useDispatch} from 'react-redux';
import {logout} from '../../base/redux/actions';

type NavProps = NativeStackScreenProps<RootStackParamList>;

const MenuOptions = () => {
  const dispatch = useDispatch();

  const navigation = useNavigation<NavProps['navigation']>();

  const handleLogoutBtn = () => {
    Alert.alert('', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(logout());
          navigation.navigate('Login');
        },
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
