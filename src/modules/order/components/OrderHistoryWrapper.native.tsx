import React from 'react';
import {View} from 'react-native';
import ScreenHeader from '../../base/components/ScreenHeader.native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MAIN_COLOR, ViewWithStatusBar} from '../../base';
import OrderPending from './OrderPending.native';

const OrderHistoryWrapper = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <ViewWithStatusBar>
      <ScreenHeader title="Orders" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: MAIN_COLOR,
          tabBarLabelStyle: {fontWeight: '500'},
          tabBarIndicatorStyle: {
            backgroundColor: MAIN_COLOR,
          },
        }}>
        <Tab.Screen name="Pending" component={OrderPending} />
        <Tab.Screen name="Delivering" component={View} />
        <Tab.Screen name="Delivered" component={View} />
      </Tab.Navigator>
    </ViewWithStatusBar>
  );
};

export default OrderHistoryWrapper;
