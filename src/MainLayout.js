import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import MainScreen from './components/Views/MainScreen/MainScreen';
import TodoScreen from './components/Views/TodoScreen';
import { TodoContext } from './context/todo/todoContext';
import THEME from './theme';


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: THEME.PADDING_HORIZONTAL
    },
    list: {
        width: '100%',
    },
});

const MainLayout = () => {
    const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)

    const [todoId, setTodoId] = useState(null);
    // const [todos, setTodos] = useState([])

    // const addTodo = title => {
    //     setTodos(prev => [{
    //         id: Date.now().toString(),
    //         title
    //     },
    //     ...prev
    //     ])
    // }

    // const updateTodo = (id, title) => {
    //     setTodos(old => old.map(todo => {
    //         if (todo.id === id) {
    //             todo.title = title
    //         }
    //         return todo
    //     }))
    // }

    // const removeTodo = id => {
    //     const todo = todos.find(t => t.id === id)

    //     Alert.alert(
    //         'Удаление элемента',
    //         `Вы уверены, что хотите удалить "${todo.title}"?`,
    //         [
    //             {
    //                 text: 'Отмена',
    //                 style: 'clancel'
    //             },
    //             {
    //                 text: 'Удалить',
    //                 style: 'negative',
    //                 onPress: () => {
    //                     setTodoId(null)
    //                     setTodos(prev => prev.filter(todo => todo.id !== id))
    //                 }
    //             }
    //         ],
    //         { cancelable: false }
    //     )
    // }

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
};

export default MainLayout;