import React from 'react';
import {View} from 'react-native';
import MenuOptions from './MenuOptions.native';
import BriefInfo from './BriefInfo.native';
import {ViewWithStatusBar} from '../../base';

const ProfileWrapper = () => {
  return (
    <ViewWithStatusBar>
      <View>
        <BriefInfo />
        <MenuOptions />
      </View>
    </ViewWithStatusBar>
  );
};

export default ProfileWrapper;
