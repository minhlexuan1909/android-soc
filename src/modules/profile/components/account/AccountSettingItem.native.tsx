import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {style} from '../../assets/css/setting/accountSettingItemStyle';
import WrapperSettingItem from '../setting/WrapperSettingItem.native';

type Props = {
  title: string;
  value: string;
  linkTo?: string;
};

const AccountSettingItem = (props: Props) => {
  const {title, value, linkTo} = props;

  return (
    <WrapperSettingItem linkTo={linkTo}>
      <Text style={style.text}>{title}</Text>
      <View>
        <Text style={style.text}>{value}</Text>
      </View>
    </WrapperSettingItem>
  );
};

export default AccountSettingItem;
