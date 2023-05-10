import React from 'react';
import {View} from 'react-native';
import ScreenHeader from '../../../base/components/ScreenHeader.native';
import PageStatusBar from '../../../base/components/PageStatusBar.native';
import AccountChangeDetailFields from './AccountChangeDetailFields.native';
import {style} from '../../assets/css/account/accountChangeDetailWrapperStyle';

const AccountChangeDetailWrapper = () => {
  return (
    <View style={style.wrapper}>
      <PageStatusBar />
      <ScreenHeader title="Change details" showBoxShadow={true} />
      <AccountChangeDetailFields />
    </View>
  );
};

export default AccountChangeDetailWrapper;
