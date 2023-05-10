import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import BackButton from './BackButton.native';
import {BOX_SHADOW_COLOR, commonStyle} from '../assets';
import {style} from '../assets/css/screenHeaderStyle';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  title: string;
  showBackButton?: boolean;
  showBoxShadow?: boolean;
  backgroundColor?: string;
};

const ScreenHeader = (props: Props) => {
  const {
    title,
    showBackButton = true,
    showBoxShadow = false,
    backgroundColor = '#fff',
  } = props;
  return (
    <>
      <View style={[style.screenHeader, {backgroundColor: backgroundColor}]}>
        <Text style={commonStyle.screenHeadingText}>{title}</Text>
        {showBackButton && <BackButton />}
      </View>
      {showBoxShadow && (
        <LinearGradient
          start={{x: 1, y: 1}}
          end={{x: 1, y: 0}}
          colors={['#fff', BOX_SHADOW_COLOR]}
          style={{height: 3}}
        />
      )}
    </>
  );
};

export default ScreenHeader;
