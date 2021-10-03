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
    marginHorizontal: '8%',
  },
  list: {
    width: '100%',

  },
});

//TODO: App!
//Todo: Screens
//Todo: Firebase

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

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
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
          scrollEnabled={true}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}

//Все View элементы по умолчанию являются display: flex

