import React from 'react';
import {View, Image, Text} from 'react-native';
import {style} from '../assets/css/briefInfoStyle';

const BriefInfo = () => {
  const imgLink = '';
  return (
    <View style={style.briefInfoWrapper}>
      <View style={style.avatarWrapper}>
        <Image
          style={style.avatar}
          source={
            imgLink
              ? {uri: imgLink}
              : require('../assets/image/default-avatar.png')
          }
        />
      </View>
      <View style={style.infoWrapper}>
        <Text style={style.name}>Minh Le Xuan</Text>
        <Text>minh@example.com</Text>
        <Text>Member Since: </Text>
      </View>
    </View>
  );
};

export default BriefInfo;
