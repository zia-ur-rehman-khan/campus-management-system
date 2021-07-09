import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import AppView from './src/components/AppNavigation/index';
import { Provider } from 'react-redux';
import store from './src/components/redux/Store/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="green" />
      <AppView />
    </Provider>
  );
};

export default App;
