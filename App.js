import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from './src/components/Navbar';
import MainScreen from './src/components/Views/MainScreen';
import TodoScreen from './src/components/Views/TodoScreen';


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


export default function App() {

  const [todoId, setTodoId] = useState('2');

  const [todos, setTodos] = useState([
    { id: '1', title: 'Выучить RN' },
    { id: '2', title: 'Написать приложение To-do' }
  ])

  const addTodo = (title) => {


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

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />
  }
  return (
    <View >
      <Navbar title="Kolesov's to-do test App" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

//Все View элементы по умолчанию являются display: flex

