import React from 'react';
import { View, Text } from 'react-native';

import { BasketContainer } from './styles';

export default function Cart({ navigation }) {
  function navigateToUsers() {
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>Home</Text>
      <BasketContainer onPress={navigateToUsers} />
    </View>
  );
}
