import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { AppText } from '../ui';

const styles = StyleSheet.create({
    todo: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginTop: 10
    },

})



const Todo = ({ todo, onRemove, onOpen }) => {
    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onOpen(todo.id)}
            onLongPress={longPressHandler}
        >
            <View style={styles.todo}>
                <AppText >
                    {todo.title}
                </AppText>
            </View>
        </TouchableOpacity >
    );
};

export default Todo;