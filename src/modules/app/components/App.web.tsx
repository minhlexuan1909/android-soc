import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'lib-clevai-auth';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {reduxStoreConfig} from '../../base';
const {store, persistor} = reduxStoreConfig();

const Home = () => {
  return <>Homepage</>;
};

const VideoPage = () => {
  return <>VideoPage</>;
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<VideoPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
