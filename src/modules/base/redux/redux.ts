// @ts-ignore
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Store, createStore} from 'redux';
import {PersistState, persistStore} from 'redux-persist';
import MiddlewareRegistry from './MiddlewareRegistry';
import ReducerRegistry from './ReducerRegistry';
import thunk from 'redux-thunk';
const isProduction = process.env.NODE_ENV === 'production';
const logger = (store: any) => (next: any) => (action: any) => {
  console.log(
    '%cdispatching:',
    'color: yellow; font-style: italic;padding: 2px',
    action,
  );
  const result = next(action);
  console.log(
    '%cnext state:',
    'color: #4bf542; font-style: italic;padding: 2px',
    store.getState(),
  );

  return result;
};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const reduxStoreConfig = () => {
  const reducers = ReducerRegistry.combineReducers(persistConfig);
  MiddlewareRegistry.register(thunk);
  if (!isProduction) {
    MiddlewareRegistry.register(logger);
  }
  const middleware = MiddlewareRegistry.applyMiddleware();
  console.log(MiddlewareRegistry._elements);
  const store = createStore(reducers, middleware);
  const persistor = persistStore(store, {}, () => {});

  return {store, persistor};
};

export {reduxStoreConfig};
