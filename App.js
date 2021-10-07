import React, { useState } from 'react';
import * as Font from 'expo-font'
import { StyleSheet, View, Alert } from 'react-native';
import AppLoading from 'expo-app-loading';

import Navbar from './src/components/Navbar';
import MainScreen from './src/components/Views/MainScreen';
import TodoScreen from './src/components/Views/TodoScreen';


async function loadApp() {
  await Font.loadAsync({
    'roboto-regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'roboto-bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf')
  })
}



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

  const [isReady, setIsReady] = useState(false);

  const [todoId, setTodoId] = useState(null);

  const [todos, setTodos] = useState([])

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }

  const addTodo = (title) => {


    setTodos(prev => [{
      id: Date.now().toString(),
      title
    },
    ...prev
    ])
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id)

    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'clancel'
        },
        {
          text: 'Удалить',
          style: 'negative',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id))
          }
        }
      ],
      { cancelable: false }
    )
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={setTodoId} />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen
      onRemove={removeTodo}
      goBack={() => setTodoId(null)}
      todo={selectedTodo}
      onSave={updateTodo}
    />
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


