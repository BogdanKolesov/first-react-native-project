import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar title="Todo app" />
    </View>
  );
}

//Все View элементы по умолчанию являются display: flex

const styles = StyleSheet.create({
  container: {

  }
});
