import React from 'react';
import {View, Text} from 'react-native';
import OrderProductItem from './OrderProductItem.native';
import {style} from '../assets/css/orderItemStyle';

const id = 123;
const totalPrice = 10000;

const OrderItem = () => {
  return (
    <View style={style.wrapper}>
      <Text style={style.orderNumText}>Order #{id}</Text>
      <View style={style.orderProductWrapper}>
        <OrderProductItem
          amount={1}
          productName="Nồi chiên không dầu 6L SUNHOUSE bla bla bla"
          productPrice={10000}
        />
        <OrderProductItem
          amount={1}
          productName="Nồi chiên không dầu 6L SUNHOUSE bla bla bla"
          productPrice={10000}
        />
      </View>
      <View style={style.totalPriceWrapper}>
        <Text style={style.tolalPriceText}>
          Total: <Text style={style.totalPriceNum}>{totalPrice}</Text>
        </Text>
      </View>
    </View>
  );
};

export default OrderItem;
