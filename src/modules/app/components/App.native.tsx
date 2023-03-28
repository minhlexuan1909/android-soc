import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'lib-clevai-auth';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {reduxStoreConfig} from '../../base';
import {LoginForm} from '../../auth';
const {store, persistor} = reduxStoreConfig();
import Expo from 'expo';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <StatusBar />
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <LoginForm />
          </ScrollView>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default Expo.registerRootComponent(App);
