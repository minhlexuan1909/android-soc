import React from 'react';
import {Text, View} from 'react-native';

import {BackButton, commonStyle} from '../../../base';
import {style} from '../../assets/css/setting/settingHeaderStyle';
import ScreenHeader from '../../../base/components/ScreenHeader.native';

const SettingHeader = () => {
  return <ScreenHeader title="Setting" />;
};

export default SettingHeader;
