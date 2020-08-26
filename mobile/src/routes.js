import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
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
  );
}
