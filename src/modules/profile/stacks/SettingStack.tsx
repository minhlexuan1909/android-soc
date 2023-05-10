import React from 'react';
import {profileStackRoutes, settingStackRoutes} from './stackRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SettingStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {settingStackRoutes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default SettingStack;
