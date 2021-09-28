import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hi!)!))</Text>
      <Text style={styles.text}>How are u?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//Все View элементы по умолчанию являются display: flex

const styles = StyleSheet.create({
  container: {
    flex: 1, //Вся доступная высота экрана
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26
  }
});
