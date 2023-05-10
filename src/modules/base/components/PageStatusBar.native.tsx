import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StatusBarProps} from 'react-native';

const PageStatusBar = (props: StatusBarProps) => {
  const isFocused = useIsFocused();
  return <>{isFocused && <StatusBar {...props} />}</>;
};

export default PageStatusBar;
