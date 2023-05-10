import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native';
import SettingSection from './SettingSection.native';
import {SETTING_SECTION} from '../../utils/constants';

const SettingMenu = () => {
  return (
    <ScrollView>
      {SETTING_SECTION.map((section, index) => (
        <SettingSection
          key={section.sectionTitle}
          title={section.sectionTitle}
          settingItems={section.sectionOptions}
        />
      ))}
    </ScrollView>
  );
};

export default SettingMenu;
