import React from 'react';
import {View} from 'react-native';
import OrderHistoryWrapper from '../components/OrderHistoryWrapper.native';

const OrderHistoryPage = () => {
  return (
    <View style={{flex: 1}}>
      <OrderHistoryWrapper />
    </View>
  );
};

export default OrderHistoryPage;
