import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#11275f',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <AppStack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
            headerStyle: {
              backgroundColor: '#11275f',
            },
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}