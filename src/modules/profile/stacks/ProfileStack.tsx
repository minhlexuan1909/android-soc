import React from 'react';
import {profileStackRoutes} from './stackRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {profileStackRoutes.map((route, index) => (
        <Stack.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ProfileStack;
