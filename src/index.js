import React from 'react';
import {LogBox} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './redux/store';
import {Provider} from 'react-redux';
import AppNavigatorWrap from './navigation/AppNavigatorWrap';
import {NavigationContainer} from '@react-navigation/native';

const {store, persistor} = Store();

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppNavigatorWrap />
      </PersistGate>
    </Provider>
  );
}

export default App;
