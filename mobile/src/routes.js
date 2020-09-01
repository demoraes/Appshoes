/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import Header from './components/Header/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

import store from './store';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack.Navigator
          initialRouteName="Home"
          screenOptions={(navigation) => ({
            headerTitle: (props) => <Header {...navigation} {...props} />,
            headerStyle: {
              backgroundColor: '#11275f',
            },
          })}
        >
          <AppStack.Screen name="Home" component={Home} />
          <AppStack.Screen name="Cart" component={Cart} />
        </AppStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
