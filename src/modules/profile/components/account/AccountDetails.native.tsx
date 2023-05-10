import React from 'react';
import {View} from 'react-native';
import AccountSettingItem from './AccountSettingItem.native';
import {style} from '../../assets/css/account/accountDetailsStyle';
import {useSelector} from 'react-redux';
import {TProfileState} from '../../utils';

const AccountDetails = () => {
  const accountDetails = useSelector(
    (state: {profile: TProfileState}) => state.profile.me,
  );
  const accountFields = [
    {
      title: 'Full name',
      value: accountDetails.name,
    },
    {
      title: 'Email',
      value: accountDetails.email,
    },
    {
      title: 'Phone number',
      value: accountDetails.phone,
    },
  ];
  return (
    <View style={style.accountDetailWrapper}>
      {accountFields.map((field, index) => (
        <AccountSettingItem
          key={field.title}
          title={field.title}
          value={field.value}
        />
      ))}
    </View>
  );
};

export default AccountDetails;
