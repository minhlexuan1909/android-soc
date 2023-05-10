import React from 'react';
import {Pressable, Text} from 'react-native';
import {style as btnStyle} from '../assets/css/conditionalButtonStyle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

type Props = {
  isEnable: boolean;
  isLoading: boolean;
  onPress: () => void;
  style?: any[];
  text: string;
};

const ConditionalButton = (props: Props) => {
  const {isEnable, isLoading, onPress, style = [], text} = props;
  return (
    <Pressable
      style={[
        isEnable ? btnStyle.btnEnabled : btnStyle.btnDisabled,
        btnStyle.btn,
        ...style,
      ]}
      onPress={onPress}>
      {isLoading ? (
        <FontAwesomeIcon icon={faCircleNotch} color="#fff" spin />
      ) : (
        <Text style={isEnable ? btnStyle.textBtnEnabled : {}}>{text}</Text>
      )}
    </Pressable>
  );
};

export default ConditionalButton;
