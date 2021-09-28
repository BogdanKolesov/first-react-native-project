import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import AddTodo from './src/components/AddTodo';

const styles = StyleSheet.create({
  container: {

  }
});


export default function App() {
  return (
    <View >
      <Navbar title="Todo app" />

      <View style={styles.container}>
        <AddTodo />
      </View>
    </View>
  );
}

//Все View элементы по умолчанию являются display: flex

