import React from 'react';
import {View, StatusBar} from 'react-native';
import SettingHeader from './SettingHeader.native';
import SettingMenu from './SettingMenu.native';
import {useIsFocused} from '@react-navigation/native';

const SettingWrapper = () => {
  const isFocused = useIsFocused();
  return (
    <View>
      {isFocused && (
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      )}
      <SettingHeader />
      <SettingMenu />
    </View>
  );
};

export default SettingWrapper;
