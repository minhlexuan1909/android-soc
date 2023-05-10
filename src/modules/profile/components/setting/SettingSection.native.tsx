import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../../assets/css/setting/settingSectionStyle';
import SettingItem from './SettingItem.native';

type Props = {
  title: string;
  settingItems: any;
};

const SettingSection = (props: Props) => {
  const {title, settingItems} = props;
  return (
    <View style={style.settingSectionWrapper}>
      <Text style={style.settingSectionTitle}>{title}</Text>
      {settingItems.map((item: any, index: number) => (
        <SettingItem key={item.text} title={item.text} linkTo={item.linkTo} />
      ))}
    </View>
  );
};

export default SettingSection;
