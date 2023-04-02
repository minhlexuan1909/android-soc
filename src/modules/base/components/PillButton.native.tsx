import React from 'react';
import {Pressable, PressableProps, View} from 'react-native';
import {commonStyle} from '../assets';

type Props = PressableProps & {btnStyle?: Array<object>; [key: string]: any};

const PillButton = (props: Props) => {
  const {children, btnStyle = [], ...otherProps} = props;
  return (
    <View
      style={[commonStyle.pill, commonStyle.primaryBtnWrapper, ...btnStyle]}>
      <Pressable style={commonStyle.primaryBtn} {...otherProps}>
        {children}
      </Pressable>
    </View>
  );
};

export default PillButton;
