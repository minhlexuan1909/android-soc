import React from 'react';
import {View} from 'react-native';
import MenuOptions from './MenuOptions.native';
import BriefInfo from './BriefInfo.native';

const ProfileWrapper = () => {
  return (
    <View>
      <BriefInfo />
      <MenuOptions />
    </View>
  );
};

export default ProfileWrapper;
