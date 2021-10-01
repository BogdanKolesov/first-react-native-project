import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Navbar from './src/components/Navbar';
import AddTodo from './src/components/AddTodo';
import Todo from './src/components/Todo';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '8%'
  },
  list: {
    width: '100%',
  },
});

//TODO: App!

export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString,
    //   title: title
    // }
    // setTodos(todos.concat([newTodo])) // no

    // setTodos((prevTodos) => { //no to
    //   return [
    //     ...prevTodos,
    //     newTodo
    //   ]
    // })

    setTodos(prev => [{
      id: Date.now().toString(),
      title
    },
    ...prev
    ])
  }

  return (
    <View >
      <Navbar title="Kolesov's to-do test App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          style={styles.list}
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} />
          )}
        />
      </View>
    </View>
  );
}

//Все View элементы по умолчанию являются display: flex

