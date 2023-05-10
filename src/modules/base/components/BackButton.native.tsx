import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable} from 'react-native';
import {style as btnStyle} from '../assets/css/backButtonStyle';
import {useNavigation} from '@react-navigation/native';

type Props = {
  style?: object[];
  color?: string;
};

const BackButton = (props: Props) => {
  const {style = [], color = '#000'} = props;
  const navigation = useNavigation();
  const handleBackBtn = () => {
    navigation.goBack();
  };

  return (
    <Pressable style={[btnStyle.backBtn, ...style]} onPress={handleBackBtn}>
      <FontAwesomeIcon icon={faArrowLeft} size={20} color={color} />
    </Pressable>
  );
};

export default BackButton;
