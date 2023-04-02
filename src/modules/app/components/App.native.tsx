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
const {store, persistor} = reduxStoreConfig();

const Stack = createNativeStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#f8f9fD',
  },
};

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer theme={navTheme}>
            <Stack.Navigator
              initialRouteName="Profile"
              screenOptions={{
                headerShown: false,
              }}>
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
