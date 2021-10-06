import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import THEME from '../../../theme';
import { AppCard, EditModal } from '../../ui';

const styles = StyleSheet.create({
    screen: {
        width: '100%'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})

const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {

    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View style={styles.screen}>
            <EditModal visible={modal} onCancel={() => setModal(false)} value={todo.title} onSave={saveHandler} />
            <AppCard style={styles.card}>
                <Text style={styles.title}>
                    {todo.title}
                </Text>
                <Button title='Ред.' onPress={() => setModal(true)} />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="Назад" color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => onRemove(todo.id)} />
                </View>
            </View>
        </View>
    );
};

export default TodoScreen;