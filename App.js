import React from 'react';
import { Provider } from 'react-redux'
import store from '@/store'
import { View } from 'react-native';


const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View></View>
    </Provider>
  );
};

export default App;
