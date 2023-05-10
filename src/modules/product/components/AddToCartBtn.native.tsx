import React from 'react';
import {Dimensions, Pressable, View, Text} from 'react-native';
import {style} from '../assets/css/addToCartBtnStyle';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;
const distanceToSide = 15;

const AddToCartBtn = () => {
  return (
    <Pressable
      style={[
        {left: distanceToSide, width: width - distanceToSide * 2},
        style.btnWrapper,
      ]}>
      <Text style={style.btnText}>Add to cart</Text>
    </Pressable>
  );
};

export default AddToCartBtn;
