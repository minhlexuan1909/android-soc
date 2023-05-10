import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {style} from '../assets/css/starFilterBtnStyle';
import {STAR_COLOR} from '../../base';

type Props = {
  star: number;
  active: boolean;
  onPress: () => void;
};

const StarFilterBtn = (props: Props) => {
  const {star, active, onPress} = props;

  return (
    <Pressable style={style.btnWrapper} onPress={onPress}>
      <View style={[style.btnInnerWrapper, active ? style.activeBtn : {}]}>
        <Text style={style.starText}>{star}</Text>
        <FontAwesomeIcon icon={faStar} color={STAR_COLOR} />
      </View>
    </Pressable>
  );
};

export default StarFilterBtn;
