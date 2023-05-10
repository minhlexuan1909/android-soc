import React from 'react';
import {View, Image, Text} from 'react-native';
import {GREY_COLOR_6} from '../../base';

type Props = {
  image?: string;
  productName: string;
  amount: number;
  productPrice: number;
};

const OrderProductItem = (props: Props) => {
  const {image, productName, amount, productPrice} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 10,
      }}>
      <Image
        style={{
          width: 70,
          height: 70,
        }}
        source={
          image
            ? {uri: image}
            : require('../../base/assets/images/default-product-image.jpg')
        }
      />
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: 'space-between',
        }}>
        <Text numberOfLines={1} style={{color: '#000'}}>
          {productName}
        </Text>
        <Text style={{alignSelf: 'flex-end', color: '#000'}}>x{amount}</Text>
        <Text style={{alignSelf: 'flex-end'}}>{productPrice}</Text>
      </View>
    </View>
  );
};

export default OrderProductItem;
