import React, { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export const App = () => {

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    </SafeAreaProvider>
  );
};
