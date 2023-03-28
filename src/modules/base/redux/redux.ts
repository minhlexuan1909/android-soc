import {createStore, MiddlewareRegistry} from 'lib-clevai-auth';
import type {Store} from 'redux';
import type {PersistState} from 'redux-persist';

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

const reduxStoreConfig = () => {
  if (!isProduction) {
    MiddlewareRegistry.register(logger);
  }
  const {store, persistor}: {store: Store; persistor: PersistState} =
    createStore({
      whitelist: [],
      persistKey: `root`,
    });

  return {store, persistor};
};

export {reduxStoreConfig};
