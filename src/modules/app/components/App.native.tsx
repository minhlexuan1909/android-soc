import React from 'react';
import {Provider} from 'react-redux';
// @ts-ignore
import {PersistGate} from 'lib-clevai-auth';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {reduxStoreConfig} from '../../base';
import {LoginForm} from '../../auth';
import {
  DefaultTheme,
  NavigationContainer,
  useRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {androidRoutes} from '../androidRoutes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {androidBottomTabRoutes} from '../androidBottomTabRoutes';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const {store, persistor} = reduxStoreConfig();

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f8f9fD',
  },
};

function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {androidBottomTabRoutes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            tabBarIcon: ({color}) => (
              <FontAwesomeIcon icon={route.icon} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer theme={navTheme}>
            <Stack.Navigator
              initialRouteName="Me"
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen
                key="BottomTab"
                name="BottomTab"
                component={BottomTab}
              />
              {androidRoutes.map((route, index) => (
                <Stack.Screen
                  key={index}
                  name={route.name}
                  component={route.component}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
