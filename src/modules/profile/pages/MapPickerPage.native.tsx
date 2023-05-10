import React from 'react';
import MapPicker from '../components/account/MapPicker.native';
import {style} from '../../auth/assets/css/loginFormStyle';
import {View} from 'react-native';

const MapPickerPage = () => {
  return (
    <View style={{flex: 1}}>
      <MapPicker />
    </View>
  );
};

export default MapPickerPage;
