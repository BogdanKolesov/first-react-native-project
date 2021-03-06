import React, { useState, useContext } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import THEME from '../../../theme';
import { AppCard, EditModal, AppTextBold, AppButton } from '../../ui';
import { TodoContext } from '../../../context/todo/todoContext';
import { ScreenContext } from '../../../context/screen/screenContext';


const styles = StyleSheet.create({
    screen: {
        width: '100%'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        // width: Dimensions.get('window').width / 3
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})

const TodoScreen = () => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext)
    const { todoId, changeScreen } = useContext(ScreenContext)
    const [modal, setModal] = useState(false);

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = async title => {
        await updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View style={styles.screen}>
            <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title} onSave={saveHandler} />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>
                    {todo.title}
                </AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton color={THEME.GREY_COLOR} onPress={() => changeScreen(null)} >
                        <AntDesign name='back' size={20} color='#fff' />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
                        <FontAwesome name='remove' size={20} color='#fff' />
                    </AppButton>

                </View>
            </View>
        </View>
    );
};

export default TodoScreen;