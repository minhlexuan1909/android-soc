import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View} from 'react-native';
import {style} from '../../assets/css/setting/wrapperSettingItemStyle';

type Props = {
  linkTo?: string;
  children: any;
};

const WrapperSettingItem = (props: Props) => {
  const {children, linkTo} = props;

  const navigation = useNavigation();

  const handleOpenSetting = () => {
    if (linkTo) {
      navigation.navigate(linkTo);
    }
  };

  return (
    <Pressable style={style.itemWrapper} onPress={handleOpenSetting}>
      <View style={style.innerItemWrapper}>{children}</View>
    </Pressable>
  );
};

export default WrapperSettingItem;
