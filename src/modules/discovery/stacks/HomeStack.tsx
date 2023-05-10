import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {homeStackRoutes} from './stackRoutes';
('react-native-gesture-handler');

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {homeStackRoutes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
