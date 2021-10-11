import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './components/Navbar';
import MainScreen from './components/Views/MainScreen/MainScreen';
import TodoScreen from './components/Views/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';
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
    const { todoId, changeScreen } = useContext(ScreenContext)


    let content = (
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            openTodo={changeScreen}
        />
    )

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content = <TodoScreen
            onRemove={removeTodo}
            goBack={() => changeScreen(null)}
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