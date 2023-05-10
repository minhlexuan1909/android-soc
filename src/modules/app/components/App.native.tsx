import React from 'react';
import {Provider} from 'react-redux';

import {StatusBar} from 'react-native';
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
import {
  GestureHandlerRootView,
  gestureHandlerRootHOC,
} from 'react-native-gesture-handler';

import {reduxStoreConfig} from '../../base/redux/redux';
import {PersistGate} from 'redux-persist/integration/react';
import {style} from '../../base/assets/css/backButtonStyle';
import {
  BACKGROUND_GREY_COLOR,
  GREY_COLOR_6,
  GREY_COLOR_7,
  GREY_COLOR_8,
  MAIN_COLOR,
} from '../../base';
// @ts-ignore

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
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: MAIN_COLOR,
        tabBarInactiveTintColor: GREY_COLOR_8,
        tabBarLabelStyle: {
          fontWeight: 'bold',
        },
        lazy: false,
      }}>
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
          <StatusBar backgroundColor="transparent" />
          <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer theme={navTheme}>
              <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen
                  key="BottomTab"
                  name="BottomTab"
                  component={gestureHandlerRootHOC(BottomTab)}
                />
                {androidRoutes.map((route, index) => (
                  <Stack.Screen
                    key={index}
                    name={route.name}
                    component={gestureHandlerRootHOC(route.component)}
                    initialParams={
                      route?.initialParams ? route.initialParams : {}
                    }
                  />
                ))}
              </Stack.Navigator>
            </NavigationContainer>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
