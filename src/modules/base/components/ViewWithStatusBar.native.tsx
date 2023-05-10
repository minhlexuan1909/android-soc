import React from 'react';
import PageStatusBar from './PageStatusBar.native';
import {StatusBar, View} from 'react-native';

type Props = {
  statusBarContent?: 'light-content' | 'dark-content';
  statusBarColor?: string;
  children?: any;
};

const ViewWithStatusBar = (props: Props) => {
  const {
    statusBarContent = 'light-content',
    statusBarColor = '#fff',
    children,
  } = props;
  return (
    <>
      <PageStatusBar
        backgroundColor={statusBarColor}
        barStyle={statusBarContent}
        translucent
      />
      <View
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        {children}
      </View>
    </>
  );
};

export default ViewWithStatusBar;
