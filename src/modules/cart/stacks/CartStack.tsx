import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {cartStackRoutes} from './stackRoutes';
('react-native-gesture-handler');

const CartStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {cartStackRoutes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default CartStack;
