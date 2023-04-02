import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {RootStackParamList} from '../../app/androidStackType';
import {useNavigation} from '@react-navigation/native';
import {MenuItemType} from '../utils';
import {style} from '../assets/css/menuItemStyle';

type NavProps = NativeStackScreenProps<RootStackParamList>;

const MenuItem = (props: MenuItemType) => {
  const {icon, text, linkTo, onPress} = props;

  const navigation = useNavigation<NavProps['navigation']>();

  const handleOnPress = () => {
    if (linkTo) {
      navigation.navigate(linkTo);
    }
  };

  return (
    <Pressable
      style={style.menuItemWrapper}
      onPress={onPress ? onPress : handleOnPress}>
      <View style={style.menuItemIconWrapper}>
        <FontAwesomeIcon size={18} icon={icon} />
      </View>
      <Text style={style.menuItemText}>{text}</Text>
    </Pressable>
  );
};

export default MenuItem;
