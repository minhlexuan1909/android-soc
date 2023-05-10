import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Dimensions} from 'react-native';
import PageStatusBar from './PageStatusBar.native';
import SpinningIcon from './SpinningIcon.native';

const LoadingView = () => {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 999,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: deviceWidth,
        height: deviceHeight,
        backgroundColor: 'rgba(0,0,0,0.8)',
      }}>
      <PageStatusBar
        backgroundColor={'rgba(0,0,0,0.8)'}
        barStyle={'dark-content'}
      />
      <SpinningIcon />
    </View>
  );
};

export default LoadingView;
