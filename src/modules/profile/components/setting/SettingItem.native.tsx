import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {style} from '../../assets/css/setting/settingItemStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import WrapperSettingItem from './WrapperSettingItem.native';

type Props = {
  title: string;
  linkTo?: any;
};

const SettingItem = (props: Props) => {
  const {title, linkTo} = props;

  return (
    <WrapperSettingItem linkTo={linkTo}>
      <Text style={style.settingItemTitle}>{title}</Text>
      <FontAwesomeIcon icon={faChevronRight} />
    </WrapperSettingItem>
  );
};

export default SettingItem;
