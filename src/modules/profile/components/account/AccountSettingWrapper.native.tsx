import React from 'react';
import {View} from 'react-native';
import ScreenHeader from '../../../base/components/ScreenHeader.native';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import AccountDetails from './AccountDetails.native';
import AccountChangeDetailBtn from './AccountChangeDetailBtn.native';

const AccountSettingWrapper = () => {
  const isFocused = useIsFocused();
  return (
    <View>
      {isFocused && (
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      )}
      <ScreenHeader title="Account & Privacy" showBoxShadow={true} />
      <AccountDetails />
      <AccountChangeDetailBtn />
    </View>
  );
};

export default AccountSettingWrapper;
