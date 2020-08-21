import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  titulo: {
    color: '#AAA',
    textAlign: 'center',
  },
});

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Ola tudo bem</Text>
      </View>
    </>
  );
}
