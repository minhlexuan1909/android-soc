import React from 'react';
import {View, Image, Text} from 'react-native';
import {style} from '../assets/css/briefInfoStyle';
import {useSelector} from 'react-redux';
import {TProfileState} from '../utils';

const BriefInfo = () => {
  const {name, email} = useSelector(
    (state: {profile: TProfileState}) => state.profile.me,
  );

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
        <Text style={style.name}>{name}</Text>
        <Text>{email}</Text>
        <Text>Member Since: </Text>
      </View>
    </View>
  );
};

export default BriefInfo;
