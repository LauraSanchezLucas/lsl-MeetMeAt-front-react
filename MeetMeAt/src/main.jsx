import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './MainApp';
import { BrowserRouter } from 'react-router-dom';
import store from './application/store';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { Provider } from 'react-redux';


const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
