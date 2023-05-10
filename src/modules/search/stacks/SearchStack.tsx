import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {searchStackRoutes} from './stackRoutes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SearchDrawerView from '../components/SearchDrawerView.native';

const SearchStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={() => <SearchDrawerView />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          width: 300,
        },
      }}>
      {searchStackRoutes.map((route, index) => (
        <Drawer.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default SearchStack;
