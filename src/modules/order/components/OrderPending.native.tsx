import React from 'react';
import {View, ScrollView} from 'react-native';
import OrderItem from './OrderItem.native';

const OrderPending = () => {
  return (
    <ScrollView>
      <OrderItem />
    </ScrollView>
  );
};

export default OrderPending;
