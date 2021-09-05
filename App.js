import React from 'react';
import { Provider } from 'react-redux'
import store from '@/store'
import AppNavigation from '@/navigations'


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
