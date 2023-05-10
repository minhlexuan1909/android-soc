import React from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import {style as cartStyle} from '../assets/css/cartProductItemStyle';
import {Swipeable} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';

type Props = {
  style?: object[];
  image?: string;
  title: string;
  price: string;
  amount: number;
  [key: string]: any;
};

const CartProductItem = React.forwardRef((props: Props, ref) => {
  const {style = [], image = '', title, price, amount, ...otherProps} = props;
  return (
    <Swipeable {...otherProps}>
      <View
        style={[
          ...style,
          cartStyle.cartProductItemWrapper,
          {width: Dimensions.get('window').width},
        ]}>
        <Image
          style={cartStyle.cartProductItemImage}
          source={
            image
              ? {uri: image}
              : require('../../base/assets/images/default-product-image.jpg')
          }
        />
        <View style={cartStyle.cartProductRightWrapper}>
          <View style={cartStyle.cartProductInfoWrapper}>
            <Text
              style={cartStyle.cartProductTitleText}
              numberOfLines={1}
              ellipsizeMode="tail">
              {title}
            </Text>
            <Text style={cartStyle.cartProductPriceText}>{price}</Text>
          </View>
          <View style={cartStyle.cartProductActionWrapper}>
            <Pressable>
              <Text style={cartStyle.cartAdjustAmountBtn}>-</Text>
            </Pressable>
            <Text style={cartStyle.cartProductAmount}>{amount}</Text>
            <Pressable>
              <Text style={cartStyle.cartAdjustAmountBtn}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Swipeable>
  );
});

export default CartProductItem;
