import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'lib-clevai-auth';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {reduxStoreConfig} from '../../base';
import {LoginForm} from '../../auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {androidRoutes} from '../androidRoutes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const {store, persistor} = reduxStoreConfig();

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Login"
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
