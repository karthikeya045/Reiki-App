import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Navigator from './Pages/Navigator';
import { Provider, useDispatch } from 'react-redux';
import store from './Pages/store';
import { restoreSession } from './Pages/store/slices/authSlice';
import './Pages/i18n';
import { ThemeProvider } from './Pages/theme';

const Bootstrap = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(restoreSession()); }, [dispatch]);
  return <Navigator />;
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Bootstrap />
      </ThemeProvider>
    </Provider>
  );
}

export default App